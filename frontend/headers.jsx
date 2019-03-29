import React from 'react';

class Headers extends React.Component{
  render(){
    const currentTab = this.props.currentTab;
    const tabs = this.props.tabs.map((tab, index) => {
      const title = tab.title;

      return(
        <li
        key={index}
        onClick={() => this.props.selectTab(index)}>
        {title}
        </li>
      )
    })
    return(
      <div>
        {tabs}
      </div>
    )
  }
}

export default Headers;