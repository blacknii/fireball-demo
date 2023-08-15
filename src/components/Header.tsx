import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{ position: "static" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography component="h1" variant="h5">
          FIREBALL
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
