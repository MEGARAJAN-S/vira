import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MeetingIdView, MeetingIdViewError, MeetingIdViewLoading } from "../components/meeting-id-view";

interface Props {
  params: Promise<{
    meetingId: string;
  }>;
}

const page = async ({ params }: Props) => {
  const { meetingId } = await params;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<MeetingIdViewLoading />}>
        <ErrorBoundary fallback={<MeetingIdViewError />}>
          <MeetingIdView meetingId={meetingId}/>
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  )
}

export default page