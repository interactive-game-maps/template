# Using the template
If you have any questions: https://github.com/interactive-game-maps/template/discussions

## Requirements
* A high quality picture of your desired map.
* Basic git knowledge. You should be aware of cloning locally, committing and pushing your changes.
* Basic programming knowledge. Understanding and editing this example is sufficient for simple things.
* Know how to run python scripts.

## General steps
1. Create a copy of this repository. GitHub makes this easy with "Use this template".
1. Clone it to your local drive using `git`.
1. Copy your image into the cloned repository.
1. Split your high quality picture into smaller chunks with this python script: https://github.com/commenthol/gdal2tiles-leaflet<br>
    Here's a basic example. `-z` controls the generated zoom levels.<br>
    `./gdal2tiles.py -l -p raster -w none -z 0-5 my_high_quality_map.jpg map_tiles`<br>
    Your generated chunks with all zoom level are now in the folder `map_tiles`.
1. Open `index.html` in your browser. You should be able to see your map with some example markers.
1. You can now open the edit pane on the lower left and add desired markers.<br>
    When done make sure to export the layer with the button on the right side.<br>
    You'll get a geoJSON. Replace an example geoJSON in `marker/` with your geoJSON.
1. Reload the map and you should see your markers in the map.

## Structure
* Head over into `map.js` to add additional layers or change map metadata.
* Add or edit marker positions in `marker`.
* Add or edit marker behavior and look in `marker_logic`.
* Include added files in the `index.html` body.
