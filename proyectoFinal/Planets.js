let arregloPlanetas = [];
window.onload = function () {
    document.getElementById('crearPlaneta').onclick = function () {
        var checkedSize = document.querySelector("#planes").value;
        console.log("checkedSize: " + checkedSize);
        var factory = new planetFactory();
        var planeta = factory.createPlanet(checkedSize);
        arregloPlanetas.push(planeta);
        console.log("palnetas=" + arregloPlanetas.length);
        if (document.getElementById('eliminarPlaneta').disabled) {
            document.getElementById('eliminarPlaneta').disabled = false;
        }
        if (document.getElementById('aumentarVelocidad').disabled) {
            document.getElementById('aumentarVelocidad').disabled = false;
        }
        if (document.getElementById('disminuirVelocidad').disabled) {
            document.getElementById('disminuirVelocidad').disabled = false;
        }
    };
    document.getElementById('eliminarPlaneta').onclick = function () {
        var arrayScene = scene.children;
        var ultimo = arrayScene[arrayScene.length - 1];
        if (ultimo instanceof THREE.Mesh) {
            scene.remove(ultimo);
            arregloPlanetas.pop();
        } else {
            document.getElementById('eliminarPlaneta').disabled = true;
            document.getElementById('aumentarVelocidad').disabled = true;
            document.getElementById('disminuirVelocidad').disabled = true;
            document.getElementById('agregarSistema').disabled = false;
        }
    };
    document.getElementById('agregarSistema').onclick = function () {
        agregarSistemaSolar();
        document.getElementById('agregarSistema').disabled = true;
        document.getElementById('eliminarPlaneta').disabled = false;
        document.getElementById('aumentarVelocidad').disabled = false;
        document.getElementById('disminuirVelocidad').disabled = false;
    };
    document.getElementById('aumentarVelocidad').onclick = function () {
        v1 = v1 + 0.02;
        v2 = v2 + 0.02;
        v3 = v3 + 0.02;
        v4 = v4 + 0.02;
        v5 = v5 + 0.02;
        v6 = v6 + 0.02;
        v7 = v7 + 0.02;
        v8 = v8 + 0.02;
        if (document.getElementById('disminuirVelocidad').disabled) {
            document.getElementById('disminuirVelocidad').disabled = false;
        }
    };
    document.getElementById('disminuirVelocidad').onclick = function () {
        v1 = v1 - 0.02;
        v2 = v2 - 0.02;
        v3 = v3 - 0.02;
        v4 = v4 - 0.02;
        v5 = v5 - 0.02;
        v6 = v6 - 0.02;
        v7 = v7 - 0.02;
        v8 = v8 - 0.02;
        if (Math.sign(v1) == "-1" || Math.sign(v2) == "-1" || Math.sign(v3) == "-1" || Math.sign(v4) == "-1" || Math.sign(v5) == "-1" ||
            Math.sign(v6) == "-1" || Math.sign(v7) == "-1" || Math.sign(v8) == "-1") {
            console.log("aqui2");
            document.getElementById('disminuirVelocidad').disabled = true;
        }
    };
}
function generarEstrellas() {
    var starsGeometry = new THREE.BufferGeometry();
    var vertices = [];
    for (var i = 0; i < 10000; i++) {
        vertices.push(new THREE.Vector3(
            THREE.Math.randFloatSpread(3000),
            THREE.Math.randFloatSpread(3000),
            THREE.Math.randFloatSpread(3000))
        );
    }
    starsGeometry.setFromPoints(vertices);
    const materialE = new THREE.PointsMaterial({ color: 0x888888 });
    rain = new THREE.Points(starsGeometry, materialE);
    scene.add(rain);
}

function agregarSistemaSolar() {
    var texture = new THREE.TextureLoader().load('img/TexturaSol.jpg');
    var sol = new THREE.SphereGeometry(4, 50, 50);
    var material = new THREE.MeshBasicMaterial({ map: texture });
    var objSol = new THREE.Mesh(sol, material);
    objSol.name = "Sol";

    var texture1 = new THREE.TextureLoader().load('img/TexturaMercurio.jpg');
    var mercurio = new THREE.SphereGeometry(1, 32, 32);
    var material1 = new THREE.MeshBasicMaterial({ map: texture1 });
    var objMercurio = new THREE.Mesh(mercurio, material1);
    objMercurio.name = "Mercurio";

    var texture2 = new THREE.TextureLoader().load('img/TexturaVenus.jpg');
    var venus = new THREE.SphereGeometry(1.2, 32, 32);
    var material2 = new THREE.MeshBasicMaterial({ map: texture2 });
    var objVenus = new THREE.Mesh(venus, material2);
    objVenus.name = "Venus";

    var texture3 = new THREE.TextureLoader().load('img/TexturaTierra.jpg');
    var tierra = new THREE.SphereGeometry(1.4, 32, 32);
    var material3 = new THREE.MeshBasicMaterial({ map: texture3 });
    var objTierra = new THREE.Mesh(tierra, material3);
    objTierra.name = "Tierra";

    var texture4 = new THREE.TextureLoader().load('img/TexturaMarte.jpg');
    var marte = new THREE.SphereGeometry(1.3, 32, 32);
    var material4 = new THREE.MeshBasicMaterial({ map: texture4 });
    var objMarte = new THREE.Mesh(marte, material4);
    objMarte.name = "Marte";

    var texture5 = new THREE.TextureLoader().load('img/TexturaJupiter.jpg');
    var jupiter = new THREE.SphereGeometry(2.2, 32, 32);
    var material5 = new THREE.MeshBasicMaterial({ map: texture5 });
    var objJupiter = new THREE.Mesh(jupiter, material5);
    objJupiter.name = "Jupiter";

    var texture6 = new THREE.TextureLoader().load('img/TexturaSaturno.jpg');
    var saturno = new THREE.SphereGeometry(1.8, 32, 32);
    var material6 = new THREE.MeshBasicMaterial({ map: texture6 });
    var objSaturno = new THREE.Mesh(saturno, material6);
    objSaturno.name = "Saturno";

    var texture7 = new THREE.TextureLoader().load('img/TexturaUrano.jpg');
    var urano = new THREE.SphereGeometry(1.6, 32, 32);
    var material7 = new THREE.MeshBasicMaterial({ map: texture7 });
    var objUrano = new THREE.Mesh(urano, material7);
    objUrano.name = "Urano";

    var texture8 = new THREE.TextureLoader().load('img/TexturaNeptuno.jpg');
    var neptuno = new THREE.SphereGeometry(1.5, 32, 32);
    var material8 = new THREE.MeshBasicMaterial({ map: texture8 });
    var objNeptuno = new THREE.Mesh(neptuno, material8);
    objNeptuno.name = "Neptuno";

    scene.add(objSol);
    scene.add(objMercurio);
    scene.add(objVenus);
    scene.add(objTierra);
    scene.add(objMarte);
    scene.add(objJupiter);
    scene.add(objSaturno);
    scene.add(objUrano);
    scene.add(objNeptuno);
}