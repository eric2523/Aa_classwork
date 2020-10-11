import { connect } from 'react-redux'
import { fetchBenches } from '../../actions/bench_actions'
import Search from './search'
import { updateBounds, updateFilter } from '../../actions/filter_actions'


const mapStateToProps = ({entities: { benches }}) => {
 return ({
  benches
 })
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (filters) => {
      return dispatch(updateFilter(filters));
    },
    updateBounds: (bounds) => {
      return dispatch(updateBounds(bounds))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)