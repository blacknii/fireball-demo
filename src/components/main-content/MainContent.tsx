import { Typography, Stack, Grid } from "@mui/material";
import Search from "./search/Search";
import DetailDataDisplay from "./detail-data-display/DetailDataDisplay";
import SummaryMetrics from "./summary-metrics/SummaryMetrics";

const MainContent = () => {
  return (
    <Stack
      height="100%"
      margin={{ sm: "0", md: "0 10rem 0 10rem" }}
      flex={1}
      alignItems="center"
      padding={{ xs: 1, sm: 2 }}
      spacing={2}
      sx={{ backgroundColor: "red" }}
    >
      <Typography component="h1" variant="h3">
        Search for Meteorites
      </Typography>
      <Search />
      <Grid container columns={{ xs: 1, sm: 2 }} spacing={2} padding="2">
        <Grid item xs={1}>
          <DetailDataDisplay />
        </Grid>
        <Grid item xs={1}>
          <SummaryMetrics />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default MainContent;
