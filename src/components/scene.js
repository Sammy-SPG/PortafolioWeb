import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import StyleScene from "../styles/Scene.module.css"


export default function Scene({ x, y, scale ,view }) {
    const mountRef = useRef(null);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 30);
    const renderer = new THREE.WebGL1Renderer({ alpha: true, powerPreference: 'high-performance', precision: 'lowp', animation: true });
    const clock = new THREE.Clock();
    let currentRef, orbitControls, mixers = [];

    useEffect(() => {
        currentRef = mountRef.current;
        window.addEventListener('resize', handleResize);
        createScene();
        initRenderer(currentRef);
        animate();
        currentRef.appendChild(renderer.domElement);
        return () => {
            window.removeEventListener('resize', handleResize);
            currentRef.removeChild(renderer.domElement);
            orbitControls.dispose();
            for (let i = scene.children.length - 1; i >= 0; i--) {
                let obj = scene.children[i];
                scene.remove(obj);
            }
        }
    }, []);

    const handleResize = () => {
        const currentRef = mountRef.current;
        const { clientWidth: width, clientHeight: height } = currentRef;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    const createScene = () => {
        try {
            const ambientLight = new THREE.AmbientLight(0xeeeeee, 1);
            const pointLight = new THREE.PointLight(0xffffff, 1);

            camera.position.set(0, 0, 10);
            scene.add(ambientLight);
            scene.add(pointLight);
            scene.add(camera);

            importModel();
            initOrbit();
        } catch (error) {
            console.log(error);
        }
    }

    const initRenderer = (currentRef) => {
        const { clientWidth: width, clientHeight: height } = currentRef;
        renderer.setSize(width, height);
    }

    const importModel = () => {

        const loadingManager = new THREE.LoadingManager(onload => { }, (itemURL, itemsToLoad, itemsLoaded) => {
            if (itemsToLoad / itemsLoaded * 100 === 100) {
                view(true);
            }
        }, onerror => { });

        const gltfLoader = new GLTFLoader(loadingManager);
        try {
            gltfLoader.load('./model/wall-eanimated/scene.gltf', (model) => {
                try {
                    model.scene.rotateY(0.2);
                    model.scene.scale.set(scale, scale, scale);
                    model.scene.position.set(x, y, 0);
                    scene.add(model.scene);
                    camera.lookAt(model.scene.position);

                    const mixer = new THREE.AnimationMixer(model.scene);
                    const action = mixer.clipAction(model.animations[0]);

                    action.play();
                    mixers.push(mixer);
                } catch (error) {
                    console.log(error);
                }
            }, (progreess) => {
                // console.log('Loading model');
                console.log('Progress');
            }, (err) => {
                console.log('Error al cargar el modelo');
            });
        } catch (error) {
            console.log(error);
        }
    }

    const animate = () => {
        requestAnimationFrame(animate);
        let mixerUpdateDelta = clock.getDelta();

        for (let i = 0; i < mixers.length; i++) {
            mixers[i].update(mixerUpdateDelta);
        }
        orbitControls.update();
        renderer.render(scene, camera);
    }

    const initOrbit = () => {
        orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;
    }

    return (
        <div className={StyleScene.container3d} ref={mountRef}>

        </div>
    )
}