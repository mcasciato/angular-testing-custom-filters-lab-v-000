describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all of the vowels from a string', function () {
		var string = "Well what do we have here!?"

		result = $filter('removeAllVowels')(string)

		expect(result).toEqual('Wll wht d w hv hr!?')
	});

});
