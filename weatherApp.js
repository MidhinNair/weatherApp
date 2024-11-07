let target = "Chennai";
const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".time_location > p");
const dateField = document.querySelector(".time_location > span");
const emojiField = document.querySelector(".weather_condition img");
const conditionField = document.querySelector(".weather_condition span");
const searchField = document.querySelector(".searchField"); 
const form = document.querySelector("form");

form.addEventListener("submit", search);
//fetching data from the api using callback function
function search(e){
    e.preventDefault();//preventing the default behaviour of the form
    target = searchField.value;
    getWeather(target);
};
    


async function getWeather(target) {
    try{
        const url = `http://api.weatherapi.com/v1/current.json?key=eb7c7f20dd7d4448a7e181229240411&q=${target}&aqi=yes`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        const currentTemp = data.current.temp_c;
        const currentCondition = data.current.condition.text;
        const conditionIcon = data.current.condition.icon;
        const location = data.location.name;    
        const localTime = data.location.localtime;

        console.log(`The Current Temperature in ${location} is ${currentTemp}°C`);


        updateDOM(currentTemp, location, localTime, conditionIcon, currentCondition);  
        console.log("Data Fetched Successfully");


    }catch(error){
        console.log("Server is Not Responding",error);
    }
    
};

function updateDOM(temp, city, date, emojiSrc, condition) {   
    temperatureField.textContent = `${temp}°C`;
    cityField.textContent = city;
    dateField.textContent = date;
    emojiField.src = emojiSrc;
    conditionField.textContent = condition;
}
getWeather(target);