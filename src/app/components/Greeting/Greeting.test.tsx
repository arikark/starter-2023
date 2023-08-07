import { render } from "@testing-library/react"

import { Greeting } from "./Greeting"

test("Displays greeting", () => {
  const screen = render(<Greeting />)
  const greetingText = screen.getByText("Time for a new project.")
  expect(greetingText).toBeInTheDocument()
  screen.unmount()
})
