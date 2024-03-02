import React, { useContext } from "react";
import { ColorModeContext } from "../style/Theme";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const ModeIcon = () => {
  console.log('ModeIcon Page')
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <div>
      {theme.palette.mode === "light" ? (
        <Tooltip title={'Light Mode'}>
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <LightModeOutlined sx={{ color: "#fff" }} />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title={'Dark Mode'}>
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            <DarkModeOutlined  />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};

export default React.memo(ModeIcon);
