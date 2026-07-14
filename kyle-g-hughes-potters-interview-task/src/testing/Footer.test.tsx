import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("renders a footer element", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders the Potters Resorts logo with correct alt text", () => {
    render(<Footer />);

    const logo = screen.getByRole("img", {
      name: "Potters Resorts logo",
    });

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("alt", "Potters Resorts logo");
  });

  it("renders the resort names", () => {
    render(<Footer />);

    expect(
      screen.getByText(
        /Potters Resorts Hopton-on-Sea\s+\|\s+Potters Resorts Five Lakes/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the copyright and phone number", () => {
    render(<Footer />);

    expect(
      screen.getByText(/© 2026 Potters Resorts \| 0333 3207 500/i),
    ).toBeInTheDocument();
  });

  it("renders both resort addresses", () => {
    render(<Footer />);

    expect(
      screen.getByText(
        /Potters Resorts Hopton-on-Sea, Coast Road, Hopton-on-Sea, NR31 9BX/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Potters Resorts Five Lakes, Colchester Road, Essex, CM9 8HX/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the footer with the correct background colour", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer-content")).toHaveStyle({
      backgroundColor: "#173573",
    });
  });
});
