'use strict';

define('super-rentals/tests/acceptance/list-rentals-test', ['qunit', 'super-rentals/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  var StubMapsService = Ember.Service.extend({
    getMapElement: function getMapElement() {
      return document.createElement('div');
    }
  });

  (0, _moduleForAcceptance.default)('Acceptance | list rentals', {
    beforeEach: function beforeEach() {
      this.application.register('service:stubMaps', StubMapsService);
      this.application.inject('component:location-map', 'maps', 'service:stubMaps');
    }
  });

  (0, _qunit.test)('should show rentals as the home page', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(currentURL(), '/rentals', 'should redirect automatically');
    });
  });

  (0, _qunit.test)('should link to information about the company', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
      assert.equal(currentURL(), '/about', 'should navigate to about');
    });
  });

  (0, _qunit.test)('should link to contact information', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(function () {
      assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });
  });

  (0, _qunit.test)('should list available rentals', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(find('.listing').length, 3, 'should see 3 listings');
    });
  });

  (0, _qunit.test)('should filter the list of rentals by city', function (assert) {
    visit('/');
    fillIn('.list-filter input', 'Seattle');
    keyEvent('.list-filter input', 'keyup', 69);
    andThen(function () {
      assert.equal(find('.listing').length, 1, 'should show 1 listing');
      assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should show 1 listing');
    });
  });

  (0, _qunit.test)('should show details for a selected rental', function (assert) {
    visit('/');
    click('a:contains("Grand Old Mansion")');
    andThen(function () {
      assert.equal(currentURL(), '/rentals/grand-old-mansion', 'should navigate to show route');
      assert.equal(find('.show-listing h2').text(), "Grand Old Mansion", 'should list rental title');
      assert.equal(find('.description').length, 1, 'should list a description of the property');
    });
  });
});
define('super-rentals/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/list-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/list-filter.js should pass ESLint\n\n');
  });

  QUnit.test('components/location-map.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/location-map.js should pass ESLint\n\n');
  });

  QUnit.test('components/rental-listing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/rental-listing.js should pass ESLint\n\n');
  });

  QUnit.test('components/show-errors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/show-errors.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/rentals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/rentals.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/rentals/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/rentals/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/rentals/new-rental.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/rentals/new-rental.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/rental-property-type.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/rental-property-type.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/id-generator.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/id-generator.js should pass ESLint\n\n');
  });

  QUnit.test('models/rental.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/rental.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });

  QUnit.test('routes/access-denied.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/access-denied.js should pass ESLint\n\n');
  });

  QUnit.test('routes/authenticated.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/authenticated.js should pass ESLint\n\n');
  });

  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/page-404.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/page-404.js should pass ESLint\n\n');
  });

  QUnit.test('routes/rentals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals.js should pass ESLint\n\n');
  });

  QUnit.test('routes/rentals/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/rentals/new-rental.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals/new-rental.js should pass ESLint\n\n');
  });

  QUnit.test('routes/rentals/show.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals/show.js should pass ESLint\n\n');
  });

  QUnit.test('services/deffered-transition.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/deffered-transition.js should pass ESLint\n\n');
  });

  QUnit.test('services/maps.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/maps.js should pass ESLint\n\n');
  });

  QUnit.test('services/session.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/session.js should pass ESLint\n\n10:16 - \'Cookies\' is not defined. (no-undef)\n17:14 - \'Promise\' is not defined. (no-undef)\n32:6 - \'Cookies\' is not defined. (no-undef)\n47:3 - \'Cookies\' is not defined. (no-undef)');
  });

  QUnit.test('utils/google-maps.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/google-maps.js should pass ESLint\n\n');
  });
});
define('super-rentals/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
  }
});
define('super-rentals/tests/helpers/ember-basic-dropdown', ['exports', 'ember-basic-dropdown/test-support/helpers', 'ember-native-dom-helpers'], function (exports, _helpers, _emberNativeDomHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.nativeClick = exports.fireKeydown = exports.tapTrigger = exports.clickTrigger = exports.nativeTap = undefined;
  Object.defineProperty(exports, 'nativeTap', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTap;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'tapTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.tapTrigger;
    }
  });
  Object.defineProperty(exports, 'fireKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.fireKeydown;
    }
  });
  exports.default = _helpers.default;
  var nativeClick = exports.nativeClick = _emberNativeDomHelpers.click;
});
define('super-rentals/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  Object.defineProperty(exports, 'findContains', {
    enumerable: true,
    get: function () {
      return _helpers.findContains;
    }
  });
  Object.defineProperty(exports, 'nativeMouseDown', {
    enumerable: true,
    get: function () {
      return _helpers.nativeMouseDown;
    }
  });
  Object.defineProperty(exports, 'nativeMouseUp', {
    enumerable: true,
    get: function () {
      return _helpers.nativeMouseUp;
    }
  });
  Object.defineProperty(exports, 'triggerKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.triggerKeydown;
    }
  });
  Object.defineProperty(exports, 'typeInSearch', {
    enumerable: true,
    get: function () {
      return _helpers.typeInSearch;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'nativeTouch', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTouch;
    }
  });
  Object.defineProperty(exports, 'touchTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.touchTrigger;
    }
  });
  Object.defineProperty(exports, 'selectChoose', {
    enumerable: true,
    get: function () {
      return _helpers.selectChoose;
    }
  });
  exports.default = _helpers.default;
});
define('super-rentals/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'super-rentals/tests/helpers/start-app', 'super-rentals/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('super-rentals/tests/helpers/resolver', ['exports', 'super-rentals/resolver', 'super-rentals/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('super-rentals/tests/helpers/start-app', ['exports', 'super-rentals/app', 'super-rentals/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('super-rentals/tests/integration/components/list-filter-test', ['ember-qunit', 'ember-test-helpers/wait'], function (_emberQunit, _wait) {
  'use strict';

  var RSVP = Ember.RSVP;


  var ITEMS = [{ city: 'San Francisco' }, { city: 'Portland' }, { city: 'Seattle' }];
  var FILTERED_ITEMS = [{ city: 'San Francisco' }];

  (0, _emberQunit.moduleForComponent)('list-filter', 'Integration | Component | list filter', {
    integration: true
  });

  (0, _emberQunit.test)('should initially load all listings', function (assert) {
    var _this = this;

    // we want our actions to return promises,
    // since they are potentially fetching data asynchronously
    this.on('filterByCity', function (val) {
      if (val === '') {
        return RSVP.resolve(ITEMS);
      } else {
        return RSVP.resolve(FILTERED_ITEMS);
      }
    });

    // with an integration test,
    // you can set up and use your component in the same ay your app will use it.
    this.render(Ember.HTMLBars.template({
      "id": "IMagkPVQ",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"list-filter\"],null,[[\"filter\"],[[33,[\"action\"],[[28,[null]],\"filterByCity\"],null]]],{\"statements\":[[0,\"      \"],[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"results\"]]],null,{\"statements\":[[0,\"          \"],[11,\"li\",[]],[15,\"class\",\"city\"],[13],[0,\"\\n            \"],[1,[28,[\"item\",\"city\"]],false],[0,\"\\n          \"],[14],[0,\"\\n\"]],\"locals\":[\"item\"]},null],[0,\"      \"],[14],[0,\"\\n\"]],\"locals\":[\"results\"]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    // The keyup event here should invoke an action that will cause the list
    // to be filtered
    this.$('.list-filter input').val('San').keyup();

    return (0, _wait.default)().then(function () {
      assert.equal(_this.$('.city').length, 1);
      assert.equal(_this.$('.city').first().text().trim(), 'San Francisco');
    });
  });
});
define('super-rentals/tests/integration/components/location-map-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  var StubMapsService = Ember.Service.extend({
    getMapElement: function getMapElement(location) {
      this.set('calledWithLocation', location);
      // We create a div here to simulate our maps service,
      // which will create and then cache the map element
      return document.createElement('div');
    }
  });

  (0, _emberQunit.moduleForComponent)('locaion-map', 'Integration | Component | locaion map', {
    integration: true,
    beforeEach: function beforeEach() {
      this.register('service:maps', StubMapsService);
      this.inject.service('maps', { as: 'mapsService' });
    }
  });

  (0, _emberQunit.test)('should append map element to container element', function (assert) {
    this.set('myLocation', 'New York');
    this.render(Ember.HTMLBars.template({
      "id": "/ef8//0Z",
      "block": "{\"statements\":[[1,[33,[\"location-map\"],null,[[\"location\"],[[28,[\"myLocation\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));
    assert.equal(this.$('.map-container').children().length, 1, 'the map element should be put on screen');
    assert.equal(this.get('mapsService.calledWithLocation'), 'New York', 'a map of New York should be requested');
  });
});
define('super-rentals/tests/integration/components/rental-listing-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  var rental = Ember.Object.create({
    image: 'fake.png',
    title: 'test-title',
    owner: 'test-owner',
    propertyType: 'test-type',
    city: 'test-city',
    bedrooms: 3
  });

  (0, _emberQunit.moduleForComponent)('rental-listing', 'Integration | Component | rental listing', {
    integration: true
  });

  (0, _emberQunit.test)('should display rental details', function (assert) {
    this.set('rentalObj', rental);
    this.render(Ember.HTMLBars.template({
      "id": "Pq6lVKeN",
      "block": "{\"statements\":[[1,[33,[\"rental-listing\"],null,[[\"rental\"],[[28,[\"rentalObj\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));
    assert.equal(this.$('.listing h3').text(), 'test-title', 'Title: test-title');
    assert.equal(this.$('.listing .owner').text().trim(), 'Owner: test-owner', 'Owner: test-owner');
  });

  (0, _emberQunit.test)('should toggle wide class on click', function (assert) {
    this.set('rentalObj', rental);
    this.render(Ember.HTMLBars.template({
      "id": "Pq6lVKeN",
      "block": "{\"statements\":[[1,[33,[\"rental-listing\"],null,[[\"rental\"],[[28,[\"rentalObj\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));
    assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
    this.$('.image').click();
    assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
    this.$('.image').click();
    assert.equal(this.$('.image.wide').length, 0, 'rendered small again');
  });
});
define('super-rentals/tests/integration/components/show-errors-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('show-errors', 'Integration | Component | show errors', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Ipwdri3w",
      "block": "{\"statements\":[[1,[26,[\"show-errors\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "3mAeaFK+",
      "block": "{\"statements\":[[0,\"\\n\"],[6,[\"show-errors\"],null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"locals\":[]},null],[0,\"  \"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('super-rentals/tests/integration/helpers/rental-property-type-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('rental-property-type', 'helper:rental-property-type', {
    integration: true
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it renders', function (assert) {
    this.set('inputValue', '1234');

    this.render(Ember.HTMLBars.template({
      "id": "V2ihQaNp",
      "block": "{\"statements\":[[1,[33,[\"rental-property-type\"],[[28,[\"inputValue\"]]],null],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'Standalone');
  });
});
define('super-rentals/tests/test-helper', ['super-rentals/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('super-rentals/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/list-rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/list-rentals-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/list-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-filter-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/location-map-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/location-map-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/rental-listing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/rental-listing-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/show-errors-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/show-errors-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/rental-property-type-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/rental-property-type-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/rentals-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/rentals/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/rentals/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/rentals/new-rental-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/rentals/new-rental-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/mixins/id-generator-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/id-generator-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/rental-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/rental-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/access-denied-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/access-denied-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/page-404-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/page-404-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/rentals-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/rentals/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/rentals/new-rental-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals/new-rental-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/rentals/show-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals/show-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/deffered-transition-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/deffered-transition-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/maps-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/maps-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/session-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/session-test.js should pass ESLint\n\n');
  });
});
define('super-rentals/tests/unit/adapters/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('super-rentals/tests/unit/controllers/application-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('super-rentals/tests/unit/controllers/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:login', 'Unit | Controller | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('super-rentals/tests/unit/controllers/rentals-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:rentals', 'Unit | Controller | rentals', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('super-rentals/tests/unit/controllers/rentals/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:rentals/index', 'Unit | Controller | rentals/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('super-rentals/tests/unit/controllers/rentals/new-rental-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:rentals/new-rental', 'Unit | Controller | rentals/new rental', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('super-rentals/tests/unit/mixins/id-generator-test', ['super-rentals/mixins/id-generator', 'qunit'], function (_idGenerator, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Mixin | id generator');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var IdGeneratorObject = Ember.Object.extend(_idGenerator.default);
    var subject = IdGeneratorObject.create();
    assert.ok(subject);
  });
});
define('super-rentals/tests/unit/models/rental-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('rental', 'Unit | Model |  rental', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('super-rentals/tests/unit/models/user-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('super-rentals/tests/unit/routes/about-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/access-denied-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:access-denied', 'Unit | Route | access denied', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/contact-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/login-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/page-404-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:page-404', 'Unit | Route | page 404', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/rentals-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:rentals', 'Unit | Route | rentals', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/rentals/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:rentals/index', 'Unit | Route | rentals/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/rentals/new-rental-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:rentals/new-rental', 'Unit | Route | rentals/new rental', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/rentals/show-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:rentals/show', 'Unit | Route | rentals/show', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/services/deffered-transition-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:deffered-transition', 'Unit | Service | deffered transition', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('super-rentals/tests/unit/services/maps-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  var DUMMY_ELEMENT = {};

  var MapUtilStub = Ember.Object.extend({
    createMap: function createMap(element, location) {
      this.assert.ok(element, 'createMap called with element');
      this.assert.ok(location, 'createMap called with location');
      return DUMMY_ELEMENT;
    }
  });

  (0, _emberQunit.moduleFor)('service:maps', 'Unit | Service | maps');

  (0, _emberQunit.test)('should create a new map if one isnt cached for location', function (assert) {
    assert.expect(4);
    var stubMapUtil = MapUtilStub.create({ assert: assert });
    var mapService = this.subject({ mapUtil: stubMapUtil });
    var element = mapService.getMapElement('San Francisco');
    assert.ok(element, 'element exists');
    assert.equal(element.className, 'map', 'element has class name of map');
  });

  (0, _emberQunit.test)('should use existing map if one is cached for location', function (assert) {
    assert.expect(1);
    var stubCachedMaps = Ember.Object.create({
      sanFrancisco: DUMMY_ELEMENT
    });
    var mapService = this.subject({ cachedMaps: stubCachedMaps });
    var element = mapService.getMapElement('San Francisco');
    assert.equal(element, DUMMY_ELEMENT, 'element fetched from cache');
  });
});
define('super-rentals/tests/unit/services/session-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:session', 'Unit | Service | session', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
require('super-rentals/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
