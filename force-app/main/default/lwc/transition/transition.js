import { LightningElement, api } from "lwc";

export default class Transition extends LightningElement {
  _show = false;
  @api enter = "";
  @api enterFrom = "";
  @api enterTo = "";
  @api leave = "";
  @api leaveFrom = "";
  @api leaveTo = "";
  @api containerClasses = "";
  rendered = false;

  @api
  get show() {
    return this._show;
  }

  set show(value) {
    if (value) {
      // If true, show immediately, otherwise it will be hidden
      // once the transition ends
      this._show = true;
    }

    this.updateTransition(value);
  }

  get allContainerClasses() {
    return `transition-root ${this.containerClasses}`;
  }

  renderedCallback() {
    this.renderResolver();
    if (!this.rendered) {
      this.rendered = true;
      this.updateTransition(this._show);

      const renderedEvent = new CustomEvent("rendered");
      this.dispatchEvent(renderedEvent);
    }
  }

  getTransitionDuration() {
    // extracts the duration from the leave class, if it received a "duration-" class
    const leaveClasses = this.leave.split(" ");
    const durationClass = leaveClasses.find(cls => cls.startsWith("duration-"));
    if (durationClass) {
      const duration = parseInt(durationClass.split("-")[1], 10);
      return duration ?? 0;
    }

    return 0;
  }

  @api async updateTransition(show) {
    await this.waitForRender;
    const element = this.template.querySelector(".transition-root");
    if (!element) {
      console.log("no element");
      return;
    }
    if (show) {
      console.log("show");
      element.classList.remove(...this.leave.split(" "), ...this.leaveFrom.split(" "), ...this.leaveTo.split(" "));
      element.classList.add(...this.enter.split(" "), ...this.enterFrom.split(" "));
      // Force reflow for transition
      void element.offsetWidth;
      element.classList.remove(...this.enterFrom.split(" "));
      element.classList.add(...this.enterTo.split(" "));
    } else {
      element.classList.remove(...this.enter.split(" "), ...this.enterFrom.split(" "), ...this.enterTo.split(" "));
      element.classList.add(...this.leave.split(" "), ...this.leaveFrom.split(" "));
      // Force reflow for transition
      void element.offsetWidth;
      element.classList.remove(...this.leaveFrom.split(" "));
      element.classList.add(...this.leaveTo.split(" "));
      // Wait for the transition to finish before calling callback
      const duration = this.getTransitionDuration();
      setTimeout(() => {
        this._show = false;
      }, duration);
    }
  }

  waitForRender;
  renderResolver;
  constructor() {
    super();
    this.waitForRender = new Promise((resolve) => {
      this.renderResolver = resolve;
    });
  }
}
