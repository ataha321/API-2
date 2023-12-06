const process = (data) => {
    console.log(data);
    
    data.forEach((beer) => {
        let allBeer=" ";
    
        let addBeer =
        `<div class="col m-2 p-4"><h2><i class="bi bi-heart-arrow"></i>${beer.name}</h2><p class="tag">"${beer.tagline}"</p><img src="${beer.image_url}"><h5>Decription:</h5><p>${beer.description}</p>
        <h6><i class="bi bi-hand-thumbs-up-fill"></i> It's good to pair with:</h6><ul class ="style"><li>${beer.food_pairing[0]}</li><li>${beer.food_pairing[1]}</li><li>${beer.food_pairing[2]}</li></ul>
        <p><span>First brewed:</span> ${beer.first_brewed}</p> <h6><i class="bi bi-star-fill"></i> Tips:</h6><p>"${beer.brewers_tips}"</p></div>`
    
        allBeer +=addBeer
    
        console.log(addBeer);
        $(".row").append(allBeer);
    
        //style
        $("h2").css("color","#A0522D")
                .css("font-family","fantasy");
    
        $("h5").css("color","brown");
    
        $("h6").css("color","#008B8B")
    
        $(".tag").css("font-size", "22px")
                .css("font-style","italic")
                .css("font-family","cursive")
                .css("color","#008080")
                .css("text-align","center");
    
        $("span").css("color","brown");
    
        $("li").css("list-style-type","1F44D");
    
        $(".col").css("background-color","#F4A460")
                .css("opacity","0.8")
                .css("border", "dashed 3px black")
                .css("border-radius", "5px");
        $("img").css("weight", "100px")
                .css("height","80px")
                .css("position","relative")
                .css("margin-left","40%");
    });
    };
    const getData = () => {
    $.ajax({
        type: "GET",
        // ""
        url:"https://api.punkapi.com/v2/beers",
        dataType: "json",
        success: function (result, status, xhr) {
        process(result);
        },
        error: function (xhr, status, error) {
        alert(
            "Result: " +
            status +
            " " +
            error +
            " " +
            xhr.status +
            " " +
            xhr.statusText
        );
        },
    });
    };
    
    $(document).ready(getData);