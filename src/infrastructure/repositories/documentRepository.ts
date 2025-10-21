import { supabase } from '../supabase/supabaseClient';
import type { DocumentDB, DocumentFormData } from '../../presentation/lib/types';

export const documentRepository = {
  async fetchDocuments(section?: 'DOCUMENTS' | 'TOOLS'): Promise<DocumentDB[]> {
    let query = supabase
      .from('documents')
      .select('*')
      .is('deleted_at', null)
      .order('created_at', { ascending: false });

    if (section) {
      query = query.eq('section', section);
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(`Error fetching documents: ${error.message}`);
    }

    return data || [];
  },

  async fetchDocumentById(id: string): Promise<DocumentDB | null> {
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .eq('id', id)
      .is('deleted_at', null)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // No encontrado
      }
      throw new Error(`Error fetching document by id: ${error.message}`);
    }

    return data;
  },

  async createDocument(documentData: DocumentFormData): Promise<DocumentDB> {
    const { data, error } = await supabase
      .from('documents')
      .insert([{
        ...documentData,
        created_at: new Date().toISOString(),
      }])
      .select()
      .single();

    if (error) {
      throw new Error(`Error creating document: ${error.message}`);
    }

    return data;
  },

  async updateDocument(id: string, documentData: Partial<DocumentFormData>): Promise<DocumentDB> {
    const { data, error } = await supabase
      .from('documents')
      .update({
        ...documentData,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw new Error(`Error updating document: ${error.message}`);
    }

    return data;
  },

  async softDeleteDocument(id: string): Promise<void> {
    const { error } = await supabase
      .from('documents')
      .update({
        deleted_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);

    if (error) {
      throw new Error(`Error deleting document: ${error.message}`);
    }
  },
};
