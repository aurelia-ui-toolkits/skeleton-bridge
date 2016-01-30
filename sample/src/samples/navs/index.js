import { useView } from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Navs';
    config.map([
      { route: ['', 'default'], moduleId: './default', nav: true, title: 'Default' },
      { route: ['justified'], moduleId: './justified', nav: true, title: 'Justified' },
      { route: ['verticalPills'], moduleId: './verticalPills', nav: true, title: 'Vertical Pills' },
      { route: ['toggableDynamic'], moduleId: './toggableDynamic', nav: true, title: 'Toggable/Dynamic' }
    ]);

    this.router = router;
  }
}
