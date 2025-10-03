import { SidebarProvider } from '@/components/ui/sidebar'
import { ReactNode } from 'react'
import DashboardSidebar from './components/DashboardSidebar'
import DashboardNavbar from './components/DashboardNavbar'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'

const layout = async ({children} : { children : ReactNode}) => {
  const session = await auth.api.getSession({
      headers: await headers(),
    })
    if(!session){
      redirect('/sign-in')
    }
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