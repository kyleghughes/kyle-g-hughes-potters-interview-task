import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HeaderImage from "../components/HeaderImage";

describe("HeaderImage", () => {
  const defaultProps = {
    alt: "Luxury resort coastline",
    img: "/images/resort-header.jpg",
  };

  it("renders an image with the correct alt text", () => {
    render(<HeaderImage {...defaultProps} />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", defaultProps.alt);
  });

  it("renders the correct image source", () => {
    render(<HeaderImage {...defaultProps} />);

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("src", defaultProps.img);
  });

  it("renders with different image props", () => {
    render(
      <HeaderImage alt="Mountain resort view" img="/images/mountain.jpg" />,
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("alt", "Mountain resort view");

    expect(image).toHaveAttribute("src", "/images/mountain.jpg");
  });

  it("applies the expected image styles", () => {
    render(<HeaderImage {...defaultProps} />);

    const image = screen.getByRole("img");

    expect(image).toHaveStyle({
      display: "block",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center 35%",
    });
  });
});
