ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11079527.104036, 1283493.259275, 11095739.392343, 1294461.847026]);
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
                popuplayertitle: 'รวมคาเฟ่ 321',
                interactive: true,
    title: 'รวมคาเฟ่ 321<br />\
    <img src="styles/legend/321_1_0.png" /> <br />\
    <img src="styles/legend/321_1_1.png" /> 265 Cafe & Restaurant<br />\
    <img src="styles/legend/321_1_2.png" /> กาแฟ เกาะจัน<br />\
    <img src="styles/legend/321_1_3.png" /> ชุลมุน coffee<br />\
    <img src="styles/legend/321_1_4.png" /> ฌอ ชา Coffee<br />\
    <img src="styles/legend/321_1_5.png" /> เฌอปาล์มบ้านพัก&คาเฟ่<br />\
    <img src="styles/legend/321_1_6.png" /> ทุ่งยาวคาเฟ่<br />\
    <img src="styles/legend/321_1_7.png" /> บ้านสุณี คาเฟ่&ยำ BAAN SU NEE<br />\
    <img src="styles/legend/321_1_8.png" /> ร้านกาแฟอินทนิล<br />\
    <img src="styles/legend/321_1_9.png" /> ร้านนิทานคอฟฟี่ กาแฟฟกลางซอย<br />\
    <img src="styles/legend/321_1_10.png" /> ลองดูคอฟฟี่<br />\
    <img src="styles/legend/321_1_11.png" /> สองพี่น้อง Rose Garden1 coffee&DrinkBreakfast<br />\
    <img src="styles/legend/321_1_12.png" /> Berry Coffee<br />\
    <img src="styles/legend/321_1_13.png" /> Cafe\' De Field<br />\
    <img src="styles/legend/321_1_14.png" /> Cha Ya Cafe - ชาญ่า คาเฟ่<br />\
    <img src="styles/legend/321_1_15.png" /> Chong-cha cafe\' by nabtang<br />\
    <img src="styles/legend/321_1_16.png" /> Exactly Coffee Thabsakae<br />\
    <img src="styles/legend/321_1_17.png" /> Hashtag 21<br />\
    <img src="styles/legend/321_1_18.png" /> Hello mango cafe<br />\
    <img src="styles/legend/321_1_19.png" /> KA-NUM Home Cafe<br />\
    <img src="styles/legend/321_1_20.png" /> Pisces cafe<br />\
    <img src="styles/legend/321_1_21.png" /> STAR Cafe • Thapsakae<br />\
    <img src="styles/legend/321_1_22.png" /> Sugarplum By Joy Thap Sakae<br />\
    <img src="styles/legend/321_1_23.png" /> ZIRRHOSE BAR<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_321_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_321_1];
lyr_321_1.set('fieldAliases', {'ลำดับ': 'ลำดับ', 'ชื่อสถานที่': 'ชื่อสถานที่', 'ละติจูด': 'ละติจูด', 'ลองจิจูด': 'ลองจิจูด', 'ประเภทสถานที่': 'ประเภทสถานที่', 'ที่อยู่': 'ที่อยู่', 'ตำบล': 'ตำบล', 'อำเภอ': 'อำเภอ', 'จังหวัด': 'จังหวัด', 'Facebook': 'Facebook', 'ภาพสถานที่': 'ภาพสถานที่', });
lyr_321_1.set('fieldImages', {'ลำดับ': 'Range', 'ชื่อสถานที่': 'TextEdit', 'ละติจูด': 'TextEdit', 'ลองจิจูด': 'TextEdit', 'ประเภทสถานที่': 'TextEdit', 'ที่อยู่': 'TextEdit', 'ตำบล': 'TextEdit', 'อำเภอ': 'TextEdit', 'จังหวัด': 'TextEdit', 'Facebook': 'TextEdit', 'ภาพสถานที่': 'TextEdit', });
lyr_321_1.set('fieldLabels', {'ลำดับ': 'hidden field', 'ชื่อสถานที่': 'header label - always visible', 'ละติจูด': 'hidden field', 'ลองจิจูด': 'hidden field', 'ประเภทสถานที่': 'header label - always visible', 'ที่อยู่': 'inline label - always visible', 'ตำบล': 'header label - always visible', 'อำเภอ': 'header label - always visible', 'จังหวัด': 'header label - always visible', 'Facebook': 'inline label - visible with data', 'ภาพสถานที่': 'header label - always visible', });
lyr_321_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});