function ajaxnews(url)
{


    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open('GET', url);
    xmlHttpReq.onreadystatechange = function() {
    
        if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
    
    // console.log(xmlHttpReq.responseText);
    data = JSON.parse(xmlHttpReq.responseText);
    dataList= data.articles;
   
    dataList.forEach(function(obj){

        addItem(obj,"carousel-item active");
       
   
    
    })
        }
    }
    xmlHttpReq.send(null);
  

}

function ajaxweather(url)
{


    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open('GET', url);
    xmlHttpReq.onreadystatechange = function() {
    
        if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
    
    // console.log(xmlHttpReq.responseText);
    weatherdata = JSON.parse(xmlHttpReq.responseText);
// console.log(data);
   
  displayWeather(weatherdata);
  
        }
    }
    xmlHttpReq.send(null);
  

}