const axios = require("axios");
require("dotenv").config();

exports.handler = function (event, context, callback) {
  console.log("****************");

  const urlParts = event.path.split("/");
  //url format will be /api/user-id/url
  const index = urlParts.indexOf("api");
  console.log("url parts", urlParts);
  const userId = urlParts[index + 1];
  console.log("userid", userId);
  let url = "/" + urlParts.slice(index + 2).join("/");
  url = encodeURI(url)
  console.log("url ", url);

  const databaseURL = process.env.REACT_APP_DATABASE_URL;
  console.log(databaseURL);

  const request_url = `${databaseURL}/users/${userId}/apis.json`;

  axios
    .get(request_url)
    .then(res => {
      for (let key in res.data) {
        if (res.data[key].url == url) {
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
