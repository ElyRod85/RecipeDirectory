const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

const API_Key = "bb2fc989eb5f2bb9274bd369eccb9dc0";

button.addEventListener('click', () => {
    const cityInput = inputTxt.value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)
        .then(res => res.json())
        .then(data => {
            inputTxt.value = " ";

            showData.innerHTML = `
                                <div class="data-container">
                                    <div class="data-img"><img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"></div>
                                    <div class="city">${data.name}</div>
                                    <div class="temp">${data.main.temp}°C</div>
                                    <div class="desc">${data.weather[0].description}</div>
                                </div>
                                `; 

        });
});

