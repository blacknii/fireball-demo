import { Box } from "@mui/material";

const DetailDataDisplay = () => {
  return (
    <Box
      style={{
        backgroundColor: "purple",
        padding: 2,
        flexGrow: 1,
        width: "100%",
      }}
      width={{ xs: null, sm: "100%" }}
    >
      <p>Detail Data Display Component</p>
    </Box>
  );
};

export default DetailDataDisplay;
