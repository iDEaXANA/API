"use strict";


async function fetchObject(url, payload) { //this returns a javascript object
    const method = "GET" //Some service will want a POST 
    const headers = { 'Accept': 'text/html', 'Content-Type': 'application/json' }
    const response = await fetch(url, { method: method, section: JSON.stringify(payload), headers: headers })
    //const response = await fetch(url, {method:method,headers:{'Accept':'text/html','Content-Type':'application/json'}})
    if (response.ok) {
        return await response.json()
    }
    else {
        console.log(`unexpected response status ${response.status} + ${response.statusText}`)
    }
}



async function getUser(){
    const numberOf = document.getElementById("number").value
    
    let users = await fetchObject(`https://randomuser.me/api/?results=${numberOf}`)
    //"https://randomuser.me/api/?results=5" EXAMPLE 
    

    // var tile = document.createElement("div");
    // tile.className = "tile";
    // document.getElementById("tilesContainer").appendChild(tile);
    
for(let i=0; i<users.results.length; i++){
    
    let tile = document.createElement("div");
    tile.className = "tile";
    document.getElementById("tilesContainer").appendChild(tile);

    let name =document.createElement("h1")
    name.innerText= users.results[i].name.first
    tile.appendChild(name)

    let picture =document.createElement("p")
    picture.innerHTML= `<img src='${users.results[i].picture.medium}'>`
    tile.appendChild(picture)

    let lat =document.createElement("h3")
    lat.innerText= users.results[i].location.coordinates.latitude
    tile.appendChild(lat)

    let long =document.createElement("h3")
    long.innerText= users.results[i].location.coordinates.longitude
    tile.appendChild(long)

}
}

getUser()
document.getElementById("number").addEventListener("input", getUser)
document.getElementById("number").value = "";

//Add Google maps API or pixel coordinates on a map 
//Add a few inputs to add specific details which is added to a paragraph that slowly fills up.
// Anything else??

// let container = document.getElementById("container")
// let number = document.getElementById("number")
// number.addEventListener("mouseup",generate)

// function generate(e){
//     container.innerHTML= ""
//     for (let i=0; i<e.target.value; i++)
//     {
//     let box = document.createElement("div")
//     box.innerHTML = "Box"
//     container.appendChild(box)
//     box.classList.add("mystyle");
//     }
// }
