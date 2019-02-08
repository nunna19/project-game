let ANIME;
let gameOver = false; 
window.onload = function() {
  document.querySelector('.start-btn').onclick = function(){
    window.clearInterval(ANIME)
    ANIME = window.setInterval(animate, 100)
    songStartPlay.play()
    setInterval(arrayboy,200)
  }
}

var canvas = document.querySelector('.gameBackground');
var ctx = canvas.getContext('2d');
      canvas.width = 1100;
      canvas.height = 550;
     
        




//////////////.............................................HERO........................................////////////

  var mouse ={};
  window.addEventListener('mousemove',function(event){
    mouse.x = event.x ;
    mouse.y =event.y ;

  
         if (mouse.x - 150 > hero.x){
          img.src = 'img/rightmissite.png';
          // songStartPlay.play()
           }else {
           img.src = 'img/leftmissite.png';
          //  songStartPlay.play()
             }
  })


          setInterval(() => {
          hero.x = mouse.x -150;
          hero.y = mouse.y +5
         }, 70);


  var hero ={
    x : 0,
    y : 0,
    imgWidth: 100,
    imgHeight: 50
  }
 
  var img = new Image();
  img.onload = function() {}
  img.src = 'img/rightmissite.png';

          function drawHero(){
            ctx.drawImage(img, hero.x,hero.y,hero.imgWidth,hero.imgHeight)
          }




 



/////////.............................................METEOR.............................................//////////


  var ball ={
    radius : 100,
    x : Math.random() * canvas.width,
    y : 0,
    speedDicrY : 0.01,
    gravity : 0.5,
    floor: 510,
    speed:20
   }

   var arrBall =[]

  for(let i=0; i<1000; i++){ //create all balls 
    let eachBall = { ...ball , y:i*-100, x:Math.random()*canvas.width}
    arrBall.push(eachBall)
  }

   function drawBalls(){ //draw all balls
      for(let j=0; j<arrBall.length; j++){
        console.log()
        drawBall(arrBall[j],j)
            
      }
   }
   var xImgBall,yImgBall,widthImgBall,heightImgBall,scaleImgBall,speedImgBall,spriteWidthImgBall,spriteHeightImgBall,rowsImgBall,colsImgBall,curFrameImgBall,frameCountImgBall,srcXImgBall,srcYImgBall;

   spriteWidthImgBall= 539;
   spriteHeightImgBall =92;
   
   rowsImgBall= 1;
   colsImgBall= 5;
   
   curFrameImgBall= 0
   frameCountImgBall = 5
   
   srcYImgBall= 0;
   srcXImgBall= 0;
   
   widthImgBall = spriteWidthImgBall/colsImgBall;
   heightImgBall = spriteHeightImgBall/rowsImgBall;
  
   trackRightImgBall= 0;


   
  var point = 20;
  var score = 0;
   var ImgBall= new Image(); 
   ImgBall.src = "img/ball.gif";
  function hi(){
    arrBall.splice(index,1) = false
  }               
  function drawBall(ball,index){ //draw each ball 
           
   
              ctx.drawImage(ImgBall,srcXImgBall,srcYImgBall,widthImgBall,heightImgBall,ball.x,ball.y,ball.radius,heightImgBall);
              curFrameImgBall = ++curFrameImgBall % frameCountImgBall; 
              srcXImgBall = curFrameImgBall * widthImgBall; 
              srcYImgBall = trackRightImgBall * heightImgBall; 
              
           
          
            if (ball.x < hero.x + hero.imgWidth &&
                  ball.x + 1*ball.radius > hero.x &&
                  ball.y < hero.y + hero.imgHeight &&
                  1*ball.radius + ball.y > hero.y)
                  {
                    drawEffect(ball) 
                    bombSound.play()
                    score += point;
                    document.querySelector('.curScore').innerHTML= score
                   
                    arrBall.splice(index,1)
                    

              }else if (ball.x < x2 + width2 &&
                        ball.x + 2*ball.radius > x2 &&
                        ball.y < y2 + height2 &&
                        2*ball.radius + ball.y > y2){
                       
                         crushFerrari()          
                          

                }else if (ball.x < x3 + width3 &&
                         ball.x + 2*ball.radius > x3 &&
                         ball.y < y3 + height3 &&
                         2*ball.radius + ball.y > y3){
                                     
                          crushPontiacFirebird()
                                          
                          }else if (ball.x < x5 + width5 &&
                             ball.x + 2*ball.radius > x5 &&
                             ball.y < y5 + height5 &&
                             2    *ball.radius + ball.y > y5){


                           crushBugattiVeyron() 
                                             
                         } else if (ball.x < x6 + width6 &&
                         ball.x + 2*ball.radius > x6 &&
                         ball.y < y5 + height6 &&
                         2*ball.radius + ball.y > y6){
 
                           crushChevrolet()                    
 }

         if( ball.y + ball.radius  > ball.floor){
            drawEffect(ball)

            FireSong.play()
 
              setTimeout(drawGameOver, songStartPlay.pause(), 500)

              if(!gameOver) {
                gameOverSound.play()
                womenScream.play()
                //clearInterval(ANIME)
                gameOver = true;
                console.log('just once')
                
                canvas.addEventListener('click', function() { 
                  window.location.reload()
                }, false);
                document.body.append()
              }
                                   
          }else {           
              ball.y += ball.speed
              ball.x += 3;
            }

          if ( ball.x + ball.radius > canvas.width){
              ball.x = -ball.radius
            }else if (ball.x - ball.radius < 0 ){
              ball.x = +ball.radius
            }
        }








