describe('Favorite Food Filter', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function ($injector) {
    $filter = $injector.get('$filter');
  }));

  it('should filter on favorite food correctly', function () {
    var foodList = [{
      name: 'Bob',
      favoriteFood: 'Watermelon'
    }, {
      name: 'John',
      favoriteFood: 'Blueberries'
    }, {
      name: 'Amy',
      favoriteFood: 'Carrots'
    }];

    var results = $filter('favoriteFood')(foodList, 'Watermelon');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Bob');
  });
});