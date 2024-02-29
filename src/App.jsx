// @ts-nocheck
import { Box, CssBaseline, ThemeProvider, styled } from "@mui/material";
import "./App.css";
import { ColorModeContext, useMode } from "./style/Theme";
import { Outlet } from "react-router-dom";
import { useState } from "react";
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
  const [theme, colorMode] = useMode();

  const [open, setOpen] = useState(false);
  document.addEventListener("keyup", (e) => {
    e.key === "Escape" && setOpen(false);
  });
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App" style={{backgroundColor: '#171717 !important'}}>
          <Box sx={{ display: "flex" }}>
            <TopBar {...{ open, handleDrawerOpen }} />

            <SideBar {...{ open, handleDrawerClose, handleDrawerOpen }} />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              <Outlet />
            </Box>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
