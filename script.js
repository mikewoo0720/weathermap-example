const getCurrentPosition = (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=99844a65192fc302a653f2c29a368452`;
  /*'~' -> 파이썬 f스트링 역할*/

  console.log(URL);
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