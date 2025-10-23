import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const Page = async () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 w-full">
      {/* Header Section */}
      <header className="mb-8 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Welcome back! Manage your meetings, agents, and profile here.
        </p>
      </header>

      {/* Cards Section */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Meetings */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-lg font-semibold mb-2">Meetings</h2>
              <p className="text-sm text-gray-500">
                View and manage all your meetings efficiently.
              </p>
            </div>
            <Button asChild className="mt-4 w-full sm:w-auto">
              <a href="/dashboard/meetings">Go to Meetings</a>
            </Button>
          </CardContent>
        </Card>

        {/* Agents */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-lg font-semibold mb-2">Agents</h2>
              <p className="text-sm text-gray-500">
                Monitor and configure your agents here.
              </p>
            </div>
            <Button asChild className="mt-4 w-full sm:w-auto">
              <a href="/dashboard/agents">Go to Agents</a>
            </Button>
          </CardContent>
        </Card>

        {/* Profile */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-lg font-semibold mb-2">Profile</h2>
              <p className="text-sm text-gray-500">
                Update your personal details and preferences.
              </p>
            </div>
            <Button asChild className="mt-4 w-full sm:w-auto">
              <a href="/dashboard/profile">View Profile</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Page
