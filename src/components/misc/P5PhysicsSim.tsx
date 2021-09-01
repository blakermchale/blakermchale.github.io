import React from "react";
import p5Types from "p5"; //Import this for typechecking and intellisense
import loadable from "@loadable/component"

const Sketch = loadable(() => import("react-p5"))

///This edit contains a fully functional motion project against a triangle.
///The vertex list contains all the points of the triangle and uses them to
///calculate trajectory after contact
//variables for object

let width;
let height;
const g = 0.098;
let angle = 0;
let radius = 0;
let ground = 300.;

let total_Balls = 24;
let const_elasticity = 0.05;
let const_frictionAir = -0.9;
let vertex = new Array(8);
vertex[0] = 0.; //0-5 are the triangle's veretexes
vertex[1] = ground;
vertex[2] = 0.;
vertex[3] = 220.;
vertex[4] = 50.;
vertex[5] = ground;
vertex[6] = 500.;
vertex[7] = 230.;

let triangleSlope = (vertex[3]-vertex[5])/(vertex[2] - vertex[4]);
let balls = [];

class Ball 
{
    p: p5Types;
    xpos;
    ypos;
    diameter;
    v1_x = 0;
    v1_y = 0;
    ball_tag;
    other_Balls;
    constructor(p: p5Types, xposIn, yposIn, diameterIn, ball_tagIn, other_BallsIn) 
    {
        this.p = p;
        this.xpos = xposIn;
        this.ypos = yposIn;
        this.diameter = diameterIn;
        this.ball_tag = ball_tagIn;
        this.other_Balls = other_BallsIn;
    }

    collide() 
    {
        for (let i = this.ball_tag + 1; i < total_Balls; i++) 
        {
        let distance_x = this.other_Balls[i].xpos - this.xpos;
        let distance_y = this.other_Balls[i].ypos - this.ypos;
        let distance = this.p.sqrt(distance_x*distance_x + distance_y*distance_y);
        let min_distance = this.other_Balls[i].diameter/2 + this.diameter/2;
        if (distance < min_distance) 
        {
            let angle = this.p.atan2(distance_y, distance_x);
            let targetX = this.xpos + this.p.cos(angle) * min_distance;
            let targetY = this.ypos + this.p.sin(angle) * min_distance;
            let change_x = (targetX - this.other_Balls[i].xpos) * const_elasticity;
            let change_y = (targetY - this.other_Balls[i].ypos) * const_elasticity;
            this.v1_x -= change_x;
            this.v1_y -= change_y;
            this.other_Balls[i].v1_x += change_x;
            this.other_Balls[i].v1_y += change_y;
        }
        }
    }

    move() 
    {
        this.v1_y += g; this.xpos += this.v1_x; this.ypos += this.v1_y;
        if (this.xpos + this.diameter/2 > width) 
        {
            this.xpos = width - this.diameter/2;
            this.v1_x *= const_frictionAir;
        }
        else if (this.xpos - this.diameter/2 < 0) 
        {
            this.xpos = this.diameter/2;
            this.v1_x *= const_frictionAir;
        }
        if (this.ypos + this.diameter/2 > ground) 
        {
            this.ypos = 300 - this.diameter/2;
            this.v1_y *= const_frictionAir;
        }
        else if (this.ypos - this.diameter/2 < 0) 
        {
            this.ypos = this.diameter/2;
            this.v1_y *= const_frictionAir;
        }
        if (this.p.keyIsPressed)
        { //allows for movement throgh WASD
            if (this.p.key == 'd' || this.p.key == 'D')
            {
                this.v1_x = 2;
            }
            if (this.p.key == 'a' || this.p.key == 'A')
            {
                this.v1_x = -2;
            }
            if ((this.p.key == 'w' || this.p.key == 'W') && this.ypos >= 300 - this.diameter/2)
            {//checks to see if ball is on floor
                this.ypos += 0;
                this.v1_y = 10;
            }
        } 
        else 
        {
        }
        this.p.fill(0,0,255);
        this.p.ellipse (this.xpos, this.ypos, 20, 20);
        if(this.ypos < ground)
        {
            this.v1_y = this.v1_y + g;
        }
        if(this.ypos >= ground)
        {
            this.v1_y = -this.p.abs(this.v1_y * 0.70); //acts as const_frictionAir for floor
        }
        if(this.ypos >= ground && this.v1_y > -0.1 && this.v1_y < 0.1)
        {//sets y velocity to 0 when within a certain limit
            this.v1_y = 0;
        }
        if(this.v1_y == 0)
        {//only when ball has no downward velocity does the x velocity slow down
            this.v1_x = this.v1_x * 0.90;
        }
        if(this.xpos <= 0 || this.xpos >= width)
        {//allows for ball to bounce off walls
            this.v1_x = (-this.v1_x * 0.90);
        }
        for (let t = 0; t < 50; t += 1)
        {
            if (this.ypos >= triangleSlope * t + vertex[3] && this.xpos <= t )
            {//triangles properties
            radius = this.p.sqrt(this.p.pow(this.v1_x, 2) + this.p.pow(this.v1_y, 2)) * 0.90;
            angle = this.p.atan(triangleSlope);
            this.v1_x = this.p.sin(angle) * radius;
            this.v1_y = -this.p.cos(angle) * radius;
            }
        }
    }

    display() 
    {
        this.p.ellipse(this.xpos, this.ypos, this.diameter, this.diameter);
    }
}

interface ComponentProps {
}

const P5PhysicsSim: React.FC<ComponentProps> = (props: ComponentProps) => {

	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.background(255,200,200);
        p5.createCanvas(700,400).parent(canvasParentRef);
        width = p5.width;
        height = p5.height;
        p5.frameRate(60);
        p5.stroke(0,0,0);
        for (let i = 0; i < total_Balls; i++) 
        {
            balls.push(new Ball(p5, p5.random(width), p5.random(0,100), p5.random(30, 50), i, balls));
        }
        p5.noStroke();
        p5.fill(255, 204);
	};

	const draw = (p5: p5Types) => {
		p5.background(255,200,200);
        p5.fill(255,0,0);
        p5.rect(-10, ground, width + 10, 100);
        p5.triangle(vertex[0],vertex[1],vertex[2],vertex[3],vertex[4],vertex[5]);
        p5.arc(500, 230, 160, 120, 0, p5.PI, p5.OPEN);
        for (let ball of balls) 
        {
            ball.collide();
            ball.move();
            ball.display();
        }
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default P5PhysicsSim;
