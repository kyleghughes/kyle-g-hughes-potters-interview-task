import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ResortCard from "../components/ResortCard";

describe("ResortCard", () => {
  const defaultProps = {
    cardColor: "#123456",
    image: "/resort.jpg",
    resortName: "Beach Paradise Resort",
    tagline: "Relax by the ocean",
    description: "A beautiful resort with stunning views and luxury amenities.",
    buttonLink: "/resorts/beach-paradise",
  };

  it("renders the resort name, tagline and description", () => {
    render(<ResortCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.resortName)).toBeInTheDocument();

    expect(screen.getByText(defaultProps.tagline)).toBeInTheDocument();

    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("renders the resort image with correct alt text", () => {
    render(<ResortCard {...defaultProps} />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", defaultProps.image);
    expect(image).toHaveAttribute("alt", defaultProps.resortName);
  });

  it("renders a button with the correct label", () => {
    render(<ResortCard {...defaultProps} />);

    const button = screen.getByRole("link", {
      name: `Explore ${defaultProps.resortName}`,
    });

    expect(button).toBeInTheDocument();
  });

  it("sets the button href correctly", () => {
    render(<ResortCard {...defaultProps} />);

    const button = screen.getByRole("link", {
      name: `Explore ${defaultProps.resortName}`,
    });

    expect(button).toHaveAttribute("href", defaultProps.buttonLink);
  });

  it("applies the provided card background colour", () => {
    render(<ResortCard {...defaultProps} />);

    const resortName = screen.getByText(defaultProps.resortName);

    const content = resortName.closest(".MuiCardContent-root");

    expect(content).toHaveStyle(`background-color: ${defaultProps.cardColor}`);
  });

  it("renders correctly with different resort data", () => {
    render(
      <ResortCard
        {...defaultProps}
        resortName="Mountain Escape"
        tagline="Adventure awaits"
        description="A peaceful mountain retreat."
        image="/mountain.jpg"
        buttonLink="/mountain"
      />,
    );

    expect(screen.getByText("Mountain Escape")).toBeInTheDocument();

    expect(screen.getByText("Adventure awaits")).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: "Explore Mountain Escape",
      }),
    ).toHaveAttribute("href", "/mountain");
  });
});
