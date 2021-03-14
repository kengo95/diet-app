# 自己紹介
多くの人と人をつなぎ合わせる事ができるシステムを開発したいと思い独学でフロントエンドエンジニアの学習を開始しました。

主なフロントエンドの学習言語は

* JavaScript
* React
* Redux

上記のスキルを中心に学習し、知識をアウトプットするためにこのアプリを作成しました。

### 学習時間

* JavaScript学習時間：1.5週間 (30時間)
* React 学習時間:1.5週間 (30時間)
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

・HTML ・CSS ・JavaScript ・React ・Redux ・Material-ui 

# データ構成

* トップのボタンを押すことによってdispatchでそのボタンに対応するURLに移動します。
* URLが変更されたらそれに対応するページをRouter機能を使い表示するようにしています。
* 栄養素は各ページのstateで管理しています。
* 追加ボタンを押すことによってstoreで管理しているstateに値を追加しています。
* 合計の箇所はstoreで管理されているstateの値を使用し表示を行っています。

# 工夫した点

### 1 エラーが起きたときは必ず自力で解決しました

* エラーした部分をもう一度学習して動作原理の理解を深めて行きました。<br>
　　過去学習しているときはただ単にコードを写しているだけでしたが自分で実装してエラーが出て原因を調べ改善することにより
　　知識の本当の意味でインプットをする事ができました。<br>

* 復習しても解決でき無いときはエラー部分をコピーしてネットで調べました。<br>
　　最初からエラーをコピーして調べていたらなんとなく解決してしまうので、この方法は上記の方法でどうしようもない時にこのような解決方法を取りました。<br>
　　ネットで紹介されている方法をコピーして使うのではなく、なぜそうなるのか自分なりに理解してエラーを改善することにより同様なエラーが起きても素早く改善する事ができました。<br>
  
### 2 Stateの管理の仕方

* 不要なエラーを防ぐためにstateの管理の仕方を工夫しました。<br>
　　各ページで表示される値（今回のアプリでは各ページで表示される栄養素）は各ページでuseStateを用いてstateを管理するようにしいました。<br>
　　親のコンポーネントで使いたいState（今回のアプリで合計値に格納するデータ）のみReduxを利用しStoreで管理するようにしました。<br>

### 3 ボタンの必要性に合わせて表示非表示を切り替えました。

* JavaScriptの条件演算子をbuttonタグの箇所で活用し表示非表示の切り替えを行っています。<br> 
  それによりユーザーの使い易さを意識し不要なエラーを防いでいます。


# 苦労した点

### 1　配列の操作方法

最初は配列の各要素をどう取りだすか、指定した要素の削除の仕方などがわかりませんでした。<br>
工夫した点の１で記述したよに、調べ理解することにより解決する事ができました。<br>
→[こちらのQiitaの記事](https://qiita.com/kengo95/items/2727ae3b069c6ca0661d)でアウトプットしました

### 2 Firebseへのdeploy

最初はGithubPagesへdeployしていましたが途中でFirebaseの方へ環境を移しました。<br>
初期にGithubPagesのURLをアプリに登録していたのでFirebaseにdeployできているのにページが表示され無いエラーが起きました.<br>
登録しているURLをFirebaseで発行されるURLに変更したところ表示されるようになりました。





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

* Reactの基礎及Reduxの理解を深めていく事ができました。

* この経験を生かしエラーが出ても諦めず、常にか学び続けるエンジニアになります。

最後にここまで読んでいただきありがとうございました。








