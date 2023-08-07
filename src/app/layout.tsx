import { type ReactNode } from "react"

import "~/styles/globals.css"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <div className="h-screen w-screen bg-slate-100 p-6">{children}</div>
      </body>
    </html>
  )
}
