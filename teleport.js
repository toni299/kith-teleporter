console.log("Kith Teleporter Module Loaded");

Hooks.on('ready', () => {
  console.log("Kith Teleporter Module is ready");

  // Añadir el botón a la barra de herramientas
  Hooks.on('getSceneControlButtons', controls => {
    const teleportButton = {
      name: "teleport",
      title: "Create Teleport",
      icon: "fas fa-arrows-alt",
      layer: "controls",
      tools: [{
        name: "createTeleport",
        title: "Create Teleport",
        icon: "fas fa-map-marker-alt",
        onClick: createTeleport
      }]
    };

    controls.push(teleportButton);
  });
});

function createTeleport() {
  console.log("Create Teleport button clicked");

  // Aquí va la lógica para crear el teleport
  // Puedes abrir un formulario o simplemente habilitar una herramienta para seleccionar los puntos de origen y destino
  let originIconPath = "icons/origin-icon.png"; // Ruta del ícono de origen
  let destinationIconPath = "icons/destination-icon.png"; // Ruta del ícono de destino

  new Dialog({
    title: "Create Teleport",
    content: `<p>Select the origin and destination points for the teleport.</p>`,
    buttons: {
      origin: {
        icon: '<i class="fas fa-map-marker-alt"></i>',
        label: "Select Origin",
        callback: async () => {
          let origin = await selectPoint();
          if (origin) {
            console.log("Origin selected:", origin);
            let tile = await Tile.create({
              img: originIconPath,
              x: origin.x,
              y: origin.y,
              width: 64,
              height: 64
            });
            console.log("Origin tile created:", tile);
          }
        }
      },
      destination: {
        icon: '<i class="fas fa-map-marker-alt"></i>',
        label: "Select Destination",
        callback: async () => {
          let destination = await selectPoint();
          if (destination) {
            console.log("Destination selected:", destination);
            let tile = await Tile.create({
              img: destinationIconPath,
              x: destination.x,
              y: destination.y,
              width: 64,
              height: 64
            });
            console.log("Destination tile created:", tile);
          }
        }
      }
    }
  }).render(true);
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
