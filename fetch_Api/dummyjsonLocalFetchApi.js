// const url = "dummyjson.json";
// const getapi = async () => {
    //     // console.log();
    //     let response = await fetch("./dummyjson.json");
    //     // let data = response.json();
    //     console.log(response);
    // }
    
    // getapi();

// import data from json file
    // const data = require('./dummyjson.json');
    // console.log(data, typeof(data));

    // fetch data from local file
    fetch('./data.json')
  .then(response => response.json())
  .then(data => console.log(data));
