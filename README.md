# 自己紹介
多くの人と人をつなぎ合わせる事ができるシステムを開発したいと思い独学でフロントエンドエンジニアの学習を開始しました。

主なフロントエンドの学習言語は

* JavaScript
* React
* Redux

上記のスキルを中心に学習し、知識をアウトプットするためにこのアプリを作成しました。

### 学習時間

* JavaScript学習時間：1.5週間 (30時間)
* React 学習時間:2週間 (40時間)
* Redux 学習時間:1週間（20時間）

* 本アプリ作成時間:1週間（24時間）


# アプリの概要

### タイトル

[Fai Fai Diet](https://fai-fai-di.web.app/)

### 開発経緯

自分は体重120kgから85kgまで減量した経験があり周りからダイエットの相談をうける事が多くなりました。

ダイエットで1番大切なのは食事管理です。しかし、面倒で適当になってしまい上手くダイエットが出来ない方が多いです。

そこで誰でも簡単に食事管理ができ、一日何をどのくらい食べそれの栄養素を簡単に管理できるアプリを開発しようと考えました。

### ターゲット

* ダイエット初心者

# 使用イメージ

### 食べた食材を選択し栄養成分の確認

ページのトップには各食材のボタンを設置しました。

ボタンを押すことによってその食材の栄養成分が表示されるようになっています。

このボタンにない食材を食べた時には自ら食材の名前、栄養成分を追加できるようにしました。

![second](https://user-images.githubusercontent.com/78431096/110656900-ba79f680-8203-11eb-8473-6986bac4bcb1.gif)

### 食べた食材のグラム数を記入

最初の表には各食材100gあたりの栄養成分を表示しています。

何g食べたか数量を記入することによってその数量に合わせた栄養成分を表示します。

![third](https://user-images.githubusercontent.com/78431096/110660429-e6e34200-8206-11eb-84b4-75fae7dc10e6.gif)

### 1日の栄養素の合計を計算

食べた食材を追加していくことによって1日何を食べたか管理をする事ができます。

更に各栄養素ごとの合計値も出るようにしました。

間違えて追加してしまっても各項目ごとに削除できます。

![five](https://user-images.githubusercontent.com/78431096/110662843-3d518000-8209-11eb-8bfa-ade2c013d64b.gif)

### 使用技術

・HTML ・CSS ・JavaScript ・React ・Reducer ・Material-ui 

# データ構成

* トップのボタンを押すことによってDISPATCHでそのボタンに対応するURLに移動します。
* URLが変更されたらそれに対応するページをROUTER機能を使い表示するようにしています。
* 栄養素は各ページのSTATEで管理しています。
* 追加ボタンを押すことによってSTOREで管理しているSTATEに値を追加しています。
* 合計のところはSTOREで管理されているSTATEの値をMAP機能を使用し各値を取り出し表示を行っています。

# 工夫した点

### 1 エラーが起きたときは必ず自力で解決しました

何度かエラーが出てつまずいたのですがその都度もう１度エラー部分の学習を行うことによりエラーの原因が理解でき
知識をより深めていく事ができました。

### 2 使いやすさを意識しました

入力欄に正しく入力されていなければ追加ボタン表示しないなど、不要なエラーを防いでいます。

# 今後の課題

以下が残存課題です。随時修正していきます。

* 1日分の栄養素しか計算でき無い事です。<br>
  ↓<br>
  過去の栄養素を記録して１週間前に食べたものとかを参照できるようにしていきます。<br>

* 自分なりの食材を登録できるようにしたい。<br>
  ↓ <br>
  今は自分が登録した食材しかボタン表示され無いのですが、使う人によって様々な食材を登録でき、ボタンで表示できるようにしていきます。
  
  # 学べた事
  
* アプリの内容自体はレベルが高いとは言えませんが1つのアプリを自分なりに考えて作成できたことでWEBエンジニアに不可欠な自走力が身についたと実感します。

* Reactの基礎及Reducerの理解を深めていく事ができました。

* この経験を生かしエラーが出ても諦めず、常にか学び続けるエンジニアになります。

最後にここまで読んでいただきありがとうございました。








