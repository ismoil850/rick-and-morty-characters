const container = document.querySelector(`#container`);

let count = 1;

document.querySelector(`#prw`).addEventListener(`click`, () => {
     cleardata();
    count--;
    fetchData();
})
document.querySelector(`#nxt`).addEventListener(`click`, () => {
    cleardata();
    count++;
    fetchData();
})


function fetchData() {
    fetch(`https://rickandmortyapi.com/api/character?page=${count}`).then(res => res.json()).then(data => {
        data.results.forEach(element => {
            const img =  document.createElement(`img`)
            const text = document.createElement(`h1`)
            const gender = document.createElement(`h2`)
            const status = document.createElement(`h3`)
            const species = document.createElement(`h4`)
 
            img.src = element.image 
            species.innerText = element.species
            status.innerText = element.status
            gender.innerText = element.gender
            text.innerText = element.name

            container.appendChild(img)
            container.appendChild(text)
            container.appendChild(gender)
            container.appendChild(status)
            container.appendChild(species)
        });
        console.log(data);
    })
}

function cleardata() {
    container.innerHTML = ``;

}   


fetchData();