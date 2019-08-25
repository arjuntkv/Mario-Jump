
let mario;
let goo;
let marioimg;
let mario1img;
let goombaimg;
let backimg;
let goombas = [];
let soundClassifier;

function preload()
{

    const options ={probabilityThreshold:0.95};
    soundClassifier=ml5.soundClassifier('SpeechCommands18w',options);
    marioimg=loadImage('images/mario.png');
    mario1img=loadImage('images/mario1.png');
    goombaimg=loadImage('images/goomba.png');
    backimg=loadImage('images/background.png');
}

function setup()
{
    createCanvas(900,500);
   mario = new Mario();
   soundClassifier.classify(gotCommand);
}

function gotCommand(error,results)
{
    if(error)
    {
        console.error(error);
    }
    if(results[0].label=='up')
    {
        mario.jump();
    }
}

function keyPressed()
{
    if(key ==' ')
    {
        mario.jump();
    }
}

function draw()
{
     if(random(1) <  0.005)
     {
         
         goombas.push(new Goomba());
    }
   
    background(backimg);
    for(let t of goombas)
    { 
       t.move();
       t.show(); 
       if(mario.hit(t))
       {
           alert('Game over');
           noLoop();
       }
    } 


    mario.show();
    mario.move();

}   