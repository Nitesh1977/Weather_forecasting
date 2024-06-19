const city = document.querySelector(".city");
const state = document.querySelector(".state");
const btn = document.querySelector("#btn");
const msg1 = document.querySelector("#msg-1");
const msg = document.querySelector("#msg");
const deg = document.querySelector("#deg");
const img = document.querySelector("#img_weather");
const msgcity = document.querySelector("#msg-city");

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    getweather();
});

const getweather = async () => {
    const apikey = `8efe423234545cdb06a310f0232341b0`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}&units=metric`;
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        showweather(data);
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        msg.innerHTML = `Error fetching the weather data.
                         Please try again.`;
        img.hidden="hidden";
        msg1.innerText='';
        msgcity.innerText='';
    }
};

const showweather = (data)=>{
    if((data.weather[0].main)=="Haze"){
        img.hidden='';
        img.src="Haze.png";
    }
    else if((data.weather[0].main)=="Clear"){
        img.hidden='';
        img.src="sunny.png";
    }
    else if((data.weather[0].main)=="Clouds"){
        img.hidden='';
        img.src="cloudy.png";
    }
    else if((data.weather[0].main)=="Rain"){
        img.hidden='';
        img.src="rainy.png";
    }
    else if((data.weather[0].main)=="Thunderstrom"){
        img.hidden='';
        img.src="thunder.png";
    }
    else{
        img.hidden='';
        img.src="Haze.png";
    }
    msgcity.innerText = `${city.value.toUpperCase()}`;
    msg1.innerText = `${data.weather[0].main}`;
    msg.innerText = `Temperature : ${data.main.temp}
                     Humidity : ${data.main.humidity}%
                     Wind: ${data.wind.speed} Km/h`;
} ;