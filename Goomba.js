class Goomba {
    constructor() {
        this.r = 60;
        this.x = width;
        this.y = height - this.r-40;
    }
    move() {
        this.x -= 8    ;
    }
    show() {
        // ellipseMode(CORNER); 
        // ellipse(this.x,this.y,this.r,this.r); 
        image(goombaimg, this.x, this.y, this.r, this.r);
    }
}
