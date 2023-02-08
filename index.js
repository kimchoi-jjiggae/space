fetch("https://api.nasa.gov/planetary/apod?api_key=2ATdPJcmaLvE4gwjxox8C8DJcXNIkVpLOduJ4nLP")
    .then(res=> res.json())
    .then(data=> {
        console.log(data)

        document.getElementById('IOD').src = data.hdurl
    })