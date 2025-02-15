"use client";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'


  const queryClient = new QueryClient()
  
  export const TanstackProviders : React.FC<React.PropsWithChildren> = ({ children }) => {
    return(
        <QueryClientProvider client={queryClient}>
            {children}
      </QueryClientProvider>
    )
  } 
