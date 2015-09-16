var app = angular.module('harveysInk');

app.directive('hover', function(){
	return {
		scope: {
			toggle: '@',
			untoggle: '@'
		},
		restrict: 'A',
		link: function (scope, element, attrs) {
			// var textColor = 'text-red';
			element.on('mouseover', function (){
				element.addClass(scope.toggle);
				element.removeClass(scope.untoggle);
			})
			element.on('mouseout', function (){
				element.removeClass(scope.toggle);
				element.addClass(scope.untoggle);
			})
		}
	};
});

app.directive('scroll', function ($window) {
    return function (scope, element, attrs) {
        angular.element($window).bind("scroll", function () {
            if (this.pageYOffset >= 420) {
                element.addClass('background-white');
                element.addClass('box-shadow-thin');
                element.removeClass('background-trans-dark');
                element.removeClass('box-shadow-thick');
                element.removeClass('text-large');
            } else {
             	element.addClass('background-trans-dark');
             	element.addClass('box-shadow-thick');
             	element.addClass('text-large');
                element.removeClass('background-white');
                element.removeClass('box-shadow-thin');
            }
        });
    };
});

app.directive('selectActive', function () {
    return {
        scope: {
            item: '=',
            compare: '=',
            apply: '@'
        },
        restring: 'A',
        link: function (scope, element, attrs) {
            scope.$watch('compare', function () {
                if (scope.item == scope.compare) {
                    element.addClass(scope.apply);
                } else {
                    element.removeClass(scope.apply);
                }
            })
        }
    }
})

app.directive('clickClose', function () {
    return {
        scope: {
            showVar: '=',
            elClick: '@'
        },
        restrict: 'A',
        link: function (scope, el, attrs) {
            var clickEl = el.find(scope.elClick);
            clickEl.on('click', function () {
                scope.show = !scope.show;
            })
        }
    }
})