import clsx from "clsx"
import Image from "next/image"

const ComingSoon = () => {
  return (
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
          <p className={clsx("text-3xl font-sans underline decoration-white")}>
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
  )
}

export default ComingSoon
