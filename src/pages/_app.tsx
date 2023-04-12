import { MEDUSA_BACKEND_URL, queryClient } from "@lib/config"
import { AccountProvider } from "@lib/context/account-context"
import { CartDropdownProvider } from "@lib/context/cart-dropdown-context"
import { MobileMenuProvider } from "@lib/context/mobile-menu-context"
import { StoreProvider } from "@lib/context/store-context"
import { Hydrate } from "@tanstack/react-query"
import clsx from "clsx"
import { CartProvider, MedusaProvider } from "medusa-react"
import Image from "next/image"
import "styles/globals.css"
import { AppPropsWithLayout } from "types/global"
import Script from "next/script"

import PlausibleProvider from "next-plausible"

function App({
  Component,
  pageProps,
}: AppPropsWithLayout<{ dehydratedState?: unknown }>) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <PlausibleProvider trackOutboundLinks={true} domain="varperla.fo">
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
      />
      <MedusaProvider
        baseUrl={MEDUSA_BACKEND_URL}
        queryClientProviderProps={{
          client: queryClient,
        }}
      >
        {/* <Hydrate state={pageProps.dehydratedState}>
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
        </Hydrate> */}
        <div className={clsx("h-screen flex bg-[#004346]")}>
          <div
            className={clsx(
              "grow xl:basis-6/12 xl:grow-0 flex items-center justify-center h-screen"
            )}
          >
            <div className={"flex flex-col gap-8 text-white p-16"}>
              <h1 className={clsx("text-7xl font-sans")}>
                Várperla <br /> Blómuhandil
              </h1>
              <p
                className={clsx(
                  "text-3xl font-sans underline decoration-white"
                )}
              >
                Haldi okkum til góðar, síðan er í gerð
              </p>
            </div>
          </div>
          <div className={clsx("relative flex-1 shadow hidden xl:block")}>
            <Image
              src="/Flower.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className={clsx("absolute inset-0")}
            />
          </div>
        </div>
      </MedusaProvider>
    </PlausibleProvider>
  )
}

export default App
