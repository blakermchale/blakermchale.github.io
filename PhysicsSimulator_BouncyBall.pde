///This edit contains a fully functional motion project against a triangle.
///The vertex list contains all the points of the triangle and uses them to
///calculate trajectory after contact
//variables for object
float xpos, ypos, g, v1_y, v1_x, angle, radius, ground;
{
  g = 0.098;
  angle = 0;
  radius = 0;
  ground = 300.;
}
int total_Balls = 14;
float const_elasticity = 0.05;
float const_frictionAir = -0.9;
float[] vertex = new float [8];
{
  vertex [0] = 0.; //0-5 are the triangle's veretexes
  vertex [1] = ground;
  vertex [2] = 0.;
  vertex [3] = 220.;
  vertex [4] = 50.;
  vertex [5] = ground;
  vertex [6] = 500.;
  vertex [7] = 230.;
}
float triangleSlope = (vertex[3]-vertex[5])/(vertex[2] - vertex[4]);
Ball[] balls = new Ball[total_Balls];
void setup()
{
  background(255,200,200);
  size(700,400);
  frameRate(60);
  stroke(0,0,0);
  xpos = 100;
  for (int i = 0; i < total_Balls; i++) 
  {
    balls[i] = new Ball(random(width), random(0,100), random(30, 50), i, balls);
  }
 noStroke();
 fill(255, 204);
}
void draw()
{
  background(255,200,200);
  fill(255,0,0);
  rect(-10, ground, width + 10, 100);
  triangle(vertex[0],vertex[1],vertex[2],vertex[3],vertex[4],vertex[5]);
  arc(500, 230, 160, 120, 0, PI, OPEN);
  for (Ball ball : balls) 
  {
    ball.collide();
    ball.move();
    ball.display();
  }
}
class Ball 
{
  float xpos, ypos;
  float diameter;
  float v1_x = 0;
  float v1_y = 0;
  int ball_tag;
  Ball[] other_Balls;
  Ball(float xposIn, float yposIn, float diameterIn, int ball_tagIn, Ball[] other_BallsIn) 
  {
    xpos = xposIn;
    ypos = yposIn;
    diameter = diameterIn;
    ball_tag = ball_tagIn;
    other_Balls = other_BallsIn;
  }

 void collide() 
  {
    for (int i = ball_tag + 1; i < total_Balls; i++) 
    {
      float distance_x = other_Balls[i].xpos - xpos;
      float distance_y = other_Balls[i].ypos - ypos;
      float distance = sqrt(distance_x*distance_x + distance_y*distance_y);
      float min_distance = other_Balls[i].diameter/2 + diameter/2;
      if (distance < min_distance) 
      {
        float angle = atan2(distance_y, distance_x);
        float targetX = xpos + cos(angle) * min_distance;
        float targetY = ypos + sin(angle) * min_distance;
        float change_x = (targetX - other_Balls[i].xpos) * const_elasticity;
        float change_y = (targetY - other_Balls[i].ypos) * const_elasticity;
        v1_x -= change_x;
        v1_y -= change_y;
        other_Balls[i].v1_x += change_x;
        other_Balls[i].v1_y += change_y;
      }
    }
  }

 void move() 
 {
  v1_y += g; xpos += v1_x; ypos += v1_y;
  if (xpos + diameter/2 > width) 
  {
    xpos = width - diameter/2;
    v1_x *= const_frictionAir;
  }
  else if (xpos - diameter/2 < 0) 
  {
    xpos = diameter/2;
    v1_x *= const_frictionAir;
  }
  if (ypos + diameter/2 > ground) 
  {
    ypos = 300 - diameter/2;
    v1_y *= const_frictionAir;
  }
  else if (ypos - diameter/2 < 0) 
  {
    ypos = diameter/2;
    v1_y *= const_frictionAir;
  }
  if (keyPressed)
  { //allows for movement throgh WASD
    if (key == 'd' || key == 'D')
    {
      v1_x = 2;
    }
    if (key == 'a' || key == 'A')
    {
      v1_x = -2;
    }
    if ((key == 'w' || key == 'W') && ypos >= 300 - diameter/2)
    {//checks to see if ball is on floor
    ypos += 0;
    v1_y = 10;
    }
  } 
  else 
  {
  }
  fill(0,0,255);
  ellipse (xpos, ypos, 20, 20);
  if(ypos < ground)
  {
    v1_y = v1_y + g;
  }
  if(ypos >= ground)
  {
    v1_y = -abs(v1_y * 0.70); //acts as const_frictionAir for floor
  }
  if(ypos >= ground && v1_y > -0.1 && v1_y < 0.1)
  {//sets y velocity to 0 when within a certain limit
    v1_y = 0;
  }
  if(v1_y == 0)
  {//only when ball has no downward velocity does the x velocity slow down
    v1_x = v1_x * 0.90;
  }
  if(xpos <= 0 || xpos >= width)
  {//allows for ball to bounce off walls
    v1_x = (-v1_x * 0.90);
  }
  for (int t = 0; t < 50; t += 1)
  {
    if (ypos >= triangleSlope * t + vertex[3] && xpos <= t )
    {//triangles properties
      radius = sqrt(pow(v1_x, 2) + pow(v1_y, 2)) * 0.90;
      angle = atan(triangleSlope);
      v1_x = sin(angle) * radius;
      v1_y = -cos(angle) * radius;
    }
  }
}

void display() 
{
  ellipse(xpos, ypos, diameter, diameter);
  }
}
void keyPressed()
{
  if(key == CODED)
  {
    if(keyCode == UP)
    {
      print("Y velocity: ", v1_y, "Angle: ", angle, "Radius: ", radius, "Slope: ", triangleSlope, " ");
      ground--;
    }
    else if(keyCode == DOWN)
    {
      ground++;
    }
  }
}