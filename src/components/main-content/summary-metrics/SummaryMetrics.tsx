import { Box } from "@mui/material";
import { Meteorite } from "../../../shared/meteorite.model";

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
    console.log({ totalMass });
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
    </Box>
  );
};

export default SummaryMetrics;
