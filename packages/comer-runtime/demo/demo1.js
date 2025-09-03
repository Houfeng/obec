const {
  ComerApp, Window, View, TextBox,
  VerticalAlign, HorizontalAlign,
  StackView, Button,
  Menu,
  MenuItem
} = require('../');
const { mov, Easing } = require('mov');

ComerApp.ttt = 16;
ComerApp.init();

const toHex = (n) => {
  if (n < 0) n = 0;
  if (n > 255) n = 255;
  return String(Math.floor(n).toString(16)).padStart(2, '0');
};

var win = new Window();
win.background = '#eeeeee';
win.title = "Demo";

var stack = new StackView();
stack.spacing = 16;

var view = new View();
view.background = "red";
view.height = 100;
view.verticalAlign = VerticalAlign.Top;
view.horizontalAlign = HorizontalAlign.Fill;
view.onPointerEnter = () => {
  box.value = 'Pointer Enter';
  mov({ r: 0, g: 0, b: 255 })
    .to({ r: 255, g: 0, b: 0 })
    .duration(200)
    .framerate(120)
    .effect(({ r, g, b }, done) => {
      // console.log(`#${toHex(r)}${toHex(g)}${toHex(b)}`, { r, g, b });
      view.background = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    });
};
view.onPointerLeave = () => {
  box.value = 'Pointer Leave';
  mov({ r: 255, g: 0, b: 0 })
    .to({ r: 0, g: 0, b: 255 })
    .duration(200)
    .framerate(120)
    .effect(({ r, g, b }, done) => {
      view.background = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    });
};
stack.appendChild(view);

var box = new TextBox();
box.margin = "16 0";
box.width = 300;
box.horizontalAlign = HorizontalAlign.Fill;
box.value = '...';
stack.appendChild(box);

var btn = new Button();
btn.margin = "16 0";
btn.background = "blue";
btn.text = "Click";
btn.onPointerDown = () => {
  console.log('btn.onClick');
  box.value = `${win.x}, ${win.y}`;
  ComerApp.ttt = 0;
  mov({ x: win.x, y: win.y })
    .to({ x: 0, y: 0 })
    .duration(600)
    .framerate(120)
    .easing(Easing.Elastic.easeInOut)
    .effect(({ x, y }, done) => {
      // console.log('====', x, y);
      // win.height = h;
      win.x = x;
      win.y = y;
      if (done) ComerApp.ttt = 16;
    });
}
stack.appendChild(btn);

win.appendChild(stack);
win.show();

// var menu = new Menu();
// var menuItem = new MenuItem();

ComerApp.run();