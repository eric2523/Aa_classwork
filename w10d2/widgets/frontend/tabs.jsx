import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
      super(props);
      this.info = props.info;
      this.state = {currentTab: 0};
      this.changeTab = this.changeTab.bind(this)
  }   

  changeTab(e) {
    let li = e.target;
    const currentTab = li.id;
    this.setState({ currentTab });
  }

  render() {
    return (
    <div className="tabs">
      <ul onClick={ this.changeTab }>
          {
            this.info.map((label, idx)=> {
              return (
                <li key={idx} id={idx}>
                  {label.title}
                </li>
              );
            })
          }
      </ul>

      <article>
        {this.info[this.state.currentTab].content}
      </article>
    </div>
    )
  }
}
    
export default Tabs

