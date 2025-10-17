import { supabase } from '../supabase/supabaseClient';
import type { NewsDB, NewsFormData } from '../../presentation/lib/types';

export const newsRepository = {
  async fetchAllNews(): Promise<NewsDB[]> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .is('deleted_at', null)
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Error fetching news: ${error.message}`);
    }

    return data || [];
  },

  async fetchNewsById(id: string): Promise<NewsDB | null> {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', id)
      .is('deleted_at', null)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // No encontrado
      }
      throw new Error(`Error fetching news by id: ${error.message}`);
    }

    return data;
  },

  async createNews(newsData: NewsFormData): Promise<NewsDB> {
    const { data, error } = await supabase
      .from('news')
      .insert([{
        ...newsData,
        published_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
      }])
      .select()
      .single();

    if (error) {
      throw new Error(`Error creating news: ${error.message}`);
    }

    return data;
  },

  async updateNews(id: string, newsData: Partial<NewsFormData>): Promise<NewsDB> {
    const { data, error } = await supabase
      .from('news')
      .update({
        ...newsData,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Error updating news: ${error.message}`);
    }

    return data;
  },

  async softDeleteNews(id: string): Promise<void> {
    const { error } = await supabase
      .from('news')
      .update({
        deleted_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);

    if (error) {
      throw new Error(`Error deleting news: ${error.message}`);
    }
  },
};
