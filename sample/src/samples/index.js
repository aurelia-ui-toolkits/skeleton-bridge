import {inject} from 'aurelia-framework';
import {Registry} from 'shared/registry';

@inject(Registry)
export class Index {

  constructor(registry) {
    this.registry = registry;
  }
  configureRouter(config, router) {
    config.title = 'Samples';

    config.map([
      { name: 'default', route: '', redirect: 'click-counter' },
      { name: 'click-counter', route: 'click-counter', moduleId: './click-counter/index', title: 'Click-counter' },
      { name: 'navbar', route: 'navbar', moduleId: './navbar/index', title: 'Navbar' },
      { name: 'navs', route: 'navs', moduleId: './navs/index', title: 'Navs' }
      // { name: 'waves', route: 'waves', moduleId: 'samples/waves/index', title: 'waves' }
    ]);

    this.router = router;
  }
}
