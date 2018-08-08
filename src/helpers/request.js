const Request = function (url) {
  this.url = url;
}
// passing through the argument onComplete so that it can recieve the java object at the end of the method.
Request.prototype.get = function (onComplete) {
  //open new request from API (front end)
  const xhr = new XMLHttpRequest();
  //make the GET request to the url
  xhr.open('GET', this.url);
  //next tell it what type of data to accept back in the request
  xhr.setRequestHeader('Accept', 'application/json');
//send the request
  xhr.send();

//Listen for the API to load, if there is a status error don't do anything, and if it does save the result to varieable then parse it into a usable JS object i.e unless it is a 200 response do nothing.
  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return;
    }
//the xhr responseText would return the data in a string.
    const jsonString = xhr.responseText;
    //this parses the string and makes it a usable object
    const data = JSON.parse(jsonString);
    // save the data to this file so it can be used later (rendered)
    onComplete(data);
  });
};

module.exports = Request;
