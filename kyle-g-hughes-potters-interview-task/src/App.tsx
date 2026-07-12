import { Box, Container, Typography, Button } from "@mui/material";
import Footer from "./components/footer";
import BlogPromoSection from "./components/BlogPromoSection";
import FamilyBreaksSection from "./components/FamilyBreakSection";
import headerImage from "./assets/images/resorts-homepage-header-2025.jpg";
import HeaderImage from "./components/HeaderImage";
import ResortCard from "./components/ResortCard";
import HoptonImage from "./assets/images/hopton-homepage-header-2025.webp";
import FiveLakesImage from "./assets/images/five-lakes-homepage-header-2025.webp";

const App = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderImage alt={"Family Holiday"} img={headerImage} />

      <Box
        sx={{
          textAlign: "center",
          px: { xs: 2.5, sm: 3, md: 4 },
          pt: { xs: 3, md: 4 },
          pb: { xs: 3, md: 2 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#153b73",
            fontWeight: 500,
            fontSize: {
              xs: "1.95rem",
              sm: "2.25rem",
              md: "2.7rem",
            },
            lineHeight: 1.15,
            mb: { xs: 1.1, md: 1.4 },
          }}
        >
          The UK’s Only All Inclusive Short Breaks
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: "#153b73",
            fontWeight: 500,
            fontSize: {
              xs: "1.6rem",
              sm: "1.85rem",
              md: "2.2rem",
            },
            lineHeight: 1.2,
            mb: { xs: 2, md: 3 },
          }}
        >
          Fully Inclusive Breaks At The UK’s Best Resorts
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 1.25, md: 0.4 },
            mb: { xs: 3, md: 2.5 },
          }}
        >
          <Typography
            sx={{
              maxWidth: 1200,
              mx: "auto",
              color: "#444",
              fontSize: { xs: "0.95rem", md: "1rem" },
              lineHeight: 1.6,
            }}
          >
            Enjoy a Fully Inclusive escape at our Five Star Resorts in Norfolk
            and Essex, with outstanding dining, West End-quality entertainment
            and activities all included in one simple price. The perfect,
            hassle-free break.
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              mx: "auto",
              color: "#444",
              fontSize: { xs: "0.95rem", md: "1rem" },
              lineHeight: 1.6,
            }}
          >
            Adult only for much of the year, with family breaks during selected
            school holidays at our Norfolk Resort.
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              mx: "auto",
              color: "#444",
              fontSize: { xs: "0.95rem", md: "1rem" },
              lineHeight: 1.6,
            }}
          >
            Proudly ranked the <strong>Best UK Holiday Parks & Resorts</strong>{" "}
            by Which? readers and a Tripadvisor Travellers’ Choice.
          </Typography>
        </Box>

        <Button
          sx={{
            width: { xs: "100%", sm: "auto" },
            maxWidth: { xs: "320px", sm: "none" },
            px: { xs: 3, sm: 6, md: 8 },
            py: 1.2,
            textTransform: "none",
            fontSize: { xs: "0.95rem", md: "1rem" },
            mb: { xs: 4, md: 5 },
          }}
        >
          Save On Your Next Break
        </Button>

        <Typography
          variant="h2"
          sx={{
            color: "#333",
            fontWeight: 400,
            fontSize: {
              xs: "1.65rem",
              md: "2.4rem",
            },
            mb: 3,
          }}
        >
          Explore Our Two Five Star Resorts
        </Typography>
      </Box>

      <Container sx={{ pb: { xs: 4, md: 10 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
          }}
        >
          <ResortCard
            image={HoptonImage}
            resortName="Potters Resorts Hopton-on-Sea"
            tagline="Our Coastal Resort in Norfolk"
            description="Set on the coast, Hopton-on-Sea combines sea views and vibrant entertainment, with more than a century at the forefront of UK short breaks."
            buttonLink="https://www.pottersresorts.com/hopton-on-sea/"
            cardColor="#2f6b98"
          />

          <ResortCard
            image={FiveLakesImage}
            resortName="Potters Resorts Five Lakes"
            tagline="Our Countryside Resort in Essex"
            description="Set within 333 acres of countryside, Five Lakes brings together open space, a wealth of activities and lively evenings in a contemporary Five Star setting."
            buttonLink="https://www.pottersresorts.com/five-lakes/"
            cardColor="#277379"
          />
        </Box>
      </Container>

      <FamilyBreaksSection />
      <BlogPromoSection />
      <Footer />
    </Box>
  );
};

export default App;
