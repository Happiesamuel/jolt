"use client";
import { getQuery } from "@/lib/data";
import { useQuery } from "@tanstack/react-query";

export function useGetQuery(query: string) {
  const { data: search, status } = useQuery({
    queryFn: () => getQuery(query),
    queryKey: ["query"],
  });

  return { search, status };
}
