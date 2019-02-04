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



  
 
  function animate(){ //draw everything in here!
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height); //clear WHOLE canvas 
   
    drawHero()
    drawBall()
 

  }



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

 
  function heroActrak(){
 
        
          if (ball.y + ball.radius === ball.floor){
            function GameOver(){}
          }else if (ball.y+ ball.radius === hero.y && ball.x + ball.radius === hero.x){
            function ministar(){}
            // earn point
          }  
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
    
   if ( ball.y + ball.radius +ball.speedDicrY > 500){
      ball.speedDicrY = -ball.speedDicrY * ball.ballBounce
    }else {
      ball.speedDicrY += ball.gravity
    }

   if ( ball.x + ball.radius > canvas.width){
      ball.x = -ball.radius
    }else if (ball.x - ball.radius < 0 ){
      ball.x = +ball.radius
    }
   
    ball.y += ball.speedDicrY
   ball.x += 3;
   
  }
    animate()















