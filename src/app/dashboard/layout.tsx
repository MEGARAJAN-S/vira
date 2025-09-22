import { SidebarProvider } from '@/components/ui/sidebar'
import { ReactNode } from 'react'
import DashboardSidebar from './components/DashboardSidebar'
import DashboardNavbar from './components/DashboardNavbar'

const layout = ({children} : { children : ReactNode}) => {
  return (
    <SidebarProvider>
        <DashboardSidebar />
        <main className='flex flex-col h-screen w-screen bg-muted'>
            <DashboardNavbar />
            {children}
        </main>
    </SidebarProvider>
    
  )
}

export default layout