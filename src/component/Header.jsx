/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from "@mui/material";

const Header = ({title , subTitle}) => {
  console.log('Header Page')
  const theme = useTheme();
  return (
    <Box mb={ 4}>
      <Typography
        sx={{
          color: theme.palette.info.light,
          fontWeight: "bold",
        }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
};

export default Header;
