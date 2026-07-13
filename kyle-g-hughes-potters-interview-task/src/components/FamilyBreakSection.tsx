import { Box, Typography, Button } from "@mui/material";
import FamilyBreakImage from "../assets/images/family-breaks-header-2025.jpg";
import CentredContent from "./layout/CentredContent";

const FamilyBreaksSection = () => {
  return (
    <>
      <CentredContent
        content={
          <>
            <Box
              alt="Family enjoying a break at the Norfolk resort"
              component="img"
              src={FamilyBreakImage}
              sx={{
                display: "block",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center",
                width: { xs: "100%", md: "70%" },
              }}
            />
            <Box sx={{ mt: 2, px: { xs: 10, md: 0 } }}>
              <Typography
                sx={{
                  color: "#fff",
                  lineHeight: "36px",
                  fontSize: "25px",
                  opacity: 0.9,
                }}
              >
                Family Breaks at our Norfolk Resort
              </Typography>
            </Box>
            <Box sx={{ mt: 2, px: { xs: 0, md: 50 } }}>
              <Typography
                sx={{
                  color: "#fff",
                  lineHeight: "25px",
                  fontSize: "16px",
                  opacity: 0.9,
                }}
              >
                During selected school holidays, Hopton-on-Sea welcomes families
                for Fully Inclusive breaks that bring every generation together,
                with dedicated activities and entertainment for families and the
                same exceptional dining and shows enjoyed year-round.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 5,
                width: "100%",
              }}
            >
              <Button
                href={
                  "https://www.pottersresorts.com/hopton-on-sea/family-breaks/"
                }
                sx={{
                  width: { xs: "100%", sm: "25%" },
                }}
              >
                Explore Family Breaks
              </Button>
            </Box>
          </>
        }
        sx={{
          backgroundColor: "#970B50",
          py: { xs: 2.5, md: 6 },
          px: 2,
        }}
      />
    </>
  );
};

export default FamilyBreaksSection;
