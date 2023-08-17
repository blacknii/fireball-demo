import { Typography, Stack } from "@mui/material";
import Search from "./search/Search";
import DetailDataDisplay from "./detail-data-display/DetailDataDisplay";
import SummaryMetrics from "./summary-metrics/SummaryMetrics";
import { useMeteoriteData } from "../../hooks/useMeteoriteData";
import { SearchFilter } from "../../shared/searchFilter.model";
import { useState } from "react";

const MainContent = () => {
  const [searchValue, setSearchValue] = useState<SearchFilter | null>(null);
  const data = useMeteoriteData();

  const filteredData =
    !searchValue && data.meteorites
      ? data.meteorites
      : data.meteorites.filter(
          (meteorite) =>
            searchValue !== null &&
            meteorite.name.includes(searchValue.name) &&
            meteorite.recClass.includes(searchValue.composition) &&
            (searchValue.year === "" || searchValue.year === meteorite.year) &&
            (searchValue.range[0] === "" ||
              searchValue.range[0] <= meteorite.mass) &&
            (searchValue.range[1] === "" ||
              searchValue.range[1] >= meteorite.mass)
        );

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
      <Search setSearchValue={setSearchValue} />
      <Stack
        spacing={2}
        direction={{ xs: "column", sm: "column", md: "row" }}
        alignItems="stretch"
        width="100%"
      >
        <DetailDataDisplay meteorites={filteredData} loading={data.loading} />
        <SummaryMetrics meteorites={filteredData} loading={data.loading} />
      </Stack>
    </Stack>
  );
};

export default MainContent;
