var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Edinburghward_1 = new ol.format.GeoJSON();
var features_Edinburghward_1 = format_Edinburghward_1.readFeatures(json_Edinburghward_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edinburghward_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edinburghward_1.addFeatures(features_Edinburghward_1);
var lyr_Edinburghward_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edinburghward_1, 
                style: style_Edinburghward_1,
                popuplayertitle: 'Edinburgh ward',
                interactive: true,
                title: '<img src="styles/legend/Edinburghward_1.png" /> Edinburgh ward'
            });
var format_Edinburghcommunityservices_2 = new ol.format.GeoJSON();
var features_Edinburghcommunityservices_2 = format_Edinburghcommunityservices_2.readFeatures(json_Edinburghcommunityservices_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edinburghcommunityservices_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edinburghcommunityservices_2.addFeatures(features_Edinburghcommunityservices_2);
var lyr_Edinburghcommunityservices_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edinburghcommunityservices_2, 
                style: style_Edinburghcommunityservices_2,
                popuplayertitle: 'Edinburgh community services',
                interactive: true,
    title: 'Edinburgh community services<br />\
    <img src="styles/legend/Edinburghcommunityservices_2_0.png" /> Adult Learning<br />\
    <img src="styles/legend/Edinburghcommunityservices_2_1.png" /> Early Years<br />\
    <img src="styles/legend/Edinburghcommunityservices_2_2.png" /> Employability<br />\
    <img src="styles/legend/Edinburghcommunityservices_2_3.png" /> Older People\'s Care<br />\
    <img src="styles/legend/Edinburghcommunityservices_2_4.png" /> Support for Carers<br />\
    <img src="styles/legend/Edinburghcommunityservices_2_5.png" /> Uniformed organisations<br />\
    <img src="styles/legend/Edinburghcommunityservices_2_6.png" /> Youth Work and Youth Clubs<br />\
    <img src="styles/legend/Edinburghcommunityservices_2_7.png" /> Other<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Edinburghward_1.setVisible(true);lyr_Edinburghcommunityservices_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Edinburghward_1,lyr_Edinburghcommunityservices_2];
lyr_Edinburghward_1.set('fieldAliases', {'FID': 'FID', 'WD25CD': 'WD25CD', 'WD25NM': 'Ward name', 'WD25NMW': 'WD25NMW', 'LAD25CD': 'LAD25CD', 'LAD25NM': 'LAD25NM', 'LAD25NMW': 'LAD25NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LONG': 'LONG', 'LAT': 'LAT', 'GlobalID': 'GlobalID', });
lyr_Edinburghcommunityservices_2.set('fieldAliases', {'Name of Service': 'Name of Service', 'Service Typology': 'Service Typology', 'Organisation Providing Service': 'Organisation Providing Service', 'Associated Space(s)': 'Associated Space(s)', 'Website Link for Service': 'Website Link for Service', 'Contact No. for Service': 'Contact No. for Service', 'Email for Service': 'Email for Service', 'Description of service': 'Description of service', 'Data source': 'Data source', 'Assoc web link': 'Assoc web link', 'Postcode': 'Postcode', 'Ward': 'Ward', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Edinburghward_1.set('fieldImages', {'FID': 'Range', 'WD25CD': 'TextEdit', 'WD25NM': 'TextEdit', 'WD25NMW': 'TextEdit', 'LAD25CD': 'TextEdit', 'LAD25NM': 'TextEdit', 'LAD25NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LONG': 'TextEdit', 'LAT': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_Edinburghcommunityservices_2.set('fieldImages', {'Name of Service': 'TextEdit', 'Service Typology': 'TextEdit', 'Organisation Providing Service': 'TextEdit', 'Associated Space(s)': 'TextEdit', 'Website Link for Service': 'TextEdit', 'Contact No. for Service': 'TextEdit', 'Email for Service': 'TextEdit', 'Description of service': 'TextEdit', 'Data source': 'TextEdit', 'Assoc web link': 'TextEdit', 'Postcode': 'TextEdit', 'Ward': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Edinburghward_1.set('fieldLabels', {'FID': 'hidden field', 'WD25CD': 'hidden field', 'WD25NM': 'no label', 'WD25NMW': 'hidden field', 'LAD25CD': 'hidden field', 'LAD25NM': 'hidden field', 'LAD25NMW': 'hidden field', 'BNG_E': 'hidden field', 'BNG_N': 'hidden field', 'LONG': 'hidden field', 'LAT': 'hidden field', 'GlobalID': 'hidden field', });
lyr_Edinburghcommunityservices_2.set('fieldLabels', {'Name of Service': 'inline label - visible with data', 'Service Typology': 'inline label - visible with data', 'Organisation Providing Service': 'inline label - visible with data', 'Associated Space(s)': 'inline label - visible with data', 'Website Link for Service': 'hidden field', 'Contact No. for Service': 'hidden field', 'Email for Service': 'hidden field', 'Description of service': 'hidden field', 'Data source': 'hidden field', 'Assoc web link': 'hidden field', 'Postcode': 'inline label - visible with data', 'Ward': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Edinburghcommunityservices_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});