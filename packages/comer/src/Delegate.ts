import { Component, type ComponentType } from "./Component";

/** @internal */
export class Delegate extends Component<any> {
  constructor(
    props: any,
    private Target: ComponentType<any, any>,
  ) {
    super(props);
  }
  build(): Component {
    return new this.Target(this.props);
  }
}

/**
 * Declare a component as a delegate to reduce the cost of re rendering.
 * 
 * Tips: When a delegated component is inherited, it contains the properties  
 * and methods of the target component. 
 * But when creating an instance through new, it is an instance of Delegate
 * 
 * @param Target Target component
 * @returns Delegate component
 */
export function delegate<T extends ComponentType<any, any>>(Target: T): T {
  const Super = Target as ComponentType<any, any>;
  class Wrapper extends Super {
    constructor(props: ConstructorParameters<T>[0]) {
      if (!new.target || new.target === Wrapper) {
        return new Delegate(props, Target);
      }
      super(props);
    }
  }
  Object.defineProperty(Wrapper, "name", { value: Target.name });
  return Wrapper as T;
}
