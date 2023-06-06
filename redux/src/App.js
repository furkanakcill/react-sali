import React from 'react';
import {Row} from "reactstrap";
import Counter from "./component/Counter";
import DecreaseCounter from "./component/DecreaseCounter";
import IncreaseCounter from "./component/IncreaseCounter";
import IncreaseByTwoCounter from "./component/IncreaseByTwoCounter";

export default function App() {
  return (
    <div>
        <center>
          <h1>Counter</h1>
        </center>
        <Row>
          <Counter/>
          <IncreaseCounter/>
          <DecreaseCounter/>
          <IncreaseByTwoCounter/>
        </Row>
    </div>
  )
}


