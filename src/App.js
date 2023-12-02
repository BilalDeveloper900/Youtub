import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";

import {
  Navbar,
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Feed,
} from "./Components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ background: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
