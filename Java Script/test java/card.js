"use strict"

    let apiURL = "https://restcountries.com/v3.1/all"; 

    fetch(apiURL).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);

        const countryList = document.getElementById('country-list');

        data.forEach(country => {
            let listItem = document.createElement('li');
            if(country.name.common == "Israel"){
                return;
            }

            let countryName = document.createElement('span');
            countryName.textContent = country.name.common;

            let flagImage = document.createElement('img');
            flagImage.src = country.flags.png;

            listItem.appendChild(countryName);
            listItem.appendChild(flagImage);

            countryList.appendChild(listItem);
        });
    })
