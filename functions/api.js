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
  url = encodeURIComponent(url);
  console.log("url ", url);

  const databaseURL = process.env.REACT_APP_DATABASE_URL;
  console.log(databaseURL);

  const request_url = `${databaseURL}/users/${userId}/apis/${url}`;

  axios
    .get(request_url)
    .then(res => {
      return callback(null, {
        statusCode: 200,
        body: res.data.response
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
