import { authClient } from '@/lib/auth-client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { GeneratedAvatar } from '@/components/generated-avatar';
import { ChevronDownIcon, CreditCardIcon, LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const DashboardUserButton = () => {
    const router = useRouter();
    const isMobile = useIsMobile();
    const { data, isPending } = authClient.useSession();

    const onLogout = () => {
        authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push('/sign-in');
                }
            }
        });
    }
    if (isPending || !data?.user) {
        return null;
    }
    if (isMobile) {
        return (
            <Drawer>
                <DrawerTrigger className='rounded-lg border border-border/10 p-3 w-full flex items-center justify-between 
  bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-sm gap-x-2'>
                    {data.user.image ? (
                        <Avatar>
                            <AvatarImage src={data.user.image ?? undefined} />
                        </Avatar>
                    ) : (
                        <GeneratedAvatar
                            seed={data.user.name}
                            variant='initials'
                            className='size-9 mr-3'
                        />
                    )}
                    <div className='flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0'>
                        <p className='text-sm truncate w-full'>
                            {data.user.name}
                        </p>
                        <p className='text-xs truncate w-full'>
                            {data.user.email}
                        </p>
                    </div>
                    <ChevronDownIcon className='size-4 shrink-0' />
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>{data.user.name}</DrawerTitle>
                        <DrawerTitle>{data.user.email}</DrawerTitle>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button variant="outline" onClick={() => { }}>
                            Billing
                        <CreditCardIcon className='size-4' />
                        </Button>
                        <Button variant="outline" onClick={onLogout}>
                            Logout
                            <LogOutIcon className='size-4' />
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='rounded-lg border border-border/10 p-3 w-full flex items-center justify-between 
  bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-sm gap-x-2'>
                {data.user.image ? (
                    <Avatar>
                        <AvatarImage src={data.user.image ?? undefined} />
                    </Avatar>
                ) : (
                    <GeneratedAvatar
                        seed={data.user.name}
                        variant='initials'
                        className='size-9 mr-3'
                    />
                )}
                <div className='flex flex-col gap-0.5 text-left overflow-hidden flex-1 min-w-0'>
                    <p className='text-sm truncate w-full'>
                        {data.user.name}
                    </p>
                    <p className='text-xs truncate w-full'>
                        {data.user.email}
                    </p>
                </div>
                <ChevronDownIcon className='size-4 shrink-0' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="right" sideOffset={4} className='w-72 h-34'>
                <DropdownMenuLabel>
                    <div className='flex flex-col gap-1'>
                        <span className='font-medim truncate'>{data.user.name}</span>
                        <span className='text-sm font-normal text-muted-foreground truncate'>{data.user.email}</span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator>
                    <DropdownMenuItem className='curson-pointer flex items-center justify-between' >
                        Billing
                        <CreditCardIcon className='size-4' />
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={onLogout}
                        className="curson-pointer flex items-center justify-between">
                        Logout
                        <LogOutIcon className='size-4' />
                    </DropdownMenuItem>
                </DropdownMenuSeparator>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DashboardUserButton