function sendApiRequest(word) {



var giphyApiKey = "WhVfhwZTCK3y1QUO5gUTgPnIML5Pq7Ju"
var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=${giphyApiKey}`

fetch(giphyApiURL).then(function(data){
return data.json()
})

.then(function(json){
 
  // var imgPath = json.data[0].images.fixed_height.url
var imgPath = json.data[Math.floor((Math.random() * 100)+1)].images.fixed_height.url 

    var img = document.createElement("img")
    img.setAttribute("src", imgPath)
  
document.body.appendChild(img)
  //  j'aurai du mettre l'élément img juste ici dans la position du container2 (block droit de l'écran)
  // J'avoue que je cherche encore comment le mettre dans une div que j'ai déja définie 
})


}


