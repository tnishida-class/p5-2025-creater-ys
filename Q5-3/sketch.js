// カレンダーを描画しよう
function setup(){
  createCanvas(200, 200);
  drawCalendar(2025, 10);
}

function drawCalendar(y, m){
  for(let i = 0; i < 7; i++){
    const x = i * width / 7;
    const y = 20;
    stroke(255);
    text(dayOfWeekAsString(i), x, y);
  }

  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] まずは daysInYear, dayOfWeek を作ろう
    for(let d = 1; d <= daysInMonth(y, m); d++){
    // d は 1 から始まるため、 d-1 + dow でカレンダー上の通し位置 (0: 1日目の日曜日から) を取得
    const calPos = (d - 1) + dow; 
    
    // X座標 (曜日): 7の剰余を取る
    const currentDow = calPos % 7; 
    
    // Y座標 (週): 7で割って切り捨てる
    const row = floor(calPos / 7); 
    
    // X座標: currentDow (0～6) に基づいて計算
    const x = currentDow * width / 7 + 10; 
    // Y座標: row (週番号) に基づいて計算
    const y = (row * 20) + 40; 
    
    // 日付 d を描画
    text(d, x, y); 
   }
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1] hint: 閏年なら366日、そうでなければ365日
  if(isLeapYear(y)){
  return 366 
  }
  else{
  return 365  
  }
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2] hint: 曜日がわかる日からの経過日数を求め7の剰余を取る　たとえば1970年1月1日木曜日
  let days = 0;
  // 1970年からy-1年までの日数を加算
  for(let i = 1970; i < y; i++){
    days += daysInYear(i);
  }
  //その年の1月1日から目標の月日の前日までの日数を加算
  days += dayOfYear(y, m, d) - 1; 

  //1970年1月1日(木曜日=4)からの総日数を7の剰余で求める
  // (4 + days) % 7 が目標日の曜日番号 (0:日, 1:月, ..., 6:土)
  return (4 + days) % 7; 
}


function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土"];
  return a[dow];
}