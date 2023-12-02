import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import Videos from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statictics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  });

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "colum", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
