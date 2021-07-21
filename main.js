var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function player_update() {
    fabric.Image.fromURL("https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw305e5a25/images/project/WLPROJ-9519/Happy-Birthday-fault-line-cake.jpg?sw=800&sh=800", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(600);
        player_object.scaleToHeight(600);
        player_object.set({
            top: 0,
            left: 0
        });
        canvas.add(player_object);
    });
}

function playSound() {
    x.play();
}