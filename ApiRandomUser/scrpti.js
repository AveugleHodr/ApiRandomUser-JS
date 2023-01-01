//Conexion a Api
async function getRandomUser(){
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    console.log(user);
    displayUser(user);
}
//Traer informacion y mostrarla en el front
function displayUser(user){
    const name = document.getElementById('nombre');
    const gender = document.getElementById('genero');
    const email = document.getElementById('correo');
    const phone = document.getElementById('telefono');
    const location = document.getElementById('location');
    const image = document.getElementById('image');

    name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    gender.innerText = `${user.gender}`;
    email.innerText = `${user.email} `;
    phone.innerText= `${user.phone} `;
    location.innerText= `${user.location.country}`;
    image.setAttribute('src', `${user.picture.large}`);
}
//llamar funcion
getRandomUser();

//Listas y añadido a favoritos