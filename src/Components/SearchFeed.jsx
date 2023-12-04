import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  console.log("searchTerm", searchTerm);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      console.log(" search API Response:", data);
      setVideos(data.items || []);
    });
  }, [searchTerm]);

  console.log("Videos State:", videos);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for:{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
