import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';

@customAttribute('b-collapse')
@inject(Element)
export class BCollapse {

    constructor(element) {
      this.element = element;
      this.fixedAttributeManager = new AttributeManager(this.element);
    }

    attached() {
      this.fixedAttributeManager.addAttributes({'data-toggle': 'collapse'});
    }
}
