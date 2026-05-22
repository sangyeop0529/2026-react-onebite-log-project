import { supabase } from "@/lib/supabase";

export async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  /**
   * 구조분해 할당
   * const response = await supabase.auth.signUp({ email, password });
   * const data = response.data;
   * const error = response.error;
   */

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) throw error;
  return data;
}

export async function signInWithPassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
}
