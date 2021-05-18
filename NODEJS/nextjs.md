# SSG (Static site generation)
  Consists on caching the site locally and on CDN's
  `export async getStaticProps(context)` - page CONTENT depends on external data
  `export async getStaticPaths()` - page PATH depend on external data
  Obs: use function components and send data into the React Component through props

# SSR (Server side rendering) or Dynamic Rendering
  Execute part of the React app on the server, before sending to the client, improving SEO.
  `export async getServerSideProps(context)` - Run for each request

# CSR (Client side rendering)
  Execute the React app on the client, but still doesn't send 100% of the code like a SPA
