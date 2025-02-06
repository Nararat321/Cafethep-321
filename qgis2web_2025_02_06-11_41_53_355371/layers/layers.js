ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11067020.492644, 1280790.825658, 11099445.069257, 1302728.001159]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_321_1 = new ol.format.GeoJSON();
var features_321_1 = format_321_1.readFeatures(json_321_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_321_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_321_1.addFeatures(features_321_1);
var lyr_321_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_321_1, 
                style: style_321_1,
                popuplayertitle: 'นาหูกวาง 321',
                interactive: true,
    title: 'นาหูกวาง 321<br />\
    <img src="styles/legend/321_1_0.png" /> ครัวป้าโต ข้าวแกงป้าโต สาขา3<br />\
    <img src="styles/legend/321_1_1.png" /> เฌอปาล์มบ้านพัก&คาเฟ่<br />\
    <img src="styles/legend/321_1_2.png" /> เดอะบีช ทับสะแก<br />\
    <img src="styles/legend/321_1_3.png" /> บ้านธนพร (ต้อย)<br />\
    <img src="styles/legend/321_1_4.png" /> โบสถ์เหรียญบาท<br />\
    <img src="styles/legend/321_1_5.png" /> ป่าสนเหมืองแร่<br />\
    <img src="styles/legend/321_1_6.png" /> ร้านครัวกันเอง<br />\
    <img src="styles/legend/321_1_7.png" /> ร้านนิทานคอฟฟี่ กาแฟฟกลางซอย<br />\
    <img src="styles/legend/321_1_8.png" /> วัดนาหูกวาง<br />\
    <img src="styles/legend/321_1_9.png" /> วัดบ้านทุ่งเคล็ด<br />\
    <img src="styles/legend/321_1_10.png" /> วัดห้วยลึก<br />\
    <img src="styles/legend/321_1_11.png" /> วิสาหกิจชุมชน ผลิตภัณฑ์จากมะพร้าวทับสะแก พีซีพีโคโค่นัท<br />\
    <img src="styles/legend/321_1_12.png" /> อ่างเก็บน้ำคลองกระจะ  <br />\
    <img src="styles/legend/321_1_13.png" /> Exactly Coffee Thabsakae<br />\
    <img src="styles/legend/321_1_14.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_321_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_321_1];
lyr_321_1.set('fieldAliases', {'ลำดับ': 'ลำดับ', 'ชื่อสถานที่': 'ชื่อสถานที่', 'ละติจูด': 'ละติจูด', 'ลองจิจูด': 'ลองจิจูด', 'ประเภทสถานที่': 'ประเภทสถานที่', 'ที่อยู่': 'ที่อยู่', 'ตำบล': 'ตำบล', 'อำเภอ': 'อำเภอ', 'จังหวัด': 'จังหวัด', 'ภาพสถานที่': 'ภาพสถานที่', 'facebook': 'facebook', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', });
lyr_321_1.set('fieldImages', {'ลำดับ': 'Range', 'ชื่อสถานที่': 'TextEdit', 'ละติจูด': 'TextEdit', 'ลองจิจูด': 'TextEdit', 'ประเภทสถานที่': 'TextEdit', 'ที่อยู่': 'TextEdit', 'ตำบล': 'TextEdit', 'อำเภอ': 'TextEdit', 'จังหวัด': 'TextEdit', 'ภาพสถานที่': 'TextEdit', 'facebook': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', });
lyr_321_1.set('fieldLabels', {'ลำดับ': 'hidden field', 'ชื่อสถานที่': 'header label - always visible', 'ละติจูด': 'hidden field', 'ลองจิจูด': 'hidden field', 'ประเภทสถานที่': 'header label - always visible', 'ที่อยู่': 'hidden field', 'ตำบล': 'header label - always visible', 'อำเภอ': 'header label - always visible', 'จังหวัด': 'header label - always visible', 'ภาพสถานที่': 'header label - always visible', 'facebook': 'inline label - visible with data', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', });
lyr_321_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});