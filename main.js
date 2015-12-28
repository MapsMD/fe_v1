var map;

$(document).ready( function init(){

	    var toggled = 0;

	    L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images/';
		
		map = L.map('map').setView([47.01772, 28.87207], 8);
		
		var basemap = L.tileLayer('http://bts{s}.hartamd.com/tiles/{z}/{x}/{y}.png', {
			minZoom:0,
			maxZoom: 18,
			attribution: '&copy; <a href="http://hartamd.com/">HartaMD.com</a> Data: <a href="http://www.geocoacher.com/" target="_blank">GeoCoacher.com</a>',
			subdomains: [1,2,3,4]
		});
		
		var mapsmd = L.tileLayer('http://ts{s}.maps.md/{z}/{x}/{y}.png', {
			minZoom: 7,
			maxZoom: 21,
			subdomains: [1,2,3,4],
			attribution: 'Data: <a href="http://www.geocoacher.com/" target="_blank">GeoCoacher.com</a>'
		}).addTo(map);
		
		var baseLayers = {
			"Basic": basemap,
			"maps.md": mapsmd
		};

		var overlays = {
			
		};

		//add controls
		L.control.layers(baseLayers, overlays).addTo(map);


        $(window).on("resize", function() {
          $("#map").height($(window).height()-30).width($(window).width()-250);
          map.invalidateSize();
        }).trigger("resize");

        $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");

          if (toggled) {
          	$("#map").height($(window).height()-30).width($(window).width()-250);
            map.invalidateSize();
            toggled = 0;
          } else {
          	$("#map").height($(window).height()-30).width($(window).width());
            map.invalidateSize();
            toggled = 1;
          }

        });

	})

