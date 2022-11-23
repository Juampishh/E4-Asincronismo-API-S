//Traemos los elementos html

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    traerPokemon(input.value);
})


const traerPokemon = (pokemon)=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res)=> res.json())
    .then((data)=> {
        crearPokemon(data)
    });
    console.log(data);
};

const showError = () =>{
    container.innerHTML+=`
    <div class="error-container">
        <h2>No se encontro el pokemon deseado porfavor vuelva a ingresar</h2>
    </div>
    `
}



const crearPokemon = (pokemon)=>{

if(!input.value){
    showError()
    }else{ container.innerHTML+=`
    <div class="card-container">
        <img src="${pokemon.sprites.front_default}" alt="">
        <h2>${pokemon.name.toUpperCase()}</h2>
        <h5>Altura: ${pokemon.height}mts</h5>
        <h5>Peso: ${pokemon.weight} KG</h5>
    </div>
    `}
};
