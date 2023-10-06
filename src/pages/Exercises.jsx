import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllExercises, deleteExercise } from "../actions";
import { AddNewExercise } from "../components/AddNewExercise";
import { exerciseTypes } from "../constants/fitness-constants";

const Exercises = () => {
  const dispatch = useDispatch();
  const exercises = useSelector(({ exercises }) => exercises);

  useEffect(() => {
    dispatch(getAllExercises());
  }, []);

  return (
    <div className="page">
      <h2>Exercises</h2>
      <div className="page_item">
        {exercises?.map(({ _id, name, duration, calories }) => (
          <div key={_id}>
            <h3>{exerciseTypes[name] ?? name}</h3>
            <p>Duration: {duration} mins</p>
            <p>Calories burnt: {calories} cal</p>
            <button onClick={() => dispatch(deleteExercise(_id))}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div>
        <h2>Add New Exercise</h2>
        <AddNewExercise />
      </div>
    </div>
  );
};

export { Exercises };
