// Simple
// Just a simple group of collectibles, trackable in the sidebar

function addCollectibles(map) {

    // New layer with id `collectibles` from geoJSON `collectibles`
    map.addInteractiveLayer('collectibles', collectibles, {

        // The display name for this layer
        name: 'Collectibles',

        // This layer should have a tab in the sidebar with a list for each feature ID
        create_checkbox: true,

        // Each feature should have a popup
        // This internally calls `getPopupMedia()` to associate an image or video
        // See `map_utils.js` for an example
        create_feature_popup: true,

        // This layer should be visible by default
        is_default: true,

        // We don't have created a custom icon so let's use a generic one from Font Awesome
        // Omitting this uses the group icon in `images/icons/${this.id}.png` by default
        // This needs a html string or a function that return a html string
        sidebar_icon_html: '<i class="fas fa-gem"></i>',

        // We don't have created a custom icon so we have to manually provide a marker
        // Omitting this sets a marker with the group icon in `images/icons/${this.id}.png` by default
        // This can include logic based on feature properties
        // https://leafletjs.com/reference.html#geojson-pointtolayer
        pointToLayer: function (feature, latlng) {

            // https://leafletjs.com/reference.html#marker
            return L.marker(latlng, {

                // We don't have created a custom icon so let's use a generic one from Font Awesome
                // This can take:
                // * a Font Awesome `fa-` string
                // * the group id (`this.id`) to take the `images/icons/${this.id}.png`
                // * a max 2 char long string
                // * nothing for a generic marker
                icon: Utils.getCustomIcon('fa-gem'),
                riseOnHover: true
            });
        }
    });
}
