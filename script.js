const URL="https://dogapi.dog/api/v2/breeds";


const dogs= async () => {
    let response=await fetch(URL)
    console.log(response)
    console.log(response.status)
    let data= await response.json()
    console.log(data)
    console.log(data[4]);
}
dogs()