// Return html with the media to display
// Add media that should be included into the popup to a new `html` and return the `html` afterwards
// This is just basic html stuff from within JavaScript

function getPopupMedia(feature, layer_id) {

    // Create top element to insert to
    var html = document.createElement('div');

    // Some logical distinction between information our geoJSON provides
    // Do the following for geoJSON features that have an `image_id` property
    if (feature.properties.image_id) {

        // Create a new element - `a` will be a clickable link
        var image_link = document.createElement('a');

        // Add a destination to our link
        image_link.href = `images/${layer_id}/${feature.properties.image_id}.png`;

        // Create a new element - `img` will be an image
        var image = document.createElement('img');

        // Add a class to our image. `popup-media` will get a size change listener to readjust
        // the popup location
        image.className = 'popup-media';

        // Add the image that should be displayed to the image element
        image.src = image_link.href;

        // Add the image inside the image link so clicking on the image will open the image in big
        image_link.appendChild(image);

        // Add the image link with the included image to our top html element
        html.appendChild(image_link);

    // Do the following for geoJSON features hat have an `external_id` property
    } else if (feature.properties.external_id) {

        // Create a new element - `a` will be a clickable link
        var image_link = document.createElement('a');

        // Add a destination to our link
        image_link.href = `https://www.example.com/collectibles${feature.properties.image_link}`;

        // Create a new element - `img` will be an image
        var image = document.createElement('img');

        // Add a class to our image. `popup-media` will get a size change listener to readjust
        // the popup location
        image.className = 'popup-media';

        // Add the image that should be displayed to the image element
        image.src = `https://picsum.photos/${feature.properties.external_id}`;

        // Add the image inside the image link so clicking on the image will open the image in big
        image_link.appendChild(image);

        // Add the image link with the included image to the top html element
        html.appendChild(image_link);

    // Do the following for geoJSON features hat have an `video_id` property
    } else if (feature.properties.video_id) {

        // Videos can't resize properly yet so we have to do hardcode them in for now
        const POPUP_WIDTH_16_9 = Math.min(500, window.screen.availWidth - 100, (window.screen.availHeight - 200) * 16 / 9);
        const POPUP_WIDTH_4_3 = Math.min(500, window.screen.availWidth - 100, (window.screen.availHeight - 200) * 4 / 3);

        // YouTube videos need an `iframe` element
        var video = document.createElement('iframe');

        // Add the `popup-media` class anyway
        video.className = 'popup-media';

        // Set a fixed width and height for the video
        video.width = POPUP_WIDTH_16_9;
        video.height = POPUP_WIDTH_16_9 / 16 * 9;

        // The source of the iframe
        video.src = `https://www.youtube-nocookie.com/embed/${feature.properties.video_id}`;

        // Add the video to the top html element
        html.appendChild(video);
    }

    // At last return the created html element
    return html;
}
