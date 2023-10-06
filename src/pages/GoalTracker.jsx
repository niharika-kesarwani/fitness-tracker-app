import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGoal, getAllGoals } from "../actions";
import { AddNewGoal } from "../components/AddNewGoal";

const GoalTracker = () => {
  const dispatch = useDispatch();
  const goals = useSelector(({ goals }) => goals);

  useEffect(() => {
    dispatch(getAllGoals());
  }, []);

  const convertToDate = (date) =>
    new Date(date).toLocaleDateString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });

  return (
    <div className="page">
      <h2>Goal Tracker</h2>
      <div className="page_item">
        {goals?.map(
          ({ _id, name, description, targetDate, targetCalories, status }) => (
            <div key={_id}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>Target date: {convertToDate(targetDate)}</p>
              <p>Target calories: {targetCalories} cal</p>
              <p>Status: {status}</p>
              <button onClick={() => dispatch(deleteGoal(_id))}>Delete</button>
            </div>
          )
        )}
      </div>
      <div>
        <h2>Add New Goal</h2>
        <AddNewGoal />
      </div>
    </div>
  );
};

export { GoalTracker };
