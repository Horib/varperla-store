import { render, screen, fireEvent } from "@testing-library/react"

import "@testing-library/jest-dom"
import SignupForm from "../SignupForm"
import subscribe from "@lib/util/mailchimp"

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve({ message: "Success" }),
  })
}) as jest.Mock

describe("SignupForm Component", () => {
  beforeEach(() => {
    render(<SignupForm />)
  })

  it("renders the signup form", () => {
    const h2Element = screen.getAllByText(/Tíðindabræv/i)
    const specificH2Element = h2Element[0]
    expect(specificH2Element).toBeInTheDocument()
    expect(specificH2Element.tagName).toBe("H2")

    const subtitle = screen.getByText(
      /Melda teg til okkara tíðindabræv og ver ímillum tey fyrstu, ið fáa boð tá heimasíðan er liðug:/i
    )
    expect(subtitle).toBeInTheDocument()

    const input = screen.getByText(/Email Addressa/i)
    expect(input).toBeInTheDocument()

    const button = screen.getByRole("button", { name: "Tilmelda" })
    expect(button).toBeInTheDocument()
  })
})
