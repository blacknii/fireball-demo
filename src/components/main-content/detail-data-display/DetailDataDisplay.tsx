import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Skeleton,
} from "@mui/material";
import { Meteorite } from "../../../shared/meteorite.model";

const DetailDataDisplay = ({
  meteorites,
  loading,
}: {
  meteorites: Meteorite[];
  loading: boolean;
}) => {
  const rowsSkeletons = Array(10)
    .fill(0)
    .map((_, i) => (
      <TableRow key={i}>
        <TableCell>
          <Skeleton sx={{ fontSize: "1rem" }} />
        </TableCell>
        <TableCell>
          <Skeleton sx={{ fontSize: "1rem", width: 120 }} />
        </TableCell>
        <TableCell>
          <Skeleton sx={{ fontSize: "1rem", width: 120 }} />
        </TableCell>
        <TableCell>
          <Skeleton sx={{ fontSize: "1rem" }} />
        </TableCell>
      </TableRow>
    ));

  const rows = meteorites.map((meteorite: Meteorite) => (
    <TableRow key={meteorite.id}>
      <TableCell>{meteorite.id}</TableCell>
      <TableCell>{meteorite.name}</TableCell>
      <TableCell>{parseFloat(meteorite.mass).toFixed(2)}</TableCell>
      <TableCell>{meteorite.fall}</TableCell>
    </TableRow>
  ));

  return (
    <Box
      style={{
        backgroundColor: "white",
        padding: 2,
        flexGrow: 1,
        width: "100%",
      }}
      width={{ xs: null, sm: "100%" }}
    >
      <TableContainer component={Paper} sx={{ maxHeight: "40rem" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Mass</TableCell>
              <TableCell>Fall</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{loading ? rowsSkeletons : rows}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DetailDataDisplay;
