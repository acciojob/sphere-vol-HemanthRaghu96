function volume_sphere() {
    //Write your code here
	let radius=document.getElementById("radius").value
  let volume=4/3*(3.14)*Number(radius)**3
  let res=document.getElementById("volume")
  res.value=volume.toFixed(4)
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
