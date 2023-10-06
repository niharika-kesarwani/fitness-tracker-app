import { fitnessConstants } from "../constants/fitness-constants";

const {
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

const fitnessReducer = (state = initialFitness, { type, payload }) => {
  switch (type) {
    case GET_ALL_EXERCISES:
      return { ...state, exercises: payload };
    case GET_ALL_FOODS:
      return { ...state, foods: payload };
    case GET_ALL_GOALS:
      return { ...state, goals: payload };
    case ADD_EXERCISE:
      return { ...state, exercises: [...state.exercises, payload] };
    case ADD_FOOD:
      return { ...state, foods: [...state.foods, payload] };
    case ADD_GOAL:
      return { ...state, goals: [...state.goals, payload] };
    case DELETE_EXERCISE:
      return {
        ...state,
        exercises: state.exercises.filter(({ _id }) => _id !== payload)
      };
    case DELETE_FOOD:
      return {
        ...state,
        foods: state.foods.filter(({ _id }) => _id !== payload)
      };
    case DELETE_GOAL:
      return {
        ...state,
        goals: state.goals.filter(({ _id }) => _id !== payload)
      };
    default:
      return state;
  }
};

const initialFitness = {
  exercises: [],
  foods: [],
  goals: []
};

export { initialFitness, fitnessReducer };
