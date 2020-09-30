import React from 'react'

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.info = props.info;
        this.state = {currentTab: 0};
        this.changeTab = this.changeTab.bind(this)
    }   

    changeTab(e) {
      // event.preventDefault();
      let li = e.target;
      const currentTab = li.id;
      // console.log(li)
      // console.log(currentTab)
      this.setState({ currentTab });
    }

    render() {
        return (
        <div className="tabs">
            <ul onClick={ this.changeTab }>
                {
                  this.info.map((label, idx)=> {
                  return (
                    <li key={idx}>
                      <header>
                        <h1 id={idx}> {label.title} </h1> 
                      </header> 
                    </li> )
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

