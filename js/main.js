'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // コメント部分は全ての確率が同じ場合
    // const results = ['大吉', '中吉', '凶', '小吉'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    const n = Math.random();
    if(n < 0.1){
      btn.textContent = '大吉'; //10%
    }else if(n < 0.3){
      btn.textContent = '中吉';  //20%
    }else if(n < 0.6){
      btn.textContent = '小吉';  //30%
    }else if(n < 0.9){
      btn.textContent = '末吉';  //30%
    }else{
      btn.textContent = '凶';  //10%
    }
  });
  btn.addEventListener('mousedown', () => {
    btn.classList.add('pressed');
  });
  btn.addEventListener('mouseup', () => {
    btn.classList.remove('pressed');
  });
}
