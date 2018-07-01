"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  /*var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? "### Ustadim, Echo server says:"+req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.";
   
  return res.json({
     speech: speech,
     displayText: speech,
    source: "webhook-echo-sample"
  });
  */
  var speech =
    req.body.queryResult &&
    req.body.queryResult.queryText &&
    req.body.queryResult.parameters.echoText
      ? "### Ustadim, Echo server says:"+req.body.queryResult.parameters.echoText
      : "Seems like some problem. Speak again.";
  
  let response = "This is a sample response from your webhook!";//Default response from the webhook to show it’s working
  let responseObj={
     "fulfillmentText":"Ustadim, I am your echo service. You just said:"+req.body.queryResult.queryText
    ,"fulfillmentMessages":[
        {
            "text": {
                "text": [
                    "2-"+speech+"-2"
                ]
            }
        }
    ]
    ,"source":""
}
return res.json(responseObj);


  
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Echo server up and listening");
});

 
