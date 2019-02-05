// window.onload = function() {
// document.querySelector('.start-btn').onclick = function(){
// startGame()
// };
var canvas = document.querySelector('.gameBackground');
var ctx = canvas.getContext('2d');
      canvas.width = 1100;
      canvas.height = 550;

    

  function animate(){ //draw everything in here!
 
    ctx.clearRect(0,0,canvas.width,canvas.height); //clear WHOLE canvas 

    drawEffect()
              draw()
              drawHero()
              // heroActrak()
              drawBall()
             
            }



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
    imgHieght: 50
  }
 
  var img = new Image();
  img.onload = function() {}
  img.src = 'img/rightmissite.png';

          function drawHero(){
          ctx.drawImage(img, hero.x,hero.y,hero.imgWidth,hero.imgHieght)
          }




 






  var ball ={
    radius : 20,
    x : Math.random() * canvas.width,
    y : 0,
    speedDicrY : 0.01,
    star :[],
    ballBounce : 0.8,
    gravity : 1,
    floor: 500
   }

  function drawBall(){
            ctx.beginPath();
            ctx.arc(ball.x,ball.y,ball.radius,0, Math.PI*2,false );  
            ctx.fillStyle = 'blue'; 
            ctx.stroke();
            
          if ( ball.y + ball.radius +ball.speedDicrY > ball.floor){
            //console.log('GAME OVER')
              // ball.speedDicrY = -ball.speedDicrY * ball.ballBounce
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
          if (ball.y=== hero.y && ball.x=== hero.x){
            console.log('it work')
            function ministart(){}
            // earn point
          } 
        }




   

  function heroActrak(){
        
    // if (ball.y+ ball.radius === hero.y && ball.x + ball.radius === hero.x){
    //   console.log('it work')
    //   function ministart(){}
    //   // earn point
    // }else if (ball.y + ball.radius === ball.floor){
    //   function GameOver(){}
    // }  
}



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

 srcX; 
 srcY;

 scale = 0.5
 speed = 12; 
 
 var character = new Image(); 
 character.src = "img/character.png";
 
                function updateFrameRight(){

                curFrame = ++curFrame % frameCount; 
                srcX = curFrame * width; 
                ctx.clearRect(x,y,width,height);
                srcY = trackRight * height; 
                    x+=speed;
                }	

                function updateFrameLeft(){
                  leftFrame = ++leftFrame % frameCount; 
                  srcX = leftFrame * width; 
                  ctx.clearRect(x,y,width,height);	
                  srcY = trackLeft * height; 
                    x-=speed;
                }
                


                function tryka(){
                  if(x<canvas.width - 50){
                    updateFrameRight()
                    console.log('right work')
                    }else  {
                      updateFrameLeft()
                    console.log('left workkkkk')
                    }
                    
                }
                function draw(){
                tryka()
                ctx.drawImage(character,srcX,srcY,width,height,x,y,width*scale ,height*scale );
                }
                
 





// var Effect ={
//   x : 100,
//   y : 400,
//   imgWidth: 50,
//   imgHieght: 50,
//   spriteWidth :940,
//  spriteHeight :461,
// }

// var imgEffect = new Image();
//   imgEffect.onload = function() {}
//   imgEffect.src = 'img/Effet.jpg';

//           function drawEffect(){
//           ctx.drawImage(imgEffect, Effect.x,Effect.y,Effect.imgWidth,Effect.imgHieght)
//           }






 
setInterval(animate, 100)











// var boy = {
//   spriteWidth :864, 
//    spriteHeight :280,
  
//    rows :2, 
//    cols :8,
  
//    trackRight :0, 
//    trackLeft :1,
  
  
  
//    curFrame :0, 
//    frameCount :8, 
//    leftFrame  :6,
  
//    x:0,
//    y:405,
  
//    src: 0,
//    srcY: 0,
  
//    scale :0.5,
//    speed :12, 
//   }
//   var width = boy.spriteWidth/boy.cols;
//   var height =boy.spriteHeight/boy.rows;
  
   
//    var character = new Image(); 
//    character.src = "img/character.png";
   
//                   function updateFrameRight(){
//                   boy.curFrame = ++boy.curFrame % boy.frameCount; 
//                   boy.srcX = boy.curFrame * boy.width; 
//                   ctx.clearRect(boy.x,boy.y,boy.width,boy.height);
//                   boy.srcY = boy.trackRight * boy.height; 
//                       boy.x+=boy.speed;
//                   }	
  
//                   function updateFrameLeft(){
//                     boy.leftFrame = ++boy.leftFrame % boy.frameCount; 
//                     boy.srcX = boy.leftFrame * boy.width; 
//                     boy.ctx.clearRect(boy.x,boy.y,boy.width,boy.height);	
//                     boy.srcY = boy.trackLeft * boy.height; 
//                       boy.x-=boy.speed;
//                   }
                  
  
  
//                   function tryka(){
//                     if(boy.x<canvas.width - 50){
//                       updateFrameRight()
//                       console.log('right work')
//                       }else  {
//                         updateFrameLeft()
//                       console.log('left workkkkk')
//                       } 
//                   }
//                   function draw(){
//                   tryka()
//                   ctx.drawImage(character,boy.srcX,boy.srcY,boy.width,boy.height,boy.x,boy.y,boy.width * boy.scale ,boy.height * boy.scale );
//                   }
