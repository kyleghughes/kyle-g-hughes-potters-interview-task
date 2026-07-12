import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

type ResortCardProps = {
  cardColor: string;
  image: string;
  resortName: string;
  tagline: string;
  description: string;
  buttonLink: string;
  buttonLabel?: string;
};

export default function ResortCard({
  cardColor,
  image,
  resortName,
  tagline,
  description,
  buttonLink,
  buttonLabel,
}: ResortCardProps) {
  const defaultButtonLabel = resortName.replace(/^Potters Resorts /, "");
  const btnLabel = buttonLabel || defaultButtonLabel;

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        maxWidth: { xs: "100%", md: 500 },
        overflow: "hidden",
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
          bgcolor: cardColor,
          color: "white",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          px: { xs: 2.2, md: 3.2 },
          py: { xs: 2, md: 2.8 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 0.35,
            fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.45rem" },
            lineHeight: 1.2,
          }}
        >
          {resortName}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mb: { xs: 1, md: 1.4 },
            fontWeight: 300,
            fontSize: { xs: "0.9rem", sm: "0.95rem", md: "1.05rem" },
          }}
        >
          {tagline}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            maxWidth: 440,
            fontSize: { xs: "0.85rem", md: "0.9rem" },
            lineHeight: 1.5,
          }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            mt: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            href={buttonLink}
            variant="outlined"
            sx={{
              mt: { xs: 1.6, md: 2 },
              color: "white",
              borderColor: "white",
              fontSize: { xs: "0.9rem", md: "0.95rem" },
              textTransform: "none",
              width: { xs: "100%", sm: "62%" },
              maxWidth: { xs: "320px", sm: "220px" },
              borderRadius: "2px",
              "&:hover": {
                borderColor: "white",
                bgcolor: "rgba(255,255,255,0.08)",
              },
            }}
          >
            Explore {btnLabel}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
