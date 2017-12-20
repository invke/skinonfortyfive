// Wire in google analytics location changes to turbolinks
document.addEventListener('turbolinks:load', function (event) {
    if (typeof ga === 'function') {
        ga('set', 'location', event.data.url);
        ga('send', 'pageview');
    }
});