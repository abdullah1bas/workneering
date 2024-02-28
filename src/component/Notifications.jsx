import { NotificationsOutlined } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";

const Notifications = () => {
    return (
        <>
            <Tooltip title="notifications">
            <IconButton color="inherit">
              <Badge
                color="error"
                badgeContent={7}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <NotificationsOutlined />
              </Badge>
            </IconButton>
          </Tooltip>
        </>
    );
}

export default Notifications;
