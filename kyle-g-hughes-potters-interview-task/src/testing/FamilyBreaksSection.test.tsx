import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FamilyBreaksSection from "../components/FamilyBreakSection";

describe("FamilyBreaksSection", () => {
  it("renders the family breaks image with the correct alt text", () => {
    render(<FamilyBreaksSection />);

    const image = screen.getByRole("img", {
      name: "Family enjoying a break at the Norfolk resort",
    });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "alt",
      "Family enjoying a break at the Norfolk resort",
    );
  });

  it("renders the section heading", () => {
    render(<FamilyBreaksSection />);

    expect(
      screen.getByText("Family Breaks at our Norfolk Resort"),
    ).toBeInTheDocument();
  });

  it("renders the section description", () => {
    render(<FamilyBreaksSection />);

    expect(
      screen.getByText(
        /During selected school holidays, Hopton-on-Sea welcomes families/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the explore family breaks button with the correct link", () => {
    render(<FamilyBreaksSection />);

    const button = screen.getByRole("link", {
      name: "Explore Family Breaks",
    });

    expect(button).toBeInTheDocument();

    expect(button).toHaveAttribute(
      "href",
      "https://www.pottersresorts.com/hopton-on-sea/family-breaks/",
    );
  });

  it("renders the section with the correct background colour", () => {
    render(<FamilyBreaksSection />);

    expect(screen.getByTestId("family-breaks-section")).toHaveStyle({
      backgroundColor: "#970B50",
    });
  });
});
