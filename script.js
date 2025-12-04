function volume_sphere(event) {
    event.preventDefault(); // stop form refresh

    let radius = document.getElementById("radius").value;
    let volume = (4/3) * Math.PI * Math.pow(Number(radius), 3);

    let res = document.getElementById("volume");
    res.value = volume.toFixed(4);
}

window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
