import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      paddingY="24px"
      justifyContent={"center"}
    >
      <CircularProgress size={"60px"} color="primary" />
    </Box>
  );
};

export default Loading;
