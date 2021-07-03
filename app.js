// const URL = "list.json";
const URL =
  "https://raw.githubusercontent.com/equistene/ilogica-extension/master/list.json";

fetch(URL)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
