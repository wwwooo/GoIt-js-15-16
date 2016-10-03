document.addEventListener('DOMContentLoaded', function() {
    var search = document.getElementById('search');
    var submit = document.getElementById('search-btn');
    var content = document.getElementById('content');
    var request = new XMLHttpRequest();

    var get_json = function(tag, counter) {
        counter = counter || 15;
        request.open('GET', 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=' + tag + '&limit='+ counter);
        request.onreadystatechange = function() {
            if (request.status === 200 && request.readyState === 4) {
                search.value = tag;
                var data = JSON.parse(request.responseText);
                var html = document.getElementById('item_tmpl').innerHTML;
                content.insertAdjacentHTML('beforeEnd', tmpl(html, data));
            } else if (request.status !== 200) {
                console.log('false');
            }
        };
        request.send();
    };

    submit.addEventListener('click', function() {
        content.innerHTML = '';
        get_json(search.value);
    });
});
