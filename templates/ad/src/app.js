document.addEventListener("DOMContentLoaded", function()
{
  //click setup
  //document.getElementById("taparea").addEventListener("click", function(evt){ window.open(window.clickTag) })


  //setup
  var timeLine = new TimelineMax(),
  time = 0

  var bg1 = '#bg1'

  //init
  timeLine.set([bg1],{opacity:0},time)

  //screen 1
  timeLine.set(bg1,{opacity:1},time)

  //screen 2
  time = 2
  timeLine.set(bg1,{opacity:1},time)

  //trigger and replay
  timeLine.play(0)
  timeLine.repeat(2)

});
