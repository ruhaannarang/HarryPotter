const URL="https://dogapi.dog/api/v2/breeds";
let funktion= async () => {
    let dogs= await fetch(URL);
    let dog= await dogs.json();
    console.log(dog.data[0])
}
funktion()
