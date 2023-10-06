import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../actions";

const AddNewFood = () => {
  const dispatch = useDispatch();
  const initialFoodInput = {
    name: "",
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fats: 0
  };
  const [foodInput, setFoodInput] = useState(initialFoodInput);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addFood(foodInput));
        setFoodInput(initialFoodInput);
      }}
      className="form"
    >
      <div>
        <label>Food Name: </label>
        <input
          type="text"
          value={foodInput.name}
          onChange={(e) => setFoodInput({ ...foodInput, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Calories (in cal): </label>
        <input
          type="number"
          value={foodInput.calories}
          onChange={(e) =>
            setFoodInput({ ...foodInput, calories: parseInt(e.target.value) })
          }
          required
        />
      </div>
      <div>
        <label>Proteins (in gm): </label>
        <input
          type="number"
          value={foodInput.protein}
          onChange={(e) =>
            setFoodInput({ ...foodInput, protein: parseInt(e.target.value) })
          }
          required
        />
      </div>
      <div>
        <label>Carbohydrates (in gm): </label>
        <input
          type="number"
          value={foodInput.carbohydrates}
          onChange={(e) =>
            setFoodInput({
              ...foodInput,
              carbohydrates: parseInt(e.target.value)
            })
          }
          required
        />
      </div>
      <div>
        <label>Fats (in gm): </label>
        <input
          type="number"
          value={foodInput.fats}
          onChange={(e) =>
            setFoodInput({ ...foodInput, fats: parseInt(e.target.value) })
          }
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export { AddNewFood };
