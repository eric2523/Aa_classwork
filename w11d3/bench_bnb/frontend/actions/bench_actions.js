import * as APIUtil from '../util/bench_api_util'
export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const receiveBenches = (benches) => {
  return {
    type: RECEIVE_BENCHES,
    benches
  }
}

export const fetchBenches = () => {
  return (dispatch) => {
    return APIUtil.fetchBenches()
      .then((benches) => {
        return dispatch(receiveBenches(benches))
      })
  }
}