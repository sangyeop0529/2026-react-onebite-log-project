import { signInWithOAuth } from "@/api/auth";
import type { useMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useSignInWithOAuth(cbs: useMutationCallback) {
  return useMutation({
    mutationFn: signInWithOAuth,
    onError: (error) => {
      console.error(error);
      if (cbs?.onError) cbs.onError(error);
    },
  });
}
