var database = firebase.database();
var Pelota


function setup(){
  createCanvas(500,500)
  Pelota = createSprite(250,250,10,10)
  var position = database.ref("Pelota/position")
  position.on("value",readPosition,showError)
}

function draw(){
  background("white");
  if(position !== undefined){
    if(keyDown(RIGHT_ARROW)){
     writePosition(1,0)
    }
    else if(keyDown(LEFT_ARROW)){
      writePosition(-1,0)
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1)
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,1)
    }
  }
 drawSprites(); 
}

function writePosition(x,y){
  database.ref("Pelota/position").set({x: position.x+x,y: position.y+y})
}
function readPosition(data)
{position = data.val();
Pelota.x=position.x
Pelota.y=position.y 
}
function showError(){
  console.log(" error al escribir en la base ")
}
  




