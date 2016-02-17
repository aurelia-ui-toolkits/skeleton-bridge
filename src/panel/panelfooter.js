import { customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('b-panel-footer')
@inject(Element)
export class BPanelFooter {

    constructor(element) {
      this.element = element;
    }
}
