import { describe, it, beforeEach, expect } from "vitest";
import {render, screen} from "../../utils/test-utils";
import Header from "./index";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render the logo", () => {
    const logo = screen.getByRole("heading", { name: /logo/i });
    expect(logo).toBeInTheDocument();
  });

  it("should render the navigation", () => {
    const navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();
  });

  it("should render the navigation links", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(4);
  });

});