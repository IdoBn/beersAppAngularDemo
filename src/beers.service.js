(function() {

	function beersService(http, q, log) {
		var url = 'http://api.openbeerdatabase.com/v1/beers.json';
		this.all = function() {
			var deferred = q.defer()
			http.get(url).success(function(data) {
				log.debug(data);
				deferred.resolve(data);
			}).error(function(data) {
				log.error(data);
				deferred.reject(data);
			});
			return deferred.promise;
		};
	}
		beersService.$inject = ['$http', '$q', '$log'];

	angular.module('beersApp')
		.service('Beers', beersService);
}())