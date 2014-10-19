(function() {
	var app = angular.module('store-directives', []);
	app.directive("productDescription", function() {
		return {
			restrict: 'E',
			scope: {
				item: "="
			},
			templateUrl: "product-description.html"
		};
	});
	app.directive("productReviews", function() {
		return {
			restrict: 'E',
			scope: {
				reviewedProduct: "="
			},
			templateUrl: "product-reviews.html"
		};
	});
	app.directive("productSpecs", function() {
		return {
			restrict: "A",
			scope: {
				item: "="
			},
			templateUrl: "product-specs.html"
		};
	});
	app.directive("productTabs", function() {
		return {
			restrict: "E",
			scope: {
				tabbedProduct: "="
			},
			templateUrl: "product-tabs.html",
			controller: function() {
				this.tab = 1;
				this.isSet = function(checkTab) {
					return this.tab === checkTab;
				};
				this.setTab = function(activeTab) {
					this.tab = activeTab || 1;
				};
			},
			controllerAs: "tab"
		};
	});
	app.directive("productGallery", function() {
		return {
			restrict: "E",
			templateUrl: "product-gallery.html",
			controller: function() {
				this.current = 0;
				this.setCurrent = function(imageNumber) {
					this.current = imageNumber || 0;
				};
			},
			controllerAs: "gallery"
		};
	});
})();