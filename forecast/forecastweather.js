/**
 * Created by raj on 3/11/2017.
 */
const request=require("request");
const forecast=require("../geocode/Geocoding");
const lat=forecast.lat;
const lng=forecast.lng;
//console.log(forecast)


module.exports.getweather=(lat,lng,callback)=>{

    request({
        url:"https://api.darksky.net/forecast/96782d44ac8ae1a8a35d99a03c58658a/"+lat+","+lng,

            },(error,response,body)=>{
            //console.log(JSON.parse(body));
                if(error)
                    callback(error);
                else if(response.statusCode===400)
                        callback(error);
                else {
                    callback(undefined,
                        {

                            currentTemp: JSON.parse(body).currently.temperature,
                            humidity:JSON.parse(body).currently.humidity,
                            windSpeed:JSON.parse(body).currently.windSpeed,
                    });

                }
                                    }

                )
    };