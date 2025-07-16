import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Recipe {
  id: number;
  title: string;
  image: string;
}

export interface RecipesState {
  data: Recipe[]; // or Recipe[] | null if it can be null
}

const initialState: RecipesState = {
  data: [],
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setRecipes } = recipesSlice.actions;
export default recipesSlice.reducer;
