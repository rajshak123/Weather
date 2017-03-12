# Weather

Its a Node JS v7.6.0 app which tells the weather on a particular location entered by the user in the command prompt.

It uses yargs for command line configuration.
Uses Google Geolocation API for converting location into co-ordinates.
And uses Dark Sky API for fetching the weather based on the co-ordinates.
 
And then displays Current Temperature,Humidity and Wind Speed.

Use:
node app.js -a <location-parameter>
