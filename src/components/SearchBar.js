import React, { useState } from "react";
import { TextField } from "@mui/material";
import { handleSearch } from "../utils/searchExercises";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

function SearchBar() {
  const [search, setSearch] = useState([]);
  const [exercises, setExercises] = useState();
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchIcon />
        </Box>
        <TextField
          sx={{
            position: "relative",
            color: "inherit",
            alignItems: "center",
          }}
          placeholder="Search..."
          value={exercises}
          onKeyDown={(e) => {
            if (e.key === "enter") {
              handleSearch(search);
            }
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Box>
    </>
  );
}

export default SearchBar;
