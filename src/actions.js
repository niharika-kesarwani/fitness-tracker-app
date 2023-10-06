import axios from "axios";
import { fitnessConstants } from "./constants/fitness-constants";

const {
  BASE_URL,
  GET_ALL_EXERCISES,
  GET_ALL_FOODS,
  GET_ALL_GOALS,
  ADD_EXERCISE,
  ADD_FOOD,
  ADD_GOAL,
  DELETE_EXERCISE,
  DELETE_FOOD,
  DELETE_GOAL
} = fitnessConstants;

const getAllExercises = () => async (dispatch) => {
  try {
    const {
      status,
      data: { exercises }
    } = await axios.get(`${BASE_URL}/exercises`);
    if (status === 201) {
      dispatch({ type: GET_ALL_EXERCISES, payload: exercises });
    }
  } catch (error) {
    console.log("Error fetching all exercises:", error);
  }
};

const getAllFoods = () => async (dispatch) => {
  try {
    const {
      status,
      data: { foods }
    } = await axios.get(`${BASE_URL}/food`);
    if (status === 201) {
      dispatch({ type: GET_ALL_FOODS, payload: foods });
    }
  } catch (error) {
    console.log("Error fetching all foods:", error);
  }
};

const getAllGoals = () => async (dispatch) => {
  try {
    const {
      status,
      data: { goals }
    } = await axios.get(`${BASE_URL}/goals`);
    if (status === 201) {
      dispatch({ type: GET_ALL_GOALS, payload: goals });
    }
  } catch (error) {
    console.log("Error fetching all goals:", error);
  }
};

const addExercise = (toAddExercise) => async (dispatch) => {
  try {
    const {
      status,
      data: { exercise }
    } = await axios({
      method: "POST",
      url: `${BASE_URL}/exercises`,
      data: toAddExercise
    });
    if (status === 201) {
      dispatch({ type: ADD_EXERCISE, payload: exercise });
    }
  } catch (error) {
    console.log("Error while adding exercise", error);
  }
};

const addFood = (toAddFood) => async (dispatch) => {
  try {
    const {
      status,
      data: { food }
    } = await axios({
      method: "POST",
      url: `${BASE_URL}/food`,
      data: toAddFood
    });
    if (status === 201) {
      dispatch({ type: ADD_FOOD, payload: food });
    }
  } catch (error) {
    console.log("Error while adding food", error);
  }
};

const addGoal = (toAddGoal) => async (dispatch) => {
  try {
    console.log(toAddGoal);
    const {
      status,
      data: { goal }
    } = await axios({
      method: "POST",
      url: `${BASE_URL}/goals`,
      data: toAddGoal
    });
    if (status === 201) {
      dispatch({ type: ADD_GOAL, payload: goal });
    }
  } catch (error) {
    console.log("Error while adding goal", error);
  }
};

const deleteExercise = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/exercises/${id}`);
    dispatch({ type: DELETE_EXERCISE, payload: id });
  } catch (error) {
    console.log("Error while deleting exercise", error);
  }
};

const deleteFood = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/food/${id}`);
    dispatch({ type: DELETE_FOOD, payload: id });
  } catch (error) {
    console.log("Error while deleting food", error);
  }
};

const deleteGoal = (id) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/goals/${id}`);
    dispatch({ type: DELETE_GOAL, payload: id });
  } catch (error) {
    console.log("Error while deleting goal", error);
  }
};

export {
  getAllExercises,
  getAllFoods,
  getAllGoals,
  addExercise,
  addFood,
  addGoal,
  deleteExercise,
  deleteFood,
  deleteGoal
};
