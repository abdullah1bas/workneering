// @ts-ignore
import myPhoto from "../../public/images/photoInst.jpg";
import { Avatar, Typography, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
const SidebarHeader = ({ open }) => {
  const theme = useTheme();
  return (
    <>
      <Avatar title='user photo'
        alt="Remy Sharp"
        src={myPhoto}
        sx={{
          m: "8px auto",
          width: open ? 88 : 56,
          height: open ? 88 : 56,
          border: "2px solid grey",
          transition: ".3s",
        }}
      />

      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: ".3s" }}
      >
        Abdullah Abazza
      </Typography>
      <Typography
        align="center"
        color={theme.palette.info.main}
        sx={{ fontSize: open ? 15 : 0, transition: ".3s", mb: 1 }}
      >
        Admin
      </Typography>
    </>
  );
};

export default SidebarHeader;
