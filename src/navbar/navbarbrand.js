import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('b-navbar-brand')
@inject(Element)
export class BNavbarBrand {

    @bindable bHref = null;

    constructor(element) {
      this.element = element;
    }
}
