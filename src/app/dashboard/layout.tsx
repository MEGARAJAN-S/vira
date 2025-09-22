import { SidebarProvider } from '@/components/ui/sidebar'
import { ReactNode } from 'react'
import DashboardSidebar from './components/DashboardSidebar'

const layout = ({children} : { children : ReactNode}) => {
  return (
    <SidebarProvider>
        <DashboardSidebar />
        <main className='flex flex-col h-screen w-screen bg-muted'>
            {children}
        </main>
    </SidebarProvider>
    
  )
}

export default layout