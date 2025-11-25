// ギリシャ国旗（ほかの国旗に挑戦してもOK）
function setup() {
  createCanvas(270, 180);
  noStroke();
  background(255);//背景は白で塗っている

  const d = height / 9; // 縞1本の太さ
  const blue = color(0, 51, 160);

  // 縞を描く
  for(let i = 0; i < 9; i++){
     if(i%2 === 0){ //余りが0のとき青
      fill(blue);
    }
    else{
      fill(255);//余りが1のとき白
    }    
    // BLANK[1] ヒント：縞の色を交互に変えるには2で割った余りを使おう
    rect(0, i * d, width, (i + 1) * d);
  }

  // 十字を描く
  const size = d * 5;//縦横5本分にエリア限定？
  fill(blue);//正方形を青に塗る？
  rect(0, 0, size, size);
  fill(255);
  rect(d * 2, 0, d, size);//これが立ての白線と推測して、、、
  //ここまでで左上の部分を青に染め、白線を縦に描写
  // BLANK[2] 十字を完成させよう
  rect( 0,d * 2 , size, d)//上を参考に、出力を繰り返した
}

