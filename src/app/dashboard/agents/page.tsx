import React, { Suspense } from 'react'
import { AgentsView, AgentsViewError, AgentsViewLoading } from './components/agentsview'
import { getQueryClient, trpc } from '@/trpc/server'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { AgentsListHeader } from './components/agentslistheader';

const agents = async () => {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
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