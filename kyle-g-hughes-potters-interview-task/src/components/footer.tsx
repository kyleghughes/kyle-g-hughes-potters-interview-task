import logo from "../assets/images/Potters-Resorts-Logo-White.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CentredContent from "./layout/CentredContent";

const Footer = () => {
  return (
    <Box component="footer">
      <CentredContent
        content={
          <>
            <Box
              alt="Potters Resorts logo"
              component="img"
              src={logo}
              sx={{
                height: "auto",
                width: {
                  xs: "65%",
                  md: "13.5%",
                },
              }}
            />

            <Box sx={{ mt: 3 }}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "12px", md: "14px" },
                  lineHeight: "19px",
                }}
              >
                Potters Resorts Hopton-on-Sea&nbsp; | &nbsp;Potters Resorts Five
                Lakes
              </Typography>
            </Box>

            <CentredContent
              content={
                <>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { xs: "12px", md: "14px" },
                      lineHeight: "19px",
                    }}
                  >
                    © 2026 Potters Resorts | 0333 3207 500
                  </Typography>

                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { xs: "12px", md: "14px" },
                      lineHeight: "19px",
                    }}
                  >
                    Potters Resorts Hopton-on-Sea, Coast Road, Hopton-on-Sea,
                    NR31 9BX
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { xs: "12px", md: "14px" },
                      lineHeight: "19px",
                    }}
                  >
                    Potters Resorts Five Lakes, Colchester Road, Essex, CM9 8HX
                  </Typography>
                </>
              }
              sx={{ mt: 3, gap: 1 }}
            />
          </>
        }
        sx={{
          bgcolor: "#173573",
          color: "white",
          px: 2,
          py: 5,
        }}
      />
    </Box>
  );
};

export default Footer;
