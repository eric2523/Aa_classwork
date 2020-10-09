import { connect } from 'react-redux'
import { fetchBenches } from '../../actions/bench_actions'
import Search from './search'

const mapStateToProps = ({entities: { benches }}) => {
 return ({
  benches
 })
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBenches: () => {
      return dispatch(fetchBenches());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)