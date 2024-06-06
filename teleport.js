console.log("Kith Teleporter Module Loaded");

Hooks.on('ready', () => {
  console.log("Kith Teleporter Module is ready");

  // Añadir el botón como una categoría principal en la barra de herramientas
  Hooks.on('getSceneControlButtons', controls => {
    controls.push({
      name: "teleport",
      title: "Create Teleport",
      icon: "fas fa-arrows-alt",
      layer: "tiles", // Asegúrate de usar una capa válida
      tools: [{
        name: "createTeleport",
        title: "Create Teleport",
        icon: "fas fa-map-marker-alt",
        onClick: () => {
          console.log("Create Teleport button clicked"); // Depuración
          createTeleport();
        }
      }],
      activeTool: "createTeleport"
    });
  });
});

function createTeleport() {
  console.log("Create Teleport function called");
  ui.notifications.info("Select the origin point for the teleport.");

  selectPoint().then(origin => {
    if (origin) {
      console.log("Origin selected:", origin);
      let originIconPath = "icons/origin-icon.png"; // Ruta del ícono de origen

      Tile.create({
        img: originIconPath,
        x: origin.x,
        y: origin.y,
        width: 64,
        height: 64
      }).then(tile => {
        console.log("Origin tile created:", tile);

        ui.notifications.info("Select the destination point for the teleport.");

        selectPoint().then(destination => {
          if (destination) {
            console.log("Destination selected:", destination);
            let destinationIconPath = "icons/destination-icon.png"; // Ruta del ícono de destino

            Tile.create({
              img: destinationIconPath,
              x: destination.x,
              y: destination.y,
              width: 64,
              height: 64
            }).then(tile => {
              console.log("Destination tile created:", tile);
              ui.notifications.info("Teleport created successfully.");
            });
          }
        });
      });
    }
  });
}

async function selectPoint() {
  return new Promise((resolve) => {
    let handler = (event) => {
      canvas.stage.off('mousedown', handler);
      resolve({ x: event.data.origin.x, y: event.data.origin.y });
    };
    canvas.stage.on('mousedown', handler);
  });
}
