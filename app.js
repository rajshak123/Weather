
const yargs=require("./yargs/yargsconfig");
const geocode=require("./geocode/Geocoding");
const forcst=require("./forecast/forecastweather");

const address1=yargs.args();
geocode.geocode(address1,(errorMsg,results)=>{
    if(errorMsg)
        console.log(errorMsg);
    else {
        console.log(JSON.stringify(results.addressp, undefined, 2));
        forcst.getweather(results.lat,results.lng,(error,weatherResults)=>{
            if(error)
                console.log("Error has occured");
            else {
                console.log("Current Temperature in Fahrenheit: " + JSON.stringify(weatherResults.currentTemp, undefined, 2));
                console.log("Current Relative humidity : " + JSON.stringify(weatherResults.humidity, undefined, 2));
                console.log("Current wind speed in miles per hour : " + JSON.stringify(weatherResults.windSpeed, undefined, 2));
            }

        });

    }
});



