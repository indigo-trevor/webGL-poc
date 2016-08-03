function pathPrepare ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $one = $("path#one");
var $two = $("path#two");
var $three = $("path#three");
var $four = $("path#four");
var $five = $("path#five");
var $six = $("path#six");

// prepare SVG
pathPrepare($one);
pathPrepare($two);
pathPrepare($three);
pathPrepare($four);
pathPrepare($five);
pathPrepare($six);

// init controller
var controller = new ScrollMagic.Controller({container: "#container1"});

// build tween
var tween = new TimelineMax()
  .add(TweenMax.to($one, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone, reverse:true}))
  .add(TweenMax.to($two, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($three, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($four, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($five, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($six, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to("path", 1, {stroke: "#3d44ac", ease:Linear.easeNone}), 0);			// change color during the whole thing

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
  .setTween(tween)
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
