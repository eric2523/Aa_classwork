import React from 'react'

class BenchIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <li>
        { this.props.bench.description }
      </li>
    )
  }
}

export default BenchIndexItem;