import { Button, Grid } from "@mui/material";
import { useMemo } from "react";

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Options = ({
  question,
  handleAnswer,
  selectedAnswer,
}: {
  question: any;
  handleAnswer: (answe: string, index: number) => void;
  selectedAnswer: number | null;
}) => {
  const allQuestions = useMemo(
    () =>
      shuffleArray([...question.incorrect_answers, question.correct_answer]),
    [question]
  );

  return (
    <Grid container spacing={2}>
      {allQuestions.map((answer: string, index: number) => (
        <Grid item key={index} xs={12} sm={6}>
          <Button
            fullWidth
            variant="contained"
            color={
              selectedAnswer !== null && question.correct_answer === answer
                ? "success"
                : question.correct_answer !== answer && selectedAnswer === index
                ? "error"
                : "primary"
            }
            onClick={() => handleAnswer(answer, index)}
          >
            {answer}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Options;
