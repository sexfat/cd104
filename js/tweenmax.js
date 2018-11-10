console.log("start");

TweenMax.to('.box_01', 3, {
    x: 200,
    y: 100
});


TweenMax.from('.box_02', 3, {
    x: 200,
    y: 100
})

TweenMax.fromTo('.box_03', 2, {
    x: -100,
    opacity: 0,
    scale: 1


}, {
    x: 100,
    opacity: 1,
    scale: 2,
    ease: Elastic.easeOut

});


TweenMax.fromTo('.box_04', 2, {
    x: -100
}, {

    x: 200,
    ease: Bounce.easeOut
})

TweenMax.set('.box_05', {
    x: 400,
    y: 300,
    background: '#f20'
})

TweenMax.fromTo('.text', 1, {
    y: -150,
    opacity: 0
},{
    y: 0,
    opacity: 1,
    ease: Bounce.easeOut
})


TweenMax.fromTo('.line', 1, {
    width: 0,
},{
    width: 400,
    delay: .6
})







console.log('end ok')