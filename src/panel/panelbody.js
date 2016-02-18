import { customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('b-panel-body')
@inject(Element)
export class BPanelBody {

    constructor(element) {
      this.element = element;
    }
}
