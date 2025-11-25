// チェッカー
function setup() {
  createCanvas(200, 200); //土台となる四角形の大きさ
  const size = width / 8; // マスの一辺の長さ：25＊25の敷き詰め方を考える。
  noStroke();
  for(let i = 0; i < 8; i++){　//iだけ定数化して、ｊだけ動かしているイメージ
    for(let j = 0; j < 8; j++){
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
     // (i + j) が偶数なら白、奇数なら黒にする
      if ((i + j) % 2 === 0) {
        fill(255); // 白 
      } 
      else{
        fill(100);//グレー
      }
      rect(size * j, size * i, size, size); // 四角形を描画 // rect(x座標, y座標, 幅, 高さ)
      if((i + j) % 2 === 1 && (i<3)){
        fill(255, 0, 0)//赤でいったん塗りつぶしている
        ellipse(size*j + size/2 , size*i + size/2 , 20 ,20 );//円の中心を定義する
      }
      if((i + j) % 2 === 1 && (i>4)){
        fill(0)//黒でいったん塗りつぶしている
        ellipse(size*j + size/2 , size*i + size/2 , 20 ,20 ); //円の中心を定義する
      }
   }
  }
}