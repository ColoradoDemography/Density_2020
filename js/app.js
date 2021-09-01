require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/LayerList",
    "esri/smartMapping/renderers/color",
    "esri/widgets/Legend",
    "esri/core/watchUtils",
    "esri/renderers/support/ClassBreakInfo",
    "esri/Basemap",
    "esri/widgets/Print",
    "esri/widgets/Swipe",
    "esri/widgets/Expand",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane"
  ], function (
    Map,
    MapView,
    FeatureLayer,
    LayerList,
    colorRendererCreator,
    Legend,
    watchUtils,
    ClassBreakInfo,
    Basemap,
    Print,
    Swipe,
    Expand
  ) {

    
    //let fieldSelect, classSelect, numClassesInput, slider;
    //Classes for rendering
    const pop250 = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#ffffb2",
        style: "solid",
        outline: {
          width: 0,
          color: [255, 255, 255, 0.5]
        }
      };

      const pop500 = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#fed976",
        style: "solid",
        outline: {
          width: 0,
          color: [255, 255, 255, 0.5]
        }
      };

      const pop1000 = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#feb24c",
        style: "solid",
        outline: {
          width: 0,
          color: [255, 255, 255, 0.5]
        }
      };

      const pop2500 = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#fd8d3c",
        style: "solid",
        outline: {
          width: 0,
          color: [255, 255, 255, 0.5]
        }
      };

      const pop5000 = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#f03b20",
        style: "solid",
        outline: {
          width: 0,
          color: [255, 255, 255, 0.5]
        }
      };

      const pop10000 = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#bd0026",
        style: "solid",
        outline: {
          width: 0,
          color: [255, 255, 255, 0.5]
        }
      };

      const house100 = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#ffffcc",
        style: "solid",
        outline: {
          width: 0,
          color: [255, 255, 255, 0.5]
        }
      };

      const house200 = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#c7e9b4",
        style: "solid",
        outline: {
          width: 0,
          color: [255, 255, 255, 0.5]
        }
      };

      const house400 = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#7fcdbb",
        style: "solid",
        outline: {
          width: 0,
          color: [255, 255, 255, 0.5]
        }
      };

      const house1000 = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#41b6c4",
        style: "solid",
        outline: {
          width: 0,
          color: [255, 255, 255, 0.5]
        }
      };

      const house2000 = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#2c7fb8",
        style: "solid",
        outline: {
          width: 0,
          color: [255, 255, 255, 0.5]
        }
      };

      const house4000 = {
        type: "simple-fill", // autocasts as new SimpleFillSymbol()
        color: "#253494",
        style: "solid",
        outline: {
          width: 0,
          color: [255, 255, 255, 0.5]
        }
      };


      const pop10renderer = {
        type: "class-breaks", // autocasts as new ClassBreaksRenderer()
        field: "Symb",
        legendOptions: {
          title: "Population Density"
        },
        defaultSymbol: {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#f7f7f7",
          outline: {
            width: 0,
            color: [50, 50, 50, 0.6]
          }
        },
        defaultLabel: "Other",
        classBreakInfos: [
          {
            minValue: 0.5,
            maxValue: 1.5,
            symbol: pop250,
            label: "250 to 500 per sq mile"
          },
          {
            minValue: 1.5,
            maxValue: 2.5,
            symbol: pop500,
            label: "500 to 1,000"
          },
          {
            minValue: 2.5,
            maxValue: 3.5,
            symbol: pop1000,
            label: "1,000 to 2,500"
          },
          {
            minValue: 3.5,
            maxValue: 4.5,
            symbol: pop2500,
            label: "2,500 to 5,000"
          },
          {
            minValue: 4.5,
            maxValue: 5.5,
            symbol: pop5000,
            label: "5,000 to 10,000"
          },
          {
            minValue: 5.5,
            maxValue: 6.5,
            symbol: pop10000,
            label: "> 10,000 per sq mile"
          }
        ]
      };

      const pop20renderer = {
        type: "class-breaks", // autocasts as new ClassBreaksRenderer()
        field: "POD",
        legendOptions: {
          title: "Population Density"
        },
        defaultSymbol: {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#f7f7f7",
          outline: {
            width: 0,
            color: [50, 50, 50, 0.6]
          }
        },
        defaultLabel: "Other",
        classBreakInfos: [
          {
            minValue: 0.5,
            maxValue: 1.5,
            symbol: pop250,
            label: "250 to 500 per sq mile"
          },
          {
            minValue: 1.5,
            maxValue: 2.5,
            symbol: pop500,
            label: "500 to 1,000"
          },
          {
            minValue: 2.5,
            maxValue: 3.5,
            symbol: pop1000,
            label: "1,000 to 2,500"
          },
          {
            minValue: 3.5,
            maxValue: 4.5,
            symbol: pop2500,
            label: "2,500 to 5,000"
          },
          {
            minValue: 4.5,
            maxValue: 5.5,
            symbol: pop5000,
            label: "5,000 to 10,000"
          },
          {
            minValue: 5.5,
            maxValue: 6.5,
            symbol: pop10000,
            label: "> 10,000 per sq mile"
          }
        ]
      };

      const house10renderer = {
        type: "class-breaks", // autocasts as new ClassBreaksRenderer()
        field: "Symb",
        legendOptions: {
          title: "Housing Unit Density"
        },
        defaultSymbol: {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#f7f7f7",
          outline: {
            width: 0,
            color: [50, 50, 50, 0.6]
          }
        },
        defaultLabel: "Other",
        classBreakInfos: [
          {
            minValue: 0.5,
            maxValue: 1.5,
            symbol: house100,
            label: "100 to 200 HU per sq mile"
          },
          {
            minValue: 1.5,
            maxValue: 2.5,
            symbol: house200,
            label: "200 to 400"
          },
          {
            minValue: 2.5,
            maxValue: 3.5,
            symbol: house400,
            label: "400 to 1,000"
          },
          {
            minValue: 3.5,
            maxValue: 4.5,
            symbol: house1000,
            label: "1,000 to 2,000"
          },
          {
            minValue: 4.5,
            maxValue: 5.5,
            symbol: house2000,
            label: "2,000 to 4,000"
          },
          {
            minValue: 5.5,
            maxValue: 6.5,
            symbol: house4000,
            label: "> 4,000 per sq mile"
          }
        ]
      };

      const house20renderer = {
        type: "class-breaks", // autocasts as new ClassBreaksRenderer()
        field: "HUD",
        legendOptions: {
          title: "Housing Unit Density"
        },
        defaultSymbol: {
          type: "simple-fill", // autocasts as new SimpleFillSymbol()
          color: "#f7f7f7",
          outline: {
            width: 0,
            color: [50, 50, 50, 0.6]
          }
        },
        defaultLabel: "Other",
        classBreakInfos: [
          {
            minValue: 0.5,
            maxValue: 1.5,
            symbol: house100,
            label: "100 to 200 HU per sq mile"
          },
          {
            minValue: 1.5,
            maxValue: 2.5,
            symbol: house200,
            label: "200 to 400"
          },
          {
            minValue: 2.5,
            maxValue: 3.5,
            symbol: house400,
            label: "400 to 1,000"
          },
          {
            minValue: 3.5,
            maxValue: 4.5,
            symbol: house1000,
            label: "1,000 to 2,000"
          },
          {
            minValue: 4.5,
            maxValue: 5.5,
            symbol: house2000,
            label: "2,000 to 4,000"
          },
          {
            minValue: 5.5,
            maxValue: 6.5,
            symbol: house4000,
            label: "> 4,000 per sq mile"
          }
        ]
      };
    
    let grayBasemap = Basemap.fromId("gray-vector");
    const map = new Map({
        basemap: grayBasemap
    });
    
    var pop2010 = new FeatureLayer({
        title: "Population Density 2010",
        url: "https://services.arcgis.com/IamIM3RJ5xHykalK/arcgis/rest/services/CBlocksDissoved/FeatureServer/0",
        renderer: pop10renderer,
        legendEnabled: false
    });
    map.add(pop2010);

    var pop2020 = new FeatureLayer({
        title: "Population Density 2020",
        url: "https://services.arcgis.com/IamIM3RJ5xHykalK/arcgis/rest/services/Pop_Density_2020/FeatureServer/0",
        renderer: pop20renderer,
        title: null
    });
    map.add(pop2020);

    var house2010 = new FeatureLayer({
        title: "Housing Unit Density 2010",
        url: "https://services.arcgis.com/IamIM3RJ5xHykalK/arcgis/rest/services/HousingDissolved/FeatureServer/0",
        renderer: house10renderer,
        legendEnabled: false,
        visible: false
    });
    map.add(house2010);

    var house2020 = new FeatureLayer({
        title: "Housing Unit Density 2020",
        url: "https://services.arcgis.com/IamIM3RJ5xHykalK/arcgis/rest/services/HU_Density_2020/FeatureServer/0",
        renderer: house20renderer,
        visible: false,
        title: null
    });
    map.add(house2020);
    
    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-104.85888924276878, 39.37551995739333], // longitude, latitude
      zoom: 11
    });

    const layerList = new LayerList({
        view: view
      });
      const llExpand = new Expand({
        view: view,
        content: layerList,
        expanded: false
      });
      //view.ui.add(llExpand, "top-right");

      view.ui.add("infoDiv", "top-right");
      view.ui.add("myBtn", "top-right");
   
      // Generate a new renderer each time the user changes an input parameter
      view.when().then(function () {
        fieldSelect = document.getElementById("field-select");
        fieldSelect.addEventListener("change", updateMap);

        //watchUtils.whenFalseOnce(view, "updating", updateMap);
      });

      function updateMap() {
        const fieldLabel = fieldSelect.options[fieldSelect.selectedIndex].text;
        console.log(fieldLabel);
        if (fieldLabel == "Population Density") {
          pop2010.visible = true;
          pop2020.visible = true;
          house2010.visible = false;
          house2020.visible = false;
        } else
        {
          pop2010.visible = false;
          pop2020.visible = false;
          house2010.visible = true;
          house2020.visible = true;
        }
      }
      
      // create a new Swipe widget
      const swipe = new Swipe({
        leadingLayers: [pop2010,house2010],
        trailingLayers: [pop2020,house2020],
        position: 1, // set wipe all the way left
        view: view
      });

      // add the widget to the view
      view.ui.add(swipe);

      const legend = new Legend({
        view: view
      });

      view.ui.add(legend, "bottom-right");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onload = function(event) {
  if (event.target == modal) {
    modal.style.display = "block";
  }
}

});
