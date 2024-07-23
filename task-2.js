"use strict";
function calcAverageCalories(days) {
  if (!Array.isArray(days) || days.length === 0) {
    return 0;
  }
  const totalCalories = days.reduce((sum, day) => sum + day.calories, 0);
  const averageCalories = totalCalories / days.length;
  return averageCalories;
}
