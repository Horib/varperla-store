// components/SignupForm.tsx
import { useState, ChangeEvent, FormEvent } from "react"

const SignupForm = () => {
  const [email, setEmail] = useState<string>("")
  const [status, setStatus] = useState<string>("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("Loading...")
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

      setStatus("Successfully subscribed!")
      setEmail("")
    } catch (error) {
      setStatus("Error: Failed to subscribe")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        required
      />
      <button type="submit">Subscribe</button>
      {status && <p>{status}</p>}
    </form>
  )
}

export default SignupForm
