import React, { Component } from 'react';
import ClassCounter from'./components/usestate/ClassCounter';
import HookCounter from './components/usestate/HookCounter';
import HookCounterTwo from './components/usestate/HookCounterTwo';
import HookCounterThree from "./components/usestate/HookCounterThree";
import HookCounterFour from "./components/usestate/HookCounterFour";

import Hookcounteref from "./components/useeffect/Hookcounteref";
import Hookcountermouse from"./components/useeffect/Hookcountermouse";
import Hookmousecontainer from "./components/useeffect/Hookmousecontainer"
import Hookinterval from "./components/useeffect/Hookinterval"
import Datafetching from "./components/useeffect/Datafetching"

import Reducercount from './components/usereducer/Reducercount'
import './App.css';






class App extends Component{
render() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}

      {/* <Hookcounteref /> */}
      {/* <Hookcountermouse /> */}
      {/* <Hookmousecontainer /> */}
      {/* <Hookinterval /> */}
      {/* <Datafetching /> */}
      <Reducercount />


    </div>
  );
}
}

export default App;
