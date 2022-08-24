const API_URL = "https://api.covid19api.com/summary";

function getApiData(url) {
  console.log("We are good to go to call API using XHR ");
  return new Promise((resolve, reject) => {

    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = () => {
      console.log(request);

      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject("Not able to fetch Data");
      }
    };
  });
}

getApiData(API_URL)
  .then((val) => {
    console.log(JSON.parse(val));
    displayData(JSON.parse(val));
  })
  .catch((err) => console.log("Error" + err));



  function displayData(serverData) {
    for(var i=0;i<1;i++)
    {

    
    console.log(serverData.Countries[1].Country);
    document.getElementById("y1").innerHTML=serverData.Countries[0].Country;
    document.getElementById("y2").innerHTML=serverData.Countries[0].Date;
    document.getElementById("y3").innerHTML=serverData.Countries[0].NewDeaths;
    document.getElementById("y4").innerHTML=serverData.Countries[0].TotalConfirmed;
    document.getElementById("y5").innerHTML=serverData.Countries[0].TotalDeaths;
    document.getElementById("y6").innerHTML=serverData.Countries[0].NewConfirmed;
   // document.getElementById("y1").innerHTML=serverData.Countries[i].Country;
    }
}

