import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react"

import "@testing-library/jest-dom"
import SignupForm from "../SignupForm"

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

  it("Show an Success Message when the email is successfully subscribed", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: "Success" }),
        status: 200,
      })
    ) as jest.Mock

    const emailInput = screen.getByPlaceholderText("Email Addressa")
    fireEvent.change(emailInput, { target: { value: "test@example.com" } })

    const submitButton = screen.getByRole("button", { name: "Tilmelda" })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1)
    })

    const successMessage = screen.getByText("Takk fyri! Tú ert meldaður til 😊")
    expect(successMessage).toBeInTheDocument()
  })

  it("shows an 'Email is already sbuscribed' Error Message when the email is already subscribed", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ error: "Email is already subscribed" }),
        status: 400,
      })
    ) as jest.Mock

    const emailInput = screen.getByPlaceholderText("Email Addressa")
    fireEvent.change(emailInput, { target: { value: "test@example.com" } })

    const submitButton = screen.getByRole("button", { name: "Tilmelda" })
    fireEvent.click(submitButton)

    const isSubscribedMessage = await screen.findByText(
      "Tú ert longu meldaður til tíðindabrævið 😊"
    )
    expect(isSubscribedMessage).toBeInTheDocument()
  })

  it("shows a general error message when an error occurs", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 500,
        json: () => Promise.resolve({ error: "Failed to subscribe" }),
      })
    ) as jest.Mock

    const emailInput = screen.getByPlaceholderText("Email Addressa")
    fireEvent.change(emailInput, { target: { value: "test@example.com" } })

    const submitButton = screen.getByRole("button", { name: "Tilmelda" })
    fireEvent.click(submitButton)

    const errorMessage = await screen.findByText(
      "Oh nei! Ein villa kom í: Failed to subscribe. Prøva aftur seinni 😔"
    )
    expect(errorMessage).toBeInTheDocument()
  })
})
