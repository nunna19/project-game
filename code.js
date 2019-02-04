// window.onload = function() {
// document.querySelector('.start-btn').onclick = function(){
// startGame()
// };

var canvas = document.querySelector('.gameBackground');
    var ctx = canvas.getContext('2d');
   canvas.width = 1100;
    canvas.height = 550;

window.addEventListener('mousemove',function(event){
// console.log(event)
 
  hero.x = event.x - 100;
 
  // 100 * heho.width/100;
  hero.y =event.y + 50 ;
  
 })





  
 
  function animate(){ //draw everything in here!
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height); //clear WHOLE canvas 
   
    drawHero()
    drawBall()
 

  }



  var hero ={
    x : 0,
    y : 0,
    imgX: 100,
    imgY: 50
  }
 
  
   


  var ball ={
    radius : 20,
    x : Math.random() * canvas.width,
    y : 0,
    speedDicrY : 3,
    star :[],
    ballBounce : 0.8,
    gravity : 1,
    floor: 500
   }

  var img = new Image();
 
  img.onload = function() {}

 
  img.src = 'img/rightmissite.png';


  function drawHero(){
   
    if (hero.x < 500 ){
    
      img.src = 'img/leftmissite.png';
    }else {
      img.src = 'img/rightmissite.png';
    }
    ctx.drawImage(img, hero.x,hero.y,hero.imgX,hero.imgY)
   
  }

 
  function heroActrak(){
 
        
          if (ball.y + ball.radius === ball.floor){
            function GameOver(){}
          }else if (ball.y+ ball.radius === hero.y && ball.x + ball.radius === hero.x){
            function ministar(){}
            // earn point
          }  
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
    ball.y += 3
  }

    animate()















