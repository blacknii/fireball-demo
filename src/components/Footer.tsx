import { AppBar, Toolbar, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      component="footer"
      sx={{ position: "static", alignItems: "center" }}
    >
      <Toolbar>
        <Typography component="div">
          Fireball{" "}
          <Link href="#" color="primary.contrastText">
            github
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
