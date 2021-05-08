import { useRouter } from "next/router"
import React from "react"
import PlainLink from "./PlainLink"
import PlainList from "./PlainList"

interface HeaderProps {
  siteTitle: string
}

const links = [
  {
    to: "/blog",
    label: "Blog",
  },
  {
    to: "/portfolio",
    label: "Portfolio",
  },
  {
    to: "/playlist",
    label: "Playlist",
  },
]

const Header = ({ siteTitle }: HeaderProps) => {
  const location = useRouter().pathname

  return (
    <>
      <header>
        <PlainLink href="/">{siteTitle}</PlainLink>

        <nav>
          <PlainList>
            {links.map(({ to, label }) => (
              <li key={to}>
                <PlainLink href={to}>
                  {label}
                  {location.includes(to) ? " ☚" : ""}
                </PlainLink>
              </li>
            ))}
          </PlainList>
        </nav>
      </header>
      <style jsx>{`
        header {
          background-color: var(--site-color);
          color: var(--gray00);
          display: grid;
          grid-template-columns: var(--grid-spec);
          grid-gap: var(--sp-xs);
          flex-wrap: wrap;
          margin-bottom: var(--sp-s);
          padding-top: var(--sp-s);
          padding-left: var(--sp-s);
          padding-right: var(--sp-s);
          margin-left: calc(var(--sp-s) * -1);
          margin-right: calc(var(--sp-s) * -1);
          font-stretch: 125%;
        }

        header :global(a:hover, a:focus) {
          color: var(--gray40);
        }

        nav :global(ul) {
          display: flex;
          gap: var(--sp-s);
        }

        @media (max-width: 64em) {
          header {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default Header
