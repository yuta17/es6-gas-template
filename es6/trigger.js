import { ChangeColor } from './ChangeColor';

global.trigger = function() {
  let color_array = ['red', 'blue', 'green'];
  let random_number = [Math.floor(Math.random() * color_array.length)];
  let trigger = new ChangeColor(color_array[random_number]);
  trigger.changeBackgroundColor();
}
