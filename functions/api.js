const axios = require("axios");

exports.handler = function(event, context, callback) {
  console.log("****************");
  const urlParts = event.path.split("/");
  console.log("url parts", urlParts);
  const userId = urlParts[4];
  console.log("userid", userId);
  const url = "/" + urlParts.slice(5).join("/");
  console.log("url", url);
  const request_url = `https://api-fake-ecf0c.firebaseio.com/users/${userId}/apis.json`;

  axios
    .get(request_url)
    .then(res => {
      console.log("data", res.data);
      for (let key in res.data) {
        console.log(res.data[key].url, url);
        if (res.data[key].url == url) {
          console.log("Found it");
          console.log(res.data[key]);
          return callback(null, {
            statusCode: 200,
            body: res.data[key].response
          });
        } else {
          console.log("Data not found");
          return callback(null, {
            statusCode: 404,
            body: JSON.stringify({ msg: "Data not found" })
          });
        }
      }
      return callback(null, {
        statusCode: 404,
        body: JSON.stringify({ msg: "Data not found" })
      });
    })
    .catch(err => {
      console.log(err);
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ msg: "Something went wrong!" })
      });
    });
};
