import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from "@/components/ui/provider"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from 'react-router-dom'
import router from './components/routing/router.tsx'
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>

      <Provider>
        <QueryClientProvider client={queryClient}>
     <RouterProvider router={router}/>
    </QueryClientProvider>
    </Provider>
    
  </StrictMode>,
)
