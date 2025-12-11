document.addEventListener('DOMContentLoaded', () => {
    const namesContainer = document.querySelector('.names-container');
    if (!namesContainer) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, namesContainer.clientWidth / 100, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(namesContainer.clientWidth, 100);
    namesContainer.innerHTML = ''; // Clear the h1 tags
    namesContainer.appendChild(renderer.domElement);

    // Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // 3D Text
    const loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        const textMaterial = new THREE.MeshPhongMaterial({ color: 0x3498db });
        const names = ["Mateo", "Luis", "Jennifer"];

        names.forEach((name, index) => {
            const textGeometry = new THREE.TextGeometry(name, {
                font: font,
                size: 1.2,
                height: 0.3,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelSegments: 5
            });
            textGeometry.center(); // Center the geometry

            const textMesh = new THREE.Mesh(textGeometry, textMaterial.clone());
            textMesh.position.x = (index - 1) * 5; // Adjust spacing
            scene.add(textMesh);
        });
    },
    undefined,
    function (error) {
        console.error('An error happened during font loading:', error);
        // As a fallback, you could re-add the HTML h1 tags here
    });

    // Animation
    function animate() {
        requestAnimationFrame(animate);

        scene.children.forEach(child => {
            if (child.isMesh) {
                child.rotation.y += 0.01;
                // A more vibrant color change
                child.material.color.setHSL((Date.now() * 0.0005 + child.position.x) % 1, 0.7, 0.6);
            }
        });

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        if (namesContainer.clientWidth > 0) {
            camera.aspect = namesContainer.clientWidth / 100;
            camera.updateProjectionMatrix();
            renderer.setSize(namesContainer.clientWidth, 100);
        }
    });
});
