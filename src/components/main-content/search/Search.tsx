import { Grid, TextField, Button } from "@mui/material";
import { SearchFilter } from "../../../shared/searchFilter.model";
import { useState } from "react";

interface SearchBarProps {
  setSearchValue: React.Dispatch<React.SetStateAction<SearchFilter | null>>;
}

const Search = ({ setSearchValue }: SearchBarProps) => {
  const [name, setName] = useState("");
  const [composition, setComposition] = useState("");
  const [year, setYear] = useState<number | "">("");
  const [minRange, setMinRange] = useState<number | "">("");
  const [maxRange, setMaxRange] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name && !year && !composition && !minRange && !maxRange) {
      setSearchValue(null);
    } else {
      setSearchValue({
        name: name,
        year: year,
        composition: composition,
        range: [minRange, maxRange],
      });
    }
  };

  const handleClear = () => {
    setSearchValue(null);
    setName("");
    setComposition("");
    setYear("");
    setMinRange("");
    setMaxRange("");
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
              type="number"
              name="year-of-strike"
              label="Year of strike"
              value={year}
              onChange={(e) => {
                setYear(e.target.value ? parseInt(e.target.value) : "");
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
          <Grid item xs={2.5}>
            <TextField
              fullWidth
              type="number"
              name="min-range"
              label="Min range"
              value={minRange}
              onChange={(e) => {
                setMinRange(e.target.value ? parseInt(e.target.value) : "");
              }}
            />
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              fullWidth
              type="number"
              name="max-range"
              label="Max range"
              value={maxRange}
              onChange={(e) => {
                setMaxRange(e.target.value ? parseInt(e.target.value) : "");
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
