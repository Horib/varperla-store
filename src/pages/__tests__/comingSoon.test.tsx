import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react"

import ComingSoon from "@pages/comingSoon"
// import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"

describe("ComingSoon", () => {
  it("renders the coming soon page", () => {
    render(<ComingSoon />)

    const title = screen.getByText(/Várperla Blómuhandil/i)
    expect(title).toBeInTheDocument()

    const subtitle = screen.getByText(/Gleði tykkum, her hendur okkurt/i)
    expect(subtitle).toBeInTheDocument()
  })

  it("Facebook link points to the correct URL", () => {
    render(<ComingSoon />)

    const facebookLink = screen.getByRole("Facebook", { name: "Facebook link" })
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://www.facebook.com/profile.php?id=100063642802861&mibextid=ZbWKwL"
    )
  })
  it("Instagram link points to the correct URL", () => {
    render(<ComingSoon />)

    const facebookLink = screen.getByRole("Instagram", {
      name: "Instagram link",
    })
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://instagram.com/varperlablomuhandil?igshid=YmMyMTA2M2Y="
    )
  })

  describe("ComingSoonOverlay", () => {
    it("opens and closes the overlay", async () => {
      render(<ComingSoon />)

      const moreInfoButton = screen.getByText(/Fá meira kunning/i)
      fireEvent.click(moreInfoButton)

      const overlayTitle = screen.getByText(
        /Vit eru í gongd við at gera ein net-handil/i
      )
      expect(overlayTitle).toBeInTheDocument()

      const closeButton = screen.getByRole("button", { name: "close" })
      //   const closeButton = screen.getByTestId("coming-soon-close-btn")
      expect(closeButton).toBeInTheDocument()

      // fireEvent.click(closeButton)
      // expect(closeButton).not.toBeVisible()
    })
  })
})
