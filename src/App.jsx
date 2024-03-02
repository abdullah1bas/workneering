// @ts-nocheck
import { Box, CssBaseline, ThemeProvider, styled } from "@mui/material";
import "./App.css";
import { ColorModeContext, useMode } from "./style/Theme";
import { Outlet } from "react-router-dom";
import React, { useCallback, useState } from "react";
import TopBar from "./component/TopBar";
import SideBar from "./component/SideBar";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  console.log('App Page')
  const [theme, colorMode] = useMode();

  const [open, setOpen] = useState(false);
  document.addEventListener("keyup", (e) => {
    e.key === "Escape" && setOpen(false);
  });
  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  },[open]);

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  },[open]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App" style={{ backgroundColor: "#171717 !important"}}>
          <Box sx={{ display: "flex", minHeight: '94vh'  }}>
            <TopBar {...{ open, handleDrawerOpen }} />

            <SideBar {...{ open, handleDrawerClose, handleDrawerOpen }} />

            <Box component="main" sx={{ flexGrow: 1, p: 3, pb: 0 }}>
              <DrawerHeader />
              <Outlet />
            </Box>
          </Box>
          <Box
            sx={{
              width: open ? "calc(100% + 240px)" : "100%",
              textAlign: "center",
              mt: 1,
              backgroundColor:
                theme.palette.mode == "light" ? "#121212" : "white",
              color: theme.palette.mode == "light" ? "white" : "black",
              py: 1,
              [theme.breakpoints.down("md")]: {
                fontSize: "10px",
              },
            }}
          >
            Copyright © 2024.All right reserved
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default React.memo(App);
