/*This is created by vishnu..!You are good to copy it :-P*/
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "goog",
  label: "Go Google",
  icon: {
    "16": "./aicon-16.png",
    "32": "./aicon-32.png",
    "64": "./aicon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("https://www.google.com/");
}