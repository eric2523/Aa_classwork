import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
      super(props);
      this.info = props.info;
      this.state = {currentTab: 0};
      this.isTabOpen = this.isTabOpen.bind(this)
  }   

  changeTab(e) {
    let currentTab = parseInt(e.target.attributes.idx.value)
    this.setState({ currentTab });
  }

  isTabOpen(idx){
    return this.state.currentTab === idx
  }

  generateTabLabels() {
    // const isTabOpen = this.isTabOpen
    let that = this;

    return this.info.map((label, idx) => {
      let li = <li key={idx} idx={idx}>{label.title}</li>
      if (that.isTabOpen(idx)){
        li = (
          <li key={idx} idx={idx} className="border-bottom">
            {label.title}
          </li>
        );
      } 

      return (li);
    });
  }

  render() {
    return (
    <div className="tabs">
      <ul onClick={ (e) => this.changeTab(e) }>
          { this.generateTabLabels() }
      </ul>

      <article>
        { this.info[this.state.currentTab].content }
      </article>
    </div>
    )
  }
}
    
export default Tabs

