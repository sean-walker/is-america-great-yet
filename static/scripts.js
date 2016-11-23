var responses = ['No.', 'Not yet!', 'Nuh-uh.', 'Nope.', 'Doesn\'t look like it.', 'Nah.', 'Try again later.']

$(function() {
    $( "#check-button" ).click(function() {

        var wait = Math.floor((Math.random() + 1.1) * 1000);
        // debugging
        console.log(wait);
        var index = Math.floor(Math.random() * 6);

        $( "#check-result" ).html("<img src='static/ajax-loader.gif'>");
        setTimeout(function(){
            $( "#check-result" ).html("<p>" + responses[index] + "</p>");
            $.getJSON( "/articles", function( data ) {
                var items = [];
                $.each( data, function( index, val ) {
                    items.push( "<a class='list-group-item' href=''" + val.link.split("&url=")[1] + "'><h4 class='list-group-item-heading'>" + val.title.split(" - ")[0] + "</h4><p class='list-group-item-text'>" + val.title.split(" - ")[1] + "</p></a>" );
                });
                // debugging
                console.log(items);
                $( "#articles" ).html("<h3>Here are ten reasons why, courtesy of Google News:</h3><br><div class='list-group'>" + items.join("") + "</div>");
            }).fail( function( error ) {
                console.log(error);
            });
        }, wait);
    });
});
