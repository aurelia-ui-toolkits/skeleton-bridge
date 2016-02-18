import { customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('b-navbar-header')
@inject(Element)

export class BNavbarHeader {

    constructor(element) {
      this.element = element;
    }
}
