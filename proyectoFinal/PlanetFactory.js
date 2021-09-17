let arregloRadios = [];
function planetFactory() {
    this.createPlanet = function (size) {
        var planetNew;
        if (size === "1") {
            console.log("color: " + "#" + ((1 << 24) * Math.random() | 0).toString(16));
            planetNew = new smallSize(Math.floor(Math.random() * 30) - 10, "#" + ((1 << 24) * Math.random() | 0).toString(16));
        } else if (size === "2") {
            planetNew = new mediumSize(Math.floor(Math.random() * 30) - 15, "#" + ((1 << 24) * Math.random() | 0).toString(16));
        } else if (size === "3") {
            planetNew = new bigSize(Math.floor(Math.random() * 50) - 20, "#" + ((1 << 24) * Math.random() | 0).toString(16));
        } else if (size === "4") {
            planetNew = new giantSize(Math.floor(Math.random() * 50) - 35, "#" + ((1 << 24) * Math.random() | 0).toString(16));
        }
        return planetNew;
    }
    function smallSize(radio, color) {
        console.log("PEQUEÑO: " + radio);
        var planet = new THREE.SphereGeometry(1, 32, 32);
        var material = new THREE.MeshBasicMaterial({ color: color });
        var objPlaneta = new THREE.Mesh(planet, material);
        arregloRadios.push(radio);
        objPlaneta.position.x = radio * Math.cos(a1);
        objPlaneta.position.z = radio * Math.sin(a1);
        //objPlaneta.rotation.x+=0.01
        return objPlaneta;
    }

    function mediumSize(radio, color) {
        console.log("MEDIANO: " + radio);
        var planet = new THREE.SphereGeometry(2, 32, 32);
        var material = new THREE.MeshBasicMaterial({ color: color });
        var objPlaneta = new THREE.Mesh(planet, material);
        arregloRadios.push(radio);
        objPlaneta.position.x = radio * Math.cos(a2);
        objPlaneta.position.z = radio * Math.sin(a2);
        //objPlaneta.rotation.x+=0.01
        return objPlaneta;
    }

    function bigSize(radio, color) {
        console.log("GRANDE: " + radio);
        var planet = new THREE.SphereGeometry(3, 32, 32);
        var material = new THREE.MeshBasicMaterial({ color: color });
        var objPlaneta = new THREE.Mesh(planet, material);
        //var radio = radio;
        arregloRadios.push(radio);
        objPlaneta.position.x=radio*Math.cos(a3);
        objPlaneta.position.z=radio*Math.sin(a3);      
        //objPlaneta.rotation.x+=0.01
        return objPlaneta;
    }

    function giantSize(radio, color) {
        console.log("GIGANTE: " + radio);
        var planet = new THREE.SphereGeometry(4, 32, 32);
        var material = new THREE.MeshBasicMaterial({ color: color });
        var objPlaneta = new THREE.Mesh(planet, material);
        //var radio = radio;
        arregloRadios.push(radio);
        objPlaneta.position.x=radio*Math.cos(a4);
        objPlaneta.position.z=radio*Math.sin(a4);      
        //objPlaneta.rotation.x+=0.01
        return objPlaneta;
    }
}





