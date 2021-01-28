greeting --> "Hello player1 - name"

if(gameState===1){
text("player1's turn");
if(mousePressedOver(b1)){
x.visible = true;
gameState = 2
}
else if (mousePressedOver(b2)){

}
....
...

}

if(gameState === 2){
    text("player2's turn");
if(mousePressedOver(b1)){
o.visible = true;
}
