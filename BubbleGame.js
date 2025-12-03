let cultter = "";
for(let i=1; i<=60; i++){
    let rn = Math.floor(Math.random()*10)
    cultter += `<div id="bubble">${rn}</div>`
}
document.querySelector("#bpannel").innerHTML = cultter;