// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count; // 何フレーム目か
let size = 50;//　円の原形？正直よくわかってない

function setup(){
  createCanvas(200, 200);
  count = 0;
}

function draw(){
  background(160, 192, 255);
  
  let speed = 1; // アニメーションの速さ
  // BLANK[2]
  if (keyIsPressed) {            //押してたら倍進める（15～18の意味）
    count = (count + 2) % cycle;
  }
  count = (count + speed) % cycle;

  //let size = 50; このコードは4に移動。これが原因（？）
  // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる
  if(count< cycle /2 ){
    size += 1;  //変数化した円のサイズ（function内でのみ使える）
  }else{
    size -= 1;
  }
  ellipse(width / 2, height / 2, size);
}
