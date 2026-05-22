import { updatePassword } from "@/api/auth";
import type { useMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useUpdatePassword(cbs?: useMutationCallback) {
  return useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      if (cbs?.onSuccess) cbs.onSuccess();
    },
    onError: (error) => {
      if (cbs?.onError) cbs.onError(error);
    },
  });
}
