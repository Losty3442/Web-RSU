import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../../../../components/ui/button';
import { Input } from '../../../../components/ui/input';
import { Label } from '../../../../components/ui/label';
import { Textarea } from '../../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card';
import { useCreateDocument, useUpdateDocument, useDocumentById } from '../../../../hooks/useDocumentQueries';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import type { DocumentFormData } from '../../../../lib/types';

const documentSchema = z.object({
  title: z.string().min(1, 'El título es requerido'),
  description: z.string().min(1, 'La descripción es requerida'),
  type: z.enum(['WEB', 'DOCUMENT', 'VIDEO', 'IMAGE']),
  link: z.string().url('Debe ser una URL válida').optional().or(z.literal('')),
  section: z.enum(['DOCUMENTS', 'TOOLS']),
});

type DocumentFormValues = z.infer<typeof documentSchema>;

const DocumentForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;
  
  const { data: existingDocument, isLoading: loadingDocument } = useDocumentById(id || '');
  const createDocumentMutation = useCreateDocument();
  const updateDocumentMutation = useUpdateDocument();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<DocumentFormValues>({
    resolver: zodResolver(documentSchema),
    defaultValues: {
      title: '',
      description: '',
      type: 'WEB',
      link: '',
      section: 'DOCUMENTS',
    },
  });

  // Cargar datos existentes cuando se está editando
  useEffect(() => {
    if (isEditing && existingDocument) {
      setValue('title', existingDocument.title);
      setValue('description', existingDocument.description || '');
      setValue('type', existingDocument.type);
      setValue('link', existingDocument.link || '');
      setValue('section', existingDocument.section || 'DOCUMENTS');
    }
  }, [isEditing, existingDocument, setValue]);

  const onSubmit = async (data: DocumentFormValues) => {
    try {
      const documentData: DocumentFormData = {
        ...data,
        link: data.link || '',
      };

      if (isEditing && id) {
        await updateDocumentMutation.mutateAsync({ id, data: documentData });
        toast.success('Documento actualizado correctamente');
      } else {
        await createDocumentMutation.mutateAsync(documentData);
        toast.success('Documento creado correctamente');
      }

      navigate('/admin/documents');
    } catch (error) {
      toast.error('Error al guardar el documento');
    }
  };

  if (isEditing && loadingDocument) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          onClick={() => navigate('/admin/documents')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditing ? 'Editar Documento' : 'Nuevo Documento'}
          </h1>
          <p className="text-gray-600 mt-1">
            {isEditing ? 'Modifica los datos del documento' : 'Completa los datos para crear un nuevo documento'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Fields */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información del Documento</CardTitle>
                <CardDescription>
                  Datos principales del documento o herramienta
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Título *</Label>
                  <Input
                    id="title"
                    {...register('title')}
                    placeholder="Título del documento"
                  />
                  {errors.title && (
                    <p className="text-sm text-red-600">{errors.title.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descripción *</Label>
                  <Textarea
                    id="description"
                    {...register('description')}
                    placeholder="Descripción del documento"
                    rows={3}
                  />
                  {errors.description && (
                    <p className="text-sm text-red-600">{errors.description.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Tipo *</Label>
                    <Select
                      value={watch('type')}
                      onValueChange={(value) => setValue('type', value as any)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="WEB">Página Web</SelectItem>
                        <SelectItem value="DOCUMENT">Documento</SelectItem>
                        <SelectItem value="VIDEO">Video</SelectItem>
                        <SelectItem value="IMAGE">Imagen</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.type && (
                      <p className="text-sm text-red-600">{errors.type.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="section">Sección *</Label>
                    <Select
                      value={watch('section')}
                      onValueChange={(value) => setValue('section', value as any)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una sección" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DOCUMENTS">Documentos</SelectItem>
                        <SelectItem value="TOOLS">Herramientas</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.section && (
                      <p className="text-sm text-red-600">{errors.section.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="link">Enlace</Label>
                  <Input
                    id="link"
                    {...register('link')}
                    placeholder="https://ejemplo.com/documento.pdf"
                  />
                  {errors.link && (
                    <p className="text-sm text-red-600">{errors.link.message}</p>
                  )}
                  <p className="text-sm text-gray-500">
                    URL del documento, video, imagen o página web
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Actions Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Acciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={createDocumentMutation.isPending || updateDocumentMutation.isPending}
                >
                  {createDocumentMutation.isPending || updateDocumentMutation.isPending
                    ? 'Guardando...'
                    : isEditing
                    ? 'Actualizar Documento'
                    : 'Crear Documento'
                  }
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate('/admin/documents')}
                >
                  Cancelar
                </Button>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Vista Previa</CardTitle>
                <CardDescription>
                  Cómo se verá el documento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">
                    {watch('title') || 'Título del documento'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {watch('description') || 'Descripción del documento'}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {watch('type') || 'TIPO'}
                    </span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {watch('section') === 'DOCUMENTS' ? 'Documentos' : 'Herramientas'}
                    </span>
                  </div>
                  {watch('link') && (
                    <p className="text-xs text-blue-600 truncate">
                      🔗 {watch('link')}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DocumentForm;
