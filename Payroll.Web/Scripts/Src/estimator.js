export function get($container) {
    return $.ajax({
        url: '/estimator',
        contentType: "text/html; charset=utf-8",
        method: 'GET'
    }).then(function(data) {
        $container.html(data);
    });
}