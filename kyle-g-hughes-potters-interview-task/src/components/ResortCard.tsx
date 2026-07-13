import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// #region interface
type ResortCardProps = {
  cardColor: string;
  image: string;
  resortName: string;
  tagline: string;
  description: string;
  buttonLink: string;
  buttonLabel?: string;
};
// #endregion

const ResortCard = ({
  cardColor,
  image,
  resortName,
  tagline,
  description,
  buttonLink,
  buttonLabel,
}: ResortCardProps) => {
  // #region variables
  const defaultButtonLabel = resortName.replace(/^Potters Resorts /, "");
  const btnLabel = buttonLabel || defaultButtonLabel;
  // #endregion

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxWidth: { xs: "100%", md: 500 },
        overflow: "hidden",
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={resortName}
        sx={{
          height: { xs: 170, sm: 200, md: 220 },
          objectFit: "cover",
        }}
      />

      <CardContent
        sx={{
          alignItems: "center",
          bgcolor: cardColor,
          color: "white",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          px: { xs: 2.2, md: 3.2 },
          py: { xs: 2, md: 2.8 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "22px", md: "25px" },
            lineHeight: "26px",
            mb: 1,
          }}
        >
          {resortName}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "22px", md: "25px" },
            lineHeight: "26px",
            mb: 4,
          }}
        >
          {tagline}
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "25px",
            mb: 4,
          }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            href={buttonLink}
            sx={{
              width: { xs: "100%", sm: "75%" },
            }}
          >
            Explore {btnLabel}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ResortCard;
