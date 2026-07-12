import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import blogImage from "../assets/images/blog-mockup.webp";

export default function BlogPromoSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return (
      <Box sx={{ py: 4, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: { xs: 2.25, sm: 3.25 },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#173b7a",
                fontWeight: 500,
                fontSize: { xs: "24px", sm: "28px" },
                lineHeight: 1.25,
                mt: { xs: 2, sm: 3 },
                maxWidth: { xs: "85%", sm: "80%" },
                width: "100%",
              }}
            >
              Stay Updated with the Potters Blog
            </Typography>

            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <Box
                component="img"
                src={blogImage}
                alt="Potters blog"
                sx={{
                  width: "100%",
                  maxWidth: "420px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "100%",
                gap: 2.5,
                px: { xs: 0.5, sm: 0 },
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: 1.55,
                  maxWidth: "560px",
                  mb: 0,
                }}
              >
                Pop over to our blog for a cosy catch-up on all things Potters
                Resorts! From tasty tips on our dining experiences to tales of
                adventure around the resort, there’s always something new to
                read about. So, grab a coffee, get comfy, and stay ‘in the know’
                with resort news and entertainment updates; we love sharing
                these snippets with you between your visits.
              </Typography>

              <Button
                component="a"
                href="https://www.pottersresorts.com/blog/"
                variant="contained"
                sx={{
                  backgroundColor: "#0878f9",
                  width: "100%",
                  maxWidth: "320px",
                  height: "auto",
                  minHeight: "42px",
                  textTransform: "none",
                  fontSize: "17px",
                  fontWeight: 500,
                  borderRadius: "2px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#0069dc",
                    boxShadow: "none",
                  },
                }}
              >
                Explore the Blog
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: { xs: 4, md: 8 },
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#173b7a",
                fontWeight: 600,
                fontSize: "28px",
                lineHeight: 1.25,
                mb: 1.5,
              }}
            >
              Stay Updated with the Potters Blog
            </Typography>

            <Typography
              sx={{
                color: "#333",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: 1.55,
                maxWidth: "100%",
                mb: 3,
              }}
            >
              Pop over to our blog for a cosy catch-up on all things Potters
              Resorts! From tasty tips on our dining experiences to tales of
              adventure around the resort, there’s always something new to read
              about. So, grab a coffee, get comfy, and stay ‘in the know’ with
              resort news and entertainment updates; we love sharing these
              snippets with you between your visits.
            </Typography>

            <Button
              component="a"
              href="https://www.pottersresorts.com/blog/"
              variant="contained"
              sx={{
                backgroundColor: "#0878f9",
                width: {
                  xs: "100%",
                  md: "80%",
                },
                height: "auto",
                minHeight: "42px",
                textTransform: "none",
                fontSize: "17px",
                fontWeight: 500,
                borderRadius: "2px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#0069dc",
                  boxShadow: "none",
                },
              }}
            >
              Explore the Blog
            </Button>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={blogImage}
              alt="Potters blog"
              sx={{
                width: "100%",
                maxWidth: "590px",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
