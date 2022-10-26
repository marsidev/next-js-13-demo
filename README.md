First look of the new features of Next.js 13.

## Notes

- [`@next/font`](https://beta.nextjs.org/docs/optimizing/fonts) doesn't works properly with Turbopack - in production it works but in dev it throws an error
- [`Loading UI`](https://beta.nextjs.org/docs/routing/loading-ui) doesn't works properly with Turbopack - in production the loading is shown properly but in dev mode doesn't
- `next/image` doesn't works properly with Turbopack - in dev it does not recognize the `images.remotePatterns` config, in production it works fine

- Lot of errors like the following
	```bash
	[UpdateServer]: error reading file \\?\C:\Users\x\path-to-project\\.next\server\app\__rsc__\chunks\rsc\app_4f6d9a.js: Access denied. (os error 5)
	[500] error: reading file \\?\C:\Users\x\path-to-project\\.next\server\app\__rsc__\chunks\rsc\app_4f6d9a.js


	Caused by:
		Access denied. (os error 5) (5786ms)
	error - error - [rendering] [rendering] [root of the dev server]/pokemons/21
		Error during SSR Rendering
		timed out waiting for the Node.js process to connect

	[root of the dev server]/pokemons/20
		Error during SSR Rendering
		timed out waiting for the Node.js process to connect
	```
- I had problems fetching dynamic data from `pokéapi` in `app/pokemons/[id]/page.tsx`, which *somehow* I solved by installing `pokedex-promise-v2`
