const botones = document.getElementsByClassName("character-btn");

for(let i = 0; i <= botones.length; i++){
    botones[i].addEventListener("mouseover", (event) => {
        const characterElement = document.createElement("p");
        characterElement.textContent = "StarWars " + botones[i].dataset.id
        document.getElementById("result").appendChild(characterElement);
    });
}