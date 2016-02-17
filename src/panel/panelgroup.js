import { bindable, customElement } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';

@customElement('b-panel-group')
@inject(Element)
export class BPanelGroup {

    @bindable bId = null;

    constructor(element) {
      this.element = element;
    }
}
