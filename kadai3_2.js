  //edit関数で押されたボタンに対応した文字を追加する
  //id="result"の内容を取得して、変数resultに代入
  var result = document.getElementById("result");
  
  //押されたボタンに対応した文字を追加する関数
  function edit(elem) {
    result.value = result.value + elem.value;
  }
    
  //calc関数でFunctionを使用し、数式を計算する
  function calc() {
    result.value = new Function("return " + result.value)();
  }
  
  //入力を消去
  function clr() {
    result.value = "";
  }