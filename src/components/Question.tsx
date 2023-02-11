import { Box, Chip, Grid, Typography } from "@mui/material";

const Question = ({
  question,
  category,
  difficulty,
}: {
  question: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
}) => {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        color="primary.dark"
        fontWeight={500}
        marginBottom={"24px"}
      >
        {question}
      </Typography>
      <Grid
        container
        spacing={2}
        marginBottom={"24px"}
      >
        <Grid item>
          <Chip label={`Category: ${category}`} color="default" />
        </Grid>
        <Grid item>
          <Chip
            label={`Difficulty: ${difficulty}`}
            color={
              difficulty === "easy"
                ? "success"
                : difficulty === "medium"
                ? "warning"
                : "error"
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Question;
