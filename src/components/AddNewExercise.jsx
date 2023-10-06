import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../actions";
import { exerciseTypes } from "../constants/fitness-constants";

const AddNewExercise = () => {
  const dispatch = useDispatch();
  const initialExerciseInput = {
    name: "",
    duration: 0
  };
  const [exerciseInput, setExerciseInput] = useState(initialExerciseInput);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addExercise(exerciseInput));
    setExerciseInput(initialExerciseInput);
  };
  return (
    <form onSubmit={formSubmitHandler} className="form">
      <div>
        <label>Exercise name:</label>
        <select
          value={exerciseInput.name}
          onChange={(e) =>
            setExerciseInput({
              ...exerciseInput,
              name: e.target.value
            })
          }
          required
        >
          {Object.entries(exerciseTypes).map(([key, value]) => (
            <option value={value} key={key}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Duration (in min):</label>
        <input
          type="number"
          value={exerciseInput.duration}
          onChange={(e) =>
            setExerciseInput({
              ...exerciseInput,
              duration: parseInt(e.target.value)
            })
          }
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export { AddNewExercise };
