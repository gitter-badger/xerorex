var xerorexApp = angular.module('xerorexApp', []);
xerorexApp.controller('navbarCtrl', function($scope){
	$scope.menuItems = [
	{
		title: 'Discover',
		href: '#/Discover'
	},{
		title: 'Products',
		href: '#/Products',
		menuItems: [{
			title: 'Phones',
			href: '#/Products/Phones'
		}, {
			title: 'Televisions',
			href: '#/Products/Televisions'
		}, {
			title: 'Wearables',
			href: '#/Products/Wearables'
		}
		]
	}, {
		title: 'Apps',
		href: '#/Apps'
	}, {
		title: 'Support',
		href: '#/Support'
	}]
});