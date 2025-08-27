"use client"

import React from "react"

export function useIsDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    if (typeof window === "undefined") return false

    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  React.useEffect(() => {
    const controller = new AbortController()
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        setIsDarkMode(e.matches)
      })
    return () => {
      controller.abort()
    }
  }, [])

  return isDarkMode
}
