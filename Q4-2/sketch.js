// 折れ線グラフ
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
    // BLANK[1]
    // 1. 現在の点の座標 (x, y) を計算
    // 点が区間の中央に来るように i + 0.5 を使用
    const x = dx * (i + 0.5); 
    // scoresの値(0～100)をキャンバスのY座標(height～0)にマッピングして反転
    const y = map(scores[i], 0, 100, height, 0); 

    // 2. 計算した座標に点を描画
    ellipse(x, y, 8, 8); 

    // 3. 2回目以降のループで、前の点から現在の点へ線 (line) を引く
    if (i > 0) {
      line(px, py, x, y);
    }

    // 4. 現在の点 (x, y) を次のループのために (px, py) に保存
    px = x;
    py = y;
  }
}
