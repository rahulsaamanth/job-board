import { SidebarMenuButton } from "@/components/ui/sidebar"
import { SiderbarUserButtonClient } from "@/features/users/components/_SidebarUserButtonClient"
import { getCurrentUser } from "@/services/clerk/lib/getCurrentAuth"
import { SignOutButton } from "@clerk/nextjs"
import { LogOutIcon } from "lucide-react"
import { Suspense } from "react"

export function SidebarUserButton() {
  return (
    <Suspense>
      <SidebarUserSuspence />
    </Suspense>
  )
}

async function SidebarUserSuspence() {
  const { user } = await getCurrentUser({ allData: true })
  console.log(user)

  if (user == null) {
    return (
      <SignOutButton>
        <SidebarMenuButton>
          <LogOutIcon />
          <span>Logout</span>
        </SidebarMenuButton>
      </SignOutButton>
    )
  }

  return <SiderbarUserButtonClient user={user} />
  // return (
  //   <SiderbarUserButtonClient
  //     user={{
  //       name: "rahulsaamanth",
  //       email: "rahulsaamanth@yahoo.com",
  //       imageUrl: "",
  //     }}
  //   />
  // )
}
