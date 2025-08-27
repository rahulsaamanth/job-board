import { Button } from "@/components/ui/button"
import { ComponentProps } from "react"
import {
  SignUpButton as ClerkSignUpButton,
  SignInButton as ClerkSignInButton,
  SignOutButton as ClerkSignOutButton,
} from "@clerk/nextjs"

export function SignUpButton({
  children = <Button>Sign Up</Button>,
  ...props
}: ComponentProps<typeof ClerkSignOutButton>) {
  return <ClerkSignUpButton {...props}>{children}</ClerkSignUpButton>
}

export function SignInButton({
  children = <Button>Sign In</Button>,
  ...props
}: ComponentProps<typeof ClerkSignInButton>) {
  return <ClerkSignInButton {...props}>{children}</ClerkSignInButton>
}

export function SignOutButton({
  children = <Button>SignOut</Button>,
  ...props
}: ComponentProps<typeof ClerkSignOutButton>) {
  return <ClerkSignOutButton {...props}>{children}</ClerkSignOutButton>
}