///////..................................................BOMB........................................................///////

var x1,y1,spriteWidth1, spriteHeight1, rows1,cols1,width1,height1,curFrame1,frameCount1,srcX1,srcY1,scale1,
spriteWidth1 = 489; 
spriteHeight1 = 49;

rows1 = 1; 
cols1 = 10

trackRight1 = 0; 


width1 = spriteWidth1/cols1; 
height1 = spriteHeight1/rows1

curFrame1 = 0; 
frameCount1 = 9; 

x1=0;
y1=405

srcX1; 
srcY1;

scale1 = 3


var imgEffect = new Image(); 
imgEffect.src = "img/Effect2.png";

               function updateEffect(){

               curFrame1 = ++curFrame1 % frameCount1; 
               srcX1 = curFrame1 * width1; 
               srcY1 = trackRight1 * height1; 
               ctx.clearRect(x1,y1,width1,height1); 
               
               }
               function drawEffect(ball){
                 updateEffect()
                 
               ctx.drawImage(imgEffect,srcX1,srcY1,width1,height1,ball.x-20,ball.y-30,width1*scale1 ,height1*scale1 );
               }
          
       









//////////////.............................................BOY RUN.......................................................///////////

var x,y,spriteWidth, spriteHeight, rows,cols,trackRight,width,height,curFrame,frameCount,srcX,srcY,scale,speed;
 
 spriteWidth = 864; 
 spriteHeight = 280

 rows = 2; 
 cols = 8
 
 trackRight = 0; 

 width = spriteWidth/cols; 
 height = spriteHeight/rows

 curFrame = 0; 
 frameCount = 8; 


 x=0;
 y=405

 srcX=0
 srcY=0

 scale = 0.5
 speed = 10; 
 
 



 
 var character = new Image(); 
 character.src = "img/character.png";
 
                function updateFrameRight(){

                curFrame = ++curFrame % frameCount; 
                srcX = curFrame * width; 
                srcY = trackRight * height; 
                ctx.clearRect(x,y,width,height);
                    x+=speed;
                }	

                function drawBoy(){
                  updateFrameRight()
                ctx.drawImage(character,srcX,srcY,width,height,x,y,width*scale ,height*scale );
                }
                






             
/////....................................................Boy2....................................................////////
var x4,y4,width4,height4,scale4,speed4;
width4 = 40;
height4 = 70;

x4=550;
y4=400;

scale4 = 3;
speed4 = 12; 

var imgBoy2 = new Image(); 
imgBoy2.src = "img/Boy-Game-Sprites.png";

                function drawBoy2(){
                ctx.drawImage(imgBoy2,x4,y4,width4,height4);
                
                  }






/////....................................................Girl....................................................////////

var imgGirl1 = new Image(); 
imgGirl1.src = "img/girl-left.png";

                function drawGirl1(){
                ctx.drawImage(imgGirl1,x4+70,y4-5,width4+20,height4+10);
                
                  }



/////....................................................Police....................................................////////

var imgBoy3 = new Image(); 
imgBoy3.src = "img/Police-Character-.png";

                function drawBoy3(){
                ctx.drawImage(imgBoy3,x4+300,y4,width4,height4);
                
                  }

/////////.................................................Ferrari...................................................////////


var x2,y2,width2,height2,speed2;
width2 = 140;
height2 = 70;

