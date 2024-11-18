const getSliderColor = (temperature) => {
  if (temperature <= 18) return "blue"; // Cold: Blue
  if (temperature <= 25) return "orange"; // Moderate: Yellow
  return "red"; // Hot: Red
};

export { getSliderColor };
