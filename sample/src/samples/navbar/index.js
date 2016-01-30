import { useView } from 'aurelia-framework';

@useView('shared/showcase.html')
export class Index {
  configureRouter(config, router) {
    config.title = 'Navbar';
    config.map([
      { route: ['', 'default'], moduleId: './default', nav: true, title: 'Default' },
      { route: ['inverse'], moduleId: './inverse', nav: true, title: 'Inverse' },
      { route: ['fixed'], moduleId: './fixed', nav: true, title: 'Fixed' },
      { route: ['static'], moduleId: './static', nav: true, title: 'Static' }
    ]);

    this.router = router;
  }
}
