import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../actions";

const AddNewGoal = () => {
  const dispatch = useDispatch();
  const initialGoalInput = {
    name: "",
    description: "",
    targetDate: "",
    targetCalories: 0,
    status: "In Progress"
  };
  const [goalInput, setGoalInput] = useState(initialGoalInput);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addGoal(goalInput));
        setGoalInput(initialGoalInput);
      }}
      className="form"
    >
      <div>
        <label>Goal Name:</label>
        <input
          type="text"
          value={goalInput.name}
          onChange={(e) => setGoalInput({ ...goalInput, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Goal Description:</label>
        <input
          type="text"
          value={goalInput.description}
          onChange={(e) =>
            setGoalInput({ ...goalInput, description: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label>Goal Target Date:</label>
        <input
          type="date"
          value={goalInput.targetDate}
          onChange={(e) =>
            setGoalInput({ ...goalInput, targetDate: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label>Target Calories (in cal):</label>
        <input
          type="number"
          value={goalInput.targetCalories}
          onChange={(e) =>
            setGoalInput({ ...goalInput, targetCalories: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label>Goal Status:</label>
        <select
          value={goalInput.status}
          onChange={(e) =>
            setGoalInput({ ...goalInput, status: e.target.value })
          }
          required
        >
          <option value="In Progress">In Progress</option>
          <option value="Achieved">Achieved</option>
          <option value="Abandoned">Abandoned</option>
        </select>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export { AddNewGoal };
