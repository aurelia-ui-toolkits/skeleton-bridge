import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('b-navbar-collapse')
@inject(Element)

export class BNavbarCollapse {

    @bindable bId = null;

    constructor(element) {
      this.element = element;
    }
}
