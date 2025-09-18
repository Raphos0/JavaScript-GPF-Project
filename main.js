var createScene = async function () {
    const scene = new BABYLON.Scene(engine);
    scene.debugLayer.show();

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0),scene);

    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    light.intensity = 0.7;

    const sphere1 = BABYLON.MeshBuilder.CreateSphere("sphere1", {diameter: 3, segments: 2}, scene)

    sphere1.position.y = 4;
    sphere1.position.x = 3;

    var sphere2 = BABYLON.MeshBuilder.CreateSphere("sphere2", { diameter: 2, segments: 32 }, scene);

    sphere2.position.y = 1;

    var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

    return scene;
};