import { Box, Button } from "@mui/material";

const NextQuestion = ({
  handleNextQuestion,
}: {
  handleNextQuestion: () => void;
}) => {
  return (
    <Box mt={4}>
      <Button
        fullWidth
        variant="contained"
        color="info"
        onClick={handleNextQuestion}
      >
        Next Question
      </Button>
    </Box>
  );
};

export default NextQuestion;
