import { fetchData, exerciseOptions } from "../utils/fetchData";

export const handleSearch = async (e, search) => {
  if (e.key === "Enter") {
    if (search) {
      const excerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchResults = excerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );
      return searchResults;
    }
  }
};
