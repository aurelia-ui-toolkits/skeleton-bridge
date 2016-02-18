import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('b-navbar-toggle')
@inject(Element)
export class BNavbarToggle {

    @bindable bDataTarget = null;

    constructor(element) {
      this.element = element;
    }
}
