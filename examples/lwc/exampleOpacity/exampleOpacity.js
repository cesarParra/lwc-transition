import { LightningElement } from "lwc";

export default class ExampleOpacity extends LightningElement {
  isVisible = false;

  handleToggle() {
    this.isVisible = !this.isVisible;
  }
}
