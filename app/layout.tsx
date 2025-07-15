import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "2011 BMW 535d xDrive Touring - Twin-Turbo Diesel | Imperial Blue | €12,900",
  description:
    "Single-owner 2011 BMW 535d xDrive Touring. N57 twin-turbo diesel, 313 PS, 630 Nm. Imperial Blue Xirallic, Dakota leather interior. Complete BMW service history. Luxembourg.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-['Inter'] antialiased">{children}</body>
    </html>
  )
}
