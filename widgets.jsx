import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Autocomplete from './frontend/autocomplete';

function Root(){

  const names=

  const tabs = [
    {title: "one", content: "first content"},
    {title: "two", content: "second content"},
    {title: "three", content: "third content"}
  ]

  return(
    <div>
      <Clock />
      <Tabs tabs={tabs}/>
      <Autocomplete />
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});