//   url: 'https://randomuser.me/api/',
lleerUrl();
function lleerUrl(){
    let dataJson
    fetch('https://randomuser.me/api/')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => leovariables(json.results))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
    
    //console.log(dataJson);
}
function leovariables(variable){
    let datos = variable['0'];
    document.body.style.backgroundColor = colorDeFondo();
    document.getElementById('table').style.backgroundColor = colorDeFondo();
    nya = datos.name.title +" "+  datos.name.first+ " " + datos.name.last
    document.getElementById('name').innerHTML = nya ;
    document.getElementById('imagen').src = datos.picture.medium;
    document.getElementById('edad').innerHTML = datos.dob.age
    let date = new Date(datos.dob.date);
    document.getElementById('Fnac').innerHTML  = date.getDate() +"-"+ date.getMonth()+"-"+ date.getFullYear();
    document.getElementById('cel').innerHTML = datos.cell;
    document.getElementById('tel').innerHTML = datos.phone;
    document.getElementById('pais').innerHTML = datos.location.country;
    document.getElementById('prov').innerHTML = datos.location.state +" - " +datos.location.city;
    document.getElementById('direc').innerHTML = datos.location.street.name +" "+datos.location.street.number;

}
function colorDeFondo(){
    const colores = ["aqua", "azure", "aquamarine", "burlywood", "cyan", "lightblue","lightgreen"];
    return  colores[Math.floor(Math.random() * colores.length)];
}