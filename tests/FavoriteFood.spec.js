describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter the favorite food correctly', function(){
		var foods = [
			{name: 'Michael', favoriteFood: 'spaghetti'},
			{name: 'Tony', favoriteFood: 'meatballs'},
			{name: 'Matteo', favoriteFood: 'lasagna'}
		]

		var result = $filter('favoriteFood')(foods, 'lasagna')

		expect(result.length).toBe(1);
		expect(result[0].name).toBe('Matteo')
	});

});
