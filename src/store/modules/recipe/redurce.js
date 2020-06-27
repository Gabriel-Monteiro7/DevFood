import produce from "immer";
const INITIAL_STATE = {
  recipes: [],
  selectedRecipe: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    let { payload } = action;
    switch (action.type) {
      case "@recipe/GET_ALL_REQUEST":
        break;
      case "@recipe/GET_ALL_SUCCESS":
        draft.recipes = payload.recipes;
        break;
      case "@recipe/GET_ONE_REQUEST":
        break;
      case "@recipe/GET_ONE_SUCCESS":
        draft.selectedRecipe = payload.recipe;
        break;
      case "@recipe/ADD_RECIPE_REQUEST":
        break;
      case "@recipe/ADD_RECIPE_SUCCESS":
        draft.recipes.push(payload.recipe);
        break;
      case "@recipe/UPDATE_RECIPE_REQUEST":
        break;
      case "@recipe/UPDATE_RECIPE_SUCCESS":
        draft.recipes = draft.recipes.map((value) => {
          return value.id === payload.recipe.id ? payload.recipe : value;
        });
        break;
      case "@recipe/DELETE_RECIPE_REQUEST":
        break;
      case "@recipe/DELETE_RECIPE_SUCCESS":
        draft.recipes = draft.recipes.filter((value) => {
          return value.id === payload.recipe.id ? false : true;
        });
        break;
      default:
    }
  });
}
