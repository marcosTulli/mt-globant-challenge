import type React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/config/queryClient';

interface QueryProviderProps {
  children: React.ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  // TODO: Catch errors
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
