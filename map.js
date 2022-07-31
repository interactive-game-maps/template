// Step 0:
// Add all feature geoJSON and layer logic to the `index.html`
// In this example this is:
// * `marker/collectibles.js`
// * `marker/information.js`
// * `marker_logic/collectibles.js`
// * `marker_logic/information.js`

// Step 1:
// Initialize the map with basic information
var interactive_map = new InteractiveMap('map', {
    // This will limit automatic zooming to this zoom level
    max_good_zoom: 6,
    // This is the max zoom the map will allow
    max_map_zoom: 8,
    website_source: 'https://github.com/interactive-game-maps/template',
    website_subdir: 'template',
    attribution: `
    <li><a href="https://www.example.com/index.html">$Thing</a> used by <a href="https://www.example.com/index.html">$person</a> under <a href="https://www.example.com/index.html">$license</a></li>
    <li>This project uses sample images from <a href="https://picsum.photos/">picsum.photos</a></li>
`
});

// Step 2:
// Add at least one tile layer
//
// generate them from an image with (don't forget do adjust the zoom levels `-z`):
// https://github.com/commenthol/gdal2tiles-leaflet
// `./gdal2tiles.py -l -p raster -w none -z 3-5 full_map.jpg map_tiles`
interactive_map.addTileLayer('Ingame map', {
    minNativeZoom: 2,
    maxNativeZoom: 4,
    attribution: 'Map from <a href="https://www.example.com/index.html">$source</a>'
});

// Step 2.5 (optional):
// Add more tile layer
// interactive_map.addTileLayer('Overview', {
//     minNativeZoom: 2,
//     maxNativeZoom: 4,
//     attribution: 'Map from <a href="https://www.example.com/index.html">$source</a>'
// }, 'overview_tiles/{z}/{x}/{y}.png');

// Step 3:
// Add at least one marker layer
// The order matters - they will appear in this order in the sidebar and layer control
// See `marker_logic/collectibles.js` for a really basic layer
addCollectibles(interactive_map);

// Step 3.5 (optional):
// Add more marker layer
// See `marker_logic/information.js` for more advanced technics
addInformation(interactive_map);

// Step 4:
// Finalize the map after adding all layers.
interactive_map.finalize();

// Step 5:
// Open `index.html` to view the map.
// You can now add additional layers by clicking the edit button in the lower left
// While editing a layer you can export the geoJSON in the toolbar on the right when you're done
// and add them here to step 3 to display them fixed for all users.
