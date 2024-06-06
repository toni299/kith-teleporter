console.log("Kith Teleporter Module Loaded");

Hooks.on('ready', () => {
  console.log("Kith Teleporter Module is ready");
});


// console.log("Kith Teleporter Module Loaded");

// Hooks.once('init', () => {
//   console.log('Teleport Module initialized');
// });

// Hooks.once('ready', () => {
//   console.log('Teleport Module ready');
//   if (game.user.isGM) {
//     // Añadir un botón para crear teleports
//     const button = document.createElement('button');
//     button.innerHTML = 'Create Teleport';
//     button.onclick = createTeleport;
//     document.body.appendChild(button);
//   }
// });

// function createTeleport() {
//   const dialogContent = `
//     <form>
//       <div class="form-group">
//         <label>Destination Scene:</label>
//         <select id="destination-scene">
//           ${game.scenes.map(scene => `<option value="${scene.id}">${scene.name}</option>`).join('')}
//         </select>
//       </div>
//       <div class="form-group">
//         <label>Destination Coordinates (x, y):</label>
//         <input type="text" id="destination-coordinates" placeholder="x,y"/>
//       </div>
//     </form>
//   `;
  
//   new Dialog({
//     title: 'Create Teleport',
//     content: dialogContent,
//     buttons: {
//       create: {
//         label: 'Create',
//         callback: html => {
//           const destinationScene = html.find('#destination-scene').val();
//           const destinationCoordinates = html.find('#destination-coordinates').val().split(',');
//           const destinationX = parseInt(destinationCoordinates[0]);
//           const destinationY = parseInt(destinationCoordinates[1]);

//           // Crear un nuevo teleport
//           const teleport = {
//             type: 'teleport',
//             data: {
//               destinationScene,
//               destinationX,
//               destinationY
//             }
//           };

//           game.scenes.current.createEmbeddedEntity('Tile', teleport);
//         }
//       }
//     },
//     default: 'create'
//   }).render(true);
// }

// Hooks.on('updateToken', (scene, token, updateData) => {
//   const tokenX = updateData.x !== undefined ? updateData.x : token.x;
//   const tokenY = updateData.y !== undefined ? updateData.y : token.y;

//   const teleports = scene.data.tiles.filter(tile => tile.data.type === 'teleport');
//   for (let teleport of teleports) {
//     if (tokenX === teleport.x && tokenY === teleport.y) {
//       const { destinationScene, destinationX, destinationY } = teleport.data;
//       if (scene.id === destinationScene) {
//         token.update({ x: destinationX, y: destinationY });
//       } else {
//         game.scenes.get(destinationScene).activate().then(() => {
//           token.update({ x: destinationX, y: destinationY });
//         });
//       }
//       break;
//     }
//   }
// });
