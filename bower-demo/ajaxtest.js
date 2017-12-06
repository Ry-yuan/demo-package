$(function() {
    $.ajax({
            url: 'data.json',
            type: 'get',
            dataType: 'json',
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

})
