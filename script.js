document.addEventListener('DOMContentLoaded', () => {
    const sceneContainer = document.getElementById('scene-container');
    if (!sceneContainer) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // Sky blue

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.y = 2;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneContainer.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Ground (Green Hills)
    const groundGeometry = new THREE.PlaneGeometry(30, 30, 20, 20);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;

    // Add some hills
    const vertices = ground.geometry.attributes.position;
    for (let i = 0; i < vertices.count; i++) {
        vertices.setZ(i, Math.sin(vertices.getX(i) * 0.5) * 0.5 + Math.cos(vertices.getY(i) * 0.5) * 0.5);
    }
    vertices.needsUpdate = true;
    ground.geometry.computeVertexNormals();
    scene.add(ground);

    // Sun
    const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(-8, 8, -10);
    scene.add(sun);

    // Clouds
    const clouds = [];
    const cloudGeometry = new THREE.SphereGeometry(0.8, 16, 16);
    const cloudMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 5; i++) {
        const cloud = new THREE.Group();
        for (let j = 0; j < 5; j++) {
            const cloudPart = new THREE.Mesh(cloudGeometry, cloudMaterial);
            cloudPart.position.x = (Math.random() - 0.5) * 2;
            cloudPart.position.y = (Math.random() - 0.5) * 0.5;
            cloudPart.position.z = (Math.random() - 0.5) * 1;
            cloud.add(cloudPart);
        }
        cloud.position.x = (Math.random() - 0.5) * 30;
        cloud.position.y = 6 + Math.random() * 2;
        cloud.position.z = -5 - Math.random() * 5;
        clouds.push(cloud);
        scene.add(cloud);
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Animate clouds
        clouds.forEach(cloud => {
            cloud.position.x += 0.01;
            if (cloud.position.x > 15) {
                cloud.position.x = -15;
            }
        });

        // Make the sun pulsate slightly
        const time = Date.now() * 0.002;
        sun.scale.setScalar(Math.sin(time) * 0.05 + 1);

        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
