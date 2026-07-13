import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

// #region interfaces
interface CentredContentProps {
  content: ReactNode;
  sx?: SxProps<Theme>;
}
// #endregion

const CentredContent = ({ content, sx }: CentredContentProps) => {
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
    >
      {content}
    </Box>
  );
};

export default CentredContent;
