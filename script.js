// Firebase 基本設定
var firebaseConfig = {
  apiKey: "AIzaSyDV2xQc9vVAF3EiNJwiH1q2uvnEiRcEedI",
  authDomain: "pawapokaraoke-cc91d.firebaseapp.com",
  storageBucket: "pawapokaraoke-cc91d.appspot.com",
};
firebase.initializeApp(firebaseConfig);

// ストレージのpath
var storage = firebase.storage();
var storageRef = storage.ref();

// ストレージに接続
storageRef
  .listAll()
  .then(function (res) {
    // ストレージ内の全ファイルからランダムで1つのpathを取得
    let N = Math.floor(Math.random() * res.items.length);
    imgpath = res.items[N].fullPath;
  })
  .catch(function (error) {
    // エラー時の処理
  });

// HTMLの"cardimg"に取得したpathを貼り付ける
storageRef
  .child(imgpath)
  .getDownloadURL()
  .then(function (url) {
    var img = document.getElementById("cardimg");
    img.src = url;
  })
  .catch(function (error) {
    // エラー時の処理
  });
