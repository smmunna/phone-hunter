// Load Phone data ;
const loadPhone = async() =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

// Display Phones Data;
const displayPhones = phones =>{
    console.log(phones)
    phones.forEach(individualPhones=>{
        console.log(individualPhones)
    })
}
// Calling phone Data Function;
loadPhone();