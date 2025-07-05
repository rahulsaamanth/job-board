"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import React, { ReactNode } from "react"

export function AppSidebarClient({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile()

  if (isMobile) {
    return null
  }

  return children
}
