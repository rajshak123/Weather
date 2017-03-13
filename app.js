
const yargs=require("./yargs/yargsconfig");
const geocode=require("./geocode/Geocoding");
const forcst=require("./forecast/forecastweather");

const address1=yargs.args();
geocode.geocode(address1,(errorMsg,results)=>{
    if(errorMsg)
        console.log(errorMsg);
    else {
        console.log(JSON.stringify(results,undefined,2));
        forcst.getweather(results.lat,results.lng,(error,weatherResults)=>{
            if(error)
                console.log("Error has occured");
            else
                console.log(JSON.stringify(weatherResults,undefined,2));

        });

    }
});



