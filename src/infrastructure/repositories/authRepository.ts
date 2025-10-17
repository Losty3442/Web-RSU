import { supabase } from '../supabase/supabaseClient';
import type { User } from '../../presentation/lib/types';

export const authRepository = {
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(`Error signing in: ${error.message}`);
    }

    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(`Error signing out: ${error.message}`);
    }
  },

  async getCurrentUser(): Promise<User | null> {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
      throw new Error(`Error getting current user: ${error.message}`);
    }

    if (!user) {
      return null;
    }

    return {
      id: user.id,
      email: user.email || '',
    };
  },

  async getSession() {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) {
      throw new Error(`Error getting session: ${error.message}`);
    }

    return session;
  },
};
