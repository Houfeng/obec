import { Component, observable } from "comer";
import { Button, Div, Text } from "comer-dom";

export class Demo extends Component {
  state = observable({ value1: 0, value2: 0 });
  onButtonClick = () => {
    this.state.value1 = 1;
    this.state.value2 = 2;
  };
  build() {
    const { value1, value2 } = this.state;
    return new Div({
      children: [
        new Div({
          children: new Text(`value: ${value1}, value2: ${value2}`),
        }),
        new Button({
          children: new Text("Click me"),
          onClick: this.onButtonClick,
        }),
      ],
    });
  }
}
