import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
const blockListKey = ["block-list"] as unknown[];

export function useBlocklistQuery({ q }: { q?: string }) {
  return useQuery({
    queryKey: blockListKey.concat([{ q }]),
    queryFn: () => blockListControllerGetList({ q }),
  });
}

export function useAddBlockItemMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    onSettled() {
      queryClient.invalidateQueries({ queryKey: blockListKey });
    },
  });
}

export function useRemoveBlockItemMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    onSettled() {
      queryClient.invalidateQueries({ queryKey: blockListKey });
    },
  });
}
