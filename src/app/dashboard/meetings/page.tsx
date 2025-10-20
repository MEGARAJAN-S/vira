import React, { Suspense } from 'react'
import { MeetingsView, MeetingsViewError, MeetingsViewLoading } from './components/meetings-view'
import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { MeetingsListHeader } from './components/meetings-list-header';
import { SearchParams } from 'nuqs';
import { loadSearchParams } from '@/modules/meetings/params';

interface Props {
    searchParams: Promise<SearchParams>
}

const page = async ({ searchParams }: Props) => {
    const filters = await loadSearchParams(searchParams);

    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
        trpc.meetings.getMany.queryOptions({
            ...filters,
        })
    );
    return (
        <>  
            <MeetingsListHeader />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<MeetingsViewLoading />}>
                    <ErrorBoundary fallback={<MeetingsViewError />}>
                        <MeetingsView />
                    </ErrorBoundary>
                </Suspense>
            </HydrationBoundary>
        </>
    )
}

export default page