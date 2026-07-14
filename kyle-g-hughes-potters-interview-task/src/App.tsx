import BlogPromoSection from "./components/BlogPromoSection";
import FamilyBreaksSection from "./components/FamilyBreakSection";
import headerImage from "./assets/images/resorts-homepage-header-2025.jpg";
import HeaderImage from "./components/HeaderImage";
import ResortCard from "./components/ResortCard";
import HoptonImage from "./assets/images/hopton-homepage-header-2025.webp";
import FiveLakesImage from "./assets/images/five-lakes-homepage-header-2025.webp";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import SaveOnNextBreakModal from "./components/SaveOnNextBreakModal";

const App = () => {
  const [saveOnBreakModalOpen, setSaveOnBreakModalOpen] =
    useState<boolean>(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderImage alt={"Couple enjoying drink at the bar"} img={headerImage} />
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          mt: { xs: 2, md: 6 },
          px: { xs: 2, md: 0 },
          gap: { xs: 1, md: 2 },
        }}
      >
        <Typography
          sx={{
            color: "#173573",
            lineHeight: "42px",
            fontSize: { xs: "35px", md: "41px" },
          }}
        >
          The UK’s Only All Inclusive Short Breaks
        </Typography>
        <Typography
          sx={{
            color: "#173573",
            lineHeight: "36px",
            fontSize: { xs: "30px", md: "35px" },
          }}
        >
          Fully Inclusive Breaks At The UK’s Best Resorts
        </Typography>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          mt: { xs: 2, md: 4 },
          px: { xs: 2, md: 50 },
          gap: { xs: 1, md: 2 },
        }}
      >
        <Typography
          sx={{
            color: "#242424",
            lineHeight: "22px",
            fontSize: "16px",
          }}
        >
          Enjoy a Fully Inclusive escape at our Five Star Resorts in Norfolk and
          Essex, with outstanding dining, West End-quality entertainment and
          activities all included in one simple price. The perfect, hassle-free
          break.
        </Typography>
        <Typography
          sx={{
            color: "#242424",
            lineHeight: "22px",
            fontSize: "16px",
          }}
        >
          Adult only for much of the year, with family breaks during selected
          school holidays at our Norfolk Resort.
        </Typography>
        <Typography
          sx={{
            color: "#242424",
            lineHeight: "22px",
            fontSize: "16px",
          }}
        >
          Proudly ranked the{" "}
          <Box component="span" sx={{ fontWeight: 700 }}>
            Best UK Holiday Parks & Resorts
          </Box>{" "}
          by Which? readers and a Tripadvisor Travellers’ Choice.
        </Typography>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          mt: 2,
          px: { xs: 2, md: 0 },
          width: "100%",
        }}
      >
        <Button
          sx={{
            width: { xs: "100%", md: "25%" },
            mt: 2,
          }}
          onClick={() => setSaveOnBreakModalOpen(true)}
        >
          Save On Your Next Break
        </Button>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          mt: { xs: 5, md: 6 },
          px: { xs: 5, md: 0 },
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#242424",
            lineHeight: "42px",
            fontSize: "36px",
          }}
        >
          Explore Our Two Five Star Resorts
        </Typography>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          width: "100%",
          gap: { xs: 4, md: 5 },
          mt: 3,
          px: 2,
        }}
      >
        <ResortCard
          cardColor={"#25689D"}
          image={HoptonImage}
          resortName={"Potters Resorts Hopton-on-Sea"}
          tagline={"Our Coastal Resort in Norfolk"}
          description={
            "Set on the coast, Hopton-on-Sea combines sea views and vibrant entertainment, with more than a century at the forefront of UK short breaks."
          }
          buttonLink={"https://www.pottersresorts.com/hopton-on-sea/"}
        />
        <ResortCard
          cardColor={"#277379"}
          image={FiveLakesImage}
          resortName={"Potters Resorts Five Lakes"}
          tagline={"Our Countryside Resort in Essex"}
          description={
            "Set within 333 acres of countryside, Five Lakes brings together open space, a wealth of activities and lively evenings in a contemporary Five Star setting."
          }
          buttonLink={"https://www.pottersresorts.com/five-lakes/"}
        />
      </Box>
      <Box sx={{ mt: { xs: 2, md: 12 } }}>
        <FamilyBreaksSection />
      </Box>
      <BlogPromoSection />
      <Footer />
      <SaveOnNextBreakModal
        open={saveOnBreakModalOpen}
        onClose={() => setSaveOnBreakModalOpen(false)}
      />
    </Box>
  );
};

export default App;
