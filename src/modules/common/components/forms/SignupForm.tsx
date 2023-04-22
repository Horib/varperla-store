// components/SignupForm.tsx
import clsx from "clsx"
import { useState, ChangeEvent, FormEvent } from "react"

const SignupForm = () => {
  const [email, setEmail] = useState<string>("")
  const [status, setStatus] = useState<string>("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("")
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.status >= 400) {
        throw new Error("Failed to subscribe")
      }

      setStatus("Takk fyri! Tú ert meldaður til 😊")
      setEmail("")
    } catch (error) {
      setStatus("Oh nei! Ein villa kom í, prøva aftur seinni 😔")
    }
  }

  return (
    <div
      className={clsx(
        "max-w-lg rounded-2xl bg-white p-8 text-center text-gray-800 shadow-md"
      )}
    >
      <h2 className={clsx("mt-2 text-2xl")}>Tíðindabræv</h2>
      <p className={clsx("m-2 text-base text-gray-500")}>
        Melda teg til okkara tíðindabræv og ver ímillum tey firstu í fáa boð tá
        heimasíðan er liðug:
      </p>
      <form
        onSubmit={handleSubmit}
        className={clsx("group relative mb-5 mt-8")}
      >
        <div className={clsx("relative")}>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Email Addressa"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
            className={clsx(
              "peer h-10 w-full rounded-[50px] border-2 border-white p-2 px-6 py-2 pr-[120px] text-sm placeholder-transparent shadow-md focus:border-[#294861] focus:outline-none"
            )}
          />
          <label
            htmlFor="email"
            className={clsx(
              "absolute -top-4 left-6 text-xs text-gray-800 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gray-800"
            )}
          >
            Email Addressa
          </label>
        </div>
        <button
          type="submit"
          className={clsx(
            "absolute right-0 top-0 h-10 rounded-[50px] border-0 bg-gradient-to-tl from-[#0E1C26] to-[#294861] px-6 py-2 text-sm text-white focus:outline-none active:scale-95"
          )}
        >
          Tilmelda
        </button>
        {status && (
          <div className={clsx("absolute flex pl-6 pt-2 text-xs")}>
            <p className={clsx("")}>{status}</p>
          </div>
        )}
      </form>
    </div>
  )
}

export default SignupForm
