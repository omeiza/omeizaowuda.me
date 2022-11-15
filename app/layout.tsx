import SkipLink from "@/components/SkipLink"
import "./styles/fonts/fonts.css"
import "./styles/global.css"
import "./styles/syntax.css"

export default function BranchPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  )
}