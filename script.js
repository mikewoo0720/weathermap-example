const getCurrentWeather = (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=99844a65192fc302a653f2c29a368452&units=metric`;
  /*'~' -> 파이썬 f스트링 역할*/

  fetch(URL)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);

    const temp = document.querySelector(".temp")
    temp.innerText = `${result.main.temp} 도`;

    let weatherInfo;
    const weather = document.querySelector(".weather");
    switch(result.weather[0].main) {
      case "Clear" :
        weatherInfo = "🌈맑음";
    }
    weather.innerText = weatherInfo;
    
    let cityInfo;
    const city = document.querySelector(".city");
    switch(result.name) {
      case "Jamwon-dong" :
        cityInfo = "👍역삼동 메가IT";
    }
    city.innerText = cityInfo;

    const icon = document.querySelector(".icon");
    icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
  });
};

const getPosition = (position) => {
  const { latitude, longitude } = position.coords;/*구조 분해 할당 파이썬 배울때 튜플에서 했죠~*/
  getCurrentWeather(latitude, longitude);
};

const errorHandle = (error) => {
  console.error(error);
};

/*geolocation없을 경우*/
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandle);
} else {
  console.log("geolocation is not available");
}