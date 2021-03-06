const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const qid = breedName.slice(0,2);
  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + qid;
  //const url = "https://api.thecat123";

  request.get(url, (error, res) =>{
    if (error !== null) {
      callback(error, res);
    } else {
      const body = res["body"];
      //console.log(body);
      //console.log(typeof body);
      const data = JSON.parse(body);
        //console.log(data);
        //console.log(typeof data);
      const des = data[0]["description"];
      callback(error, des);
    }
  });
};

module.exports = {
  fetchBreedDescription
};

/** 
const input = process.argv;
const qid = input[2].slice(0,2);
//console.log(qid);
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + qid;
//const url = "https://api.thecat123";

request.get(url, (error, res) => { 
  if (error !== null) {
    console.log(error);
  } else if (error === null) {
    const body = res["body"];
    //console.log(body);
    //console.log(typeof body);
    if (body === "[]"){
      console.log("The requested breed is not found");
    } else {
      const data = JSON.parse(body);
      //console.log(data);
      //console.log(typeof data);
      console.log(data[0]["description"]);
    }
  }
});
*/
