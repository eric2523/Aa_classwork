import React from 'react'
import BenchMap from './bench_map'
import BenchIndex from '../benches/bench_index'

const Search = ({ benches, fetchBenches }) => {
  return (
    <div>
      { <BenchMap /> }
      { <BenchIndex benches={benches} fetchBenches={fetchBenches} /> }
    </div>
  )
}

export default Search;