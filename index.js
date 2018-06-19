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
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? "### Ustadim, Echo server says:"+req.body.result.parameters.echoText
      : "Seems like some problem. Speak again.";
  
  let response = "This is a sample response from your webhook!";//Default response from the webhook to show it’s working
  let responseObj={
     "fulfillmentText":speech
    ,"fulfillmentMessages":[
        {
            "text": {
                "text": [
                    "Hello I m Responding to intent"
                ]
            }
        }
    ]
    ,"source":""
}
return res.json(responseObj);});


 // return res.json({
 //   speech: speech,
 //   displayText: speech,
 //   source: "webhook-echo-sample"
 // });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Echo server up and listening");
});

 
