import type { LayoutProps } from '~/types/app'
import '~/styles/dist.css'
import NavLink from '~/ui/nav-link'
// import clsx from 'clsx'
// import { Nunito } from '@next/font/google'
// const nunito = Nunito()

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className="bg-gray-900 text-gray-100 antialiased"
      // className={clsx('bg-gray-900 text-gray-100 antialiased', {
      //   [nunito.className]: true,
      // })}
    >
      <head>
        <title>Next.js 13 App Directory Demo</title>
      </head>

      <body className="flex w-full flex-col items-center">
        <header className="flex w-full justify-center border-b p-4">
          <nav className="w-full max-w-screen-lg space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/pokemons">Pokémons</NavLink>
          </nav>
        </header>

        <main className="w-full max-w-screen-lg py-8">{children}</main>
      </body>
    </html>
  )
}
