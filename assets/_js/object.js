var object = document.getElementById('object');

var scene = new THREE.Scene();

// CAMERA

var camera = new THREE.PerspectiveCamera(45, 4 / 3, 0.1, 1000);
camera.position.z = 90;

// RENDERER

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(object.offsetWidth, object.offsetWidth * 3 / 4);
renderer.setClearColor(0xffffff, 0.0);
renderer.setPixelRatio(window.devicePixelRatio);
object.appendChild(renderer.domElement);

// LIGHTS

var lightX = new THREE.DirectionalLight(0xffffff, 0.9);
var lightY = new THREE.DirectionalLight(0xffffff, 0.2);
var lightZ = new THREE.DirectionalLight(0xffffff, 0.5);
var lightW = new THREE.DirectionalLight(0xffffff, 0.5);

lightX.position.set(1, 1, 1).normalize();
lightY.position.set(0.5, 0, -1).normalize();
lightZ.position.set(-1, 0, -0.5).normalize();
lightW.position.set(-1, 0, 1).normalize();

scene.add(lightX);
scene.add(lightY);
scene.add(lightZ);
scene.add(lightW);

// MODEL

var model;

if (mtl && obj) {
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setTexturePath('/assets/img/');
  mtlLoader.setPath('/assets/mtl/');
  mtlLoader.load(mtl, function (materials) {
    materials.preload();
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/assets/obj/');
    objLoader.load(obj, function (object) {
      scene.add(object);
    });
  });
} else if (obj) {
  var objLoader = new THREE.OBJLoader();
  objLoader.setPath('/assets/obj/');
  objLoader.load(obj, function (object) {
    object.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshLambertMaterial({
          color: 0xffffff,
          shading: THREE.SmoothShading,
          side: THREE.DoubleSide
        });
      }
    });
    scene.add(object);
    model = object;
  });
}

// CONTROLS

var controls = new THREE.OrbitControls(camera, renderer.domElement, model);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

// ANIMATION

var animate = function () {
	requestAnimationFrame(animate);
  controls.update();
	renderer.render(scene, camera);
};

animate();
