// function plotcharts(otuname) {
// //using D3 to get json file
var url = "http://127.0.0.1:5000/info";
console.log("test");


d3.json(url).then(function(data) {
    // Code from your callback goes here...
    // console.log(data);
    var teams = [];
    
    console.log(data);
    for (var i = 0; i < data.length; i++) {
       
      var team_name  = data[i].Team
      // console.log(team_name)

      if (!teams.includes(team_name)){
          // console.log("test")
        teams.push(team_name);
      };
    }
    console.log(teams)
    var input_value = d3.select("#selDataset1")
          teams.forEach((team) => {
          //appending the Otu number to options value
           input_value
           .append("option")
           .text(team)
           .property("value", team);
          });
    var input_value = d3.select("#selDataset2")
        teams.forEach((team) => {
        //appending the Otu number to options value
          input_value
          .append("option")
          .text(team)
          .property("value", team);
    });
          
  });
  


// d3.json(url, function(data) {
//   // Once we get a response, send the data.features object to the createFeatures function
//   console.log("test")
//   console.log(data)
// });
  //looping through list in samples
//   for (var i = 0; i < importedData.samples.length; i++) {
//     if (importedData.samples[i].id == otuname) {
//       var data = importedData;
//       console.log(data);

//       var sampledata = data.samples[i].sample_values;
      
//       //sorting values to from the dataset and filtering top 10 values
//       var slicedsampledata = sampledata.slice(0,10)
//       var samplenames = data.samples[i].otu_ids;
//       var slicedsamplenames = samplenames.slice(0,10)
//       var labels = data.samples[i].otu_labels;
      

//       var newnames = [];
//       slicedsamplenames.forEach(function(name) {
//           newnames.push(`OTU ${name}`);  
//       });


//       //sorting retrieved values in descending order 
//       newnames = newnames.reverse();
//       slicedsampledata = slicedsampledata.reverse();

//       //setting up values for my plot 
//       var trace1 = {
//           x: slicedsampledata,
//           y: newnames,
//           name: "Greek",
//           type: "bar",
//           orientation: "h"
//         };
      
//         // data
//         var chartData = [trace1];
      
//         // Apply the group bar mode to the layout
//         var layout = {
//           title: "Top OTU Present in Belly Button",
//         };
        
//         // Render the plot to the div tag with id "plot"
//         Plotly.newPlot("bar", chartData, layout);

//         var trace1 = {
//           x: samplenames,
//           y: sampledata,
//           text : labels,
//           mode: 'markers',
//           marker: { color: samplenames,
//             size: sampledata
//           }
//         };
        
//         var data = [trace1];
        
//         var layout = {
//           title: 'Bubble chart',
//           showlegend: false,
//           xaxis: {
//             title: {
//               text: "OTU ID"
//             }}
          
//         };
//         // Render the plot to the div tag with id "plot"
//         Plotly.newPlot('bubble', data, layout);

//         var list = d3.select("#sample-metadata");
//     };
//   };
//  });
// };

// function demographics(otuname) {
//   //select the demographic id
//   var demographic_info = d3.select(`#sample-metadata`)
//   //using D3 to read sample json
//   d3.json("static/samples.json").then((importedData) => {
//   //looping throught results
//   for (var i = 0; i < importedData.metadata.length; i++) {
//     if (importedData.metadata[i].id == otuname) {
//       demographic_info.html("");
//       //looping through metadata
//       Object.entries(importedData.metadata[i]).forEach(function([key,value]){
//         var row = demographic_info.append("p");
//         //appending details from object into html
//         row.text(`${key}:${value}`)
//       })
//     }; 
//   };
//   });
// };

// function init() {
//   //getting default input 
//   var input_value = d3.select("#selDataset");
//    //using D3 to read sample json
//   d3.json("static/samples.json").then((importedData) => {
//     importedData.names.forEach((otu) => {
//     //appending the Otu number to options value
//      input_value
//      .append("option")
//      .text(otu)
//      .property("value", otu);
//     });
//     //default first otu id of 940
//     plotcharts(940)
//     demographics(940)
//   });

// };
// function optionChanged(otuname) {
//   //run through funtions when an id is selected
//   plotcharts(otuname);
//   demographics(otuname);
// }
// //run initailize function
// init()
