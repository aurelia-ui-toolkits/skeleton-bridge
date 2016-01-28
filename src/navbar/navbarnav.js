import { bindable, customElement, inject } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';

@customElement('b-navbar-nav')
@inject(Element)
export class BNavbarNav {

   @bindable position = null;

    constructor(element) {
      this.element = element;
    }

    attached() {
      this.fixedAttributeManager = new AttributeManager(this.navBarNavElem);

      if (this.position) {
        this.fixedAttributeManager.addClasses(`navbar-${this.position}`);
      }
    }
}
