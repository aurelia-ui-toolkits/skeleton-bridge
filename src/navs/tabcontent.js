import { customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('b-tab-content')
@inject(Element)
export class BTabContent {

    constructor(element) {
      this.element = element;
    }
}
