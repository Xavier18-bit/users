
// function generateRandPokemon(){
//     let randPokemon = pokemon[Math.floor(Math.random()*pokemon.length)];
//     console.log(randPokemon)

//     let nameHeading = document.querySelector("#poke_name");
//     nameHeading.innerHTML = `#${randPokemon.id} - ${randPokemon.name}`
//     // Img
//     let pokeImg = document.querySelector("#poke_img")
//     pokeImg.src = randPokemon.image[0]

//     // type
//     let types = document.querySelector("#poke_types")
//     types.innerHTML = `${randPokemon.type[0]} - Type`
//     // Stats
//     let statDivs = document.querySelectorAll('#poke_stats div')
//     console.log(statDivs)

//     for(let i = 0; i < statDivs.length; i++){
//         let stat = statDivs[i].id
//         statDivs[i].style['width'] = `${randPokemon.base[stat]}px`
//     }
// }

// let randomBtn = document.querySelector('#random_btn')
// randomBtn.addEventListener('click', generateRandPokemon)

console.log(user)
function generateRandUsers(){
    let random_user = user[Math.floor(Math.random()*user.length)]
    // names = random_user.results.name
    // console.log(names)
    console.log(random_user.results)

}

generateRandUsers()
