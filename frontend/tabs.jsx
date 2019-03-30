import React from 'react';
import Headers from './headers';

class Tabs extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentTab : 0,
    }

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num){
    this.setState({
      currentTab: num
    });
  }

  render(){
    const pane = this.props.tabs[this.state.currentTab];
    return(
      <div>
        <h1>Tabs</h1>
        <div>
          <Headers
            currentTab={this.state.currentTab}
            selectTab={this.selectTab}
            tabs={this.props.tabs}>            
          </Headers>
        </div>
        <div>
          {pane.content}
        </div>
      </div>
    )
  }

}

export default Tabs;