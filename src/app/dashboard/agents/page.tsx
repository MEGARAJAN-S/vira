import React, { Suspense } from 'react'
import { AgentsView, AgentsViewError, AgentsViewLoading } from './components/agentsview'
import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { AgentsListHeader } from './components/agentslistheader';
import type { SearchParams } from 'nuqs';
import { loadSearchParams } from '@/modules/agents/params';

interface Props {
    searchParams: Promise<SearchParams>
}

const agents = async ({searchParams} : Props) => {
    const filters = await loadSearchParams(searchParams);
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions({
        ...filters,
    }));
    return (
        <>
            <AgentsListHeader />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<AgentsViewLoading />}>
                    <ErrorBoundary fallback={<AgentsViewError />}></ErrorBoundary>
                    <AgentsView />
                </Suspense>
            </HydrationBoundary>
        </>
    )
}

export default agents