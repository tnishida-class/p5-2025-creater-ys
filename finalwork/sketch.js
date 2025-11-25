// 最終課題を制作しよう

let x, y, w, h, vx, vy;
const g = 1; // 重力加速度
const vyMax = 40;
let n; // figure関数の頂点数

function setup(){
  createCanvas(windowWidth, windowHeight);　// w, h を座標として初期化し、x, y は未使用にする
  w = width / 2; 
  h = height / 2;
  vx = 16;
  vy = 8;
  n = 5;//描画する多角形の頂点数
}

function draw(){
  // ⓵描画設定
  background(160, 192, 255); 
  fill(255, 220, 0);
  stroke(255, 220, 0); 
  figure(n, w, h, 50); // figure関数の呼び出し (w, h は図形の中心座標)　要件：アニメーションの活用
  w += vx;   // 速度による座標の更新
  h += vy; 
  vy = constrain(vy + g, -vyMax, vyMax); // 重力と速度の制限

  //⓶反射
  if(w < 0 || w > width){// 左右の壁での反射
    vx = -1 * vx;
  }

  if(w < 0 || w > width){
     n = n - 1; 
     n = max(3, n - 1); // n を減らす処理。ただし最低値を3に制限
  }

  if(h > height){// 下の床での反射
    vy = -1 * vy;
  }

  if(h > height){
    n = n + 1;
  }
  
  //⓷座標が画面外に出ないように制限
  w = constrain(w, 0, width);
  h = constrain(h, 0, height);
  
  // ⓸キー入力による移動（要件キーボード）
  const moveSpeed = 5;
  if(keyIsDown("A".charCodeAt(0))){ w -= moveSpeed*10; } // Aキーで左に移動を追加
  if(keyIsDown("B".charCodeAt(0))){ w += moveSpeed*10; } // Bキーで右に移動を追加
  if(keyIsDown("C".charCodeAt(0))){ h -= moveSpeed*10; } // Cキーで上に移動を追加
  if(keyIsDown("D".charCodeAt(0))){ h += moveSpeed*10; } // Dキーで下に移動を追加
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// 多角形を描画する関数（要件：自作の関数）
function figure(n, cx, cy, r){
  beginShape();
  for(var i = 0 ; i < n; i++){ //要件：ループ
    let theta = TWO_PI * i / n;
    let x = cx + cos(theta) * r; 
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}