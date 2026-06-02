import { createPost, createPostWithImages } from "@/api/post";
import type { useMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useCreatePost(cbs: useMutationCallback) {
  return useMutation({
    mutationFn: createPostWithImages,
    onSuccess: () => {
      if (cbs?.onSuccess) cbs.onSuccess();
    },
    onError: (error) => {
      if (cbs?.onError) cbs.onError(error);
    },
  });
}
