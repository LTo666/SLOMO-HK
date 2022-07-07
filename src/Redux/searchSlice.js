import { createSlice } from "@reduxjs/toolkit"

export const searchSlice = createSlice({
  name: "search",
  initialState: { searchCriteria: "", filterCriteria: [], searchHistory: [] },
  reducers: {
    changeSearchCriteria: (state, action) => {
      state.searchCriteria = action.payload
      state.searchHistory = state.searchHistory.concat([action.payload])
    },
    changeFilterCriteria: (state, action) => {
      if (state.filterCriteria.includes(action.payload) === true) {
        let newCriteria = state.filterCriteria
        newCriteria.splice(state.filterCriteria.indexOf(action.payload), 1)
        state.filterCriteria = [...newCriteria]
      } else {
        state.filterCriteria = state.filterCriteria.concat([action.payload])
      }
    },
  },
})

export const { changeSearchCriteria, changeFilterCriteria } = searchSlice.actions

export default searchSlice.reducer
