let planets = ["Mercury","Venus","Earth","Mars","Jupiter","Satum","Uranus","Neptun"];
console.log(planets);
console.log(planets[0]);
console.log(planets[2]);
console.log(planets[3]);
console.log(planets[4]);
console.log(planets[5]);
console.log(planets[6]);
console.log(planets[planets.length-1]);

for(let i = 0; i < 3; i++){
let message = `${i+1}. ${planets[i]}`;
console.log(message);
}

planets.forEach(element =>{
    console.log(`My`, element);
});

let rnd = Math.floor(Math.random () * planets.length);
console.log(rnd);

let RandomPlanets = planets[rnd];
console.log(`my random planets:`,RandomPlanets);
planets.push(`Mars`);
console.log(planets);