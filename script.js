const URL="https://meowfacts.herokuapp.com/?count=1";
let funktion= async () => {
    let dogs= await fetch(URL);
    let dog= await dogs.json();
    console.log(dog.data)
    console.log(dog.data[2])

setTimeout(() => {
    document.body.querySelector(".fact").innerText=dog.data
}, 1000);
}
funktion()

document.body.querySelector(".opt").addEventListener("click",function (){
    let fact=document.body.querySelector(".fact")
    fact.style.display='block';
}
)