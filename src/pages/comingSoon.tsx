import clsx from "clsx"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
import SignupForm from "@modules/common/components/forms/SignupForm"
import Head from "@modules/common/components/head"

const ComingSoon = () => {
  return (
    <>
      <Head title="Coming Soon" description="" />
      <div
        className={clsx(
          "flex h-screen flex-row justify-center px-5 py-8 text-white sm:pb-14 sm:pt-12 md:pt-32 lg:p-0 lg:pt-40 2xl:pt-72"
        )}
      >
        <div
          className={clsx(
            "flex max-h-[500px] max-w-[2440px] flex-col justify-between  md:gap-y-20 lg:max-h-none lg:w-full lg:flex-row lg:justify-evenly"
          )}
        >
          <div
            className={clsx(
              "flex flex-col items-center gap-y-4 lg:mx-auto lg:flex-1 2xl:gap-y-12"
            )}
          >
            <h1
              className={clsx(
                "text-center font-sans text-2xl font-light tracking-widest md:text-3xl 2xl:text-4xl"
              )}
            >
              Várperla <br /> Blómuhandil
            </h1>
            <div className={clsx("relative h-24 w-24 2xl:h-48 2xl:w-48")}>
              <Image
                src={"/logo_256.webp"}
                alt=""
                className={clsx("absolute inset-0 mx-auto")}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className={clsx("flex flex-col items-center gap-4 lg:flex-1")}>
            <h2
              className={clsx(
                "max-w-md text-center font-sans text-3xl font-light uppercase tracking-widest md:text-4xl  2xl:max-w-2xl 2xl:text-5xl"
              )}
            >
              Gleði tykkum, her hendur okkurt
            </h2>
            <div className={clsx("mt-3 flex flex-col gap-y-9 2xl:mt-16")}>
              <button
                className={clsx(
                  "group rounded-md bg-white px-10 py-4 text-base text-black hover:bg-slate-100 active:scale-95 2xl:px-20 2xl:py-6 2xl:text-2xl"
                )}
              >
                <span
                  className={clsx(
                    "relative inline-block rounded-sm p-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-gradient-to-tl before:from-[#2A454B] before:to-[#294861] before:transition before:duration-100  before:ease-in-out group-hover:before:-skew-y-0"
                  )}
                >
                  <span className={clsx("relative text-white")}>
                    Fá meira kunning
                  </span>
                </span>
              </button>
              <div className={clsx("flex flex-row justify-evenly")}>
                <Link
                  className={clsx("hover:scale-105 hover:text-slate-100")}
                  href={
                    "https://www.facebook.com/profile.php?id=100063642802861&mibextid=ZbWKwL"
                  }
                  aria-label="Facebook link"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className={clsx("w-8 lg:w-10")}
                  />
                </Link>
                <Link
                  className={clsx("hover:scale-105 hover:text-slate-100")}
                  href={
                    "https://instagram.com/varperlablomuhandil?igshid=YmMyMTA2M2Y="
                  }
                  aria-label="Instagram link"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={clsx("w-8 lg:w-10")}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div><SignupForm /></div> */}
      </div>
      <div
        className={clsx(
          "fixed bottom-0 left-0 right-0 top-0 -z-10 bg-gradient-to-tl  from-[#0E1C26] via-[#2A454B] to-[#294861]"
        )}
      >
        <div className={clsx("relative ml-auto h-full w-1/2")}>
          <Image
            src="/coming_soon_1350_2400.webp"
            alt={"Coming Alive - Photo by Nahil Naseer on Unsplas"}
            className={clsx("absolute inset-0")}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </>
  )
}

export default ComingSoon
