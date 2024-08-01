import { Component } from "./Component";
import { Fragment } from "./Fragment";
import { PROVIDER } from "./Symbols";

export abstract class Provider<T> extends Component<{
  value: T;
  children: Component[] | Component;
}> {
  static readonly [PROVIDER] = true;

  build(): Component {
    return new Fragment(this.props.children);
  }

  get value() {
    return this.props.value;
  }
}