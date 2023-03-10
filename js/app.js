// Load Phone data ;
const loadPhone = async(search) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

// Display Phones Data;
const displayPhones = phones =>{
    //console.log(phones)
    // Div Container;
    const divContainer = document.getElementById('div-container');
    divContainer.innerHTML='';
    
    // Show all button
    const showAllphone = document.getElementById('showall-div');
    if(phones.length>10){
        phones = phones.slice(0,6);
        showAllphone.classList.remove('d-none');
    }
    else{
        showAllphone.classList.add('d-none');
    }
    // No phones found Message;
    const noPhoneFound = document.getElementById('no-phone-found');
    if (phones.length === 0) {
        noPhoneFound.classList.remove('d-none');
    } else {
        noPhoneFound.classList.add('d-none');
    }

    

    // Mapping the Phone here acording to the array;
    phones.forEach(individualPhones=>{
        //console.log(individualPhones)
        
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

    isLoadingSpinner(false);
}
// Search Phone:
document.getElementById('btn-search').addEventListener('click',function(){
    const searchValue = document.getElementById('search-phone').value;
    loadPhone(searchValue);

    // If data is loading to fetch;
    isLoadingSpinner(true);
});

// Spinner Activity;
const isLoadingSpinner  = toogleSpinner =>{
    const spinner = document.getElementById('toggleSpinner');
    if (toogleSpinner) {
        spinner.classList.remove('d-none');
    } else {
        spinner.classList.add('d-none');
    }
}

// Calling phone Data Function;
loadPhone('iphone');