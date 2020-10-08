import React from 'react'
import BenchIndexItem from './bench_index_item'

class BenchIndex extends React.Component {
  constructor(props){
    super(props)
    this.generateList = this.generateList.bind(this)
  }

  componentDidMount(){
    this.props.fetchBenches()
  }

  generateList() {
    return Object.values(this.props.benches)
      .map((bench) => {
        return <BenchIndexItem key={ bench.id } bench={ bench } />
      })
  }

  render () {
    let list = this.generateList()
    return (
      <div>
        <ul>
          { list }
        </ul>
      </div>
    )   
  }
}

export default BenchIndex;