import { Box, Typography, Button, Container } from "@mui/material";
import FamilyBreakImage from "../assets/images/family-breaks-header-2025.jpg";

export default function FamilyBreaksSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#a90055",
        py: { xs: 4.5, md: 7 },
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        <Box
          component="img"
          src={FamilyBreakImage}
          alt="Family enjoying a break at the Norfolk resort"
          sx={{
            width: "100%",
            height: { xs: 220, sm: 320, md: "auto" },
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            mx: "auto",
          }}
        />

        <Box
          sx={{
            textAlign: "center",
            maxWidth: { xs: "100%", md: "80%" },
            mx: "auto",
            mt: { xs: 3, md: 4 },
            px: { xs: 1.5, sm: 2 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              fontSize: { xs: 24, md: 34 },
              mb: 2,
            }}
          >
            Family Breaks at our Norfolk Resort
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 15, md: 17 },
              lineHeight: 1.7,
              mb: 3,
              opacity: 0.95,
            }}
          >
            During selected school holidays, Hopton-on-Sea welcomes families for
            Fully Inclusive breaks that bring every generation together, with
            dedicated activities and entertainment for families and the same
            exceptional dining and shows enjoyed year-round.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#087cf0",
              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: "320px", sm: "none" },
              px: { xs: 3, sm: 6, md: 8 },
              py: 1.3,
              textTransform: "none",
              fontSize: 16,
              borderRadius: "3px",
              "&:hover": {
                backgroundColor: "#0669cc",
              },
            }}
          >
            Explore Family Breaks
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
