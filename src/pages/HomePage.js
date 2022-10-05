import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ExcerciseCard from "../components/ExerciseCard";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const MainPage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchAllExercises = async () => {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setExercises([...exerciseData]);
    };
    fetchAllExercises();
  }, []);

  return (
    <Grid container columnSpacing={4}>
      {exercises.slice(0, 12).map((exercise) => (
        <Grid
          item
          sx={{ backgroundColor: "#0f5970" }}
          xs={12}
          sm={6}
          md={4}
          key={exercise.id}
        >
          <ExcerciseCard exercise={exercise} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MainPage;
