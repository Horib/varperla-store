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

const MODE = {
  NORMAL: "normal",
  MAINTENANCE: "maintenance",
  COMING_SOON: "coming_soon",
} as const

function App({
  Component,
  pageProps,
}: AppPropsWithLayout<{ dehydratedState?: unknown }>) {
  const getLayout = Component.getLayout ?? ((page) => page)

  const siteMode =
    process.env.NEXT_PUBLIC_SITE_MODE?.toLowerCase() || MODE.NORMAL
  const siteUrl = process.env.NEXT_PUBLIC_PLAUSIBLE_URL || "varperla.fo"

  if (siteMode === MODE.MAINTENANCE) {
    return (
      <PlausibleProvider trackOutboundLinks={true} domain={siteUrl}>
        <Maintenance />
        <Analytics />
      </PlausibleProvider>
    )
  }

  if (siteMode === MODE.COMING_SOON) {
    return (
      <PlausibleProvider trackOutboundLinks={true} domain={siteUrl}>
        <ComingSoon />
        <Analytics />
      </PlausibleProvider>
    )
  }

  return (
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
