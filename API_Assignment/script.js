const peopleUrl = "https://swapi.dev/api/people";
const filmsUrl = "https://swapi.dev/api/films";

async function getPeople() {
  try {
    const response = await fetch(peopleUrl);
    const ppData = await response.json();
    return ppData.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}


async function getFilms(){
  try{
    const response = await fetch(filmsUrl);
    const data  = await response.json();
    // console.log(data);
    return data.results;
  }
  catch(error){
    console.log(error);
    return [];
  }
}
getFilms();


async function filmsDatails(){
  try{
    const filmDetails = await getFilms();
    const filmCard = document.getElementById("filmCard");
    
    const gridItem = filmDetails.map(ele => {
      return `
        <div class="grid-item">
          <div class="abc">
            <p>Title : </p>
            <p>${ele.title}</p>
          </div>
          <div class="abc">
            <p>Created On : </p>
            <p>${ele.created.substring(0,10)}</p>
          </div>
          <div class="abc">
            <p>Director : </p>
            <p>${ele.director}</p>
          </div>
        </div>`;
    });

    filmCard.innerHTML = gridItem.join('');
  }
  catch(error){
    console.log(error);
  }
}





async function peopleDetails() {
  try {
    const peopleData = await getPeople();
    const characterCard = document.getElementById("characterCard");

    const gridItems = peopleData.map(ele => {
      return `
        <div class="grid-item">
          <div class="abc">
            <span>Name : </span>
            <span>${ele.name}</span>
          </div>
          <div class="abc">
            <span>Height : </span>
            <span>${ele.height} cm</span>
          </div>
          <div class="abc">
            <span>Mass : </span>
            <span>${ele.mass} Kg</span>
          </div>
          <div class="abc">
            <span>Films : </span>
            <span>${ele.films.length}</span>
          </div>
          <div class="abc">
            <span>Vehicles : </span>
            <span>${ele.vehicles.length}</span>
          </div>
        </div>`;
    });

    characterCard.innerHTML = gridItems.join('');
  } catch (error) {
    console.error(error);
  }
}















// const people = "https://swapi.dev/api/people";
// const planets = "https://swapi.dev/api/planets";
// const films = "https://swapi.dev/api/films";
// // let  ppData ;
// async function getPeople() {
//   try {
//     const response = await fetch(people);
//     ppData = await response.json();
//     // console.log(ppData.results);
//     return ppData.results;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }

// // getPeople();





// async function createCharacterDetails() {
//   const pata = await getPeople();
//   const characterCard = document.getElementById("characterCard");

//   pata.forEach(ele => {
//     const gItem = document.createElement("div");
//     // console.log(ele)
//     gItem.classList.add("grid-item");
//     let x = `
//       <div class="abc">
//           <span>Name : </span>
//           <span>${ele.name}</span>
//       </div>
//       <div class="abc">
//         <span>Height : </span>
//         <span>${ele.height} cm </span>
//       </div>
//       <div class="abc">
//         <span>Mass : </span>
//         <span>${ele.mass} Kg</span>
//       </div>
//       <div class="abc">
//         <span>Films : </span>
//         <span>${ele.films.length}</span>
//       </div>
//       <div class="abc">
//         <span>Vehicles : </span>
//         <span>${ele.vehicles.length}</span>
//       </div>`
//   gItem.innerHTML = x;
//     characterCard.appendChild(gItem);
//   });
// }













// const array = [
//   {
//       name: 'Luke Skywalker',
//       skinColor: 'Fair',
//       height: '172 cm',
//       mass: '77 kg',
//       films: 'A New Hope, The Empire Strikes Back, Return of the Jedi',
//       vehicles: 'X-34 Landspeeder, Snowspeeder'
//   },
//   {
//       name: 'Leia Organa',
//       skinColor: 'Light',
//       height: '150 cm',
//       mass: '49 kg',
//       films: 'A New Hope, The Empire Strikes Back, Return of the Jedi',
//       vehicles: 'Tantive IV, Speeder Bike'
//   },
//   {
//       name: 'Han Solo',
//       skinColor: 'Fair',
//       height: '180 cm',
//       mass: '80 kg',
//       films: 'A New Hope, The Empire Strikes Back, Return of the Jedi',
//       vehicles: 'Millennium Falcon, Landspeeder'
//   },
//   {
//       name: 'Darth Vader',
//       skinColor: 'Pale',
//       height: '202 cm',
//       mass: '136 kg',
//       films: 'A New Hope, The Empire Strikes Back, Return of the Jedi',
//       vehicles: 'TIE Advanced x1, Imperial Speeder Bike'
//   },
//   {
//       name: 'Obi-Wan Kenobi',
//       skinColor: 'Fair',
//       height: '182 cm',
//       mass: '77 kg',
//       films: 'A New Hope, The Empire Strikes Back, Return of the Jedi',
//       vehicles: 'Jedi Starfighter, Eta-2 Actis-class Interceptor'
//   },
//   {
//       name: 'Padmé Amidala',
//       skinColor: 'Light',
//       height: '165 cm',
//       mass: '45 kg',
//       films: 'The Phantom Menace, Attack of the Clones, Revenge of the Sith',
//       vehicles: 'Naboo Royal Starship, Gian Speeder'
//   },
//   {
//       name: 'Yoda',
//       skinColor: 'Green',
//       height: '66 cm',
//       mass: '17 kg',
//       films: 'The Empire Strikes Back, Return of the Jedi, Attack of the Clones',
//       vehicles: 'Jedi Starfighter (modified)'
//   },
//   {
//       name: 'Chewbacca',
//       skinColor: 'Brown',
//       height: '228 cm',
//       mass: '112 kg',
//       films: 'A New Hope, The Empire Strikes Back, Return of the Jedi',
//       vehicles: 'Millennium Falcon, AT-ST'
//   },
//   {
//       name: 'Lando Calrissian',
//       skinColor: 'Dark',
//       height: '177 cm',
//       mass: '79 kg',
//       films: 'The Empire Strikes Back, Return of the Jedi',
//       vehicles: 'Millennium Falcon, Cloud Car'
//   },
//   {
//       name: 'R2-D2',
//       skinColor: 'Silver',
//       height: '96 cm',
//       mass: '32 kg',
//       films: 'All Star Wars films',
//       vehicles: 'X-wing Starfighter (astromech socket)'
//   }
// ];























// createCharacterDetails();


// async function getCharacterData() {
//   try {
//       const response = await fetch('https://swapi.dev/api/people');
//       const data = await response.json();
//       return data.results;
//   } catch (error) {
//       console.error('Error fetching data:', error);
//       return [];
//   }
// }

// async function createCharacterDetails() {
//   const characterCard = document.getElementById('characterCard');
//   const characters = await getCharacterData();

//   characters.forEach(character => {
//       const characterInfo = document.createElement('div');
//       characterInfo.classList.add('character-info');

//       const nameLabel = document.createElement('span');
//       nameLabel.classList.add('character-label');
//       nameLabel.textContent = 'Name:';

//       const nameValue = document.createTextNode(character.name);

//       characterInfo.appendChild(nameLabel);
//       characterInfo.appendChild(nameValue);
//       characterCard.appendChild(characterInfo);
//   });
// }


// console.log(ppData.results);
// for (const key in character) {
//
//

//
//     labelElement.classList.add('character-label');
//     labelElement.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ':';

//     const valueElement = document.createElement('span');
//     valueElement.textContent = character[key];
// detailElement.appendChild(labelElement);
// detailElement.appendChild(valueElement);
// gItem.appendChild(detailElement);
// }
// characterCard.appendChild(gItem);

// const url = "https://raddythebrand.github.io/apex-legends/data.json";
// const ul = document.getElementById('legends');
// const list = document.createDocumentFragment();

// async function getData() {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     listData(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function listData(data) {
//   data.map(function (legend) {
//     const legendText = `
//       <div class="nickname">${legend.nickname}</div>
//     `;
//     const item = document.createElement('li');
//     item.innerHTML = legendText;
//     list.appendChild(item);
//   });
//   ul.appendChild(list);
// }

// getData();
