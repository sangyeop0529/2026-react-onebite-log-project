import { requestPasswordResetEmail } from "@/api/auth";
import type { useMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useRequestPasswordResetEmail(cbs: useMutationCallback) {
  return useMutation({
    mutationFn: requestPasswordResetEmail,
    onSuccess: () => {
      if (cbs?.onSuccess) cbs.onSuccess();
    },
    onError: (error) => {
      if (cbs?.onError) cbs.onError(error);
    },
  });
}
