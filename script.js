"use strict";


async function fetchObject(url, payload) { //this returns a javascript object
    const method = "GET" //Some service will want a POST 
    const headers = { 'Accept': 'text/html', 'Content-Type': 'application/json' }
    const response = await fetch(url, { method: method, body: JSON.stringify(payload), headers: headers })
    //const response = await fetch(url, {method:method,headers:{'Accept':'text/html','Content-Type':'application/json'}})
    if (response.ok) {
        return await response.json()
    }
    else {
        console.log(`unexpected response status ${response.status} + ${response.statusText}`)
    }
}


async function getUser(){

    let users = await fetchObject("https://randomuser.me/api/?results=5")

for(let i=0; i<users.results.length; i++){
    let name =document.createElement("h1")
    name.innerText= users.results[i].name.first
    document.body.appendChild(name)

    let picture =document.createElement("p")
    picture.innerHTML= `<img src='${users.results[i].picture.medium}'>`
    document.body.appendChild(picture)

    let lat =document.createElement("h3")
    lat.innerText= users.results[i].location.coordinates.latitude
    document.body.appendChild(lat)

    let long =document.createElement("h3")
    long.innerText= users.results[i].location.coordinates.longitude
    document.body.appendChild(long)

}
}

getUser()

//Add Google maps API or pixel coordinates on a map 
//Add a few inputs to add specific details which is added to a paragraph that slowly fills up.
// Anything else??

