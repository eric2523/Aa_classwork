import React from 'react'
import BenchMap from './bench_map'
import BenchIndex from '../benches/bench_index'

const Search = ({ benches, fetchBenches, updateBounds, updateFilter }) => {
  return (
    <div>
      { <BenchMap 
          benches={ benches } 
          updateBounds={updateBounds} 
          updateFilter={ updateFilter }/> }
      { <BenchIndex 
          benches={ benches } 
          updateFilter={ updateFilter } /> }
    </div>
  )
}

export default Search;