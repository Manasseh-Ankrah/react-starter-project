import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import ListProductsPage from "./ListProductsPage";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function CategoriesPage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  function HTMLDiamond({ className, color }) {
    return (
      <div
        className={className}
        style={{
          transform: "scale(0.6, 0.75) rotate(45deg)",
          background: color,
        }}
      />
    );
  }

  function SVGStar({ className, color }) {
    return (
      <svg viewBox='-7.423 -7.423 14.846 14.846'>
        <path
          className={className}
          d='M0,-7.528L1.69,-2.326L7.16,-2.326L2.735,0.889L4.425,6.09L0,2.875L-4.425,6.09L-2.735,0.889L-7.16,-2.326L-1.69,-2.326Z'
          fill={color}
        />
      </svg>
    );
  }

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Categories
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
        <Divider />
        <List>
          {["Dashboard", "Categories", "Products", "Orders"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                {/* {text === "Dashboard" &&( )} */}
                <ListItemButton
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <GridViewIcon />
                    ) : (
                      <ShoppingBasketIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component='main'
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography sx={{ marginBottom: 2 }}>
          <Grid container spacing={2}></Grid>
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          <Grid size={12}>
            <Typography variant='h5' component='h5'>
              View All Categories
            </Typography>
            <ListProductsPage />
          </Grid>
        </Typography>
      </Box>
    </Box>
  );
}
