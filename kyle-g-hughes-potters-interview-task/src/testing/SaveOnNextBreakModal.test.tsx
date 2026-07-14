import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SaveOnNextBreakModal from "../components/SaveOnNextBreakModal";
import { submitSaveOnNextBreak } from "../api/saveOnNextBreak";
import { AxiosHeaders, type AxiosResponse } from "axios";

vi.mock("../api/saveOnNextBreak", () => ({
  submitSaveOnNextBreak: vi.fn(),
}));

describe("SaveOnNextBreakModal", () => {
  it("renders the modal content when open", () => {
    render(<SaveOnNextBreakModal open={true} onClose={vi.fn()} />);

    expect(
      screen.getByText("Save On Your Next Short Break"),
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Mobile Number (Optional)"),
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("does not render modal content when closed", () => {
    render(<SaveOnNextBreakModal open={false} onClose={vi.fn()} />);

    expect(
      screen.queryByText("Save On Your Next Short Break"),
    ).not.toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", async () => {
    const onClose = vi.fn();

    render(<SaveOnNextBreakModal open={true} onClose={onClose} />);

    await userEvent.click(screen.getByRole("button", { name: "close" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("shows validation errors when submitting empty form", async () => {
    render(<SaveOnNextBreakModal open={true} onClose={vi.fn()} />);

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    const errors = await screen.findAllByText(/required/i);

    expect(errors).toHaveLength(2);

    expect(screen.getByText("Full name is required")).toBeInTheDocument();

    expect(screen.getByText("Email address is required")).toBeInTheDocument();
  });

  it("allows users to fill in the form fields", async () => {
    render(<SaveOnNextBreakModal open={true} onClose={vi.fn()} />);

    await userEvent.type(
      screen.getByPlaceholderText("Full Name"),
      "John Smith",
    );

    await userEvent.type(
      screen.getByPlaceholderText("Email Address"),
      "john@test.com",
    );

    await userEvent.type(
      screen.getByPlaceholderText("Mobile Number (Optional)"),
      "07123456789",
    );

    expect(screen.getByDisplayValue("John Smith")).toBeInTheDocument();

    expect(screen.getByDisplayValue("john@test.com")).toBeInTheDocument();

    expect(screen.getByDisplayValue("07123456789")).toBeInTheDocument();
  });

  it("submits the form successfully", async () => {
    const onClose = vi.fn();

    vi.mocked(submitSaveOnNextBreak).mockResolvedValue({
      data: {},
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: new AxiosHeaders(),
      },
    });
    render(<SaveOnNextBreakModal open={true} onClose={onClose} />);

    await userEvent.type(
      screen.getByPlaceholderText("Full Name"),
      "John Smith",
    );

    await userEvent.type(
      screen.getByPlaceholderText("Email Address"),
      "john@test.com",
    );

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(submitSaveOnNextBreak).toHaveBeenCalledWith({
        fullName: "John Smith",
        email: "john@test.com",
        mobile: "",
      });
    });

    expect(onClose).toHaveBeenCalledTimes(1);

    expect(
      screen.getByText("Your savings code has been sent successfully!"),
    ).toBeInTheDocument();
  });

  it("shows an error snackbar when submission fails", async () => {
    vi.mocked(submitSaveOnNextBreak).mockRejectedValue(new Error("API failed"));

    render(<SaveOnNextBreakModal open={true} onClose={vi.fn()} />);

    await userEvent.type(
      screen.getByPlaceholderText("Full Name"),
      "John Smith",
    );

    await userEvent.type(
      screen.getByPlaceholderText("Email Address"),
      "john@test.com",
    );

    await userEvent.click(screen.getByRole("button", { name: "Submit" }));

    expect(
      await screen.findByText("Something went wrong. Please try again."),
    ).toBeInTheDocument();
  });

  it("disables the submit button while submitting", async () => {
    let resolveSubmission!: (value: AxiosResponse) => void;

    vi.mocked(submitSaveOnNextBreak).mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveSubmission = resolve;
        }),
    );

    render(<SaveOnNextBreakModal open={true} onClose={vi.fn()} />);

    await userEvent.type(
      screen.getByPlaceholderText("Full Name"),
      "John Smith",
    );

    await userEvent.type(
      screen.getByPlaceholderText("Email Address"),
      "john@test.com",
    );

    const button = screen.getByRole("button", {
      name: "Submit",
    });

    await userEvent.click(button);

    expect(button).toBeDisabled();

    resolveSubmission({
      data: {},
      status: 200,
      statusText: "OK",
      headers: {},
      config: {
        headers: new AxiosHeaders(),
      },
    });
  });
});
