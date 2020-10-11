import React from 'react'
import BenchIndexItem from './bench_index_item'

class BenchIndex extends React.Component {
  constructor(props){
    super(props)
    this.generateList = this.generateList.bind(this)
  }

  // componentDidMount(){
  //   //test bounds => receive Painted Ladies 
  //   let test = {
  //     northEast: { lat: "37.776223", lng: "-122.432599" },
  //     southWest: { lat: "37.776223", lng: "-122.432599" },
  //   };

  //   // this.props.fetchBenches(test)
  //   this.props.updateFilter
  // }

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