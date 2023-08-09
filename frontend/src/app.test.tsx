import { it, describe, beforeEach, expect } from "vitest";
import App from "./App";
import { render, screen } from "./utils/test-utils";


describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should render the header", () => { 
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument()
  });

  it("should render the main", () => {
    const main = screen.getByRole("main")
    expect(main).toBeInTheDocument()
  })

  it("should render the footer", () => {
    const footer = screen.getByRole("contentinfo")
    expect(footer).toBeInTheDocument()
  })
});


