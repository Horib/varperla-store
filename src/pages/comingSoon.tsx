import clsx from "clsx"
import Image from "next/image"

const ComingSoon = () => {
  return (
    <>
      <div
        className={clsx(
          "flex h-screen flex-row justify-center p-5 pt-40 text-white"
        )}
      >
        <div className={clsx("flex flex-col gap-y-16")}>
          <div className={clsx("flex flex-col items-center gap-y-4")}>
            <h1
              className={clsx(
                "text-center font-sans text-3xl font-light tracking-widest"
              )}
            >
              Várperla <br /> Blómuhandil
            </h1>
            <div className={clsx("relative h-24 w-24")}>
              <Image
                src={"/Logo.png"}
                alt=""
                className={clsx("absolute inset-0 mx-auto")}
                width={96}
                height={96}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <h2
            className={clsx(
              "font text-center font-sans text-4xl font-light uppercase tracking-widest"
            )}
          >
            {/* Okkurt framúr er í gerð */}
            Great things are coming
          </h2>
          <div className={clsx("mb-auto mt-auto flex flex-col gap-y-20")}>
            <button>Learn More</button>
            <div className={clsx("flex flex-row justify-evenly")}>
              <div>1</div>
              <div>2</div>
            </div>
          </div>
        </div>
        <div className={clsx("hidden lg:basis-1/2")}>
          <div className={clsx("mb-16")}>
            <h1 className={clsx("text-center font-sans text-4xl")}>
              Várperla <br /> Blómuhandil
            </h1>
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
