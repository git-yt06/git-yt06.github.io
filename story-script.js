const dialogues = [
    {
        character: "",
        text: `
        本教材は会話形式で進むので、会話を進める場合は右にある"次へ"ボタンを、<br>
        戻す場合は"戻る"ボタンを押してください。<br>
        また、画面上部に画像を表示し、そちらで説明することもあります。<br>
        会話だけでなく、画像の内容も全て読みながら進めてもらうことを想定しています。<br>
        画像一覧を押せば画像の一覧を表示できます。振り返りに使ってください。`,
        choices: [], correctChoice: [],
    },
    {
        character: "",
        text: `※本教材は情報Iのプログラミング分野全てを網羅しているわけではありません<br>
        ※プログラミング言語の話題も出ますが、知っていなくても問題ないです。<br><br>
        それでは、学習を開始します。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "",
        text: `あなた(弟)は大学受験生で情報Iのプログラミング分野の対策教材を解いています。<br>
        しかし、分からない問題があったため、プログラミングに詳しい兄に教えてもらうことにしました。`,
        choices: [], correctChoice: [],
    },
    {
        character: "弟",
        text: "ごめん、プログラミングの共通テスト対策問題解いたけど、間違い多かったから教えてくれない？",
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `しょうがない。見せてみな。<br>…　なるほど。<br>
        まず、せっかくだからこの分野の名前である<br>
        アルゴリズムとプログラミングの意味から確認していくか。`,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `アルゴリズムは方法や手順のことで、プログラムはそれをコンピュータが実行できる<br>
        ように書いたものってイメージだ。<br>
        アルゴリズムを考えてプログラムを作ることをプログラミングって言う。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド1.JPG",
    },
    {
        character: "弟",
        text: `…ぶっちゃけここの分野部活の大会で授業いなかったから<br>
        わりと大体分かってないんだよね。<br>
        アルゴリズムは具体的にどういうイメージ？
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド1.JPG",
    },
    {
        character: "兄",
        text: `それはドンマイだったな。<br>
        アルゴリズムは例えば、初対面で出席番号順に並ぶとき、<br>
        誰かを基準にしてまず列(1人)を作る。その後、<br>
        列に入って先頭から、相手より番号が大きいなら後ろへ進むのを、<br>
        番号が大きい相手に会うか最後尾になるまで繰り返して、そこに入る。<br>
        そして、それを皆がやって完成させる。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "弟",
        text: `もっと柔軟に並べばって気はするけど、<br>
        まあそうだね。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `これは、「列に入るとき、先頭から番号を比較するのを<br>
        自分の場所を確定できるまで繰り返して、確定できた場所に入る。<br>
        それを全員が行う。」っていう手順で作ったってことだ。<br>
        だから、この手順はアルゴリズムの1種と言える。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "弟",
        text: `あー。そういう感じね。言おうと思えば<br>
        わりとアルゴリズム多そうだね。<br>
        料理に対するレシピとかアルゴリズムででしょ。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `合ってる。理解力高いな。<br>
        じゃあ、次はプログラムを作るときに使う言語を確認していくぞ。<br>
        まあ今回(共通テストで使われる言語)はわりと日本語だから安心してくれ。<br>
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `言語は基本的に日本語の構文と数字、文字列、変数の組み合わせみたいだ。<br>
        構文は後でまとめて学ぶぞ。数字は普通に0~9(半角)で作られる数だ。<br>
        0とか10000とか0.5とかだな。<br>
        文字列は「」または""で括られた文字全般を指し、<br>
        変数は英数字(先頭は英字のみ)のことだ。<br>
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `例えば、itは変数で、"it"だと文字列という扱いになる。<br>
        変数には数字や文字列を代入できるぞ。数学のxとかと同じようなものだな。<br>
        ただ、数字を代入している変数に文字列を代入するのは基本NGだ。<br>
        1が代入されているxに、"1"を代入するみたいにな。2を代入とかはOKだ。<br>
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `
        後、コンピュータでは数字は小数か整数かを区別して扱うから、<br>
        整数の変数に小数を入れるとかも基本良くないから気をつけてな。<br>
        整数2を代入した変数numに、7/2を代入すると日本語だと3.5だが、<br>
        プログラミング言語によっては3が代入されるぞ。<br>
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "弟",
        text: `数字と文字列は分かる。<br>
        変数も数学で使っている変数とほぼ同じで、<br>
        あれに文字列が代入できるようになっただけでしょ。<br>
        使い方がイマイチ分からないけど意味は分かるな。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `これからたくさん具体例見てくから<br>
        使い方はそこで把握していってくれ。<br>
        意味というか言葉の定義が分かれば十分だから、<br>
        次いくぞ。演算子の確認だ。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `と、その前に。ごめん。教え忘れてたものが1つ。<br>
        真理値というのもある。これは真(正しい)と偽(間違い)の2つしかとらない。<br>
        例えば、3は奇数であるは真、1は0より小さいは偽だ。<br>
        コンピュータでは偽は数字の0、真は0以外の数字として扱うから、数字の1種ともいえる。<br>
        じゃあ、演算子の確認をするぞ。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `基本的に日本語、数学的表現として読めば問題ないけど、<br>
        <span style='color: yellow;'>割り算関係の演算子(/, ÷, %)</span>の使い分けには注意だ。<br>
        コンピュータは数字が整数か小数かというのを意識して扱う必要があるからな。<br>
        余りも、x%a=0で「aの倍数かを確かめる」みたいな感じでよく使う。<br>
        他の演算子も確認していくぞ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド2.JPG",
    },
    {
        character: "兄",
        text: `比較演算は数学と同じだ。3≧3は真だ。<br>
        =と≠は文字列にも使えて、"A"≠"a"は真、"Ani"="Ani"は真だな。<br>
        代入演算子(←)は、等号比較(=)と紛らわしいことに要注意だ。<br>
        今回はx=1はxが1かどうかを確かめる、<br>x←1はxに1を代入するという意味だからな。<br>
        次に、論理演算について確認していく。論理演算では真理値を扱い、結果も真理値を返す。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド3.JPG",
    },
    {
        character: "兄",
        text: `"かつ"は、"AかつB"のように使い、AとBが両方が"真"のときのみ"真"になり、<br>
        "または"は、"AまたはB"のように使い、AとBの片方でも"真"なら"真"になるぞ。<br>
        例えば、xが5のとき、xは6でないは真だ。他にも<br>
        x%5≠0かつx≧0　(5の倍数でなく0以上)は偽、<br>
        x<0またはx%2=0　(0より小さい か 偶数)は偽となる。<br>
        もしxが4だったなら2つとも真だ。`,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド4.JPG",
    },
    {
        character: "弟",
        text: `割り算と代入以外は新しいことないね。助かるわ。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `後、表示文ってのがある。<br>
        プログラムは実行しても内部で処理をして終わりだから、<br>
        何か表示してほしかったらこれを書かないといけないんだ。`,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド5.JPG",
    },
    {
        character: "兄",
        text: `他にも関数ってのもある。<br>
        例えば、頻繁にx*x+y*y(*は掛け算)を計算したいとき、毎回そう書くのは面倒だから<br>
        関数A(x,y)と書くだけでそれを実行してその値を返してくれるようにするためのものだ。<br>
        例えば、aが3、bが4のとき、a←関数A(a,b)で、aに25(=3*3+4*4)が代入されるぞ。<br>
        ちなみに引数をもたないってのも可能だ。例えば、「こんちにわ」を表示するだけの関数<br>
        なら引数に応じて結果を変える必要がないから、こんちにわ() みたいに使えるぞ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド6.JPG",
    },
    {
        character: "兄",
        text: `こういう使い方もできるぞ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド7.JPG",
    },
    {
        character: "弟",
        text: `表示文はとが続くと何て表示されるのか分かり辛いけど、<br>
        難しくはないね。<br>
        関数も引数に対してその関数名を実行する感じで使うのは簡単かな。<br>
        定義するのはむずそうだけど。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `そして、一番やっかいなのがこのリストだ。<br>
        慣れると問題ないんだが、添字が0から始まって、<br>
        (リストの大きさ-1)で最後というのが間違えやすい原因だ。<br>
        例えば、生徒一人一人に変数を付けるのが面倒だから、<br>
        クラス[出席番号]で管理するみたいな目的で使うぞ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド8.JPG",
    },
    {
        character: "兄",
        text: `リストの中身を変えたいときは、<br>
        こんな感じで、変えたい場所をピンポイントで指定して<br>
        変更することが多いぞ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド9.JPG",
    },
    {
        character: "弟",
        text: `なんで0から始めたし。<br>
        リスト自体はリスト名[添字]という形で変数が<br>
        並んでるみたいなもんだよね？<br>
        確かに変数めっちゃ増やすより楽そう。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `その認識で問題ないぞ。<br>
        リスト名[添字]がリストのどこを指しているか<br>
        さえ間違えなければ大丈夫。改めて0開始に注意な。<br>
        これで残すは構文(制御文)だけだ。こいつら確認していくぞ。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `制御文とは、プログラミング言語でいうif文やfor文のことだ。<br>
        今回の言語では愚直に日本語で書かれているから、<br>
        長くて読みにくいかもしれないけど、落ち着いて読めば構造の理解は簡単だと思う。<br>
        1つずつ確認していくぞ。`,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `まず条件分岐文を確認するぞ。<br>
        条件分岐文は、(条件)が成り立つかどうかによって実行する処理を切り替えるものだ。<br>
        基本形はこれ(上の画像参照)「もしAならBを行う」だ。<br>
        雨なら中止する、残金が100円以上ならあれも買うみたい感じだな。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド10.JPG",
    },
    {
        character: "兄",
        text: `そして、基本形のもう1つはこれだ。<br>
        さっきのに、条件に当てはまらないときはCを行うというものを追加した。<br>
        テストが平均点以上ならお小遣いUP、そうでないならDOWNみたいな感じだ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド11.JPG",
    },
    {
        character: "兄",
        text: `最後にこういう使い方もあるぞ。<br>
        さっきの、AならB、違うならCをする、という形において、<br>
        Cも実は条件文でした～ってだけだから、冷静に見て<br>
        どの処理がどういう条件で行われるのかを把握しような。<br>
        80点以上ならA評価、そうでなく60点以上ならB、そうでもないならCみたいな感じだ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド12.JPG",
    },
    {
        character: "弟",
        text: `意味自体は何も難しくないな、読みにくいけど。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `次に条件繰返し文(while文)を確認するぞ。<br>
        条件が真の間、その中身の処理が繰り返される(ループする)ぞ。<br>
        条件にある変数を繰返しの中の処理で上手く変えていかないと、<br>
        永遠に処理が終わらないから(無限ループ)書くときは気をつけな。<br>
        後判定というのもあるが、今回はメジャーな前判定のみ扱う。`,
        choices: [], orrectChoice: [],
        contentImageSrc: "./image/スライド13.JPG",
    },
    {
        character: "兄",
        text: `使い方はこんなん(上の例参照)だな。<br>
        ループに入る前は「(x,sum)=(10,0)」、<br>
        ループ1回目の処理終了時点で「(x,sum)=(9,10)」、<br>
        って感じで進んでいって、最終的に「(x,sum)=(0,55)」になったときに<br>
        x>0を満たさないからこのループが終わる。<br>
        `,
        choices: [],  correctChoice: [],
        contentImageSrc: "./image/スライド13.JPG",
    },
    {
        character: "弟",
        text: `はい押すまでループするキャラとかこれか。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `そうだな。多分これで作ってる。<br>
        最後に順次繰返し文(for文)を確認するぞ。こうだな。<br>
        さっきのと同じく、ループ処理を行うやつだな。<br>
        表記ゆれがあるけど、惑わされずに読んだ通り解釈すれば大丈夫だ。<br>
        while文で書けるのは原則for文で書けるぞ。逆もそうだ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド14.JPG",
    },
    {
        character: "兄",
        text: `ちなみに、ifやwhile文もそうだが、処理のところに構文を入れて大丈夫だぞ。<br>
        ループの中にループがもう1つある構文は2重ループと言って、<br>
        これを扱いこなせるようになるかがちょっとした壁になる。<br>
        当然、3重、4重とかも可能だけど、情報を専門的に扱うまではほぼ出ない。<br>
        2重ループまで追えれば基本十分だな。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "弟",
        text: `までは>でなく≧か。<br>
        構文は全部1つ1つの処理は簡単だね。<br>
        …ん？なんであんなに問題間違えたんだろう`,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `うっかりミスしたか、構文を誤解しているか、ちゃんとプログラムの流れを追えてないかだな。<br>
        とりあえず、単体の処理を理解できているか確認してみるか。`,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `この問題に対してnumが-3のとき何が表示される？ (右上の選択肢を選んで、決定を押してね)<br>`,
        choices: ["a","b","ab","-3"],
        correctChoice: [],
        contentImageSrc: "./image/スライド15.JPG",
        id: 1
    },
    {
        character: "兄",
        text: `では、この問題に対してnumが4のとき何が表示される？ (右上の選択肢を選んで、決定を押してね)<br>`,
        choices: ["a","b","num","4"],
        correctChoice: [],
        contentImageSrc: "./image/スライド15.JPG",
        id: 2
    },
    {
        character: "兄",
        text: `関数Aと関数Cが呼び出される回数について正しいのはどれだ？ (右上の選択肢を選んで、決定を押してね)<br>`,
        choices: ["AとCは同じ回数","Aの方がCより多い回数","Aの方がCより少ない回数","場合による"],
        correctChoice: [],
        contentImageSrc: "./image/スライド16.JPG",
        id: 3
    },
    {
        character: "兄",
        text: `関数Bが呼び出される回数について正しいのはどれだ？ (右上の選択肢を選んで、決定を押してね)<br>`,
        choices: ["3回","5回","8回","15回"],
        correctChoice: [],
        contentImageSrc: "./image/スライド16.JPG",
        id: 4
    },
    // {
    //     character: "兄",
    //     text: `iが0のときの処理が終わったあとのBaseの中身について、正しいのはどれだ？ (右上の選択肢を選んで、決定を押してね)<br>`,
    //     choices: [`[“a”,”B”,”C”]`,`[“A”,”b”,”c”]`,`[“c”,”B”,”C”]`,`[“C”,”b”,”c”]`],
    //     correctChoice: [],
    //     contentImageSrc: "./image/スライド17.JPG",
    //     id: 4
    // },
    // {
    //     character: "兄",
    //     text: `iが0のときの処理が終わったあとのHenkouの中身について、正しいのはどれだ？ (右上の選択肢を選んで、決定を押してね)<br>`,
    //     choices: [`[“A”,”B”,”C”]`,`[“a”,”b”,”c”]`,`[“c”,”B”,”C”]`,`[“C”,”b”,”c”]`],
    //     correctChoice: [],
    //     contentImageSrc: "./image/スライド17.JPG",
    //     id: 4
    // },
    // {
    //     character: "兄",
    //     text: `ループを抜けたあとのBaseの中身について、正しいのはどれだ？ (右上の選択肢を選んで、決定を押してね)<br>`,
    //     choices: [`[“a”,”b”,”c”]`,`[“c”,”b”,”a”]`,`[“A”,”B”,”C”]`,`[“C”,”B”,”A”]`],
    //     correctChoice: [],
    //     contentImageSrc: "./image/スライド17.JPG",
    //     id: 4
    // },
    {
        character: "弟",
        text: "構文は改めて大丈夫な気がする！",
        choices: [],
        correctChoice: [],
    },
    {
        character: "兄",
        text: `じゃあ本題のアルゴリズムに入っていくか。<br>
        プログラムを作るときの言語はさっき確認した<br>
        共通テストの言語で作っていくぞ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド1.JPG",
    },
    {
        character: "兄",
        text: `アルゴリズムが必要なものの代表格に探索がある。<br>
        俺たちは適当に全体を眺めて、あった とか なくね?<br>
        とできるが、コンピュータはなんとなくや適当が出来ない。<br>
        どういう風に探すのか、決まったやり方-アルゴリズム-を与える必要があるんだ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド18.JPG",
    },
    {
        character: "兄",
        text: `そのアルゴリズムの1つは線形探索だ。<br>
        リストを先頭から1つずつ、しらみつぶしに見ながら探索するぞ。<br>
        今回の言語で書くとこうなる。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド19.JPG",
    },
    {
        character: "兄",
        text: `どう動くのか、具体例も見ておくぞ。<br>
        複雑な動きをしているように見えるかもしれないけど<br>
        実際は単純な動きだから諦めず動きを追ってみてくれ。<br>
        関数の読みにくさは、まあ、慣れてくれ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド20.JPG",
    },
    {
        character: "兄",
        text: `もう1つ具体例を見るぞ。<br>
        ループを抜ける＝リストにない<br>
        っていうのを理解できてればOKだ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド21.JPG",
    },
    {
        character: "弟",
        text: `どう動くかも1つ1つの文の意味も<br>
        分かっているはずなのに追うの難しいな。`,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `慣れるまでは皆そうだと思うから安心しな。<br>
        今度はもう1つの代表的な探索アルゴリズムを見ていくぞ。<br>
        二分探索と言って、探索範囲をどんどん半分にしていくアルゴリズムだ。<br>
        言葉だと分かりづらいから、まずイメージを掴んでいくぞ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド22.JPG",
    },
    {
        character: "兄",
        text: `イメージはこんな感じだ。<br>
        意外と簡単というか、クイズとかでこういう考えを<br>
        したこともあるんじゃないか。<br>
        ただ、これをプログラミング言語で書くと結構ややこしい。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド23.JPG",
    },
    {
        character: "兄",
        text: `こんな感じにな。ついでに動き方はこうなる。<br>
        複雑に見えるけど、やっていくことは<br>
        さっきのイメージの通りだ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド24.JPG",
    },
    {
        character: "兄",
        text: `見つからない場合の動きも一応見せるぞ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド25.JPG",
    },
    {
        character: "弟",
        text: `リストとループ絡むと格段に難しいな。<br>
        自信なくしてきたかも…`,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `アルゴリズムの難しい問題はほぼ必ず<br>
        その二つが手を組むぞ。<br>
        慣れるまでは読むの難しくて当然だから、<br>
        何回も振り返ってゆっくり慣れてから進んでくれ。
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `さっきのは自分で追えるようになったか？<br><br>
        …さて、2つ紹介されたらどっちが良いか<br>
        気になるんじゃないか。良い方だけ覚えてれば基本問題ないしな。<br>
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "弟",
        text: `二分探索じゃないの？<br>
        1つずつ見るより、半分ずつ絞る<br>
        こっちの方が明らかに速くない？<br>
        `,
        choices: [], correctChoice: [],
    },
    {
        character: "兄",
        text: `
        確かに何回も同じリストを使うときやリストが大きいときは二分探索だ。<br>
        ただ、そうじゃないときは線形探索の方が速いこともある。<br>
        最初にソートする手間が無視できないからな。<br>
        だから、絶対的に二分探索の方が良いというのは偽なんだよね。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/スライド26.JPG",
    },
    {
        character: "弟",
        text: `マジか…騙されたわ。<br>
        でも、逆に自信なくした気もしなくはないけど、<br>
        改めてアルゴリズムもなんとなく把握できたと思う。`,
        choices: [],
        correctChoice: [],
    },
    {
        character: "兄",
        text: `良いじゃん。前提知識は出来上がったから、<br>
        後は問題を解いて解き方に慣れていくしかないな。<br>
        じゃあ間違えた問題を確認してみようか。<br>
        せっかくだから、処理を並び替えてプログラムを作るところからやってみるぞ。`,
        choices: [],
        correctChoice: [],
    },
    {
        character: "弟",
        text: `難しそうだな…<br>でもやってみる。`,
        choices: [],
        correctChoice: [],
    },
    {
        character: "兄",
        text: `問題に入る前に操作方法を説明するぞ。<br>
        上にある通りだ。<br>
        (説明は続きます)<br>
        (読みにくい場合、画面を拡大するか、画像一覧から開くともう少し大きく表示されます。)`,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/説明1.JPG",
    },
    {
        character: "兄",
        text: `説明は以上だ。<br>
        ちなみに、必ず正解のプログラムが作れるぞ。<br>
        あ、最後に補足することがあった。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/説明2.JPG",
    },
    {
        character: "兄",
        text: `今回の正解はこうだったな。<br><br>
        関数 こんにちは()を<br>
        ｜　"Hello"を表示する<br>
        と定義する<br><br>
        だけど、選択肢には「｜　」(インデントと言う)がない。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/説明2.JPG",
    },
    {
        character: "兄",
        text: `インデントがあることで、その処理がどこの範囲にあるのかが<br>
        見やすくなるから普通は付けるんだが、並び替え問題ではこれが基本ない。<br>
        今回の言語ではインデントがなくても、範囲の終わりの表現が必ずあり範囲を特定できるので<br>
        (今回なら「と定義する」までが関数の範囲と分かる)ので、それを意識して並び替えてくれ。
        `,
        choices: [], correctChoice: [],
        contentImageSrc: "./image/説明2.JPG",
    },
    {
        character: "兄",
        text: `じゃあ、やってみよう！<br><br>
        ※右上の「問題へ！」ボタンを押すと、<br>
        新しいウィンドウが開かれ、並び替え問題が出されます。<br>
        自力で解けない場合でもウィンドウを閉じ、ストーリーを進めることは可能ですが、 <br>
        間違っても選択に応じた実行結果やヒントが出るので、積極的に挑戦してみてください！
        `,
        choices: [],
        correctChoice: [],
        url: "./problem/fzbz1/q.html"
    },
    {
        character: "弟",
        text: `正解はこうだよね！<br>
        あれ？緑の枠線で囲ったようなイメージは描けて、そんな感じの選択肢を選んだ気がするけどどこを間違えたんだろう？`,
        choices: [],
        correctChoice: [],
        contentImageSrc: "./image/正解1.JPG",
    },
    {
        character: "兄",
        text: `教材で間違えていた解答だとこうなるね。さっきの正解と違うところは赤文字にしておいた。<br>
        改めて見ることで、なんで間違っていたか、もしくはどうすれば正解だったか説明できるか？<br>(右上の選択肢を選んで(複数回答可)、決定を押してね)`,
        choices: ["numが1から順に1ずつ増えないから間違い", "同じnumに表示文が複数回反応することがあるから間違い",
            "条件文の順序を入れ替えれば正解", "繰り返し構文のiとjを入れ替えれば正解"],
        correctChoice: [],
        contentImageSrc: "./image/間違い1.JPG",
        id: 5
    },
];

let currentIndex = 0;
let selectedChoices = [];

function handleSubmitButton(index) {
    const com = document.getElementById('comment');
    selectedChoices.sort((a, b) => a - b);
    if (dialogues[index].id == 1) {
        let ans = ``;
        for (const e of selectedChoices){
            ans += e.toString();
        }
        com.innerHTML = ans;
        if (ans == "1"){
            com.innerHTML = "<br>正解だ。num < 0だから最初の条件文に当てはまるからな。<br>次の問題へいってみるぞ。";
            document.getElementById('next').disabled = false;
        }
        else if (ans == "2"){
            com.innerHTML = "<br>惜しいな。「または」は条件の片方でもあってれば真だぞ。";
        }
        else if (ans == "3"){
            com.innerHTML = "<br>惜しいな。今回のプログラムではaを表示した時点で条件文を抜けるぞ。";
        }
        else if (ans == "4"){
            com.innerHTML = "<br>違うな。記号の意味か条件文をもう一度確認だ。";
        }
        else {
            com.innerHTML = "<br>違うな。今回は正解の選択肢は1つだ。";
        }
    }
    else if (dialogues[index].id == 2) {
        let ans = ``;
        for (const e of selectedChoices){
            ans += e.toString();
        }
        com.innerHTML = ans;
        if (ans == "1"){
            com.innerHTML = "<br>違うな。最初の条件文は「10の倍数か負の数であるとき」だ。";
        }
        else if (ans == "2"){
            com.innerHTML = `<br>違うな。bが表示される条件文は=ではなく≠が使われているぞ。
            4を2でわった余りは0だから、今回は当てはまらないな。`;
        }
        else if (ans == "3"){
            com.innerHTML = '<br>惜しいな。"num"(文字)を表示ではなく、num(変数)を表示だ。';
        }
        else if (ans == "4"){
            com.innerHTML = `<br>正解だ。<br>最初の条件文：10の倍数か負の数であるとき、次の条件文：2の倍数でないとき、<br>
            のいずれにも当てはまらないから、"num(変数、今回は4)を表示する"が行われるな。<br>次は繰り返し文を確認するぞ。`;
            document.getElementById('next').disabled = false;
        }
        else {
            com.innerHTML = "<br>違うな。今回は正解の選択肢は1つだ。";
        }
    }
    else if (dialogues[index].id == 3) {
        let ans = ``;
        for (const e of selectedChoices){
            ans += e.toString();
        }
        com.innerHTML = ans;
        if (ans == "1"){
            com.innerHTML = "<br>正解だ。関数AとCはどちらもiの繰り返し文の中にいるから5回ずつ呼ばれるからな。<br>この調子で次の問題にいくぞ。";
            document.getElementById('next').disabled = false;
        }
        else if (ans == "2"){
            com.innerHTML = "<br>違うな。関数AとCは同じiの繰り返し文の中にいるし、引数に応じて呼ばれる回数が変わることはないぞ。";
        }
        else if (ans == "3"){
            com.innerHTML = '<br>違うな。関数AとCは同じiの繰り返し文の中にいるし、引数に応じて呼ばれる回数が変わることはないぞ';
        }
        else if (ans == "4"){
            com.innerHTML = "<br>違うな。関数AとCが呼ばれる回数は同じiの繰り返し文の中にいるから変わらないぞ。";
        }
        else {
            com.innerHTML = "<br>違うな。今回は正解の選択肢は1つだ。";
        }
    }
    else if (dialogues[index].id == 4) {
        let ans = ``;
        for (const e of selectedChoices){
            ans += e.toString();
        }
        com.innerHTML = ans;
        if (ans == "1"){
            com.innerHTML = "<br>惜しいな。たしかに1回のjの繰り返しで呼ばれる回数は3回だが…";
        }
        else if (ans == "2"){
            com.innerHTML = "<br>違うな。たしかにiの繰り返しの中の処理は合計5回になるが…";
        }
        else if (ans == "3"){
            com.innerHTML = '<br>違うな。jの繰り返し処理は、iの繰り返し処理毎に行われるから5+3ではなく…。';
        }
        else if (ans == "4"){
            com.innerHTML = `<br>正解だ。<br>jの繰り返し処理が行われる回数は iの繰り返しの中にいるから5回、<br>
            そしてjの繰り返し処理の中身はjの繰り返し処理1回につき3回行われるから、<br>5*3で15回呼ばれるもんな。`;
            document.getElementById('next').disabled = false;
        }
        else {
            com.innerHTML = "<br>違うな。今回は正解の選択肢は1つだ。";
        }
    }
    else if (dialogues[index].id == 5) {
        let ans = ``;
        for (const e of selectedChoices){
            ans += e.toString();
        }
        com.innerHTML = ans;
        if (ans == "") { com.innerHTML = "<br>違うな。選択肢に正解は1つはあるぞ。"; }
        else if (ans == "1") { com.innerHTML = "<br>惜しいな。他にも正解があるぞ。"; }
        else if (ans == "4") { com.innerHTML = "<br>惜しいな。他にも正解があるぞ。"; }
        else if (ans == "14"){
            com.innerHTML = `<br>正解だ。numの選択肢を間違えた(iとjが逆)結果、<br>
            numが10,20,30,11...という風に動いているのが今回のミスだから、素直にここを直すか、<br>
            もしくは繰り返し文のiとjも逆にする　ことで求められた動きになるな。`;
            document.getElementById('next').disabled = false;
        }
        else {
            com.innerHTML = "<br>違うな。間違った選択肢を選んでいるぞ。間違いのプログラムだとどうなるか自分で追ってみよう。";
        }
    }
}

function updateDialogue(index) {
    const characterElement = document.querySelector('.character');
    const dialogueElement = document.getElementById('dialogue');
    const characterImageElement = document.querySelector('.character-image img');
    const contentImageElement = document.querySelector('.image-area img');

    // キャラクターとメッセージを更新
    characterElement.textContent = dialogues[index].character + ":";
    dialogueElement.innerHTML = "<br>" + dialogues[index].text;

    // キャラクター画像とコンテント画像を更新
    if (dialogues[index].character == "兄") {
        characterImageElement.src = "./image/teacher.png";
        characterImageElement.style.display = "block"; // 画像を表示
    } else if (dialogues[index].character == "弟") {
        characterImageElement.src = "./image/you.png";
        characterImageElement.style.display = "block"; // 画像を表示
    } else {
        characterImageElement.style.display = "none"; // 画像が指定されていない場合は非表示
    }

    if (dialogues[index].contentImageSrc) {
        contentImageElement.src = dialogues[index].contentImageSrc;
        contentImageElement.style.display = "block"; // 画像を表示
    } else {
        contentImageElement.style.display = "none"; // 画像が指定されていない場合は非表示
    }

    // 選択肢エリアを更新
    const choicesArea = document.querySelector('.choices-area');
    choicesArea.innerHTML = ''; // 選択肢エリアをリセット

    if (dialogues[index].choices.length > 0) {
        document.getElementById('next').disabled = true; // 再び次へボタンを無効化
        dialogues[index].choices.forEach((choice, idx) => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.addEventListener('click', () => {
                button.classList.toggle('selected');
                const choiceIndex = idx + 1;
                if (selectedChoices.includes(choiceIndex)) {
                    selectedChoices = selectedChoices.filter(c => c !== choiceIndex);
                } else {
                    selectedChoices.push(choiceIndex);
                }
            });
            choicesArea.appendChild(button);
        });

        const submitButton = document.createElement('button');
        submitButton.textContent = '決定';
        submitButton.classList.add('submit-button');
        submitButton.addEventListener('click', () => handleSubmitButton(index));
        choicesArea.appendChild(submitButton);
    } else {
        document.getElementById('next').disabled = false; // 選択肢がない場合は「次へ」ボタンを有効にする
    }

    if (dialogues[index].url) {
        document.getElementById('next').disabled = true;
        const button = document.createElement('button');
        button.textContent = "問題へ！";
        button.addEventListener('click', () => {
            window.open(dialogues[index].url, '_blank'); // 新しいタブでURLを開く
            document.getElementById('next').disabled = false;
        });
        choicesArea.appendChild(button);
    }
}

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < dialogues.length - 1) {
        currentIndex++;
        updateDialogue(currentIndex);
        selectedChoices = []; // 選択状態をリセット
        if (dialogues[currentIndex].id) document.getElementById('comment').innerHTML = "<br>(ここに選択結果に応じたコメントが出ます。分からない場合は参考にしてください)";
        else document.getElementById('comment').innerHTML = "";
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateDialogue(currentIndex);
        selectedChoices = []; // 選択状態をリセット
        if (dialogues[currentIndex].id) document.getElementById('comment').innerHTML = "<br>(ここに選択結果に応じたコメントが出ます。分からない場合は参考にしてください)";
        else document.getElementById('comment').innerHTML = "";
    }
});

document.getElementById('menu').addEventListener('click', () => {
    window.open("index.html", '_blank'); // 新しいタブでURLを開く   
});

// 初期ダイアログの設定
updateDialogue(currentIndex);

