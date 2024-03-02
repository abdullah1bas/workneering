// @ts-nocheck
/* eslint-disable react/prop-types */
import { Avatar, Badge, Box, Divider, MenuItem, Stack, Typography, styled, useTheme, } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const MenuClick = ({ handleClose, data, message }) => {
  console.log('MenuClick Page')
  //   const navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
      {data.map((item, index) => {
        return (
          <Box key={index} px={1}>
            <MenuItem onClick={handleClose} sx={{ gap: 1 }}>
              {message ? (
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant={index % 2 == 0 ? "dot" : null}
                >
                  <Avatar {...stringAvatar(item.name)} />
                </StyledBadge>
              ) : (
                <Avatar>
                    {item.icon}
                </Avatar>
              )}
              <Stack direction={"column"} flexGrow={1}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography>{item.name}</Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: theme.palette.text.disabled,
                    }}
                  >
                    {item.timeAgo}
                  </Typography>
                </Stack>
                <Typography
                  sx={{ fontSize: "13px", color: theme.palette.text.disabled }}
                >
                  {item.discretion}
                </Typography>
              </Stack>
            </MenuItem>
            {index != data.length - 1 && <Divider />}
          </Box>
        );
      })}
      <Divider />
      <MenuItem
        onClick={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {message ? "View All Messages" : "View All Notifications"}
      </MenuItem>
    </>
  );
};

export default MenuClick;
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
