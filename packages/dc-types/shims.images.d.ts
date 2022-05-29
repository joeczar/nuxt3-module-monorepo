// declare module "*.svg" {
//   import { VNode } from "vue";

//   // Don't declare this inside global module
//   type Svg = VNode;

//   const content: Svg;
//   export default content;
// }
declare module "*.svg" {
  import Vue, { VueConstructor } from "vue";

  const content: VueConstructor<Vue>;
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.webp" {
  const value: string;
  export default value;
}
