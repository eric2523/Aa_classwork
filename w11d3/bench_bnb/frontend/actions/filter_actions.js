import { fetchBenches } from "../util/bench_api_util";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const updateBounds = (bounds) => {
  return ({
    type: UPDATE_BOUNDS,
    bounds
  })
}

export const updateFilter = (value) => {
  return (dispatch, getState) => {
    dispatch(updateBounds(value));
    return fetchBenches(getState().filters.filters)
      .then((data) => {
       return dispatch(data);
      })
  }
}