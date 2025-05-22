import { LightningElement } from "lwc";

export default class ExampleTransition extends LightningElement {
  isFadeVisible = false;
  isSlideVisible = false;
  isTransformVisible = false;

  handleToggleFade() {
    this.isFadeVisible = !this.isFadeVisible;
  }

  handleToggleSlide() {
    this.isSlideVisible = !this.isSlideVisible;
  }

  handleToggleTransform() {
    this.isTransformVisible = !this.isTransformVisible;
  }
}
