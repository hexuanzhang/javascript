(function() {
	var supportsOrientation = (typeof window.orientation == 'number' && typeof window.onorientationchange == 'object'),
		nBody = document.body;

	var updateOrientation = function() {
		if (supportsOrientation) {
			updateOrientation = function() {
				var orientation = window.orientation;

				switch (orientation) {
					case 90:
					case -90:
						orientation = 'landscape';
						break;
					default:
						orientation = 'portrait';
				}

				nBody.setAttribute('class', orientation);
			}
		} else {
			updateOrientation = function() {
				var orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';

				nBody.setAttribute('class', orientation);
			}
		}

		updateOrientation();
	}
	var init = function() {
		updateOrientation();

		if (supportsOrientation) {
			window.addEventListener('orientationchange', updateOrientation, false);
		} else {
			setInterval(updateOrientation, 5000);
		}

	}
	window.addEventListener('DOMContentLoaded', init, false);
})();