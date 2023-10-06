import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoods, deleteFood } from "../actions";
import { AddNewFood } from "../components/AddNewFood";

const Food = () => {
  const dispatch = useDispatch();
  const foods = useSelector(({ foods }) => foods);

  useEffect(() => {
    dispatch(getAllFoods());
  }, [dispatch]);

  return (
    <div className="page">
      <h2>Food</h2>
      <div className="page_item">
        {foods?.map(({ _id, name, calories, protein, carbohydrates, fats }) => (
          <div key={_id}>
            <h3>{name}</h3>
            <p>Calories: {calories} cal</p>
            <p>Proteins: {protein} gm</p>
            <p>Carbohydrates: {carbohydrates} gm</p>
            <p>Fats: {fats} gm</p>
            <button onClick={() => dispatch(deleteFood(_id))}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Add New Food</h2>
        <AddNewFood />
      </div>
    </div>
  );
};

export { Food };
