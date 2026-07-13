import { Box } from "@mui/material";

// #region interface
type HeaderImageProps = {
  alt: string;
  img: string;
};
// #endregion

const HeaderImage = ({ alt, img }: HeaderImageProps) => {
  return (
    <Box
      alt={alt}
      component="img"
      src={img}
      sx={{
        display: "block",
        height: { xs: 200, sm: "auto" },
        objectFit: "cover",
        objectPosition: "center 35%",

        width: "100%",
      }}
    />
  );
};

export default HeaderImage;
