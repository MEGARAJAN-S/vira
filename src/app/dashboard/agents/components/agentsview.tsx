"use client"

import { useSuspenseQuery } from '@tanstack/react-query';
import { useTRPC } from '@/trpc/client';
import { LoadingState } from '@/components/loading-state';
import { ErrorState } from '@/components/error-state';
import { DataTable } from './data-table';
import { columns } from './columns';
import { EmptyState } from '@/components/empty-state';

export const AgentsView = () => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

    return (
        <div className='flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4'>
            <DataTable data={data} columns={columns}/>
            {data.length === 0 && (
                <EmptyState
                    title="Create your first agent"
                    description='Create an agent to join your meetings. Each agent will follow your
                    instructions and can interact with participants during the call.' 
                />
            )}
        </div>
    )
}

export const AgentsViewLoading = () => {
    return (
        <LoadingState
            title="Loading Agents"
            description="Fetching agents from the database"
        />
    )
}

export const AgentsViewError = () => {
    return (
        <ErrorState
            title="Failed to load agents"
            description="There was an error fetching agents from the database"
        />
    )
}