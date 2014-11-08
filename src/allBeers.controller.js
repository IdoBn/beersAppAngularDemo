(function(){

	function AllBeersCtrl(Beers) {
		var _this = this;
		Beers.all().then(function(data) {
			_this.beers = data.beers;
		}, function(errorData) {
			_this.errors = errorData;
		})
	}
		AllBeersCtrl.$inject = ['Beers'];

	angular.module('beersApp')
		.controller('allBeersCtrl', AllBeersCtrl);
}())