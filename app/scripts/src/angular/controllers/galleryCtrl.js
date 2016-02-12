myApp.controller('galleryCtrl', function($scope) {

	$scope.images = [
		{thumbnail: 'images/thumbnails/thumbnail-1.jpg', gallery: 'images/gallery-popup/gallery-1.jpg', description: 'House 1'}, 
		{thumbnail: 'images/thumbnails/thumbnail-2.jpg', gallery: 'images/gallery-popup/gallery-2.jpg', description: 'House 2'}, 
		{thumbnail: 'images/thumbnails/thumbnail-3.jpg', gallery: 'images/gallery-popup/gallery-3.jpg', description: 'House 3'}, 
		{thumbnail: 'images/thumbnails/thumbnail-4.jpg', gallery: 'images/gallery-popup/gallery-4.jpg', description: 'House 4'}, 
		{thumbnail: 'images/thumbnails/thumbnail-5.jpg', gallery: 'images/gallery-popup/gallery-5.jpg', description: 'House 5'}, 
		{thumbnail: 'images/thumbnails/thumbnail-6.jpg', gallery: 'images/gallery-popup/gallery-6.jpg', description: 'House 6'}, 
		{thumbnail: 'images/thumbnails/thumbnail-7.jpg', gallery: 'images/gallery-popup/gallery-7.jpg', description: 'House 7'}, 
		{thumbnail: 'images/thumbnails/thumbnail-8.jpg', gallery: 'images/gallery-popup/gallery-8.jpg', description: 'House 8'}
	];

	$scope.image_column = 'three';

	$scope.current = 0;

	$scope.setCurrent = function($index) {
		$scope.current = $index;
		$scope.galleryDisplay = !$scope.galleryDisplay;
	}

	$scope.galleryDisplay = true;

	$scope.close = function() {
		$scope.galleryDisplay = !$scope.galleryDisplay;
	}



	$scope.prev = function() {

		if($scope.current == 0) {
			$scope.current = 0;
		} else {
			$scope.current--;
		}

		console.log($scope.current);
	}

	$scope.next = function() {
		if($scope.current == $scope.images.length -1) {
			$scope.current == $scope.images.length -1;
		} else {
			$scope.current++;
		}
	}

	$scope.galleryNavCtrl = function() {
		 $scope.myKey = event.keyCode;
		 if(event.keyCode == 27) {
		 	$scope.galleryDisplay = true;
		 	console.log('working');
		 } else if(event.keyCode == 37) {
		 	if($scope.current == 0) {
				$scope.current = 0;
			} else {
				$scope.current--;
			}

			console.log($scope.current);
		 } else {
		 	if($scope.current == $scope.images.length -1) {
			$scope.current == $scope.images.length -1;
			} else {
				$scope.current++;
			}
		 }
		 console.log(event.keyCode);
	}
});