export function getAllRequest(token){
    return {
        type:"@recipe/GET_ALL_REQUEST",
        payload:{token}
    }

}
export function getAllSuccess(recipes){
    return {
        type:"@recipe/GET_ALL_SUCCESS",
        payload:{recipes}
    }
}
export function getOneRequest(token,id){
    return {
        type:"@recipe/GET_ONE_REQUEST",
        payload:{token,id}
    }

}
export function getOneSuccess(recipe){
    return {
        type:"@recipe/GET_ONE_SUCCESS",
        payload:{recipe}
    }
}
export function getMyRecipesRequest(token,id){
    return {
        type:"@recipe/GET_MY_RECIPES_REQUEST",
        payload:{token,id}
    }

}
export function getMyRecipesSuccess(recipes){
    return {
        type:"@recipe/GET_MY_RECIPES_SUCCESS",
        payload:{recipes}
    }
}
export function addRecipeRequest(token,recipe){
    return {
        type:"@recipe/ADD_RECIPE_REQUEST",
        payload:{token,recipe}
    }

}
export function addRecipeSuccess(recipe){
    return {
        type:"@recipe/ADD_RECIPE_SUCCESS",
        payload:{recipe}
    }
}
export function updateRecipeRequest(token,recipe,id){
    return {
        type:"@recipe/UPDATE_RECIPE_REQUEST",
        payload:{token,recipe,id}
    }

}
export function updateRecipeSuccess(recipe){
    return {
        type:"@recipe/UPDATE_RECIPE_SUCCESS",
        payload:{recipe}
    }
}
export function deleteRecipeRequest(token,recipe){
    return {
        type:"@recipe/DELETE_RECIPE_REQUEST",
        payload:{token,recipe}
    }

}
export function deleteRecipeSuccess(recipe){
    return {
        type:"@recipe/DELETE_RECIPE_SUCCESS",
        payload:{recipe}
    }
}
