class Mario
{
        constructor(){
            this.r=100;
            this.x=50;
            this.y=height-this.r-50 ;
            this.vy=0;
            this.gravity=2 ;
        }

        jump()
        {
            if(this.y == height-this.r-50)
           this.vy=-37 ;  
        }

        move()
        {
            this.y =this.y+this.vy; 
            this.vy=this.vy+this.gravity; 
         this.y=constrain(this.y,0,height-this.r-50)
        }

        hit(goomba)
        {
            let x1=this.x+this.r*0.5;
            let y1=this.y+this.r*0.5;
            let x2=goomba.x+goomba.r*0.5;
            let y2=goomba.y+goomba.r*0.5;
           return collideCircleCircle(x1,y1,this.r,x2,y2,goomba.r );
        }

        show(){
           // ellipseMode(CORNER); 
           // ellipse(this.x,this.y,this.r,this.r);
            image(marioimg,this.x,this.y,this.r,this.r);
            
        }
        
}