import { it,beforeEach, describe, expect } from "vitest";
import {screen, render} from "../../utils/test-utils"
import HeroSection from "./index";


describe("HeroSection", () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  // TODO: Entender pq os testes n tão funcionando
  it("should render a button", () => {
    const buttons = screen.getAllByRole("button")
    expect(buttons.length).toBe(2);
  });

  it.todo("buttons should have a href", () => {
  })

  it("should render a image", () => {
    expect(screen.getByRole("img", {name: "Imagem de um homem sentado no chão usando um notebook"})).toBeInTheDocument();
  });



});