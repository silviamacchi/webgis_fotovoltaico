var wms_layers = [];

var format_AREEIDONEEPROVAaree_idonee_0 = new ol.format.GeoJSON();
var features_AREEIDONEEPROVAaree_idonee_0 = format_AREEIDONEEPROVAaree_idonee_0.readFeatures(json_AREEIDONEEPROVAaree_idonee_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREEIDONEEPROVAaree_idonee_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREEIDONEEPROVAaree_idonee_0.addFeatures(features_AREEIDONEEPROVAaree_idonee_0);
var lyr_AREEIDONEEPROVAaree_idonee_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREEIDONEEPROVAaree_idonee_0, 
                style: style_AREEIDONEEPROVAaree_idonee_0,
                popuplayertitle: 'AREE IDONEE PROVA — aree_idonee',
                interactive: true,
                title: '<img src="styles/legend/AREEIDONEEPROVAaree_idonee_0.png" /> AREE IDONEE PROVA — aree_idonee'
            });
var format_BenipaesaggisticiArt142c1aTerritoricostieri_1 = new ol.format.GeoJSON();
var features_BenipaesaggisticiArt142c1aTerritoricostieri_1 = format_BenipaesaggisticiArt142c1aTerritoricostieri_1.readFeatures(json_BenipaesaggisticiArt142c1aTerritoricostieri_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenipaesaggisticiArt142c1aTerritoricostieri_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenipaesaggisticiArt142c1aTerritoricostieri_1.addFeatures(features_BenipaesaggisticiArt142c1aTerritoricostieri_1);
var lyr_BenipaesaggisticiArt142c1aTerritoricostieri_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenipaesaggisticiArt142c1aTerritoricostieri_1, 
                style: style_BenipaesaggisticiArt142c1aTerritoricostieri_1,
                popuplayertitle: 'Beni paesaggistici - Art. 142, c.1, a) Territori costieri',
                interactive: true,
                title: '<img src="styles/legend/BenipaesaggisticiArt142c1aTerritoricostieri_1.png" /> Beni paesaggistici - Art. 142, c.1, a) Territori costieri'
            });
var format_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2 = new ol.format.GeoJSON();
var features_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2 = format_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2.readFeatures(json_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2.addFeatures(features_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2);
var lyr_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2, 
                style: style_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2,
                popuplayertitle: 'Beni paesaggistici - Art. 142, c.1, b) Territori contermini ai laghi',
                interactive: true,
                title: '<img src="styles/legend/BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2.png" /> Beni paesaggistici - Art. 142, c.1, b) Territori contermini ai laghi'
            });
/*var format_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3 = new ol.format.GeoJSON();
var features_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3 = format_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3.readFeatures(json_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3.addFeatures(features_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3);
var lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3, 
                style: style_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3,
                popuplayertitle: 'Beni paesaggistici - Art. 142, c.1, c) Fiumi, torrenti, corsi d\'acqua (poligonali)',
                interactive: true,
                title: '<img src="styles/legend/BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3.png" /> Beni paesaggistici - Art. 142, c.1, c) Fiumi, torrenti, corsi d\'acqua (poligonali)'
            }); */
var format_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4 = new ol.format.GeoJSON();
var features_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4 = format_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4.readFeatures(json_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4.addFeatures(features_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4);
var lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4, 
                style: style_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4,
                popuplayertitle: 'Beni paesaggistici - Art. 142, c.1, c) Fiumi, torrenti, corsi d\'acqua (lineari)',
                interactive: true,
                title: '<img src="styles/legend/BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4.png" /> Beni paesaggistici - Art. 142, c.1, c) Fiumi, torrenti, corsi d\'acqua (lineari)'
            });
var format_BenipaesaggisticiArt142c1dMontagne_5 = new ol.format.GeoJSON();
var features_BenipaesaggisticiArt142c1dMontagne_5 = format_BenipaesaggisticiArt142c1dMontagne_5.readFeatures(json_BenipaesaggisticiArt142c1dMontagne_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenipaesaggisticiArt142c1dMontagne_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenipaesaggisticiArt142c1dMontagne_5.addFeatures(features_BenipaesaggisticiArt142c1dMontagne_5);
var lyr_BenipaesaggisticiArt142c1dMontagne_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenipaesaggisticiArt142c1dMontagne_5, 
                style: style_BenipaesaggisticiArt142c1dMontagne_5,
                popuplayertitle: 'Beni paesaggistici - Art. 142, c.1, d) Montagne',
                interactive: true,
                title: '<img src="styles/legend/BenipaesaggisticiArt142c1dMontagne_5.png" /> Beni paesaggistici - Art. 142, c.1, d) Montagne'
            });
var format_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6 = new ol.format.GeoJSON();
var features_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6 = format_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6.readFeatures(json_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6.addFeatures(features_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6);
var lyr_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6, 
                style: style_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6,
                popuplayertitle: 'Beni paesaggistici - Art. 142, c.1, f) Parchi e riserve — beni_paesaggistici__art_142_c1_f_parchi_e_riserve',
                interactive: true,
                title: '<img src="styles/legend/BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6.png" /> Beni paesaggistici - Art. 142, c.1, f) Parchi e riserve — beni_paesaggistici__art_142_c1_f_parchi_e_riserve'
            });
