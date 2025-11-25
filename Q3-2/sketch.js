// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;//ｘ・ｙで位置特定
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
  y=groundY-size/2 //y=groundY どちらか不明のためメモ。（characterを地面上に）

  if(keyIsDown(LEFT_ARROW)){ x -= 1; 
    if(keyIsDown("A".charCodeAt(0))){ x-= 10; 
    }
  } 

  if(keyIsDown(RIGHT_ARROW)){ x += 1;
    if(keyIsDown("A".charCodeAt(0))){ x+= 10;
    } 
  } //要件１・２

  // BLANK[2] 重力とジャンプ


  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}

//まだ2できてない