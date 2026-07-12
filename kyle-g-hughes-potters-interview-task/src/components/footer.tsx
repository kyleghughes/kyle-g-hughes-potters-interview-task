import Container from "@mui/material/Container";
import logo from "../assets/images/Potters-Resorts-Logo-White.png";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#152f64",
        color: "white",
        pt: {
          xs: 4,
          md: 6,
        },
        pb: 8,
      }}
    >
      <Container maxWidth="md">
        <Stack
          sx={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            alt="Potters Resorts"
            component="img"
            src={logo}
            sx={{
              width: {
                xs: "65%",
                md: "35%",
              },
              height: "auto",
            }}
          />
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          divider={<Typography color="rgba(255,255,255,.6)">|</Typography>}
          sx={{
            mt: 2,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">Potters Resorts Hopton-on-Sea</Typography>

          <Typography variant="body2">Potters Resorts Five Lakes</Typography>
        </Stack>

        <Stack
          spacing={0.5}
          sx={{
            mt: 3,
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © 2026 Potters Resorts | 0333 3207 500
          </Typography>

          <Typography variant="body2">
            Potters Resorts Hopton-on-Sea, Coast Road, Hopton-on-Sea, NR31 9BX
          </Typography>

          <Typography variant="body2">
            Potters Resorts Five Lakes, Colchester Road, Essex, CM9 8HX
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
export default Footer;
