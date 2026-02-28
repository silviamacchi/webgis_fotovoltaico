//import 'ol/ol.css';
//import 'ol-layerswitcher/dist/ol-layerswitcher.css';
// import { Map, View, Overlay } from 'ol';
// import { Tile, Image, Group, Vector } from 'ol/layer';
// import LayerGroup from 'ol/layer/Group';
// import LayerVector from 'ol/layer/Vector';
// import LayerTile from 'ol/layer/Tile'; // added for layer selection/visualization
// import { OSM, ImageWMS, XYZ, StadiaMaps } from 'ol/source';
// import VectorSource from 'ol/source/Vector';
// import { GeoJSON } from 'ol/format';
// import { fromLonLat } from 'ol/proj';
// import { ScaleLine, FullScreen, MousePosition, } from 'ol/control';
// import LayerSwitcher from 'ol-layerswitcher';
// import { createStringXY } from 'ol/coordinate';
// import { Style, Fill, Stroke } from 'ol/style';



// 3. Funzione per rendere visibile un solo layer alla volta
/*function enforceSingleVisibleLayer(changedLayer) {
  overlayLayers.getLayers().forEach(group => {
    if (group instanceof LayerGroup) {
      group.getLayers().forEach(layer => {
        if (layer !== changedLayer &&
        !layer.get('excludeFromToggle')) //  skip excluded layers (France boundaries) 
        {
          layer.setVisible(false);
        }
      });
    } else {
      if (group !== changedLayer && !group.get('excludeFromToggle'))
     {
        group.setVisible(false);
      }
    }
  });
} */

// 4. Aggiungi listener a ogni layer per gestire la visibilità esclusiva
/*overlayLayers.getLayers().forEach(group => {
  if (group instanceof LayerGroup) {
    group.getLayers().forEach(layer => {
      layer.on('change:visible', function () {
        if (layer.getVisible()) {
          enforceSingleVisibleLayer(layer);
        }
      });
    });
  } else {
    group.on('change:visible', function () {
      if (group.getVisible()) {
        enforceSingleVisibleLayer(group);
      }
    });
  }
});*/

var overlayLayers = new ol.layer.Group({
    title: 'Layers',
    layers: [
        new ol.layer.Group({
            title: 'Vincoli',
            layers: [lyr_BenipaesaggisticiArt142c1aTerritoricostieri_1,
                    lyr_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2,
                    lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3,
                    lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4,
                    lyr_BenipaesaggisticiArt142c1dMontagne_5,
                    lyr_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6,
                    lyr_BenipaesaggisticiArt142c1iZoneumide_7,
                    lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8,
                    lyr_BenipaesaggisticiArticolo136aree_9,
                    lyr_BenipaesaggisticiArticolo136punti_10,
                    lyr_Beniarcheologici_11,
                    lyr_PatrimonioculturaleTourerit_12]
        }),
        new ol.layer.Group({
            title: 'Fasce di rispetto',
            layers: [lyr_Fasciadirispettostradate_15, 
                     lyr_Fasciadirispettoautostrada_16, 
                     lyr_FasciadirispettoTerna_14]
        }),
        new ol.layer.Group({
            title: 'Limiti amministrativi',
            layers: [lyr_COMUNIRN_17, lyr_PROVINCIARN_18]
        }),
        lyr_AREEIDONEEPROVAaree_idonee_0
    ]
});

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        overlayLayers
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([11.4, 44.45]),
        zoom: 8
    })
});


// Add the map controls here:
map.addControl(new ol.control.ScaleLine());
map.addControl(new ol.control.FullScreen());
map.addControl(
    new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        className: 'custom-control',
        placeholder: '0.0000, 0.0000'
    })
);


// Add the LayerSwitcher control here:
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);


// Add the popup code here:
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: { duration: 250 }
});

map.addOverlay(popup);

closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};

// popup click event
map.on('singleclick', function (evt) { 
    // Feature vettoriali 
    var feature = map.forEachFeatureAtPixel(evt.pixel, function (feat) {
        return feat;
    });
        if (feature) {
            var props = feature.getProperties();
            delete props.geometry;

            content.innerHTML = '<h3>Informazioni</h3>' +
                Object.entries(props).map(([k, v]) => `<b>${k}</b>: ${v}<br>`).join('');
            
                popup.setPosition(evt.coordinate);
            return; 
        }
    });

// TENERE COME ALTERNATIVA PER SCELTA DI ETICHETTE PIU' LEGGIBILI E FILTRATE
    /*
map.on('singleclick', function (evt) {

    var feature = map.forEachFeatureAtPixel(evt.pixel, f => f);

    if (feature) {

        let props = feature.getProperties();
        delete props.geometry;

        // Campi che vuoi mostrare
        const allowed = ['name', 'description', 'id'];

        // Etichette leggibili
        const labels = {
            name: "Nome",
            description: "Descrizione",
            id: "Identificativo"
        };

        // Filtraggio sicuro
        const filtered = Object.fromEntries(
            Object.entries(props).filter(([k]) => allowed.includes(k))
        );

        // Popup
        content.innerHTML =
            '<div class="popup-title">Informazioni</div>' +
            Object.entries(filtered)
                .map(([k, v]) => `<div class="popup-row"><b>${labels[k] || k}</b>: ${v}</div>`)
                .join('');

        popup.setPosition(evt.coordinate);
        return;
    }
}); */

//build the legend
function getLegendElement(title, color) {
    return '<li>' + 
        '<span class="legend-color" style="background-color: ' + color + ';"></span>' +
        '<span>' + title + '</span></li>';
}

// Update the legend
async function updateLegend() {
    let html = '<ul>';

    async function processLayer(layer) {

        // GRUPPI
        if (layer instanceof ol.layer.Group) {
            layer.getLayers().forEach(sub => processLayer(sub));
            return;
        }

        // NON VISIBILI
        if (!layer.getVisible()) return;

        // WMS -- per il momento non ci sono!
        /*
        if (layer.getSource && layer.getSource() instanceof ol.source.ImageWMS) {
            const title = layer.get('title');
            html += getLegendElement(title, null);

            const legendUrl = layer.getSource().getLegendUrl(undefined, {
                'FORMAT': 'image/png',
                'TRANSPARENT': true
            });

            if (legendUrl) {
                html += `<img src="${legendUrl}" alt="Legend">`;
            }
        */

        // VETTORIALI
        if (layer.getStyle) {

            let style = layer.getStyle();

            // Se è una funzione, ricaviamo uno stile reale
            if (typeof style === 'function') {
                const features = layer.getSource()?.getFeatures?.() || [];
                if (features.length > 0) {
                    style = style(features[0]);
                }
            }

            const title = layer.get('title');
            html += getLegendElement(title);
        }
    }

    // SCANSIONE DI TUTTI I LAYER DELLA MAPPA
    map.getLayers().forEach(layer => processLayer(layer));

    html += '</ul>';
    document.getElementById('legend-content').innerHTML = html;
}


function addVisibilityListeners(layer) {

    // Caso 1: è un gruppo
    if (layer instanceof ol.layer.Group) {
        layer.getLayers().forEach(sub => addVisibilityListeners(sub));
    }

    // Caso 2: è un layer normale
    if (layer instanceof ol.layer.Layer) {
        layer.on('change:visible', updateLegend);
    }
}

// Add the layer groups to the map here, at the end of the script!
//map.addLayer(overlayLayers);
// attiva i listener
map.getLayers().forEach(layer => addVisibilityListeners(layer));
//addVisibilityListeners(overlayLayers);
updateLegend();
