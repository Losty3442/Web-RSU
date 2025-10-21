import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button } from '../../../../components/ui/button';
import { Input } from '../../../../components/ui/input';
import { Label } from '../../../../components/ui/label';
import { Textarea } from '../../../../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card';
import { useCreateNews, useUpdateNews, useNewsById } from '../../../../hooks/useNewsQueries';
import { toast } from 'sonner';
import { ArrowLeft, Bold, Italic, List, ListOrdered, Heading1, Heading2 } from 'lucide-react';
import type { NewsFormData } from '../../../../lib/types';

const newsSchema = z.object({
  title: z.string().min(1, 'El título es requerido'),
  summary: z.string().min(1, 'El resumen es requerido'),
  image_url: z.string().url('Debe ser una URL válida').optional().or(z.literal('')),
  author: z.string().min(1, 'El autor es requerido'),
});

type NewsFormValues = z.infer<typeof newsSchema>;

const NewsForm: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;
  
  const { data: existingNews, isLoading: loadingNews } = useNewsById(id || '');
  const createNewsMutation = useCreateNews();
  const updateNewsMutation = useUpdateNews();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<NewsFormValues>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      title: '',
      summary: '',
      image_url: '',
      author: '',
    },
  });

  const [content, setContent] = useState('');

  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  // Cargar datos existentes cuando se está editando
  useEffect(() => {
    if (isEditing && existingNews) {
      setValue('title', existingNews.title);
      setValue('summary', existingNews.summary || '');
      setValue('image_url', existingNews.image_url || '');
      setValue('author', existingNews.author || '');
      setContent(existingNews.content);
      if (editor) {
        editor.commands.setContent(existingNews.content);
      }
    }
  }, [isEditing, existingNews, setValue, editor]);

  const onSubmit = async (data: NewsFormValues) => {
    try {
      const newsData: NewsFormData = {
        ...data,
        content,
        image_url: data.image_url || '',
      };

      if (isEditing && id) {
        await updateNewsMutation.mutateAsync({ id, data: newsData });
        toast.success('Noticia actualizada correctamente');
      } else {
        await createNewsMutation.mutateAsync(newsData);
        toast.success('Noticia creada correctamente');
      }

      navigate('/admin/news');
    } catch (error) {
      toast.error('Error al guardar la noticia');
    }
  };

  const ToolbarButton = ({ 
    onClick, 
    isActive = false, 
    children 
  }: { 
    onClick: () => void; 
    isActive?: boolean; 
    children: React.ReactNode; 
  }) => (
    <Button
      type="button"
      variant={isActive ? 'default' : 'outline'}
      size="sm"
      onClick={onClick}
      className="h-8 w-8 p-0"
    >
      {children}
    </Button>
  );

  if (isEditing && loadingNews) {
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
          onClick={() => navigate('/admin/news')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditing ? 'Editar Noticia' : 'Nueva Noticia'}
          </h1>
          <p className="text-gray-600 mt-1">
            {isEditing ? 'Modifica los datos de la noticia' : 'Completa los datos para crear una nueva noticia'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Fields */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información Básica</CardTitle>
                <CardDescription>
                  Datos principales de la noticia
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Título *</Label>
                  <Input
                    id="title"
                    {...register('title')}
                    placeholder="Título de la noticia"
                  />
                  {errors.title && (
                    <p className="text-sm text-red-600">{errors.title.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="summary">Resumen *</Label>
                  <Textarea
                    id="summary"
                    {...register('summary')}
                    placeholder="Resumen breve de la noticia"
                    rows={3}
                  />
                  {errors.summary && (
                    <p className="text-sm text-red-600">{errors.summary.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image_url">URL de Imagen</Label>
                  <Input
                    id="image_url"
                    {...register('image_url')}
                    placeholder="https://ejemplo.com/imagen.jpg"
                  />
                  {errors.image_url && (
                    <p className="text-sm text-red-600">{errors.image_url.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">Autor *</Label>
                  <Input
                    id="author"
                    {...register('author')}
                    placeholder="Nombre del autor"
                  />
                  {errors.author && (
                    <p className="text-sm text-red-600">{errors.author.message}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Content Editor */}
            <Card>
              <CardHeader>
                <CardTitle>Contenido</CardTitle>
                <CardDescription>
                  Escribe el contenido completo de la noticia
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Toolbar */}
                <div className="border rounded-t-lg p-2 flex items-center space-x-1 bg-gray-50">
                  <ToolbarButton
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                    isActive={editor?.isActive('bold')}
                  >
                    <Bold className="h-4 w-4" />
                  </ToolbarButton>
                  <ToolbarButton
                    onClick={() => editor?.chain().focus().toggleItalic().run()}
                    isActive={editor?.isActive('italic')}
                  >
                    <Italic className="h-4 w-4" />
                  </ToolbarButton>
                  <div className="w-px h-6 bg-gray-300 mx-1" />
                  <ToolbarButton
                    onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                    isActive={editor?.isActive('heading', { level: 1 })}
                  >
                    <Heading1 className="h-4 w-4" />
                  </ToolbarButton>
                  <ToolbarButton
                    onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                    isActive={editor?.isActive('heading', { level: 2 })}
                  >
                    <Heading2 className="h-4 w-4" />
                  </ToolbarButton>
                  <div className="w-px h-6 bg-gray-300 mx-1" />
                  <ToolbarButton
                    onClick={() => editor?.chain().focus().toggleBulletList().run()}
                    isActive={editor?.isActive('bulletList')}
                  >
                    <List className="h-4 w-4" />
                  </ToolbarButton>
                  <ToolbarButton
                    onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                    isActive={editor?.isActive('orderedList')}
                  >
                    <ListOrdered className="h-4 w-4" />
                  </ToolbarButton>
                </div>

                {/* Editor Content */}
                <div className="border border-t-0 rounded-b-lg min-h-[300px] p-4">
                  <EditorContent editor={editor} />
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
                  disabled={createNewsMutation.isPending || updateNewsMutation.isPending}
                >
                  {createNewsMutation.isPending || updateNewsMutation.isPending
                    ? 'Guardando...'
                    : isEditing
                    ? 'Actualizar Noticia'
                    : 'Crear Noticia'
                  }
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate('/admin/news')}
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
                  Cómo se verá la noticia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">
                    {watch('title') || 'Título de la noticia'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {watch('summary') || 'Resumen de la noticia'}
                  </p>
                  <p className="text-xs text-gray-500">
                    Por: {watch('author') || 'Autor'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsForm;
