//controlled by mouse and keyboard


var n = 0;
var c = 0;
function setup() { 

  createCanvas(1000,800);

  background(0);

}



function monster(x, y,r,g,b) {
  
  // X AND Y ARE VARIABLES ADDED TO EACH SHAPES POINTS SO THEY ALL MOVE SIMULATANEOUSLY BASED ON THE ARGUMENTS WHEN THE FUNCTION IS CALLED
  
  // R, G, AND B ARE VARIABLES FOR THEIR RESPECTIVE COLOR VALUES, DETERMINED BY THE ARGUMENTS IN FUNCTION CALL AS WELL


  //left leg     // EMILY

  noStroke();//EMILY

  fill(255, 165, 0);//EMILY

  rect(240+x, 425+y, 25, 75);



  //right leg

  noStroke();   // EMILY

  fill(255, 165, 0);   // EMILY

  rect(340+x, 425+y, 25, 75);   



  //top horn   // EMILY

  noStroke();   // EMILY

  fill(255, 246, 215);   // EMILY

  triangle(292+x, 150+y, 302+x, 100+y, 312+x, 150+y);   



  //left horn   // EMILY
  noStroke();   // EMILY

  fill(255, 246, 215);   // EMILY

  triangle(252+x, 180+y, 258+x, 120+y, 272+x, 170+y);   



  //right horn   // EMILY

  noStroke();   // EMILY

  fill(255, 246, 215);   // EMILY

  triangle(332+x, 170+y, 347+x, 120+y, 352+x, 180+y);   



  //left arm   // EMILY

  stroke(255, 151, 148);   // EMILY

  strokeWeight(20);   // EMILY

  noFill();   // EMILY

  arc(390+x, 370+y, 67, 200,0, PI/2, OPEN);   

  

    //right arm   // EMILY

  stroke(255, 151, 148);   // EMILY

  strokeWeight(20);   // EMILY

  noFill();   // EMILY

  arc(210+x, 370+y, 67, 200, PI/2,PI, OPEN);   


  // Body   // EMILY

  noStroke();   // EMILY

  fill(215-r, 193-g, 255-b);   

  ellipse(300+x, 300+y, 300, 300);
  
  // FOR THIS ONE I ADDED VARIABLES FOR THE COLOR, CONTROLLED BY THE PARAMETERS SET IN THE FUNCTION



  // Left Eye    // EMILY

  noStroke();   // EMILY

  fill(255);   // EMILY

  ellipse(220+x, 250+y, 40, 40);



  // Right Eye   // EMILY

  noStroke();   // EMILY

  fill(255);   // EMILY

  ellipse(380+x, 250+y, 40, 40);



  // Left eye pupil   // EMILY

  noStroke();   // EMILY

  fill(0, 0, 255);   // EMILY

  ellipse(220+x, 257+y, 20, 20);



  // Right eye pupil   // EMILY

  noStroke();   // EMILY

  fill(0, 0, 255);   // EMILY

  ellipse(380+x, 257+y, 20, 20);   



  //one eye   // EMILY

  noStroke();   // EMILY

  fill(255);   // EMILY

  ellipse(300+x, 250+y, 100, 120);



  // one eye pupil      // EMILY

  noStroke();   // EMILY

  fill(0, 0, 255);   // EMILY

  quad(332+x, 250+y, 300+x, 290+y, 267+x, 250+y, 300+x, 210+y);   // EMILY



  // Mouth   // EMILY

  noStroke();   // EMILY

  fill(0);   // EMILY

  rect(231+x, 340+y, 141, 75);   



  //tooth1   // EMILY

  noStroke();   // EMILY

  fill(255);   // EMILY

  triangle(247+x, 340+y, 257+x, 365+y, 267+x, 340+y);



  //tooth2   // EMILY

  noStroke();   // EMILY

  fill(255);   // EMILY

  triangle(277+x, 340+y, 287+x, 365+y, 297+x, 340+y);



  //tooth3   // EMILY

  noStroke();   // EMILY

  fill(255);   // EMILY

  triangle(307+x, 340+y, 317+x, 365+y, 327+x, 340+y);



  //tooth4   // EMILY

  noStroke();   // EMILY

  fill(255);   // EMILY

  triangle(337+x, 340+y, 347+x, 365+y, 357+x, 340+y);



  //tooth5   // EMILY

  noStroke();   // EMILY

  fill(255);   // EMILY

  triangle(352+x, 415+y, 362+x, 390+y, 372+x, 415+y); 



  //tooth6   // EMILY

  noStroke();   // EMILY

  fill(255);   // EMILY

  triangle(322+x, 415+y, 332+x, 390+y, 342+x, 415+y);



  //tooth7   // EMILY

  noStroke();   // EMILY

  fill(255);   // EMILY

  triangle(292+x, 415+y, 302+x, 390+y, 312+x, 415+y);



  //tooth8   // EMILY

  noStroke();   // EMILY

  fill(255);   // EMILY

  triangle(262+x, 415+y, 272+x, 390+y, 282+x, 415+y);



  //tooth8   // EMILY

  noStroke();   // EMILY

  fill(255);   // EMILY

  triangle(232+x, 415+y, 242+x, 390+y, 252+x, 415+y);



  //left foot   // EMILY

  noStroke();   // EMILY

  fill(136, 236,255);   // EMILY

  quad(270+x, 500+y, 235+x, 500+y, 225+x, 530+y, 280+x, 530+y);



  //right foot   // EMILY

  noStroke();   // EMILY

  fill(136, 236, 255);   // EMILY

  quad(370+x, 500+y, 335+x, 500+y, 325+x, 530+y, 380+x, 530+y);



}

function draw(){
  
  //DECLARES KEYBAORD CONTROLS FOR VARIABLES C AND N
  
    if (keyIsDown(LEFT_ARROW))
  n-=5;
  if (keyIsDown(RIGHT_ARROW))
  n+=5;
  if (keyIsDown(UP_ARROW))
  c-=5;
  if (keyIsDown(DOWN_ARROW))
  c+=5;
  background(0);
  
  
  //CALLS FIRST MONSTER FUNCTION
  monster(450-mouseX/2,200-mouseY/2,n,c,0);
  
  //CALLS FIRST MONSTER FUNCTION WITH NEW PARAMETERS
  monster(n,c,mouseX/3,mouseY/3,mouseX);
  
}

