import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';

function Root(){

  const names = [
    "Adi",
    "Sue",
    "Micah",
    "Miso",
    "Kartik",
    "Choi",
    "Andy",
    "Carly",
    "Julian",
    "Josh",
    "Joanna",
    "Nikki"
  ];

  const tabs = [
    {title: "one", content: "first content"},
    {title: "two", content: "second content"},
    {title: "three", content: "third content"}
  ]

  return(
    <div>
      <Clock />
      <Tabs tabs={tabs}/>
      <Weather />
      <Autocomplete names={names}/>
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});