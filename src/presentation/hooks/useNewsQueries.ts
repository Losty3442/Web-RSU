import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { newsRepository } from '../../infrastructure/repositories/newsRepository';
import type { NewsFormData } from '../lib/types';

export const useNews = () => {
  return useQuery({
    queryKey: ['news'],
    queryFn: newsRepository.fetchAllNews,
  });
};

export const useNewsById = (id: string) => {
  return useQuery({
    queryKey: ['news', id],
    queryFn: () => newsRepository.fetchNewsById(id),
    enabled: !!id,
  });
};

export const useCreateNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newsData: NewsFormData) => newsRepository.createNews(newsData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
  });
};

export const useUpdateNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<NewsFormData> }) =>
      newsRepository.updateNews(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
      queryClient.invalidateQueries({ queryKey: ['news', id] });
    },
  });
};

export const useDeleteNews = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => newsRepository.softDeleteNews(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
  });
};
