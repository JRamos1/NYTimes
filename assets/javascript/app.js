


$(document).ready(function () {
    console.log("ready");



    $('.get-info').click(function () {
        var term = $('#term-search').val();
        var limit = $('#Choose').val();
        console.log(limit);
        var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=mXE3TDSAbRPA9DWkO1lO9cJ1ivgnFO9C&limit=1`;

         

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var results = response.response.docs;
            console.log(results);
            for (i = 0; i < limit; i++) {
                var title = results[i].headline.main;
                var author = results[i].byline.original;
                var section = results[i].section_name;
                var date = results[i].pub_date;
                var docLink = results[i].web_url;
            
                console.log(title);
                console.log(author);
                console.log(section);
                console.log(date);
                console.log(docLink);

                $(`<div class="card"> <p><strong>${title}</strong></p>
                    <p>${author}</p>
                    <p>${section}</p>
                    <p>${date}</p>
                    <p>${docLink}</p></div>`).appendTo("#articles")

            }


        });
    });
});