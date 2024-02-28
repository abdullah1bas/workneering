import { ChatBubbleOutline } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";

const ChatBubble = () => {
    return (
        <>
            <Tooltip title="settings">
            <IconButton color="inherit">
              <Badge
                color="error"
                badgeContent={8}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <ChatBubbleOutline />
              </Badge>
            </IconButton>
          </Tooltip>
        </>
    );
}

export default ChatBubble;
