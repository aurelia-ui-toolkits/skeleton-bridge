import { bindable, customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('b-navbar-nav')
@inject(Element)
export class BNavbarNav {

   @bindable position = null;

    constructor(element) {
      this.element = element;
      this.fixedAttributeManager = new AttributeManager(this.element);
    }

    attached() {
      this.fixedAttributeManager.addClasses('nav');
      this.fixedAttributeManager.addClasses('navbar-nav');

      if (this.position) {
        this.fixedAttributeManager.addClasses(`navbar-${this.position}`);
      }
    }
}
