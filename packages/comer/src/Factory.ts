import { type Component, type ComponentType } from "./Component";

/**
 * Create a factory function that can generate component instances
 * through component classes
 * @function
 * @param ComponentClass Component class
 * @returns Factory function
 */
export function factory<T extends ComponentType<any, any>>(ComponentClass: T) {
  return (...args: ConstructorParameters<T>): Component<T> => {
    return new ComponentClass(...args);
  };
}
