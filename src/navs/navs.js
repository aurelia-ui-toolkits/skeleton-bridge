import { bindable, customElement, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';

@customElement('b-navs')
@inject(Element)
export class BNavs {

     @bindable bJustified = false;
     @bindable bStyle = 'tabs';
     @bindable bStacked = false;

    constructor(element) {
      this.element = element;
    }

    attached() {
      this.fixedAttributeManager = new AttributeManager(this.navsElement);

      this.fixedAttributeManager.addClasses(`nav-${this.bStyle}`);

      if (this.bJustified) {
        this.fixedAttributeManager.addClasses('nav-justified');
      }

      if (this.bStyle === 'pills' && this.bStacked) {
        this.fixedAttributeManager.addClasses('nav-stacked');
      }
    }
}
