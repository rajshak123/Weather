/**
 * Created by raj on 3/11/2017.
 */
const request=require("request");
module.exports.geocode=(address,callback)=>{

    const enaddress=encodeURIComponent(address);

    request({
    url:"https://maps.googleapis.com/maps/api/geocode/json?address="+enaddress+"&&key=AIzaSyDEesaA5rMG7Yoro2jv5bJSeaERw31ZhgI",

    },(error,response,body)=>
    {
        //console.log(response);
        if(error)
        {
            callback("error has occured");
        }

       //console.log(typeof body);
        //console.log(body);
        const addr=JSON.parse(body);
        //console.log(addr)
        if(addr.status==="OK")
        {
            callback(undefined,{
                    addressp:addr.results[0].formatted_address,
                    lat:addr.results[0].geometry.location.lat,
                    lng:addr.results[0].geometry.location.lng,
            });

        }
    }



            )};
