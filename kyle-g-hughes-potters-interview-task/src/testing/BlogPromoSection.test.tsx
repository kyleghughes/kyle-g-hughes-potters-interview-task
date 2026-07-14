import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import BlogPromoSection from "../components/BlogPromoSection";

vi.mock("@mui/material/useMediaQuery", () => ({
  default: vi.fn(),
}));

import useMediaQuery from "@mui/material/useMediaQuery";

const mockUseMediaQuery = vi.mocked(useMediaQuery);

describe("BlogPromoSection", () => {
  it("renders the blog title", () => {
    mockUseMediaQuery.mockReturnValue(false);

    render(<BlogPromoSection />);

    expect(
      screen.getByText("Stay Updated with the Potters Blog"),
    ).toBeInTheDocument();
  });

  it("renders the blog image with the correct alt text", () => {
    mockUseMediaQuery.mockReturnValue(false);

    render(<BlogPromoSection />);

    const image = screen.getByRole("img", {
      name: "Potters blog",
    });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "Potters blog");
  });

  it("renders the blog description", () => {
    mockUseMediaQuery.mockReturnValue(false);

    render(<BlogPromoSection />);

    expect(
      screen.getByText(
        /Pop over to our blog for a cosy catch-up on all things Potters Resorts/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the blog button with the correct link", () => {
    mockUseMediaQuery.mockReturnValue(false);

    render(<BlogPromoSection />);

    const button = screen.getByRole("link", {
      name: "Explore the Blog",
    });

    expect(button).toBeInTheDocument();

    expect(button).toHaveAttribute(
      "href",
      "https://www.pottersresorts.com/blog/",
    );
  });

  it("renders the desktop layout", () => {
    mockUseMediaQuery.mockReturnValue(false);

    const { container } = render(<BlogPromoSection />);

    const root = container.firstChild;

    expect(root).toBeInTheDocument();
  });

  it("renders the mobile layout", () => {
    mockUseMediaQuery.mockReturnValue(true);

    render(<BlogPromoSection />);

    expect(
      screen.getByText("Stay Updated with the Potters Blog"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("img", {
        name: "Potters blog",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Explore the Blog",
      }),
    ).toBeInTheDocument();
  });

  it("renders the mobile button at full width", () => {
    mockUseMediaQuery.mockReturnValue(true);

    render(<BlogPromoSection />);

    const button = screen.getByRole("link", {
      name: "Explore the Blog",
    });

    expect(button).toHaveStyle({
      width: "100%",
    });
  });

  it("renders the desktop button at 75% width", () => {
    mockUseMediaQuery.mockReturnValue(false);

    render(<BlogPromoSection />);

    const button = screen.getByRole("link", {
      name: "Explore the Blog",
    });

    expect(button).toHaveStyle({
      width: "75%",
    });
  });
});
