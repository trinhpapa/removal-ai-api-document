var axios = require('axios');
var data = JSON.stringify({"high_resolution":1,
                           "demo":0, // get demo image or not
                           "file":"URL or Base64 image", // your image, this field accepts both Base64 and image URL
                           "get_base64":0}); // get base64 result or not, if not, an URL of the result will be returned.

var config = {
  method: 'post',
  url: 'https://api.removal.ai/2.0/remove/',
  headers: { 
    'Rm-Token': 'your_token', 
    'Content-Type': 'application/json', 
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
