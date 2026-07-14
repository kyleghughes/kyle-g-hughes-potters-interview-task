import Box, { type BoxProps } from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

// #region interfaces
interface CentredContentProps {
  content: ReactNode;
  props?: BoxProps & {
    "data-testid"?: string;
  };
  sx?: SxProps<Theme>;
}
// #endregion

const CentredContent = ({ content, props, sx }: CentredContentProps) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        ...sx,
      }}
      {...props}
    >
      {content}
    </Box>
  );
};

export default CentredContent;
