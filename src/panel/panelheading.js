import { customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('b-panel-heading')
@inject(Element)
export class BPanelHeading {

    constructor(element) {
      this.element = element;
    }
}
