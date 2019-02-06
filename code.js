// window.onload = function() {
// document.querySelector('.start-btn').onclick = function(){
// startGame()
// };
var canvas = document.querySelector('.gameBackground');
var ctx = canvas.getContext('2d');
      canvas.width = 1100;
      canvas.height = 550;

    




  var mouse ={};
  window.addEventListener('mousemove',function(event){
    mouse.x = event.x ;
    mouse.y =event.y ;

  
         if (mouse.x - 150 > hero.x){
          img.src = 'img/rightmissite.png';
           }else {
           img.src = 'img/leftmissite.png';
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




 






  var ballOriginal ={
    radius : 20,
    x : Math.random() * canvas.width,
    y : 0,
    speedDicrY : 0.01,
    star :[],
    ballBounce : 0.8,
    gravity : 1,
    floor: 500
   }
   var arrBall =[]


  for(let i=0; i<10; i++){ //create all balls 
    let eachBall = {...ballOriginal, y:i*-100, x:Math.random()*canvas.width}
    arrBall.push(eachBall)
  }

   function drawBalls(){ //draw all balls
      for(let j=0; j<arrBall.length; j++){
        console.log()
        drawBall(arrBall[j],j)
      }
   }


   
  function drawBall(ball,index){ //draw each ball 
           
            
              ctx.beginPath();
              ctx.arc(ball.x,ball.y,ball.radius,0, Math.PI*2,false ); 

              ctx.fillStyle = 'blue'; 
              ctx.stroke();
          

          
            if (ball.x < hero.x + hero.imgWidth &&
                  ball.x + 2*ball.radius > hero.x &&
                  ball.y < hero.y + hero.imgHeight &&
                  2*ball.radius + ball.y > hero.y)
                  {drawEffect(ball)
                   arrBall.splice(index,1)
                   ctx.fillStyle(ball.x,ball.y,ball.width,ball.height);

              }else if (ball.x < x2 + width2 &&
                        ball.x + 2*ball.radius > x2 &&
                        ball.y < y2 + height2 &&
                        2*ball.radius + ball.y > y2){
                          console.log('boom')
                         carDrawEffectF()           
                         height2 = 20
                         y2=490;
                         x2 +=10                 
                }else if (ball.x < x3 + width3 &&
                         ball.x + 2*ball.radius > x3 &&
                         ball.y < y3 + height3 &&
                         2*ball.radius + ball.y > y3){
                        console.log('boom')
                       carDrawEffectF()           
                       height3 = 20;
                       y3 =500;
                       x3 -=10;       
                }

         if( ball.y + ball.radius +ball.speedDicrY > ball.floor){
            console.log('game over')
            drawEffect(ball)
           
        
          }else {
              ball.speedDicrY += ball.gravity
              ball.y += ball.speedDicrY
              ball.x += 3;
            }

          if ( ball.x + ball.radius > canvas.width){
              ball.x = -ball.radius
            }else if (ball.x - ball.radius < 0 ){
              ball.x = +ball.radius
            }
        }










///////////////////////////////////////////////Character Of Game//////////////////////////////////////////////


var x,y,spriteWidth, spriteHeight, rows,cols,trackRight,trackLeft,width,height,curFrame,frameCount,leftFrame,srcX,srcY,scale,speed;
 
 spriteWidth = 864; 
 spriteHeight = 280

 rows = 2; 
 cols = 8
 
 trackRight = 0; 
 trackLeft = 1

 width = spriteWidth/cols; 
 height = spriteHeight/rows

 curFrame = 0; 
 frameCount = 8; 
leftFrame  = 6;

 x=0;
 y=405

 srcX=0
 srcY=0

 scale = 0.5
 speed = 12; 
 
 var character = new Image(); 
 character.src = "img/character.png";
 
                function updateFrameRight(){

                curFrame = ++curFrame % frameCount; 
                srcX = curFrame * width; 
                srcY = trackRight * height; 
                ctx.clearRect(x,y,width,height);
                    x+=speed;
                }	

                function updateFrameLeft(){
                  leftFrame = ++leftFrame % frameCount; 
                  srcX = leftFrame * width; 	
                  srcY = trackLeft * height; 
                  ctx.clearRect(x,y,width,height);
                    x-=speed;
                }
                


                function walkBack(){
                  if(x >= 0){
                    updateFrameRight()
                    //console.log('right work')
                    }else if (x <= 600) {
                      updateFrameLeft()
                    //console.log('left workkkkk')
                    }
                    
                }
                function drawBoy(){
                walkBack()
                ctx.drawImage(character,srcX,srcY,width,height,x,y,width*scale ,height*scale );
                }
                
             





 var x1,y1,spriteWidth1, spriteHeight1, rows1,cols1,width1,height1,curFrame1,frameCount1,srcX1,srcY1,scale1,
 spriteWidth1 = 489; 
 spriteHeight1 = 49;

 rows1 = 1; 
 cols1 = 10
 
 trackRight1 = 0; 
 trackLeft1 = 1

 width1 = spriteWidth1/cols1; 
 height1 = spriteHeight1/rows1

 curFrame1 = 0; 
 frameCount1 = 9; 

 x1=0;
 y1=405

 srcX1; 
 srcY1;

 scale1 = 3
 speed1 = 12; 
 
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
                ctx.drawImage(imgEffect,srcX1,srcY1,width1,height1,ball.x-50,ball.y-85,width1*scale1 ,height1*scale1 );
                }
                function carDrawEffectF(){
                  updateEffect()
                ctx.drawImage(imgEffect,srcX1,srcY1,width1,height1,x2,y2-100,width1*scale1 ,height1*scale1 );
                }
                function carDrawEffectPF(){
                  updateEffect()
                ctx.drawImage(imgEffect,srcX1,srcY1,width1,height1,x3,y3-100,width1*scale1 ,height1*scale1 );
                }




var x2,y2,width2,height2,scale2,speed2,newX2;
width2 = 150;
height2 = 80;

x2=canvas.width;
newX2 = x2 - 2
y2=445;

scale2 = 3;
speed2 = 10; 

var imgFerrari = new Image(); 
imgFerrari.src = "img/ferrari.png";

                function drawFerrari(){
                ctx.drawImage(imgFerrari,x2,y2,width2,height2);
                x2 -=speed2

                  }

 

var x3,y3,width3,height3,scale3,speed3;
width3 = 190;
height3 = 80;

x3=0;
y3=470;

scale3 = 3;
speed3 = 10; 

var imgPontiacFirebird= new Image(); 
imgPontiacFirebird.src = "img/PontiacFirebird.png";
                  
                function drawPontiacFirebird(){
                ctx.drawImage(imgPontiacFirebird,x3,y3,width3,height3);
                x3 +=speed3

                  }














function animate(){ //draw everything in
  ctx.clearRect(0,0,canvas.width,canvas.height); //clear WHOLE canvas 
  
              drawBoy()
              drawFerrari()
              drawPontiacFirebird()
              drawHero()
              drawBalls()
           
          }
setInterval(animate, 100)












