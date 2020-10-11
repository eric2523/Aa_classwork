import * as APIUtil from '../util/bench_api_util'
export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const receiveBenches = (benches) => {
  return {
    type: RECEIVE_BENCHES,
    benches
  }
}

export const fetchBenches = (filters) => {
  return (dispatch) => {
    return APIUtil.fetchBenches(filters)
      .then((benches) => {
        return dispatch(receiveBenches(benches))
      })
  }
}