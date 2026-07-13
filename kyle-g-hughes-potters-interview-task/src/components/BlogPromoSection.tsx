import blogImage from "../assets/images/blog-mockup.webp";
import CentredContent from "./layout/CentredContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

const BlogPromoSection = () => {
  // #region hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // #endregion

  // #region sub-components
  const BlogTitle = (): ReactNode => {
    return (
      <>
        <Typography
          sx={{
            color: "#173573",
            fontSize: "30px",
            lineHeight: "39px",
            mb: 1.5,
          }}
        >
          Stay Updated with the Potters Blog
        </Typography>
      </>
    );
  };

  const BlogImage = (): ReactNode => {
    return (
      <>
        <Box
          component="img"
          src={blogImage}
          alt="Potters blog"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </>
    );
  };

  const BlogDescription = (sx?: SxProps<Theme>): ReactNode => {
    return (
      <>
        <Typography
          sx={{
            color: "#212529",
            fontSize: "16px",
            lineHeight: "25px",
            mb: 3,
            ...sx,
          }}
        >
          Pop over to our blog for a cosy catch-up on all things Potters
          Resorts! From tasty tips on our dining experiences to tales of
          adventure around the resort, there’s always something new to read
          about. So, grab a coffee, get comfy, and stay ‘in the know’ with
          resort news and entertainment updates; we love sharing these snippets
          with you between your visits.
        </Typography>
      </>
    );
  };

  const BlogButton = (width: string): ReactNode => {
    return (
      <>
        <Button
          component="a"
          href="https://www.pottersresorts.com/blog/"
          sx={{
            width: width,
          }}
        >
          Explore the Blog
        </Button>
      </>
    );
  };
  // #endregion

  if (isMobile) {
    return (
      <CentredContent
        content={
          <>
            <Box
              sx={{
                px: 4,
              }}
            >
              {BlogTitle()}
            </Box>

            {BlogImage()}

            {BlogDescription({ mt: 3, px: 4 })}

            {BlogButton("100%")}
          </>
        }
        sx={{ px: 2, py: 6 }}
      />
    );
  }
  return (
    <Box
      sx={{
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        mx: "auto",
        py: 6,
        width: "60%",
      }}
    >
      <Box
        sx={{
          flex: 1,
          textAlign: "left",
        }}
      >
        {BlogTitle()}

        {BlogDescription()}

        {BlogButton("75%")}
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {BlogImage()}
      </Box>
    </Box>
  );
};

export default BlogPromoSection;
