import { Typography, Stack } from "@mui/material";
import Search from "./search/Search";
import DetailDataDisplay from "./detail-data-display/DetailDataDisplay";
import SummaryMetrics from "./summary-metrics/SummaryMetrics";

const MainContent = () => {
  return (
    <Stack
      height="100%"
      margin="0 auto 0 auto"
      flex={1}
      alignItems="center"
      padding={{ xs: 1, sm: 2 }}
      spacing={2}
      sx={{ backgroundColor: "#f0f0f0" }}
    >
      <Typography component="h1" variant="h3">
        Search for Meteorites
      </Typography>
      <Search />
      <Stack
        spacing={2}
        direction={{ xs: "column", sm: "column", md: "row" }}
        alignItems="stretch"
        width="100%"
      >
        <DetailDataDisplay />
        <SummaryMetrics />
      </Stack>
    </Stack>
  );
};

export default MainContent;
