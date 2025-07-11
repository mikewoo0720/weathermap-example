const getPosition = (position) => {
  const{ latitude, longitude } = position.coords;/*구조 분해 할당 파이썬 튜플~*/
  console.log("위도 :", latitude);
  console.log("경도 :", latitude);
  
};

const errorHandle = (error) => {
  console.error(error);
};

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandle);
} else {
  console.log("geolocation is not available");
}
