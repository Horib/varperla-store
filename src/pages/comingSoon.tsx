import clsx from "clsx"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

const ComingSoon = () => {
  return (
    <>
      <div
        className={clsx(
          "flex h-screen flex-row justify-center p-5 pt-10 text-white md:pt-32 lg:p-0 lg:pt-40 2xl:pt-72"
        )}
      >
        <div
          className={clsx(
            "flex max-w-[2440px] flex-col gap-y-12 md:gap-y-20 lg:w-full lg:flex-row lg:justify-evenly"
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
                src={"/Logo.png"}
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
                "max-w-sm text-center font-sans text-3xl font-light uppercase tracking-widest md:text-4xl  2xl:max-w-2xl 2xl:text-5xl"
              )}
            >
              {/* Okkurt framúr er í gerð */}
              {/* Great things are coming */}
              Gleði tykkum, her hendur okkurt
            </h2>
            <div className={clsx("mt-3 flex flex-col gap-y-10 2xl:mt-16")}>
              <button
                className={clsx(
                  "rounded-md bg-white px-10 py-4 text-base text-black 2xl:px-20 2xl:py-6 2xl:text-2xl hover:bg-slate-100 active:scale-95"
                )}
              >
                <span
                  className={clsx(
                    "relative inline-block rounded-sm p-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-gradient-to-tl before:from-[#2A454B] before:to-[#294861] before:transition before:duration-100  before:ease-in-out hover:before:-skew-y-0"
                  )}
                >
                  <span className={clsx("relative text-white")}>
                    Fá meira kunning
                  </span>
                </span>
              </button>
              <div className={clsx("flex flex-row justify-evenly text-3xl")}>
                <Link
                  className={clsx("hover:text-slate-100 hover:scale-105")}
                  href={
                    "https://www.facebook.com/profile.php?id=100063642802861&mibextid=ZbWKwL"
                  }
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                  className={clsx("hover:text-slate-100 hover:scale-105")}
                  href={
                    "https://instagram.com/varperlablomuhandil?igshid=YmMyMTA2M2Y="
                  }
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* background */}

      <div
        className={clsx(
          "fixed bottom-0 left-0 right-0 top-0 -z-10 bg-gradient-to-tl  from-[#0E1C26] via-[#2A454B] to-[#294861]"
        )}
      >
        <div className={clsx("relative ml-auto h-full w-1/2")}>
          <Image
            src="/nahil-naseer-xljtGZ2-P3Y-unsplash-large.jpg"
            alt=""
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
