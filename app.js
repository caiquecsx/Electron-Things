const URL = 'https://ghibliapi.herokuapp.com/films/';

fetch(URL) // Call the fetch function passing the url of the API as a parameter
.then((resp) => resp.json())// Transform the data into json
.then(function(data) {
    console.log(data);
    var t = document.createTextNode("CLICK ME");
    document.table.appendChild(t);
})
.catch(function() {
    // This is where you run code if the server returns any errors
});
