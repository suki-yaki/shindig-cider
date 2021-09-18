const CONFIGURATION = {
        "locations": [
          {"title":"Outerlands","address1":"4001 Judah St","address2":"San Francisco, CA 94122, USA","coords":{"lat":37.76044463625879,"lng":-122.50492917605742},"placeId":"ChIJf-NCNpeHhYARLeneHNw3WWs"},
          {"title":"Hook Fish Co. at Proof Lab Beer Garden","address1":"254 Shoreline Hwy","address2":"Mill Valley, CA 94941, USA","coords":{"lat":37.882044680916124,"lng":-122.52467342209015},"placeId":"ChIJqd4T-MmFhYARAC4TQasgLYA"},
          {"title":"Hook Fish Co","address1":"4542 Irving St","address2":"San Francisco, CA 94122, USA","coords":{"lat":37.76245173404229,"lng":-122.50686563558197},"placeId":"ChIJG1iGoY-HhYAR-XNMTpeTJ4I"},
          {"title":"Other Avenues Grocery Cooperative","address1":"3930 Judah St","address2":"San Francisco, CA 94122, USA","coords":{"lat":37.76066656758622,"lng":-122.5043205490738},"placeId":"ChIJ82jPTpeHhYARpfnAqkdhT30"},
          {"title":"DamnFine","address1":"3410 Judah St","address2":"San Francisco, CA 94122, USA","coords":{"lat":37.760981645753645,"lng":-122.49872543558197},"placeId":"ChIJHxooqPeHhYARPEcGJ0tTqnU"},
          {"title":"Padrecito","address1":"901 Cole St","address2":"San Francisco, CA 94117, USA","coords":{"lat":37.76565479458928,"lng":-122.45010883558197},"placeId":"ChIJs_IP5FCHhYARgAcFixBR6NY"},
          {"title":"White Cap","address1":"3608 Taraval St","address2":"San Francisco, CA 94116, USA","coords":{"lat":37.74195204923003,"lng":-122.50489273558199},"placeId":"ChIJ04UqamN9j4ARBde7SBhVLgQ"},
          {"title":"Lincoln Market \u0026 Deli","address1":"496 Broad St","address2":"San Luis Obispo, CA 93405, USA","coords":{"lat":35.28485656838381,"lng":-120.66863963558197},"placeId":"ChIJcRZSgv_w7IAR4TvPKM47dG4"}
        ],
        "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17},
        "mapsApiKey": "AIzaSyA-BCgJUsRjbUsyW6UDO78IR0SNhgZlZTQ"
      };

      function initMap() {
        new LocatorPlus(CONFIGURATION);
      }
