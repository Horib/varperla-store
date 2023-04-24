import { MEDUSA_BACKEND_URL, queryClient } from "@lib/config"
import { AccountProvider } from "@lib/context/account-context"
import { CartDropdownProvider } from "@lib/context/cart-dropdown-context"
import { MobileMenuProvider } from "@lib/context/mobile-menu-context"
import { StoreProvider } from "@lib/context/store-context"
import { Hydrate } from "@tanstack/react-query"
import { CartProvider, MedusaProvider } from "medusa-react"
import "styles/globals.css"
import { AppPropsWithLayout } from "types/global"

import PlausibleProvider from "next-plausible"
import { Analytics } from "@vercel/analytics/react"
import Maintenance from "./maintenance"
import ComingSoon from "./comingSoon"
import { Children, useEffect } from "react"

const APP_ENV = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
} as const

const SITE_MODE = {
  NORMAL: "normal",
  MAINTENANCE: "maintenance",
  COMING_SOON: "coming_soon",
} as const

function App({
  Component,
  pageProps,
}: AppPropsWithLayout<{ dehydratedState?: unknown }>) {
  const getLayout = Component.getLayout ?? ((page) => page)

  const appEnvironment =
    process.env.NEXT_PUBLIC_NODE_ENV?.toLowerCase() || APP_ENV.DEVELOPMENT

  const siteMode =
    process.env.NEXT_PUBLIC_SITE_MODE?.toLowerCase() || SITE_MODE.NORMAL
  const siteUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_URL || "varperla.fo"

  const InjectClarityScript = () => {
    useEffect(() => {
      if (
        appEnvironment !== APP_ENV.DEVELOPMENT &&
        process.env.NEXT_PUBLIC_CLARITY_KEY
      ) {
        const script = document.createElement("script")
        script.id = "clarity-script"
        script.async = true
        script.src = `https://www.clarity.ms/tag/${process.env.NEXT_PUBLIC_CLARITY_KEY}`
        document.body.appendChild(script)

        return () => {
          // Remove the script on unmount
          document.body.removeChild(script)
        }
      }
    }, [])
  }

  InjectClarityScript()

  const renderWithAnalytics = (children: React.ReactNode) => {
    return appEnvironment === APP_ENV.DEVELOPMENT ? (
      children
    ) : (
      <PlausibleProvider trackOutboundLinks={true} domain={siteUrl}>
        {children}
        <Analytics />
      </PlausibleProvider>
    )
  }

  if (siteMode === SITE_MODE.MAINTENANCE) {
    return renderWithAnalytics(<Maintenance />)
  }

  if (siteMode === SITE_MODE.COMING_SOON) {
    return renderWithAnalytics(<ComingSoon />)
  }

  return renderWithAnalytics(
    <PlausibleProvider trackOutboundLinks={true} domain={siteUrl}>
      <MedusaProvider
        baseUrl={MEDUSA_BACKEND_URL}
        queryClientProviderProps={{
          client: queryClient,
        }}
      >
        <Hydrate state={pageProps.dehydratedState}>
          <CartDropdownProvider>
            <MobileMenuProvider>
              <CartProvider>
                <StoreProvider>
                  <AccountProvider>
                    {getLayout(<Component {...pageProps} />)}
                  </AccountProvider>
                </StoreProvider>
              </CartProvider>
            </MobileMenuProvider>
          </CartDropdownProvider>
        </Hydrate>
      </MedusaProvider>
      <Analytics />
    </PlausibleProvider>
  )
}

export default App
