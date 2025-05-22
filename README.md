# LWC Transition Component

A lightweight and reusable Lightning Web Component that provides smooth transition animations for showing/hiding
elements. Inspired by Vue.js and React transition components.

## Features

- Simple show/hide transitions
- Customizable animation classes
- Support for multiple transition types (fade, slide, combined effects)
- Zero dependencies

## Getting Started

1. Copy the `transition` component from the `force-app/main/default/lwc/transition` directory into your Salesforce
   project.
2. Deploy the component to your org or use it in your local development environment.

## Usage

Reference the `transition` component in your LWC template:

```html

<c-transition
  show={isVisible}
  enter="ease-out duration-300"
  enter-from="opacity-0"
  enter-to="opacity-100"
  leave="ease-in duration-300"
  leave-from="opacity-100"
  leave-to="opacity-0">
  <div>Your content here</div>
</c-transition>
```

### Properties

- `show`: Boolean value to control visibility
- `enter`: Base transition classes for enter animation
- `enter-from`: Starting state classes
- `enter-to`: End state classes
- `leave`: Base transition classes for leave animation
- `leave-from`: Starting state classes for leave
- `leave-to`: End state classes for leave
- `container-classes`: Additional classes for the container element

## Examples

### Basic Opacity Transition

```html

<c-transition
  show={isVisible}
  enter="ease-out duration-500"
  enter-from="opacity-0"
  enter-to="opacity-100"
  leave="ease-in duration-500"
  leave-from="opacity-100"
  leave-to="opacity-0">
  <p>Fade in/out content</p>
</c-transition>
```

### Slide Transition

```html

<c-transition
  show={isVisible}
  enter="transform transition ease-in-out duration-200"
  enter-from="translate-x-full"
  enter-to="translate-x-0"
  leave="transform transition ease-in-out duration-200"
  leave-from="translate-x-0"
  leave-to="translate-x-full">
  <p>Slide in/out content</p>
</c-transition>
```

### Combined Effects (Slide and Fade)

```html

<c-transition
  show={isVisible}
  enter="ease-out duration-300"
  enter-from="opacity-0 translate-y-4"
  enter-to="opacity-100 translate-y-0"
  leave="ease-in duration-200"
  leave-from="opacity-100 translate-y-0"
  leave-to="opacity-0 translate-y-4">
  <p>Slide and fade content</p>
</c-transition>
```

## JavaScript Controller Example

```javascript
import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
  isVisible = false;

  handleToggle() {
    this.isVisible = !this.isVisible;
  }
}
```

## Extending

You can extend the component by adding more transition types or customizing the existing ones. To do this, modify the
`transition.css` file to include your custom helper classes with the desired animations. Then feel free to use them in
the `enter-*` and `leave-*` attributes.

## License

MIT License - Feel free to use and modify this component in your projects.
