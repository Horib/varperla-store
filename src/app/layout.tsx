import { MEDUSA_BACKEND_URL, queryClient } from "@lib/config"
import { MedusaProvider } from "medusa-react"

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  const uri = MEDUSA_BACKEND_URL
  const { hostname } = new URL(uri)

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href={`//${hostname}`} crossOrigin="anonymous" />
        <link rel="dns-prefetch" href={`//${hostname}`} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* <Main />
        <NextScript />
        <Script
          id="clarity-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        (function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t=l.createElement(r);
            t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_KEY}");`,
          }}
        /> */}
        <MedusaProvider
          baseUrl={MEDUSA_BACKEND_URL}
          queryClientProviderProps={{
            client: queryClient,
          }}
        >
          {children}
        </MedusaProvider>
      </body>
    </html>
  )
}
