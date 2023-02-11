import { useState, useEffect } from "react";
import axios from "axios";

import { Alert, Box, Container } from "@mui/material";

import Question from "./components/Question";
import Options from "./components/Options";
import NextQuestion from "./components/NextQuestion";
import Loading from "./components/Loading";
import Header from "./components/Header";

import "./App.css";

interface Question {
  category: string;
  correct_answer: string;
  difficulty: "easy" | "medium" | "hard";
  incorrect_answers: string[];
  question: string;
}

const defaultQuestion: Question = {
  category: "",
  correct_answer: "",
  difficulty: "easy",
  incorrect_answers: [],
  question: "",
};

const API_URL = "https://opentdb.com/api.php?amount=1";

const App = () => {
  const [question, setQuestion] = useState<Question>(defaultQuestion);
  const [score, setScore] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setQuestion(response.data.results[0]);
      setLoading(false);
    } catch (error: any) {
      console.error(error, "NETWORK_ERROR");
      setError(error.message);
    }
  };

  const handleAnswer = (answer: string, index: number) => {
    if (answer === question.correct_answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(index);
    setTotalQuestions((prev) => prev + 1);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    fetchQuestion();
  };

  return (
    <Container maxWidth="md" className="container">
      <Header score={score} total={totalQuestions} />
      {error ? (
        <Alert severity="error">{error}</Alert>
      ) : loading ? (
        <Loading />
      ) : question ? (
        <Box bgcolor={"#fff"} padding={"32px"} borderRadius={"8px"}>
          <Question
            question={question.question}
            difficulty={question.difficulty}
            category={question.category}
          />
          <Options
            question={question}
            handleAnswer={handleAnswer}
            selectedAnswer={selectedAnswer}
          />
        </Box>
      ) : (
        <Alert severity="warning">Sorry, but there is no question</Alert>
      )}
      <NextQuestion handleNextQuestion={handleNextQuestion} />
    </Container>
  );
};

export default App;
