var map;google.maps.event.addDomListener(window,"load",function(){var e=new google.maps.Map(document.getElementById("mapBox"),{center:new google.maps.LatLng(19.247909,73.143426),zoom:18,mapTypeId:google.maps.MapTypeId.ROADMAP}),o=new google.maps.InfoWindow;var a,n,p;a={position:new google.maps.LatLng(19.247909,73.143426),map:e,title:"AARUSHEE SOLAR ENERGY"},n="<img src='favicon/favicon-32x32.jpg'><span> AARUSHEE SOLAR ENERGY, Sadguru Apartment Fifth Floor </span>",p=new google.maps.Marker(a),n&&google.maps.event.addListener(p,"click",function(){o.setContent(n),o.open(a.map,this)})});