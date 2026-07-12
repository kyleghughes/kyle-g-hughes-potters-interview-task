import { Box } from "@mui/material";

type HeaderImageProps = {
  alt: string;
  img: string;
};

const HeaderImage = ({ alt, img }: HeaderImageProps) => {
  return (
    <Box
      component="img"
      src={img}
      alt={alt}
      sx={{
        width: "100%",
        height: { xs: 260, sm: 360, md: "auto" },
        objectFit: "cover",
        objectPosition: "center 35%",
        display: "block",
      }}
    />
  );
};

export default HeaderImage;