var format_BenipaesaggisticiArt142c1iZoneumide_7 = new ol.format.GeoJSON();
var features_BenipaesaggisticiArt142c1iZoneumide_7 = format_BenipaesaggisticiArt142c1iZoneumide_7.readFeatures(json_BenipaesaggisticiArt142c1iZoneumide_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenipaesaggisticiArt142c1iZoneumide_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenipaesaggisticiArt142c1iZoneumide_7.addFeatures(features_BenipaesaggisticiArt142c1iZoneumide_7);
var lyr_BenipaesaggisticiArt142c1iZoneumide_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenipaesaggisticiArt142c1iZoneumide_7, 
                style: style_BenipaesaggisticiArt142c1iZoneumide_7,
                popuplayertitle: 'Beni paesaggistici - Art. 142, c.1, i) Zone umide',
                interactive: true,
                title: '<img src="styles/legend/BenipaesaggisticiArt142c1iZoneumide_7.png" /> Beni paesaggistici - Art. 142, c.1, i) Zone umide'
            });
/*var format_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8 = new ol.format.GeoJSON();
var features_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8 = format_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8.readFeatures(json_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8.addFeatures(features_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8);
var lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8, 
                style: style_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8,
                popuplayertitle: 'Beni paesaggistici - Art. 142, c.1, c) Fiumi, torrenti, corsi d\'acqua (fasce 150 m.)',
                interactive: true,
                title: '<img src="styles/legend/BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8.png" /> Beni paesaggistici - Art. 142, c.1, c) Fiumi, torrenti, corsi d\'acqua (fasce 150 m.)'
            }); */
var format_BenipaesaggisticiArticolo136aree_9 = new ol.format.GeoJSON();
var features_BenipaesaggisticiArticolo136aree_9 = format_BenipaesaggisticiArticolo136aree_9.readFeatures(json_BenipaesaggisticiArticolo136aree_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenipaesaggisticiArticolo136aree_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenipaesaggisticiArticolo136aree_9.addFeatures(features_BenipaesaggisticiArticolo136aree_9);
var lyr_BenipaesaggisticiArticolo136aree_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenipaesaggisticiArticolo136aree_9, 
                style: style_BenipaesaggisticiArticolo136aree_9,
                popuplayertitle: 'Beni paesaggistici - Articolo 136 (aree)',
                interactive: true,
                title: '<img src="styles/legend/BenipaesaggisticiArticolo136aree_9.png" /> Beni paesaggistici - Articolo 136 (aree)'
            });
var format_BenipaesaggisticiArticolo136punti_10 = new ol.format.GeoJSON();
var features_BenipaesaggisticiArticolo136punti_10 = format_BenipaesaggisticiArticolo136punti_10.readFeatures(json_BenipaesaggisticiArticolo136punti_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenipaesaggisticiArticolo136punti_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenipaesaggisticiArticolo136punti_10.addFeatures(features_BenipaesaggisticiArticolo136punti_10);
var lyr_BenipaesaggisticiArticolo136punti_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenipaesaggisticiArticolo136punti_10, 
                style: style_BenipaesaggisticiArticolo136punti_10,
                popuplayertitle: 'Beni paesaggistici - Articolo 136 (punti)',
                interactive: true,
                title: '<img src="styles/legend/BenipaesaggisticiArticolo136punti_10.png" /> Beni paesaggistici - Articolo 136 (punti)'
            });
var format_Beniarcheologici_11 = new ol.format.GeoJSON();
var features_Beniarcheologici_11 = format_Beniarcheologici_11.readFeatures(json_Beniarcheologici_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beniarcheologici_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beniarcheologici_11.addFeatures(features_Beniarcheologici_11);
var lyr_Beniarcheologici_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beniarcheologici_11, 
                style: style_Beniarcheologici_11,
                popuplayertitle: 'Beni archeologici',
                interactive: true,
                title: '<img src="styles/legend/Beniarcheologici_11.png" /> Beni archeologici'
            });
var format_PatrimonioculturaleTourerit_12 = new ol.format.GeoJSON();
var features_PatrimonioculturaleTourerit_12 = format_PatrimonioculturaleTourerit_12.readFeatures(json_PatrimonioculturaleTourerit_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PatrimonioculturaleTourerit_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PatrimonioculturaleTourerit_12.addFeatures(features_PatrimonioculturaleTourerit_12);
var lyr_PatrimonioculturaleTourerit_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PatrimonioculturaleTourerit_12, 
                style: style_PatrimonioculturaleTourerit_12,
                popuplayertitle: 'Patrimonio culturale Tourer.it',
                interactive: true,
                title: '<img src="styles/legend/PatrimonioculturaleTourerit_12.png" /> Patrimonio culturale Tourer.it'
            });
var format_Beniarchitettonicitutelati_13 = new ol.format.GeoJSON();
var features_Beniarchitettonicitutelati_13 = format_Beniarchitettonicitutelati_13.readFeatures(json_Beniarchitettonicitutelati_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Beniarchitettonicitutelati_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Beniarchitettonicitutelati_13.addFeatures(features_Beniarchitettonicitutelati_13);
var lyr_Beniarchitettonicitutelati_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Beniarchitettonicitutelati_13, 
                style: style_Beniarchitettonicitutelati_13,
                popuplayertitle: 'Beni architettonici tutelati',
                interactive: true,
                title: '<img src="styles/legend/Beniarchitettonicitutelati_13.png" /> Beni architettonici tutelati'
            });
var format_FasciadirispettoTerna_14 = new ol.format.GeoJSON();
var features_FasciadirispettoTerna_14 = format_FasciadirispettoTerna_14.readFeatures(json_FasciadirispettoTerna_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasciadirispettoTerna_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasciadirispettoTerna_14.addFeatures(features_FasciadirispettoTerna_14);
var lyr_FasciadirispettoTerna_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasciadirispettoTerna_14, 
                style: style_FasciadirispettoTerna_14,
                popuplayertitle: 'Fascia di rispetto Terna',
                interactive: true,
                title: '<img src="styles/legend/FasciadirispettoTerna_14.png" /> Fascia di rispetto Terna'
            });
