export class Samples {
  configureRouter(config, router) {
    config.map([
      { name: 'click-counter', route: 'click-counter', moduleId: 'samples/click-counter/index', title: 'click-counter' },
      { name: 'navbar', route: 'navbar', moduleId: 'samples/navbar/index', title: 'navbar' },
      { name: 'navs', route: 'navs', moduleId: 'samples/navs/index', title: 'navs' }
      // { name: 'waves', route: 'waves', moduleId: 'samples/waves/index', title: 'waves' }
    ]);
    this.router = router;
  }
}