x2=canvas.width;

y2=445;

speed2 = 12; 

var imgFerrari = new Image(); 
imgFerrari.src = "img/ferrari.png";

                function drawFerrari(){
                ctx.drawImage(imgFerrari,x2,y2,width2,height2);
                x2 -=speed2
                if(x2 < 0){
                  x2 = canvas.width;
               
                } 
                  }
                function crushFerrari(){
                  height2 = 20   // height of Ferrari
                  y2=490;        // y of Ferrari
                  x2 +=10        // x of Ferrarij
                }







/////////.............................................PontiacFirebird...................................................////////
 
var x3,y3,width3,height3,speed3;
width3 = 190;
height3 = 80;

x3=0;
y3=470;

speed3 = 9; 

var imgPontiacFirebird= new Image(); 
imgPontiacFirebird.src = "img/PontiacFirebird.png";

                  
                function drawPontiacFirebird(){
                ctx.drawImage(imgPontiacFirebird,x3,y3,width3,height3);
                x3 +=speed3
                if(x3 > canvas.width){
                  x3 = 0;
                
                } 
                }
                function crushPontiacFirebird(){
                  height3 = 20; // height of PontiacFirebird
                  y3 =500;       // y  of PontiacFirebird
                  x3 -= 10.5;      // x of PontiacFirebird
                }
               
/////////.............................................BugattiVeyron...................................................////////


var x5,y5,width5,height5,speed5;
width5 = 130;
height5 = 40;

x5=0;
y5=470;

speed5 = 5; 

var imgBugattiVeyron= new Image(); 
imgBugattiVeyron.src = "img/BugattiVeyron.png";

                  
                function drawBugattiVeyron(){
                ctx.drawImage(imgBugattiVeyron,x5,y5,width5,height5);
                x5+=speed5
                  if(x5 > canvas.width){
                    x5 = 0;
                                 
                  }    
                    
                }
                function crushBugattiVeyron(){
                  height5 = 20; // height of PontiacFirebird
                  y5 =500;       // y  of PontiacFirebird
                  x5 -= 10.5;      // x of PontiacFirebird
  
                }


/////////.............................................Chevrolet...................................................////////  


var x6,width6,height6,speed6;
width6 = 110;
height6 = 50;

x6=canvas.width;

y6=445;

speed6 = 5; 

var imgChevrolet = new Image(); 
imgChevrolet.src = "img/Chevrolet.png";

                function drawChevrolet(){
                ctx.drawImage(imgChevrolet,x6,y6,width6,height6);
                x6 -=speed6
                if(x6 < 0){
                  x6 = canvas.width;
               
                } 
                  }
                function crushChevrolet(){
                  height6 = 20   // height of Ferrari
                  y6=490;        // y of Ferrari
                  x6 +=4        // x of Ferrarij
                }
           



/////////////.............................................GAME OVER.................................................///////

var xGameOver,yGameOver,widthGameOver,heightGameOver;
widthGameOver = 500;
heightGameOver = 400;

xGameOver =270;
yGameOver =10;
var imgGameOver = new Image(); 
imgGameOver.src = "img/GameOver.gif";

                function drawGameOver(){
                ctx.drawImage(imgGameOver,xGameOver,yGameOver,widthGameOver,heightGameOver);
               
                  }


function drawCars(){
  drawChevrolet()
  drawFerrari()
  drawBugattiVeyron()

drawPontiacFirebird()

}









///////........................................................SOUND.......................................................////////

function sound(src) { 
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}


let bombSound = new Audio()
let gameOverSound = new Audio()
let womenScream = new Audio()
let songStartPlay= new Audio()
let FireSong= new Audio()
bombSound.src = "./img/8bit_bomb_explosion (online-audio-converter.com).mp3"
gameOverSound.src = "./img/15879275_retro-game-synth-organ-game-over_by_ghetty_preview.mp3"
womenScream.src ="./img/NFF-girl-scream (1) (online-audio-converter.com).mp3"
songStartPlay.src ="./img/1-04 Desire.mp3"
FireSong.src="./img/Fire_Burning-JaBa-810606813.mp3"








function animate(){ //draw everything in
 
  ctx.clearRect(0,0,canvas.width,canvas.height); //clear WHOLE canvas 

  drawBoy()
  drawGirl1()
  drawBoy2()
  drawBoy3()  

              drawHero()
              drawBalls()
              drawCars()
              
          }



       
   

        












