import React from 'react';
import Clock from "./clock";
import Tabs from "./tabs";

const Root = function () {
  return(
    <div>
      <Clock />
          <Tabs info={ [{"title": "one", "content": "I am the first"}, 
                       {"title": "two", "content": "I am the second"}, 
                       {"title": "three", "content": "I am the third"}] } />
    </div>
  )
}

export default Root;