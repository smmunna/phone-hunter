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
    // Div Container;
    const divContainer = document.getElementById('div-container');
    phones.forEach(individualPhones=>{
        console.log(individualPhones)
        
        const div = document.createElement('div');
        //div.classList.add('col');
        div.innerHTML = `
       <div class='col mb-1'> 
            <div class="card p-4">
                <img src="${individualPhones.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${individualPhones.phone_name}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
        `;
        divContainer.appendChild(div);

    })
}
// Calling phone Data Function;
loadPhone();