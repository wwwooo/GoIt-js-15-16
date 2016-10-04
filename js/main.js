document.addEventListener('DOMContentLoaded', function() {
    var search = document.getElementById('search');
    var submit = document.getElementById('search-btn');
    var content = document.getElementById('content');
    var request = new XMLHttpRequest();

    var makeRequest = function(tag, callback, limit) {
        limit = limit || 15;
        request.open('GET', 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=' + tag + '&limit=' + limit);
        request.onreadystatechange = function() {
            if (request.status === 200 && request.readyState === 4) {
                callback(JSON.parse(request.responseText));
            } else if (request.status !== 200) {
                console.log('false request');
            }
        };
        request.send();
    };

    submit.addEventListener('click', function() {
        makeRequest(search.value, function(data) {
            content.innerHTML = tmpl('item_tmpl', data);
        });
    });
});
