import React from "react";
import p5Types from "p5"; //Import this for typechecking and intellisense
import loadable from "@loadable/component"

const Sketch = loadable(() => import("react-p5"))

interface ComponentProps {
}

let KeyPhoto: p5Types.Image;
let GatePhoto: p5Types.Image;
let SpritePhoto: p5Types.Image;
const cols = 41;
const rows = 41;
const vision = 3;
let exclude = [2,3,4,5];
const walls = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,1,8,1,0,1,0,1,1,1,1,1,0,1,1,1, 1 ,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1],
	[1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
	[1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1],
	[1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0, 8 ,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,0,0,1,0,1,6,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1],//
	[1,0,1,1,1,0,1,0,1,0,1,7,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1],
	[1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1],
	[1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1],
	[1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1],
	[1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
	[1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1],
	[1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1],
	[1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1],
	[1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
	[1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1],
	[1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
	[1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1],
	[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1],
	[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1],
	[1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
	[1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1],
	[1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,7,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1],//
	[1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1],
	[1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1],
	[1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1],
	[1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1],
	[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1],
	[1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1],
	[1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1],
	[1,0,0,0,0,0,0,0,8,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1],
	[1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,8,1,1,1,0,1],
	[5,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,4],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	];
let tempWalls = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,1,8,1,0,1,0,1,1,1,1,1,0,1,1,1, 1 ,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1],
	[1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
	[1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1],
	[1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0, 8 ,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,0,0,1,0,1,6,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1],//
	[1,0,1,1,1,0,1,0,1,0,1,7,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1],
	[1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1],
	[1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1],
	[1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1],
	[1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],
	[1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1],
	[1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1],
	[1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1],
	[1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1],
	[1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1],
	[1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
	[1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1],
	[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1],
	[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1],
	[1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
	[1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1],
	[1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
	[1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,7,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1],//
	[1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1],
	[1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1],
	[1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1],
	[1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1],
	[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1],
	[1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1],
	[1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1],
	[1,0,0,0,0,0,0,0,8,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1],
	[1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,8,1,1,1,0,1],
	[5,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,4],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	];
const Left = 'a';
const Right = 'd';
const Up = 'w';
const Down = 's';
const Reset = '1';
const Lights = '2';
let width;
let height;
let placed = false;
let light = false;
let GameState = true;
let AI1 = false;
let AI2 = false;
let Key1 = false;
let god = false;
let count =0;
let TimeOn = false;
let startTime = 0;
	

class Sprite {
	p: p5Types;
	xpos: number;
	ypos: number;
	possibleX: number;
	possibleY: number;
	constructor(p: p5Types, xposin, yposin) {
		this.p = p;
		this.xpos = xposin;
		this.ypos = yposin;
		this.possibleX = this.xpos;
		this.possibleX = this.ypos;
	}

	move() {
		if (this.p.keyIsPressed == true)
		{
			if (this.p.key == Reset)
			{
				this.xpos = 0; this.ypos = 1; Key1 = false; AI1 = false; AI2 = false; GameState = true;
				for (let i = 0; i < walls.length;i++)
				{
					tempWalls = walls.slice();
				}
			}
			this.possibleX = this.xpos;
			this.possibleY = this.ypos;
			if (this.p.key == Lights && !light)
			{
				light = true;
			}
			else if (this.p.key == Lights && light)
			{
				light = false;
			}
			if(this.p.key == Left){
				this.possibleX = this.xpos - 1;
			}
			else if (this.p.key == Right){
				this.possibleX = this.xpos + 1;
			}
			else if (this.p.key == Up){
				this.possibleY = this.ypos - 1;
			}
			else if (this.p.key == Down)
			{
				this.possibleY = this.ypos + 1;
			}
			else{}
			if (this.possibleX < 0)
			{
				this.possibleX = 0;
			}
			else if (this.possibleX >= rows)
			{
				this.possibleX = rows - 1;
			}
			if (this.possibleY < 0)
			{
				this.possibleY = 0;
			}
			else if (this.possibleY >= cols)
			{
				this.possibleY = cols - 1;
			}
			if (tempWalls[this.possibleY][this.possibleX]==1)
			{
				//println("BOOOOOOOO");
			}
			else if (tempWalls[this.possibleY][this.possibleX]==0)
			{
				//CheckBox(this.xpos,this.ypos);
				if (tempWalls[this.ypos][this.xpos]==3)
				{
				light = false;
				}
				this.xpos = this.possibleX;
				this.ypos = this.possibleY;
			}
			else if (tempWalls[this.possibleY][this.possibleX]==3)
			{
				//CheckBox(this.xpos,this.ypos);
				this.xpos = this.possibleX;
				this.ypos = this.possibleY;
				light = true;
			}
			else if (tempWalls[this.possibleY][this.possibleX]==4)
			{
				GameState = false;
				AI1 = true;
			}
			else if (tempWalls[this.possibleY][this.possibleX]==5)
			{
				GameState = false;
				AI2 = true;
			}
			else if (tempWalls[this.possibleY][this.possibleX]==6)
			{
				Key1 = true;
				this.xpos = this.possibleX;
				this.ypos = this.possibleY;
				tempWalls[this.possibleY][this.possibleX] = 0;
			}
			else if (tempWalls[this.possibleY][this.possibleX]==7)
			{
				if(Key1)
				{
				//CheckBox(this.xpos,this.ypos);
				this.xpos = this.possibleX;
				this.ypos = this.possibleY;
				}
			}
			else if (tempWalls[this.possibleY][this.possibleX]==8)
			{
				this.xpos = this.possibleX;
				this.ypos = this.possibleY;
			}
			else{ }
			
			if (this.p.key == 'f' && !god)
			{
				god = true;
			}
			else if (this.p.key == 'f' && god)
			{
				god = false;
			}
			if (god)
			{
				this.xpos = this.possibleX;
				this.ypos = this.possibleY;
			}
			if (!GameState)
			{
				this.p.background(0,0,0);
				this.drawSprite();
			}
		}
	}
	
	drawSprite() {
		this.p.fill(255,0,0);
		this.p.rect(this.xpos*(width/rows),this.ypos*(height/cols),width/rows,height/cols);
		this.p.image(SpritePhoto, this.xpos*(width/rows),this.ypos*(height/cols));
	}

	shadow()
	{
		this.p.background(0,0,0);
		let sightX = this.xpos - vision;
		let sightY = this.ypos - vision;
		if(sightX < 0)
		{
		sightX = 0;
		}
		else if (sightX + (vision*2) >= rows)
		{
		sightX = rows - (vision*2 + 1);
		}
		if (sightY < 0)
		{
		sightY = 0;
		}
		else if (sightY + vision*2 >= cols)
		{
		sightY = cols - (vision*2 + 1);
		}
		
		this.p.fill(135,206,250);
		this.p.rect(40*(width/rows),39*(height/cols),width/rows,height/cols);
		this.p.fill(255,165,0);
		this.p.rect(0*(width/rows),39*(height/cols),width/rows,height/cols);
		
		for (let i = 0; i < vision*2+1; i++)
		{
			for(let j = 0; j < vision*2+1; j++)
			{
				let x = sightX+j;
				let y = sightY+i;
				CheckBox(this.p, x, y, this.xpos, this.ypos);
			}
		}
		
		this.drawSprite();
	}
	Light()
	{
		
		for(let i = 0; i < cols; i++)
		{
		for(let j = 0; j < rows; j++)
		{

			/*
			if (count==i)
			{
			Arrays.sort(exclude);
			//tempWalls[i][j] = (int)random(9);
			do {
				tempWalls[i][j] = (int) random(0, 8);
			} 
			while (Arrays.binarySearch(exclude, tempWalls[i][j]) >= 0);
			}
		*/
		CheckBox(this.p, j, i, this.xpos, this.ypos);
		}
		}
		count++;
		if (count == 40)
		{
		count = 0;
		}
		
		this.drawSprite();
	}
}

function myDelay(p5: p5Types, delay: number) {
  
	if (TimeOn == false)
	{
	  TimeOn = true;
	  startTime = p5.millis();
	}
	if ((p5.millis() >= startTime + delay) && TimeOn)
	{
	  TimeOn = false;
	}
}

function CheckBox(p5: p5Types, x: number, y: number, xpos: number, ypos: number)
{
  if (tempWalls[y][x] == 1)//Solid Wall
  {        
    p5.fill(150,150,150);
    p5.rect(x*(width/rows),y*(height/cols),width/rows,height/cols);
    //image(KeyPhoto, x*(width/rows),y*(height/cols));
  }
  else if (tempWalls[y][x]==0)//No wall
  {
    p5.fill(255,255,255);
  }
  else if (tempWalls[y][x]==3)//light block
  {
    p5.fill(0,255,0);
  }
  else if (tempWalls[y][x]==4)//AI 1
  {
    p5.fill(135,206,250);
  }
  else if (tempWalls[y][x]==5)//AI 2
  {
    p5.fill(255,165,0);
  }
  else if (tempWalls[y][x]==6)//Key
  {
    //fill(255,165,165);
    p5.fill(255,255,255);
    p5.rect(x*(width/rows),y*(height/cols),width/rows,height/cols);
    p5.image(KeyPhoto, x*(width/rows),y*(height/cols));
  }
  else if (tempWalls[y][x]==7)//Key wall
  {
    //fill(255,100,165);
    p5.fill(255,255,255);
    p5.rect(x*(width/rows),y*(height/cols),width/rows,height/cols);
    p5.image(GatePhoto, x*(width/rows),y*(height/cols));
  }
  else if (tempWalls[y][x]==8)//fake wall
  {
    if ( ((x-1)==xpos && (/*(y-1)==ypos || (y+1)==ypos ||*/ y==ypos)) || ((x+1)==xpos && (/*(y+1)==ypos || (y-1)==ypos || */y==ypos)) || (x==xpos && ((y+1)==ypos || (y-1)==ypos /*|| y==ypos*/)) )
    {
		p5.fill(255,255,255);
    }
    else
    {
		p5.fill(130);
		p5.rect(x*(width/rows),y*(height/cols),width/rows,height/cols);
      //image(WallPhoto, x*(width/rows),y*(height/cols));
    }
  }
  if (tempWalls[y][x] == 6)
  {}
  else if (tempWalls[y][x] == 7)
  {}
  else
  {
    p5.rect(x*(width/rows),y*(height/cols),width/rows,height/cols);
  }
    
  return tempWalls[y][x];
}

const P5MazeGame: React.FC<ComponentProps> = (props: ComponentProps) => {
	let sprite;

	const preload = (p5: p5Types) => {
		KeyPhoto = p5.loadImage("/data/mazegame/key.png");
		GatePhoto = p5.loadImage("/data/mazegame/gate.png");
		SpritePhoto = p5.loadImage("/data/mazegame/charactersprite.png");
	}

	const setup = (p5: p5Types, canvasParentRef: Element) => {
		
		p5.background(255,255,255);
		p5.createCanvas(750, 750).parent(canvasParentRef);
		p5.frameRate(60);
		width = p5.width;
		height = p5.height;
		//noLoop();
		//final String[] ports = Serial.list();
		//new Serial(this, ports[PORT_INDEX], BAUDS).bufferUntil(ENTER);
		KeyPhoto.resize(width/rows,height/cols);
		GatePhoto.resize(width/rows,height/cols);
		SpritePhoto.resize(width/rows, height/cols);

		sprite = new Sprite(p5, 0, 1);
	};

	const draw = (p5: p5Types) => {
		if (TimeOn == false && sprite)
		{
			if (GameState)
			{
				sprite.move();
				if (light)
				{
					sprite.Light();
				}
				else
				{
					sprite.shadow();
				}
			}
			else //user reaches end
			{
				sprite.move();
				if (AI1)
				{
					p5.textSize(width/10);
					p5.fill(255,255,255);
					p5.textAlign(p5.CENTER);
					p5.text("1 2 3 4",width/2,height/2);
					p5.textSize(width/50);
					p5.text("AI 1 has been chosen",width/2,(height/2)+(height/10));
				}
				else if (AI2)
				{
					p5.textSize(width/10);
					p5.fill(255,255,255);
					p5.textAlign(p5.CENTER);
					p5.text("4 3 2 1",width/2,height/2);
					p5.textSize(width/50);
					p5.text("AI 2 has been chosen",width/2,(height/2)+(height/10));
				}
				god = true;
			}
		}
		myDelay(p5, 100);
	};

	return <Sketch preload={preload} setup={setup} draw={draw} />;
};

export default P5MazeGame;
