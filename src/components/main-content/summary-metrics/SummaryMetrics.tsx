import { Box } from "@mui/material";
import { Meteorite } from "../../../shared/meteorite.model";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const SummaryMetrics = ({
  meteorites,
  loading,
}: {
  meteorites: Meteorite[];
  loading: boolean;
}) => {
  let numberOfStrikes = 0;
  let totalMass = 0;

  meteorites.forEach((meteorite) => {
    numberOfStrikes++;
    totalMass += meteorite.mass !== "NaN" ? parseFloat(meteorite.mass) : 0;
  });

  if (loading) {
    return (
      <Box
        style={{
          backgroundColor: "white",
          padding: 2,
          flexGrow: 1,
          width: "100%",
        }}
      >
        <p>loading...</p>
      </Box>
    );
  }

  return (
    <Box
      style={{
        backgroundColor: "white",
        padding: 2,
        flexGrow: 1,
        width: "100%",
      }}
    >
      <p>Total number of strikes: {numberOfStrikes}</p>
      <p>Average mass: {(totalMass / numberOfStrikes).toFixed(2)}</p>
      <PieChart
        data={[
          { name: "name", count: "100" },
          { name: "name2", count: "10" },
          { name: "nam3", count: "70" },
        ]}
      />
      <BarChart
        data={[
          { name: "name", count: "100" },
          { name: "name2", count: "10" },
          { name: "nam3", count: "70" },
        ]}
      />
    </Box>
  );
};

export default SummaryMetrics;
