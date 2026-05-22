import { supabase } from "@/lib/supabase";
import { getRandomNickname } from "@/lib/utils";

export async function fetchProfile(useId: string) {
  const { data, error } = await supabase
    .from("profile") // profile 테이블
    .select("*") // 모든 컬럼
    .eq("id", useId) // id가 useId인 행만
    .single(); // 행이 정확히 1개여야 함

  if (error) throw error;
  return data;
}

export async function createProfile(userId: string) {
  const { data, error } = await supabase
    .from("profile")
    .insert({
      id: userId, // Auth 유저 id와 동일하게
      nickname: getRandomNickname(), // 예: "행복한판다42"
    })
    .select() // INSERT한 행을 다시 받기
    .single(); // 한 행만

  if (error) throw error;
  return data;
}
