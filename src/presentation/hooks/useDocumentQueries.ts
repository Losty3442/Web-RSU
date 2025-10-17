import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { documentRepository } from '../../infrastructure/repositories/documentRepository';
import type { DocumentFormData } from '../lib/types';

export const useDocuments = (section?: 'DOCUMENTS' | 'TOOLS') => {
  return useQuery({
    queryKey: ['documents', section],
    queryFn: () => documentRepository.fetchDocuments(section),
  });
};

export const useDocumentById = (id: string) => {
  return useQuery({
    queryKey: ['documents', id],
    queryFn: () => documentRepository.fetchDocumentById(id),
    enabled: !!id,
  });
};

export const useCreateDocument = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (documentData: DocumentFormData) => documentRepository.createDocument(documentData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
    },
  });
};

export const useUpdateDocument = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<DocumentFormData> }) =>
      documentRepository.updateDocument(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      queryClient.invalidateQueries({ queryKey: ['documents', id] });
    },
  });
};

export const useDeleteDocument = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => documentRepository.softDeleteDocument(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
    },
  });
};

// Hook específico para documentos de reconocimientos
export const useRecognitionDocuments = () => {
  return useQuery({
    queryKey: ['documents', 'RECOGNITIONS'],
    queryFn: () => documentRepository.fetchDocuments('DOCUMENTS'),
  });
};