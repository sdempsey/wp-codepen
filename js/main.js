(function() {
	'use strict';

	var camera, scene, renderer,
		w, h, aspectRatio,
		fov, nearPlane, farPlane,
		container;	

	function init() {
		//cache height and width
		w = window.innerWidth;
		h = window.innerHeight;

		//camera parameters
		fov = 100;
		aspectRatio = w / h;
		nearPlane = 1;
		farPlane = 2000;

		/* 	
			fieldOfView — Camera frustum vertical field of view.
			aspectRatio — Camera frustum aspect ratio.
			nearPlane — Camera frustum near plane.
			farPlane — Camera frustum far plane.

			- http://threejs.org/docs/#Reference/Cameras/PerspectiveCamera

			In geometry, a frustum (plural: frusta or frustums)
			is the portion of a solid (normally a cone or pyramid)
			that lies between two parallel planes cutting it. - wikipedia.		
		*/			
		container = document.getElementById('three-container');
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(fov, aspectRatio, nearPlane, farPlane);

		if (Modernizr.webgl) {
			//webGL is supported!
			renderer = new THREE.WebGLRenderer(); 
		} else {
			//webGL is not supported!
			renderer = new THREE.CanvasRenderer();
		}
	}

	document.addEventListener('DOMContentLoaded', init);
})();