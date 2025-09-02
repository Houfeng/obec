const {
  ComerApp, Window, View, TextBox,
  VerticalAlign, HorizontalAlign,
  StackView, Button,
  Menu,
  MenuItem
} = require('../');
const { mov, Easing } = require('mov');

ComerApp.init();

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
  view.background = "blue"
};
view.onPointerLeave = () => {
  box.value = 'Pointer Leave';
  view.background = "red"
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