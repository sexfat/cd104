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
}, {
    y: 0,
    opacity: 1,
    ease: Bounce.easeOut
})


TweenMax.fromTo('.line', 1, {
    width: 0,
}, {
    width: 400,
    delay: .6
})


TweenMax.fromTo('.circle', 1, {
    scale: 1,
    opacity: 1
}, {
    scale: 1.5,
    opacity: 0,
    repeat: -1,
    ease: Expo.easeOut

});



TweenMax.to('.inner', 1, {
    scale: 1,
    rotation: 360,
    repeat: -1
})

TweenMax.to('.box_07', 1, {
    x: 100,
    repeat: -1,
    repeatDelay: 2,
    yoyo: true,
    boxShadow: "0px 5px 20px black" //陰影



})


var btn_play = document.getElementById('play_btn');


btn_play.onclick = function () {



    TweenMax.to('.box_08', 6, {
        bezier: {
            curviness: 1.25,
            values: [{
                x: 0,
                y: 10
            }, {
                x: 250,
                y: 400
            }, {
                x: 450,
                y: 50
            }, {
                x: 0,
                y: 0
            }],
            autoRotate: true
        },
        ease: Power1.easeOut
    });
}

// function alerts() {
//     alert('ok');
//     // console.log("alertsok");
// };

// TweenMax.staggerTo('.section_02 .box', 1, {
//     // scale: 1,
//     // rotation: 360,
//     repeat: 1,
//     // repeatDelay: 5,
//     // transformOrigin: 'left top'
//     x: 100,
//     // onComplete : alerts
// },.6);


var tl = new TimelineMax({
    repeat: 1,
    yoyo: true,
    repeatDelay: 1,
    // onComplete: alerts
});


tl.add(TweenMax.to('.section_02 .box1', 2, {
    x: 100
}));


tl.add(TweenMax.to('.section_02 .box2', 1, {
    x: 100,
    y: 100,
    opacity: 0,
    // delay: -1
}));

// tl.seek(1.5);


// var tls = new TimelineMax({
//     repeat: 2
// });

tls.fromTo('.section_02 .box3', 1, {
    x: 100
}, {
    x: 400,
    rotation: 180
}).fromTo('.section_02 .box4', 1, {
    x: 50
}, {
    x: 200 ,
    rotation: 360
});

















// TweenMax.to('.box_07', 1, {
//     scale: 1,
//     rotation: 360,
//     repeat: -1,
//     repeatDelay: 0,
//     transformOrigin : 'left top'

// })









console.log('end ok')