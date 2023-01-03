import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import "../Clock/Clock.css";
import Box from "@mui/material/Box";

const ClockComponent = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ mb: 1, color: "#2196f3" }}>{new Date().toDateString()}</Box>
      <Clock renderNumbers="true" size={250} value={value} />
    </Box>
  );
};

export default ClockComponent;
