// EUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background('blue');//青
  noStroke();//星の輪郭線NG
  for(let i = 0; i < 12; i++){
    const theta = TWO_PI * i / 12;//角度設定　TWO_PIが360度
    //星のxy座標の設定
    const x = 100 + cos(theta) * 50;//演習上のどの角度にあたるか
    const y = 100 + sin(theta) * 50;
    star(x, y, 10);//決めたxy上に半径10の円を描く
  }
}
// BLANK[1] ヒント：star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
function star(cx, cy, r){
  fill(255,255,0)//黄色
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){//★は5個
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;//星の線を描く順番を決める
    const x = cx + cos(theta) * r;//横方向の距離
    const y = cy + sin(theta) * r;//縦方向の距離
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}