import { Grid, TextField, Button } from "@mui/material";
import { SearchFilter } from "../../../shared/searchFilter.model";
import { useState } from "react";

interface SearchBarProps {
  setSearchValue: React.Dispatch<React.SetStateAction<SearchFilter | null>>;
}

const Search = ({ setSearchValue }: SearchBarProps) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [composition, setComposition] = useState("");
  const [range, setRange] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name && !year && !composition && !range) {
      setSearchValue(null);
    } else {
      setSearchValue({
        name: name,
        year: year,
        composition: composition,
        range: range,
      });
    }
  };

  const handleClear = () => {
    setSearchValue(null);
    setName("");
    setYear("");
    setComposition("");
    setRange("");
  };

  return (
    <div style={{ backgroundColor: "white", padding: 2 }}>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Grid container spacing={2} padding={2} columns={12}>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="year-of-strike"
              label="Year of strike"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              style={{ height: "100%" }}
            >
              SEARCH
            </Button>
          </Grid>

          <Grid item xs={5}>
            <TextField
              fullWidth
              name="meteorite-composition"
              label="Meteorite composition"
              value={composition}
              onChange={(e) => {
                setComposition(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              name="mass-range"
              label="Mass range"
              value={range}
              onChange={(e) => {
                setRange(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              onClick={handleClear}
              variant="contained"
              color="secondary"
              style={{ height: "100%" }}
            >
              CLEAR
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Search;
