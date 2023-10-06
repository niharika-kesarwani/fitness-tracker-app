import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExercises, getAllFoods, getAllGoals } from "../actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { exercises, foods, goals } = useSelector(
    ({ exercises, foods, goals }) => ({
      exercises,
      foods,
      goals
    })
  );

  const totalCaloriesBurned = exercises.reduce(
    (sum, { calories }) => sum + calories,
    0
  );

  const totalCaloriesConsumed = foods.reduce(
    (sum, { calories }) => sum + calories,
    0
  );

  const totalCaloriesGoal = goals.reduce(
    (sum, { targetCalories }) => sum + targetCalories,
    0
  );

  const remainingCaloriesToGoal = totalCaloriesGoal - totalCaloriesBurned;

  useEffect(() => {
    dispatch(getAllExercises());
    dispatch(getAllFoods());
    dispatch(getAllGoals());
  }, []);

  return (
    <div className="page">
      <h2>Dashboard</h2>
      <div>Total Calories burnt: {totalCaloriesBurned}</div>
      <div>Total Calories consumed: {totalCaloriesConsumed}</div>
      <div>Total Calories goal: {totalCaloriesGoal}</div>
      <div>Remaining Calories to goal: {remainingCaloriesToGoal}</div>
    </div>
  );
};

export { Dashboard };
