import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CentredContent from "../components/layout/CentredContent";

describe("CentredContent", () => {
  it("renders the provided content", () => {
    render(<CentredContent content={<p>Test content</p>} />);

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("passes props to the underlying Box component", () => {
    render(
      <CentredContent
        props={{
          "data-testid": "centred-content",
          id: "test-id",
        }}
        content={<p>Content</p>}
      />,
    );

    const box = screen.getByTestId("centred-content");

    expect(box).toBeInTheDocument();
    expect(box).toHaveAttribute("id", "test-id");
  });

  it("applies the default flex styles", () => {
    render(
      <CentredContent
        props={{
          "data-testid": "centred-content",
        }}
        content={<p>Content</p>}
      />,
    );

    const box = screen.getByTestId("centred-content");

    expect(box).toHaveStyle({
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    });
  });

  it("allows sx styles to override defaults", () => {
    render(
      <CentredContent
        props={{
          "data-testid": "centred-content",
        }}
        sx={{
          flexDirection: "row",
          textAlign: "left",
        }}
        content={<p>Content</p>}
      />,
    );

    const box = screen.getByTestId("centred-content");

    expect(box).toHaveStyle({
      flexDirection: "row",
      textAlign: "left",
    });
  });

  it("renders complex React content", () => {
    render(
      <CentredContent
        content={
          <>
            <h1>Heading</h1>
            <button>Click me</button>
          </>
        }
      />,
    );

    expect(
      screen.getByRole("heading", {
        name: "Heading",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Click me",
      }),
    ).toBeInTheDocument();
  });
});
