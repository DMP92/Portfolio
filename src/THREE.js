import * as THREE from 'three';
import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry, textGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { random } from 'gsap/all';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { CubeTextureLoader } from 'three';
import { Scene } from 'three';


// Canvas
const canvas = document.querySelector('.canvas');

/**
 * Options
 */
// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Scene
 */
const scene = new THREE.Scene();

/**
 * Models
 */

// Loaders
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('/draco/');

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

gltfLoader.load(
    "/static/models/micelle.glb",
    (gltf) =>
    {
        // console.log(gltf);

        gltf.scene.scale.set(.05, .05, .05);
        scene.add(gltf.scene);
        camera.lookAt(gltf.scene.position);
    }
)

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const blueMatcapTexture = textureLoader.load('../static/textures/blueMatcap.png');
const whiteMatcapTexture = textureLoader.load('../static/textures/whiteMatcap.png');
const brightMatcapTexture = textureLoader.load('../static/textures/birightMatcap.png');
const purpleMatcapTexture = textureLoader.load('../static/textures/purpleMatcap.png');
const steelWhiteMatcap = textureLoader.load('../static/textures/steelWhiteMatcap.png');

const whiteTexture = new THREE.MeshMatcapMaterial({ matcap: whiteMatcapTexture });
const blueTexture = new THREE.MeshMatcapMaterial({ matcap: blueMatcapTexture });
const brightTexture = new THREE.MeshMatcapMaterial({ matcap: brightMatcapTexture });
const purpleTexture = new THREE.MeshMatcapMaterial({ matcap: purpleMatcapTexture });
const steelWhiteTexture = new THREE.MeshMatcapMaterial({ matcap: steelWhiteMatcap });

/**
 * Camera
 */

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, .1, 100);

camera.position.set(0, 0, 5);
scene.add(camera);

/**
 * Light
 */

// Ambient light
const ambientLight = new THREE.AmbientLight('white', 1);
scene.add(ambientLight);

// Upper-left light
const pointLight = new THREE.PointLight(0x000000, 15, 100);
scene.add(pointLight);
pointLight.position.set(-1, 1, 2);

// Lower-right light
const lowerPointLight = new THREE.PointLight('white', 1.5, 100);
scene.add(lowerPointLight);
lowerPointLight.position.set(2, 0, 2)

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
    canvas: canvas,
});

renderer.setSize( sizes.width, sizes.height );
document.body.append(renderer.domElement);



/**
 * Test shapes
 */

// Material options
const totalShapes = 100;
const materialArray = [blueTexture, purpleTexture, steelWhiteTexture];

// Material positions
let positions = {

};


// Cube
const cubeGeometry = new THREE.BoxGeometry();


// Sphere
const sphereGeometry = new THREE.SphereBufferGeometry();
 
 
 for (let i = 0; i < totalShapes; i++)
 {
    const randomizeCubeTexture = materialArray[Math.floor(Math.random() * 3)];
    let cube = new THREE.Mesh(cubeGeometry, randomizeCubeTexture);
    let sphere = new THREE.Mesh(sphereGeometry, randomizeCubeTexture);
    
    // Shape randomizer
    const shapes = [ cube, sphere ];
    const randomizeShape = shapes[Math.floor(Math.random() * 2)]





    if (randomizeShape === cube) {
        cube.position.x = (Math.random() - 0.5) * 10;    
        cube.position.y = (Math.random() - 0.5) * 10;    
        cube.position.z = (Math.random() - 0.5) * 10;    
        cube.rotation.x = Math.random() * Math.PI;
        cube.rotation.y = Math.random() * Math.PI;
    
        const scales = Math.random() * .5;
        cube.scale.set(scales, scales, scales);
    
        scene.add(cube);
    } else {
        sphere.position.x = (Math.random() - 0.5) * 10;    
        sphere.position.y = (Math.random() - 0.5) * 10;    
        sphere.position.z = (Math.random() - 0.5) * 10;    
        sphere.rotation.x = Math.random() * Math.PI;
        sphere.rotation.y = Math.random() * Math.PI;
    
        const scales = Math.random() * .5;
        sphere.scale.set(scales, scales, scales);
    
        scene.add(sphere);
    }
}

/**
 * Controls
 */
let controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = true;
controls.enableZoom = false;


// Mouse position
let cursor = {}
cursor.x = 0;
cursor.y = 0;

/**
 * Window events
 */

window.addEventListener('mousemove', (event) => 
{
    cursor.x = (event.clientX / window.innerWidth) - 0.5;
    cursor.y = (event.clientY / window.innerHeight) - 0.5;
})

window.addEventListener('resize', () => 
{
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

})

/**
 * Clock
 */
const clock = new THREE.Clock();
let previousTime = 0;

function animate() 
{
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    for (let i = 0; i < scene.children.length; i++)
{
    if(scene.children[i].type === 'Mesh')
    {
        scene.children[i].position.y += Math.sin(elapsedTime + i) / 1550;
        scene.children[i].position.x += Math.cos(elapsedTime + i) / 1550;
        scene.children[i].rotation.x += 0.0015;
        scene.children[i].rotation.y += 0.0015;
        // scene.children[i].position.x += Math.cos(elapsedTime / 100) / 10;
    }
}
    requestAnimationFrame(animate);

    // Animate Camera
    const paralaxX = cursor.x * 0.9;
    const paralaxY = cursor.y * 0.9;

    renderer.render(scene, camera);
}

animate();

