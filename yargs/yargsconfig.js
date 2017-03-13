/**
 * Created by raj on 3/11/2017.
 */
const yargs=require("yargs");
module.exports.args=()=>{
    return yargs.options(
        {
         a:{
        demand:false,
        alias:"address",
        describe:"Adress for which to fetch the whether",
        string:true,
         }
        })
    .help()
    .alias("help","h")
    .argv.a;
};