/*var format_Fasciadirispettostradate_15 = new ol.format.GeoJSON();
var features_Fasciadirispettostradate_15 = format_Fasciadirispettostradate_15.readFeatures(json_Fasciadirispettostradate_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasciadirispettostradate_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasciadirispettostradate_15.addFeatures(features_Fasciadirispettostradate_15);
var lyr_Fasciadirispettostradate_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasciadirispettostradate_15, 
                style: style_Fasciadirispettostradate_15,
                popuplayertitle: 'Fascia di rispetto stradate',
                interactive: true,
                title: '<img src="styles/legend/Fasciadirispettostradate_15.png" /> Fascia di rispetto stradate'
            });  */
var format_Fasciadirispettoautostrada_16 = new ol.format.GeoJSON();
var features_Fasciadirispettoautostrada_16 = format_Fasciadirispettoautostrada_16.readFeatures(json_Fasciadirispettoautostrada_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasciadirispettoautostrada_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasciadirispettoautostrada_16.addFeatures(features_Fasciadirispettoautostrada_16);
var lyr_Fasciadirispettoautostrada_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasciadirispettoautostrada_16, 
                style: style_Fasciadirispettoautostrada_16,
                popuplayertitle: 'Fascia di rispetto autostrada',
                interactive: true,
                title: '<img src="styles/legend/Fasciadirispettoautostrada_16.png" /> Fascia di rispetto autostrada'
            });
var format_COMUNIRN_17 = new ol.format.GeoJSON();
var features_COMUNIRN_17 = format_COMUNIRN_17.readFeatures(json_COMUNIRN_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMUNIRN_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNIRN_17.addFeatures(features_COMUNIRN_17);
var lyr_COMUNIRN_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMUNIRN_17, 
                style: style_COMUNIRN_17,
                popuplayertitle: 'COMUNI RN',
                interactive: true,
                title: '<img src="styles/legend/COMUNIRN_17.png" /> COMUNI RN'
            });
var format_PROVINCIARN_18 = new ol.format.GeoJSON();
var features_PROVINCIARN_18 = format_PROVINCIARN_18.readFeatures(json_PROVINCIARN_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PROVINCIARN_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PROVINCIARN_18.addFeatures(features_PROVINCIARN_18);
var lyr_PROVINCIARN_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PROVINCIARN_18, 
                style: style_PROVINCIARN_18,
                popuplayertitle: 'PROVINCIA RN',
                interactive: true,
                title: '<img src="styles/legend/PROVINCIARN_18.png" /> PROVINCIA RN'
            });
var group_LIMITIAMMINISTRATIVI = new ol.layer.Group({
                                layers: [lyr_COMUNIRN_17,lyr_PROVINCIARN_18,],
                                fold: 'open',
                                title: 'LIMITI AMMINISTRATIVI'});
var group_FASCIEDIRISPETTO = new ol.layer.Group({
                                layers: [lyr_FasciadirispettoTerna_14,//lyr_Fasciadirispettostradate_15,
                                         lyr_Fasciadirispettoautostrada_16,],
                                fold: 'open',
                                title: 'FASCIE DI RISPETTO'});
var group_VINCOLI = new ol.layer.Group({
                                layers: [lyr_BenipaesaggisticiArt142c1aTerritoricostieri_1,lyr_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2,lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3,lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4,lyr_BenipaesaggisticiArt142c1dMontagne_5,lyr_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6,lyr_BenipaesaggisticiArt142c1iZoneumide_7,
                                    //lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8,
                                    lyr_BenipaesaggisticiArticolo136aree_9,lyr_BenipaesaggisticiArticolo136punti_10,lyr_Beniarcheologici_11,lyr_PatrimonioculturaleTourerit_12,lyr_Beniarchitettonicitutelati_13,],
                                fold: 'open',
                                title: 'VINCOLI'});
var group_MAPPEDIBASE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'MAPPE DI BASE'});

