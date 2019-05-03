//tweenlite
//has core features of greensock, lightweight and can be expanded with plugins

//tweenmax
//has all of greensocks bells and whistles, has repeat, yoyo, and repeateDelay and comes with many plugins

//first argument the function accepts is a DOM element, then a duration, then a property for us to animate

//square will move TO where I specify it
let squareTo = document.getElementById("squareTo");

TweenMax.to(squareTo, 1, {
  left: "50%",
  backgroundColor: "red",
  borderRadius: "50%",
  repeat: 2, //wil repeat twice
  yoyo: true //will create smoother effect, property is only avaiable in tweenmax, not tweenlite
})


//square will move FROM where I specify it
let squareFrom = document.getElementById("squareFrom");

TweenMax.from(squareFrom, 1, {
  left: "50%",
  backgroundColor: "green",
  borderRadius: "50%",
  repeat: -1, //-1 will repeat forever
  yoyo: true //will create smoother effect, property is only avaiable in tweenmax, not tweenlite
})


let squareTimeline = document.querySelector("#squareTimeline");

let timeline = new TimelineMax();

timeline.to(squareTimeline, 1, {
  left: "50%"
})
timeline.to(squareTimeline, 0.5, {
  borderRadius: "50%"
})
timeline.to(squareTimeline, 0.3, {
  backgroundColor: "green"
})