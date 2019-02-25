'use strict';


document.addEventListener('DOMContentLoaded', function() {

    var cube = document.getElementById('cube'),
        btnMove = document.getElementById('move'),
        btnMoveRevers = document.getElementById('moveReverse');

    btnMove.onclick = function() {
        
        TweenMax.to(cube, 0.3, {x:"+=100"});

    }
    
    btnMoveRevers.onclick = function() {
        
        TweenMax.to(cube, 0.3, {x:"-=100"});

    }

});

document.addEventListener('keydown', function(e) {

    if(e.keyCode === 39) {
        TweenMax.to(cube, 0.3, {x:"+=50"});
    }

    if(e.keyCode === 37) {
        TweenMax.to(cube, 0.3, {x:"-=50"});
    }
    
    if(e.keyCode === 38) {
        TweenMax.to(cube, 0.3, {y:"-=50"});
    }

    if(e.keyCode === 40) {
        TweenMax.to(cube, 0.3, {y:"+=50"});
    }

    if(e.keyCode === 32) {
        TweenLite.to(cube, 1, {rotation:"+=90deg"});            
    }

});