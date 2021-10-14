// 'use strict'

// let MyCity = {
//     Nombre: 'Vienna',
//  	Description: 'Capital of Austria',
//  	Pais: 'Austria',
//  	urlImagen: 'https://www.wien.info/resource/image/290578/3x2/832/561/a91e087927a65f46f9f779797068f401/Je/40367-graben-einkaufen-shopping-altstadt-einkaufsstrassen.jpg',
// 	coordenadas: {
//  		latitud: 48.208354,
//  		longitud: 16.372504, 
//     }
// }

// const firstDiv = document.createElement('div');
// firstDiv.classList.add('card__container');
// const card = document.querySelector('.card__container');
// document.body.appendChild(firstDiv);

// const cityImg = document.createElement('img');
// cityImg.classList.add('img__background');
// cityImg.src='https://www.wien.info/resource/image/290578/3x2/832/561/a91e087927a65f46f9f779797068f401/Je/40367-graben-einkaufen-shopping-altstadt-einkaufsstrassen.jpg';
// document.querySelector('.card__container').appendChild(cityImg);

// const cityName = document.createElement('h3');
// cityName.classList.add('city__name');
// cityName.textContent ='Vienna';
// document.querySelector('.card__container').appendChild(cityName);


// const cityDescription = document.createElement('p');
// cityDescription.classList.add('city__description');
// cityDescription.textContent ='Capital of Austria';
// document.querySelector('.card__container').appendChild(cityDescription);

// const cityCountry = document.createElement('p');
// cityCountry.classList.add('city__country');
// cityCountry.textContent ='Österreich';
// document.querySelector('.card__container').appendChild(cityCountry);

// const listContainer = document.querySelector('.ul__container');

// const coordinates = document.createElement('ul');
// coordinates.classList.add('ul__container');
// coordinates.textContent ='Coordinates';
// document.querySelector('.card__container').appendChild(coordinates);

// const latituteCoordinate = document.createElement('li');
// latituteCoordinate.classList.add('li__item');
// latituteCoordinate.textContent ='latitude: 48.208354';
// document.querySelector('.ul__container').appendChild(latituteCoordinate);

// const longitudeCoordinate = document.createElement('li');
// longitudeCoordinate.classList.add('li__item');
// longitudeCoordinate.textContent ='longitude: 16.16.372504';
// document.querySelector('.ul__container').appendChild(longitudeCoordinate);


// 5- Generar una función que dado una ciudad, devuelva el elemento del DOM de la card para poder añadirlo al DOM de la página
let myCityTwo = {
    name: 'Oulu',
 	description: 'Capital of Northern Scandinavia',
 	country: 'Finland',
 	urlImage: 'https://www.turismofinlandia.es/wp-content/uploads/2018/02/oulu-finlandia-escandinavia-1024x768.jpg',
	coordinates: {
 		latitude: 65.01236,
 		longitude: 25.46816, 
    }
}

let myCity = {
    name: 'Vienna',
	description: 'Capital of Austria',
	country: 'Austria',
 	urlImage: 'https://www.wien.info/resource/image/290578/3x2/832/561/a91e087927a65f46f9f779797068f401/Je/40367-graben-einkaufen-shopping-altstadt-einkaufsstrassen.jpg',
	coordinates: {
		latitude: 48.208354,
		longitude:  16.372504, 
    }
}
let myCityArray = [myCity,myCityTwo];

function cityCard (obj) {

	for(let i=0; i<obj.length;i++){

const firstDiv = document.createElement('div');
firstDiv.classList.add('card__container');
document.body.appendChild(firstDiv);

const cityImg = document.createElement('img');
cityImg.classList.add('img__background');
cityImg.src=obj[i].urlImage;
document.querySelector('.card__container').appendChild(cityImg);

const cityName = document.createElement('h3');
cityName.classList.add('city__name');
cityName.textContent =obj[i].name;
document.querySelector('.card__container').appendChild(cityName);


const cityDescription = document.createElement('p');
cityDescription.classList.add('city__description');
cityDescription.textContent =obj[i].description;
document.querySelector('.card__container').appendChild(cityDescription);

const cityCountry = document.createElement('p');
cityCountry.classList.add('city__country');
cityCountry.textContent =obj[i].country;
document.querySelector('.card__container').appendChild(cityCountry);

const listContainer = document.querySelector('.ul__container');

const coordinates = document.createElement('ul');
coordinates.classList.add('ul__container');
coordinates.textContent =obj[i].coordinates;
document.querySelector('.card__container').appendChild(coordinates);

const latituteCoordinate = document.createElement('li');
latituteCoordinate.classList.add('li__item');
latituteCoordinate.textContent =obj[i].coordinates.latitude;
document.querySelector('.ul__container').appendChild(latituteCoordinate);

const longitudeCoordinate = document.createElement('li');
longitudeCoordinate.classList.add('li__item');
longitudeCoordinate.textContent =obj[i].coordinates.latitude;
document.querySelector('.ul__container').appendChild(longitudeCoordinate);


}
}

cityCard(myCityArray);







// 		const container = document.createElement('article');
//         container.classList.add('container'); // creacion contenedor general

//         let cuerpo=document.body;

//         let imagen=document.createElement('img');// creacion imagen
//         imagen.src=obj[i].ulrImage;
//         imagen.classList.add('container__img');

//         container.appendChild(imagen);

//         let textoImagen=document.createElement('h2');
//         textoImagen.classList.add('container__img__label-texto');
//         textoImagen.textContent=obj[i].country;
//         container.appendChild(textoImagen);

//         let tituloMedio=document.createElement('h3');
//         tituloMedio.textContent=obj[i].name;
//         container.appendChild(tituloMedio);

//         let descripcion=document.createElement('p');
//         descripcion.textContent=obj[i].description;
//         container.appendChild(descripcion);

//         let latitud=document.createElement('p');
//         latitud.textContent=obj[i].coordinates.latitude;
//         container.appendChild(latitud);

//         let altitud=document.createElement('p');
//         altitud.textContent=obj[i].coordinates.longitude;
//         container.appendChild(altitud);

//         cuerpo.appendChild(container);//meto el contenedor en el body
    // }
