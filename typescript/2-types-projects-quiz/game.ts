/**
 * Let's make a game 🕹
 */

{
  type Command = 'up' | 'down' | 'left' | 'right';

  let position = { x: 0, y: 0 };

  function move(command: Command) {
    switch (command) {
      case 'up':
        position.y += 1;
        break;
      case 'down':
        position.y -= 1;
        break;
      case 'left':
        position.x -= 1;
        break;
      case 'right':
        position.x += 1;
        break;
      default:
        throw new Error(`unknown direction ${command}`);
    }
  }

  console.log(position); // { x: 0, y: 0}
  move('up');
  console.log(position); // { x: 0, y: 1}
  move('down');
  console.log(position); // { x: 0, y: 0}
  move('left');
  console.log(position); // { x: -1, y: 0}
  move('right');
  console.log(position); // { x: 0, y: 0}
}
