$.fn.stars = function () {
    return $(this).each(function () {

        // GET VALUE //
        var val = parseFloat($(this).html());
        var val = $(this).data.searchResult.searchListings.searchListing.averageRating("rating");
        console.log(data);

        // ROUND STARS TO NEAREST HALF //
        var val = Math.round(val * 2) / 2;

        // MAKE SURE VALUE IS IN 0 - 5 RANGE, MULTIPLY TO GET WIDTH //
        var size = Math.max(0, (Math.min(5, val))) * 16;

        // CREATE STARS HOLDER //
        var $span = $('<span/>').width(size);

        // REPLACE NUMERICAL VALUE WITH STARS //
        $(this).html($span);
    });
}

$(function () {
    $('span.stars').stars();
});