lyr_AREEIDONEEPROVAaree_idonee_0.setVisible(true);lyr_BenipaesaggisticiArt142c1aTerritoricostieri_1.setVisible(true);lyr_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2.setVisible(true);
//lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3.setVisible(true);
lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4.setVisible(true);lyr_BenipaesaggisticiArt142c1dMontagne_5.setVisible(true);lyr_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6.setVisible(true);lyr_BenipaesaggisticiArt142c1iZoneumide_7.setVisible(true);
//lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8.setVisible(true);
lyr_BenipaesaggisticiArticolo136aree_9.setVisible(true);lyr_BenipaesaggisticiArticolo136punti_10.setVisible(true);lyr_Beniarcheologici_11.setVisible(true);lyr_PatrimonioculturaleTourerit_12.setVisible(true);lyr_Beniarchitettonicitutelati_13.setVisible(true);lyr_FasciadirispettoTerna_14.setVisible(true);
//lyr_Fasciadirispettostradate_15.setVisible(true);
lyr_Fasciadirispettoautostrada_16.setVisible(true);lyr_COMUNIRN_17.setVisible(true);lyr_PROVINCIARN_18.setVisible(true);
var layersList = [lyr_AREEIDONEEPROVAaree_idonee_0,group_VINCOLI,group_FASCIEDIRISPETTO,group_LIMITIAMMINISTRATIVI];
lyr_AREEIDONEEPROVAaree_idonee_0.set('fieldAliases', {'fid': 'fid', 'gml_id': 'gml_id', 'lowerCorne': 'lowerCorne', 'upperCorne': 'upperCorne', 'INSPIREID_': 'INSPIREID_', 'INSPIREI_1': 'INSPIREI_1', 'LABEL': 'LABEL', 'NATIONALCA': 'NATIONALCA', 'ADMINISTRA': 'ADMINISTRA', 'layer': 'layer', 'path': 'path', 'OBJECTID': 'OBJECTID', 'SIGLA': 'SIGLA', 'COD_1': 'COD_1', 'COD_2': 'COD_2', 'COD_3': 'COD_3', 'COD_4': 'COD_4', 'COD_TOT': 'COD_TOT', 'DESCR': 'DESCR', 'HECTARES': 'HECTARES', 'SHAPE.AREA': 'SHAPE.AREA', 'SHAPE.LEN': 'SHAPE.LEN', });
lyr_BenipaesaggisticiArt142c1aTerritoricostieri_1.set('fieldAliases', {'gid': 'gid', 'data_cts': 'data_cts', });
lyr_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2.set('fieldAliases', {'gid': 'gid', 'id_e': 'id_e', 'nm_sda': 'nm_sda', 'tipo_lago': 'tipo_lago', 'perimetro': 'perimetro', 'data_cts': 'data_cts', });
//lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3.set('fieldAliases', {'gid': 'gid', 'id_provinc': 'id_provinc', 'num': 'num', 'denominazi': 'denominazi', 'norma': 'norma', 'ctr': 'ctr', 'foce_sbocc': 'foce_sbocc', 'limiti': 'limiti', 'escluso': 'escluso', 'tratto_esc': 'tratto_esc', 'motivo_esc': 'motivo_esc', 'data_agg': 'data_agg', 'id_cac': 'id_cac', });
lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4.set('fieldAliases', {'gid': 'gid', 'id_provinc': 'id_provinc', 'num': 'num', 'denominazi': 'denominazi', 'norma': 'norma', 'ctr': 'ctr', 'foce_sbocc': 'foce_sbocc', 'limiti': 'limiti', 'escluso': 'escluso', 'tratto_esc': 'tratto_esc', 'motivo_esc': 'motivo_esc', 'data_agg': 'data_agg', 'id_cac': 'id_cac', });
lyr_BenipaesaggisticiArt142c1dMontagne_5.set('fieldAliases', {'gid': 'gid', 'quota': 'quota', 'data_cts': 'data_cts', });
lyr_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'objectid': 'objectid', 'aapp': 'aapp', 'tipologia': 'tipologia', 'nome': 'nome', 'nome_lungo': 'nome_lungo', 'link_web': 'link_web', 'fuori_rer': 'fuori_rer', 'sup_ha': 'sup_ha', });
lyr_BenipaesaggisticiArt142c1iZoneumide_7.set('fieldAliases', {'gid': 'gid', 'nome': 'nome', 'atto': 'atto', 'data_cts': 'data_cts', });
//lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'data_agg': 'data_agg', });
lyr_BenipaesaggisticiArticolo136aree_9.set('fieldAliases', {'gid': 'gid', 'id_imm': 'id_imm', 'titolo': 'titolo', 'descrizion': 'descrizion', 'foto_princ': 'foto_princ', 'link': 'link', 'stato': 'stato', });
lyr_BenipaesaggisticiArticolo136punti_10.set('fieldAliases', {'gid': 'gid', 'id_imm': 'id_imm', 'titolo': 'titolo', 'link': 'link', 'stato': 'stato', });
lyr_Beniarcheologici_11.set('fieldAliases', {'gid': 'gid', 'id_archeo': 'id_archeo', 'codice': 'codice', 'nome': 'nome', 'titolo': 'titolo', 'tipo_propr': 'tipo_propr', 'comuni': 'comuni', 'sigla_pro': 'sigla_pro', 'localita': 'localita', 'tipologie': 'tipologie', 'provvedime': 'provvedime', 'data_ultim': 'data_ultim', 'ultimo_pro': 'ultimo_pro', 'rif_legge_': 'rif_legge_', 'tutela': 'tutela', 'vincolo': 'vincolo', });
lyr_PatrimonioculturaleTourerit_12.set('fieldAliases', {'gid': 'gid', 'codice': 'codice', 'nome': 'nome', 'denominazi': 'denominazi', 'sigla_pro': 'sigla_pro', 'provincia': 'provincia', 'comune': 'comune', 'diocesi': 'diocesi', 'frazione': 'frazione', 'indirizzo': 'indirizzo', 'tipo_tutel': 'tipo_tutel', 'tipologia': 'tipologia', 'cronologia': 'cronologia', 'id_valutaz': 'id_valutaz', 'foto': 'foto', 'autore': 'autore', 'fonte': 'fonte', 'thumb': 'thumb', 'tipologie_': 'tipologie_', 'tutela': 'tutela', 'descrizion': 'descrizion', 'categoria': 'categoria', 'icona_mapp': 'icona_mapp', 'icona_sche': 'icona_sche', 'localita': 'localita', 'link': 'link', 'categoria_': 'categoria_', 'tipologia_': 'tipologia_', 'tipologi_1': 'tipologi_1', 'cronolog_1': 'cronolog_1', 'tipo_tut_1': 'tipo_tut_1', 'sito_web': 'sito_web', 'avvisi_fru': 'avvisi_fru', 'codice_web': 'codice_web', 'data_upd': 'data_upd', 'link_sched': 'link_sched', 'valutazion': 'valutazion', 'lon': 'lon', 'lat': 'lat', 'comune_alt': 'comune_alt', 'descrizi_1': 'descrizi_1', 'id_eta': 'id_eta', 'eta': 'eta', 'eta_en': 'eta_en', 'fai': 'fai', 'viv': 'viv', 'comune2': 'comune2', 'id_wikidat': 'id_wikidat', });
lyr_Beniarchitettonicitutelati_13.set('fieldAliases', {'gid': 'gid', 'codice': 'codice', 'nome': 'nome', 'proprietar': 'proprietar', 'provincia': 'provincia', 'comune': 'comune', 'diocesi': 'diocesi', 'frazione': 'frazione', 'indirizzo': 'indirizzo', 'tipo_tutel': 'tipo_tutel', 'tipo_propr': 'tipo_propr', 'categoria': 'categoria', 'eta': 'eta', 'eta_attest': 'eta_attest', 'stato': 'stato', 'data_cambi': 'data_cambi', 'data_upd': 'data_upd', 'lon': 'lon', 'lat': 'lat', 'x': 'x', 'y': 'y', 'guidarossa': 'guidarossa', 'link_fai': 'link_fai', 'foto_princ': 'foto_princ', 'autore_fot': 'autore_fot', 'estense': 'estense', 'id_regione': 'id_regione', 'in_tourer': 'in_tourer', 'etichetta': 'etichetta', });
lyr_FasciadirispettoTerna_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'power': 'power', 'cables': 'cables', 'ref': 'ref', 'voltage': 'voltage', 'wires': 'wires', 'it_lombard': 'it_lombard', 'fixme': 'fixme', 'note': 'note', 'operator': 'operator', 'source': 'source', 'old_ref': 'old_ref', 'operator_w': 'operator_w', 'operator_1': 'operator_1', 'line': 'line', 'frequency': 'frequency', 'layer': 'layer', 'circuits': 'circuits', 'ref_left': 'ref_left', 'ref_right': 'ref_right', 'old_ref_le': 'old_ref_le', 'old_ref_ri': 'old_ref_ri', 'short_name': 'short_name', 'constructi': 'constructi', 'old_name': 'old_name', 'disused': 'disused', });
//lyr_Fasciadirispettostradate_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'AGVAL': 'AGVAL', 'CF_ES': 'CF_ES', 'D_CF_ES': 'D_CF_ES', 'D_STATO': 'D_STATO', 'D_TY_SEDE': 'D_TY_SEDE', 'ID_E': 'ID_E', 'OBJECTID': 'OBJECTID', 'SHAPE.AREA': 'SHAPE.AREA', 'SHAPE.LEN': 'SHAPE.LEN', 'STATO': 'STATO', 'TY_SEDE': 'TY_SEDE', 'COMP_FONTI': 'COMP_FONTI', 'DATA_A': 'DATA_A', 'DATA_AGG': 'DATA_AGG', 'DATA_DA': 'DATA_DA', 'DT_INI_VAL': 'DT_INI_VAL', 'DT_PRES': 'DT_PRES', 'D_METODO': 'D_METODO', 'D_TIPO_AGG': 'D_TIPO_AGG', 'METODO': 'METODO', 'QUALITA': 'QUALITA', 'SEZ_ID_E': 'SEZ_ID_E', 'ST_CERTIF': 'ST_CERTIF', 'ST_VALID': 'ST_VALID', 'TIPO_FONTE': 'TIPO_FONTE', 'TY_E': 'TY_E', 'D_TY_AVS': 'D_TY_AVS', 'TY_AVS': 'TY_AVS', 'layer': 'layer', 'path': 'path', });
lyr_Fasciadirispettoautostrada_16.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SIGLA': 'SIGLA', 'COD_1': 'COD_1', 'COD_2': 'COD_2', 'COD_3': 'COD_3', 'COD_4': 'COD_4', 'COD_TOT': 'COD_TOT', 'DESCR': 'DESCR', 'HECTARES': 'HECTARES', 'SHAPE.AREA': 'SHAPE.AREA', 'SHAPE.LEN': 'SHAPE.LEN', });
lyr_COMUNIRN_17.set('fieldAliases', {'fid': 'fid', 'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PROVINCIARN_18.set('fieldAliases', {'fid': 'fid', 'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'DEN_PROV': 'DEN_PROV', 'DEN_CM': 'DEN_CM', 'DEN_UTS': 'DEN_UTS', 'SIGLA': 'SIGLA', 'TIPO_UTS': 'TIPO_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AREEIDONEEPROVAaree_idonee_0.set('fieldImages', {'fid': 'TextEdit', 'gml_id': 'TextEdit', 'lowerCorne': 'TextEdit', 'upperCorne': 'TextEdit', 'INSPIREID_': 'TextEdit', 'INSPIREI_1': 'TextEdit', 'LABEL': 'TextEdit', 'NATIONALCA': 'TextEdit', 'ADMINISTRA': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'OBJECTID': 'Range', 'SIGLA': 'TextEdit', 'COD_1': 'Range', 'COD_2': 'Range', 'COD_3': 'Range', 'COD_4': 'Range', 'COD_TOT': 'Range', 'DESCR': 'TextEdit', 'HECTARES': 'TextEdit', 'SHAPE.AREA': 'TextEdit', 'SHAPE.LEN': 'TextEdit', });
lyr_BenipaesaggisticiArt142c1aTerritoricostieri_1.set('fieldImages', {'gid': '', 'data_cts': '', });
lyr_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2.set('fieldImages', {'gid': '', 'id_e': '', 'nm_sda': '', 'tipo_lago': '', 'perimetro': '', 'data_cts': '', });
//lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3.set('fieldImages', {'gid': 'TextEdit', 'id_provinc': 'TextEdit', 'num': 'TextEdit', 'denominazi': 'TextEdit', 'norma': 'TextEdit', 'ctr': 'TextEdit', 'foce_sbocc': 'TextEdit', 'limiti': 'TextEdit', 'escluso': 'TextEdit', 'tratto_esc': 'TextEdit', 'motivo_esc': 'TextEdit', 'data_agg': 'TextEdit', 'id_cac': 'TextEdit', });
lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4.set('fieldImages', {'gid': '', 'id_provinc': '', 'num': '', 'denominazi': '', 'norma': '', 'ctr': '', 'foce_sbocc': '', 'limiti': '', 'escluso': '', 'tratto_esc': '', 'motivo_esc': '', 'data_agg': '', 'id_cac': '', });
lyr_BenipaesaggisticiArt142c1dMontagne_5.set('fieldImages', {'gid': '', 'quota': '', 'data_cts': '', });
lyr_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6.set('fieldImages', {'fid': '', 'gid': '', 'objectid': '', 'aapp': '', 'tipologia': '', 'nome': '', 'nome_lungo': '', 'link_web': '', 'fuori_rer': '', 'sup_ha': '', });
lyr_BenipaesaggisticiArt142c1iZoneumide_7.set('fieldImages', {'gid': '', 'nome': '', 'atto': '', 'data_cts': '', });
//lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8.set('fieldImages', {'fid': 'TextEdit', 'gid': 'TextEdit', 'data_agg': 'TextEdit', });
lyr_BenipaesaggisticiArticolo136aree_9.set('fieldImages', {'gid': 'TextEdit', 'id_imm': 'TextEdit', 'titolo': 'TextEdit', 'descrizion': 'TextEdit', 'foto_princ': 'TextEdit', 'link': 'TextEdit', 'stato': 'TextEdit', });
lyr_BenipaesaggisticiArticolo136punti_10.set('fieldImages', {'gid': 'TextEdit', 'id_imm': 'TextEdit', 'titolo': 'TextEdit', 'link': 'TextEdit', 'stato': 'TextEdit', });
lyr_Beniarcheologici_11.set('fieldImages', {'gid': '', 'id_archeo': '', 'codice': '', 'nome': '', 'titolo': '', 'tipo_propr': '', 'comuni': '', 'sigla_pro': '', 'localita': '', 'tipologie': '', 'provvedime': '', 'data_ultim': '', 'ultimo_pro': '', 'rif_legge_': '', 'tutela': '', 'vincolo': '', });
lyr_PatrimonioculturaleTourerit_12.set('fieldImages', {'gid': 'TextEdit', 'codice': 'TextEdit', 'nome': 'TextEdit', 'denominazi': 'TextEdit', 'sigla_pro': 'TextEdit', 'provincia': 'TextEdit', 'comune': 'TextEdit', 'diocesi': 'TextEdit', 'frazione': 'TextEdit', 'indirizzo': 'TextEdit', 'tipo_tutel': 'TextEdit', 'tipologia': 'TextEdit', 'cronologia': 'TextEdit', 'id_valutaz': 'TextEdit', 'foto': 'TextEdit', 'autore': 'TextEdit', 'fonte': 'TextEdit', 'thumb': 'TextEdit', 'tipologie_': 'TextEdit', 'tutela': 'TextEdit', 'descrizion': 'TextEdit', 'categoria': 'TextEdit', 'icona_mapp': 'TextEdit', 'icona_sche': 'TextEdit', 'localita': 'TextEdit', 'link': 'TextEdit', 'categoria_': 'TextEdit', 'tipologia_': 'TextEdit', 'tipologi_1': 'TextEdit', 'cronolog_1': 'TextEdit', 'tipo_tut_1': 'TextEdit', 'sito_web': 'TextEdit', 'avvisi_fru': 'TextEdit', 'codice_web': 'TextEdit', 'data_upd': 'TextEdit', 'link_sched': 'TextEdit', 'valutazion': 'TextEdit', 'lon': 'TextEdit', 'lat': 'TextEdit', 'comune_alt': 'TextEdit', 'descrizi_1': 'TextEdit', 'id_eta': 'TextEdit', 'eta': 'TextEdit', 'eta_en': 'TextEdit', 'fai': 'TextEdit', 'viv': 'TextEdit', 'comune2': 'TextEdit', 'id_wikidat': 'TextEdit', });
lyr_Beniarchitettonicitutelati_13.set('fieldImages', {'gid': 'TextEdit', 'codice': 'TextEdit', 'nome': 'TextEdit', 'proprietar': 'TextEdit', 'provincia': 'TextEdit', 'comune': 'TextEdit', 'diocesi': 'TextEdit', 'frazione': 'TextEdit', 'indirizzo': 'TextEdit', 'tipo_tutel': 'TextEdit', 'tipo_propr': 'TextEdit', 'categoria': 'TextEdit', 'eta': 'TextEdit', 'eta_attest': 'TextEdit', 'stato': 'TextEdit', 'data_cambi': 'TextEdit', 'data_upd': 'TextEdit', 'lon': 'TextEdit', 'lat': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'guidarossa': 'TextEdit', 'link_fai': 'TextEdit', 'foto_princ': 'TextEdit', 'autore_fot': 'TextEdit', 'estense': 'TextEdit', 'id_regione': 'TextEdit', 'in_tourer': 'TextEdit', 'etichetta': 'TextEdit', });
lyr_FasciadirispettoTerna_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'power': 'TextEdit', 'cables': 'TextEdit', 'ref': 'TextEdit', 'voltage': 'TextEdit', 'wires': 'TextEdit', 'it_lombard': 'TextEdit', 'fixme': 'TextEdit', 'note': 'TextEdit', 'operator': 'TextEdit', 'source': 'TextEdit', 'old_ref': 'TextEdit', 'operator_w': 'TextEdit', 'operator_1': 'TextEdit', 'line': 'TextEdit', 'frequency': 'TextEdit', 'layer': 'TextEdit', 'circuits': 'TextEdit', 'ref_left': 'TextEdit', 'ref_right': 'TextEdit', 'old_ref_le': 'TextEdit', 'old_ref_ri': 'TextEdit', 'short_name': 'TextEdit', 'constructi': 'TextEdit', 'old_name': 'TextEdit', 'disused': 'TextEdit', });
//lyr_Fasciadirispettostradate_15.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'AGVAL': 'TextEdit', 'CF_ES': 'Range', 'D_CF_ES': 'TextEdit', 'D_STATO': 'TextEdit', 'D_TY_SEDE': 'TextEdit', 'ID_E': 'TextEdit', 'OBJECTID': 'Range', 'SHAPE.AREA': 'TextEdit', 'SHAPE.LEN': 'TextEdit', 'STATO': 'Range', 'TY_SEDE': 'Range', 'COMP_FONTI': 'TextEdit', 'DATA_A': 'TextEdit', 'DATA_AGG': 'TextEdit', 'DATA_DA': 'TextEdit', 'DT_INI_VAL': 'TextEdit', 'DT_PRES': 'TextEdit', 'D_METODO': 'TextEdit', 'D_TIPO_AGG': 'TextEdit', 'METODO': 'Range', 'QUALITA': 'TextEdit', 'SEZ_ID_E': 'TextEdit', 'ST_CERTIF': 'TextEdit', 'ST_VALID': 'TextEdit', 'TIPO_FONTE': 'TextEdit', 'TY_E': 'TextEdit', 'D_TY_AVS': 'TextEdit', 'TY_AVS': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Fasciadirispettoautostrada_16.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'SIGLA': 'TextEdit', 'COD_1': 'Range', 'COD_2': 'Range', 'COD_3': 'Range', 'COD_4': 'Range', 'COD_TOT': 'Range', 'DESCR': 'TextEdit', 'HECTARES': 'TextEdit', 'SHAPE.AREA': 'TextEdit', 'SHAPE.LEN': 'TextEdit', });
lyr_COMUNIRN_17.set('fieldImages', {'fid': 'TextEdit', 'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PROVINCIARN_18.set('fieldImages', {'fid': 'TextEdit', 'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'DEN_PROV': 'TextEdit', 'DEN_CM': 'TextEdit', 'DEN_UTS': 'TextEdit', 'SIGLA': 'TextEdit', 'TIPO_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AREEIDONEEPROVAaree_idonee_0.set('fieldLabels', {'fid': 'no label', 'gml_id': 'no label', 'lowerCorne': 'no label', 'upperCorne': 'no label', 'INSPIREID_': 'no label', 'INSPIREI_1': 'no label', 'LABEL': 'no label', 'NATIONALCA': 'no label', 'ADMINISTRA': 'no label', 'layer': 'no label', 'path': 'no label', 'OBJECTID': 'no label', 'SIGLA': 'no label', 'COD_1': 'no label', 'COD_2': 'no label', 'COD_3': 'no label', 'COD_4': 'no label', 'COD_TOT': 'no label', 'DESCR': 'no label', 'HECTARES': 'no label', 'SHAPE.AREA': 'no label', 'SHAPE.LEN': 'no label', });
lyr_BenipaesaggisticiArt142c1aTerritoricostieri_1.set('fieldLabels', {'gid': 'no label', 'data_cts': 'no label', });
lyr_BenipaesaggisticiArt142c1bTerritoriconterminiailaghi_2.set('fieldLabels', {'gid': 'no label', 'id_e': 'no label', 'nm_sda': 'no label', 'tipo_lago': 'no label', 'perimetro': 'no label', 'data_cts': 'no label', });
//lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquapoligonali_3.set('fieldLabels', {'gid': 'no label', 'id_provinc': 'no label', 'num': 'no label', 'denominazi': 'no label', 'norma': 'no label', 'ctr': 'no label', 'foce_sbocc': 'no label', 'limiti': 'no label', 'escluso': 'no label', 'tratto_esc': 'no label', 'motivo_esc': 'no label', 'data_agg': 'no label', 'id_cac': 'no label', });
lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacqualineari_4.set('fieldLabels', {'gid': 'no label', 'id_provinc': 'no label', 'num': 'no label', 'denominazi': 'no label', 'norma': 'no label', 'ctr': 'no label', 'foce_sbocc': 'no label', 'limiti': 'no label', 'escluso': 'no label', 'tratto_esc': 'no label', 'motivo_esc': 'no label', 'data_agg': 'no label', 'id_cac': 'no label', });
lyr_BenipaesaggisticiArt142c1dMontagne_5.set('fieldLabels', {'gid': 'no label', 'quota': 'no label', 'data_cts': 'no label', });
lyr_BenipaesaggisticiArt142c1fParchieriservebeni_paesaggistici__art_142_c1_f_parchi_e_riserve_6.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'objectid': 'no label', 'aapp': 'no label', 'tipologia': 'no label', 'nome': 'no label', 'nome_lungo': 'no label', 'link_web': 'no label', 'fuori_rer': 'no label', 'sup_ha': 'no label', });
lyr_BenipaesaggisticiArt142c1iZoneumide_7.set('fieldLabels', {'gid': 'no label', 'nome': 'no label', 'atto': 'no label', 'data_cts': 'no label', });
//lyr_BenipaesaggisticiArt142c1cFiumitorrenticorsidacquafasce150m_8.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'data_agg': 'no label', });
lyr_BenipaesaggisticiArticolo136aree_9.set('fieldLabels', {'gid': 'no label', 'id_imm': 'no label', 'titolo': 'no label', 'descrizion': 'no label', 'foto_princ': 'no label', 'link': 'no label', 'stato': 'no label', });
lyr_BenipaesaggisticiArticolo136punti_10.set('fieldLabels', {'gid': 'no label', 'id_imm': 'no label', 'titolo': 'no label', 'link': 'no label', 'stato': 'no label', });
lyr_Beniarcheologici_11.set('fieldLabels', {'gid': 'no label', 'id_archeo': 'no label', 'codice': 'no label', 'nome': 'no label', 'titolo': 'no label', 'tipo_propr': 'no label', 'comuni': 'no label', 'sigla_pro': 'no label', 'localita': 'no label', 'tipologie': 'no label', 'provvedime': 'no label', 'data_ultim': 'no label', 'ultimo_pro': 'no label', 'rif_legge_': 'no label', 'tutela': 'no label', 'vincolo': 'no label', });
lyr_PatrimonioculturaleTourerit_12.set('fieldLabels', {'gid': 'no label', 'codice': 'no label', 'nome': 'no label', 'denominazi': 'no label', 'sigla_pro': 'no label', 'provincia': 'no label', 'comune': 'no label', 'diocesi': 'no label', 'frazione': 'no label', 'indirizzo': 'no label', 'tipo_tutel': 'no label', 'tipologia': 'no label', 'cronologia': 'no label', 'id_valutaz': 'no label', 'foto': 'no label', 'autore': 'no label', 'fonte': 'no label', 'thumb': 'no label', 'tipologie_': 'no label', 'tutela': 'no label', 'descrizion': 'no label', 'categoria': 'no label', 'icona_mapp': 'no label', 'icona_sche': 'no label', 'localita': 'no label', 'link': 'no label', 'categoria_': 'no label', 'tipologia_': 'no label', 'tipologi_1': 'no label', 'cronolog_1': 'no label', 'tipo_tut_1': 'no label', 'sito_web': 'no label', 'avvisi_fru': 'no label', 'codice_web': 'no label', 'data_upd': 'no label', 'link_sched': 'no label', 'valutazion': 'no label', 'lon': 'no label', 'lat': 'no label', 'comune_alt': 'no label', 'descrizi_1': 'no label', 'id_eta': 'no label', 'eta': 'no label', 'eta_en': 'no label', 'fai': 'no label', 'viv': 'no label', 'comune2': 'no label', 'id_wikidat': 'no label', });
lyr_Beniarchitettonicitutelati_13.set('fieldLabels', {'gid': 'no label', 'codice': 'no label', 'nome': 'no label', 'proprietar': 'no label', 'provincia': 'no label', 'comune': 'no label', 'diocesi': 'no label', 'frazione': 'no label', 'indirizzo': 'no label', 'tipo_tutel': 'no label', 'tipo_propr': 'no label', 'categoria': 'no label', 'eta': 'no label', 'eta_attest': 'no label', 'stato': 'no label', 'data_cambi': 'no label', 'data_upd': 'no label', 'lon': 'no label', 'lat': 'no label', 'x': 'no label', 'y': 'no label', 'guidarossa': 'no label', 'link_fai': 'no label', 'foto_princ': 'no label', 'autore_fot': 'no label', 'estense': 'no label', 'id_regione': 'no label', 'in_tourer': 'no label', 'etichetta': 'no label', });
lyr_FasciadirispettoTerna_14.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'power': 'no label', 'cables': 'no label', 'ref': 'no label', 'voltage': 'no label', 'wires': 'no label', 'it_lombard': 'no label', 'fixme': 'no label', 'note': 'no label', 'operator': 'no label', 'source': 'no label', 'old_ref': 'no label', 'operator_w': 'no label', 'operator_1': 'no label', 'line': 'no label', 'frequency': 'no label', 'layer': 'no label', 'circuits': 'no label', 'ref_left': 'no label', 'ref_right': 'no label', 'old_ref_le': 'no label', 'old_ref_ri': 'no label', 'short_name': 'no label', 'constructi': 'no label', 'old_name': 'no label', 'disused': 'no label', });
//lyr_Fasciadirispettostradate_15.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'AGVAL': 'no label', 'CF_ES': 'no label', 'D_CF_ES': 'no label', 'D_STATO': 'no label', 'D_TY_SEDE': 'no label', 'ID_E': 'no label', 'OBJECTID': 'no label', 'SHAPE.AREA': 'no label', 'SHAPE.LEN': 'no label', 'STATO': 'no label', 'TY_SEDE': 'no label', 'COMP_FONTI': 'no label', 'DATA_A': 'no label', 'DATA_AGG': 'no label', 'DATA_DA': 'no label', 'DT_INI_VAL': 'no label', 'DT_PRES': 'no label', 'D_METODO': 'no label', 'D_TIPO_AGG': 'no label', 'METODO': 'no label', 'QUALITA': 'no label', 'SEZ_ID_E': 'no label', 'ST_CERTIF': 'no label', 'ST_VALID': 'no label', 'TIPO_FONTE': 'no label', 'TY_E': 'no label', 'D_TY_AVS': 'no label', 'TY_AVS': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Fasciadirispettoautostrada_16.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SIGLA': 'no label', 'COD_1': 'no label', 'COD_2': 'no label', 'COD_3': 'no label', 'COD_4': 'no label', 'COD_TOT': 'no label', 'DESCR': 'no label', 'HECTARES': 'no label', 'SHAPE.AREA': 'no label', 'SHAPE.LEN': 'no label', });
lyr_COMUNIRN_17.set('fieldLabels', {'fid': 'no label', 'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PROVINCIARN_18.set('fieldLabels', {'fid': 'no label', 'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'DEN_PROV': 'no label', 'DEN_CM': 'no label', 'DEN_UTS': 'no label', 'SIGLA': 'no label', 'TIPO_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PROVINCIARN_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});