import SkipLink from "@/app/components/SkipLink"
import { Analytics } from "@vercel/analytics/react"
import {soehne, merriweatherText} from "../fonts"
import sharedMetadata from "../metadata"
import "../styles/global.css"

export const metadata = sharedMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html className={`${soehne.variable} ${merriweatherText.variable}`}>
        <body>
          <SkipLink />
          {children}
          <Analytics />
        </body>
      </html>
  )
}