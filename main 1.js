window.onload = init;

function init() {
    const map= new ol.Map({
        view: new ol.View({
            center: ol.proj.fromLonLat([65.25, 34.25]),
            zoom:5
        }),
        layers:[
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'map' 
    }) 
    afg_bo = new ol.layer.Image({
        source: new ol.source.ImageWMS({
           url: 'https://geonode.wfp.org/geoserver/geonode/ows?SERVICE=WMS&',
           params: {
               LAYERS: 'pak_ica_landdegradation_geonode_apr2017',
           }
           })
       
        });
    map.addLayer(afg_bo);   
     
}