import {
  Dialog,
  DialogContent,
  IconButton,
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import HeaderImage from "../assets/images/weekend-spring-saver-modal.jpg";
import {
  saveOnNextBreakSchema,
  type SaveOnNextBreakForm,
} from "../validation/saveOnNextBreakSchema";
import { submitSaveOnNextBreak } from "../api/saveOnNextBreak";

//#region interface
interface SaveOnNextBreakModalProps {
  open: boolean;
  onClose: () => void;
}
//#endregion

const SaveOnNextBreakModal = ({ open, onClose }: SaveOnNextBreakModalProps) => {
  //#region hooks
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SaveOnNextBreakForm>({
    resolver: zodResolver(saveOnNextBreakSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
    },
  });

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });
  //#endregion

  //#region function

  /**
   * Handles form submission by sending user details to the API,
   * resetting the form, closing the modal on success, and displaying
   * an appropriate success or error notification.
   */
  const onSubmit = async (data: SaveOnNextBreakForm): Promise<void> => {
    try {
      await submitSaveOnNextBreak(data);

      reset();

      setSnackbar({
        open: true,
        message: "Your savings code has been sent successfully!",
        severity: "success",
      });

      onClose();
    } catch (error) {
      console.error("Failed to submit form", error);

      setSnackbar({
        open: true,
        message: "Something went wrong. Please try again.",
        severity: "error",
      });
    }
  };
  //#endregion

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#173573",
              color: "#fff",
              overflow: "hidden",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          <Box
            component="img"
            src={HeaderImage}
            alt="Customers saving on their short break"
            sx={{
              width: "100%",
              display: "block",
              height: { xs: "20%", md: "auto" },
              objectFit: "fill",
            }}
          />

          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: "#fff",
              fontWeight: 700,
              position: "absolute",
              top: 12,
              right: 12,
            }}
          >
            X
          </IconButton>
        </Box>

        <DialogContent
          sx={{
            textAlign: "center",
            px: { xs: 2, md: 4 },
            py: 4,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "22px", md: "25px" },
              lineHeight: "22px",
              fontWeight: 600,
              mb: 2,
            }}
          >
            Save On Your Next Short Break
          </Typography>

          <Typography
            sx={{
              fontSize: 16,
              lineHeight: "24px",
              mb: 3,
              opacity: 0.8,
            }}
          >
            Enter your details below and we will send you an exclusive savings
            code for you to use on your next Potters Resorts Short Break.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 5,
              px: { xs: 0, md: 8 },
            }}
          >
            <TextField
              fullWidth
              placeholder="Full Name"
              {...register("fullName")}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />

            <TextField
              fullWidth
              placeholder="Email Address"
              type="email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              fullWidth
              placeholder="Mobile Number (Optional)"
              {...register("mobile")}
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
            />

            <Button type="submit" variant="contained" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </Box>

          <Typography
            sx={{
              mt: 5,
              mb: 2,
              fontSize: 16,
              lineHeight: "22px",
              textDecoration: "underline",
            }}
          >
            Terms and conditions apply
          </Typography>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() =>
          setSnackbar((prev) => ({
            ...prev,
            open: false,
          }))
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() =>
            setSnackbar((prev) => ({
              ...prev,
              open: false,
            }))
          }
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SaveOnNextBreakModal;
