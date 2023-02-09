import RadiusSelector from "../../components/Map/RadiusSelector";
import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// role => slider
describe("Component: RadiusSelector", () => {
  it("should be in the document", () => {
    render(<RadiusSelector  />)
  
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })
})