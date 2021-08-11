// 問題文とカテゴリのリスト
var QA_list = [
  [
    // ["",
    // "",
    // "newaa"],

    // 大学生活について
    [
      "「名古屋近辺以外から来る人の生活について教えてください」（あわ〜ぐ）",
      "&#10025関東出身で一人暮らしをしているものです。一人暮らしということもあり、大学近くの学生マンションで暮らしています。オンライン授業と対面授業が現在行われているので、大学に朝から行き、授業や課外活動が終わるまで大学内で過ごします。授業や課外活動が終わるとアルバイトや授業の課題等をやっています。また私のサークルは感染症拡大防止の影響でオンラインでの活動が多いので、時には夜1時までサークルで活動していることもあります。(文学部3年 さーやの)<br><br>\
      &#10025安城市から通っている者です。片道90分かけて通います。朝や夕方は電車が混んでいるので大変ですが、名古屋大学は地下鉄の駅が構内にありとても立地がいいので、遠くから通う人たちも学校に通いやすいと感じます。(工学部１年 よーと)<br><br>\
      &#10025私は、山梨県出身で東山公園駅の近くのアパートに1人暮らしをしています。スーパーが近いので、毎週セールの日にだいたい一週間分の食料を買って自炊しています。2日分作るようにしているので、作るのは1日おきです。月に1回、服などを買いにショッピングモールに行くこともあります。駅も大学も近くて、行動しやすいです。授業開始15分前に家を出て、授業に間に合ってしまうこともあるので時間にルーズになりがちなのが、近いが故の難点です。時間の管理が大事になります。(理学部1年 ふゆまき)",
      "newaa",
    ],

    [
      "「授業でする体育はどんな競技をするのでしょうか？」(K.S)",
      "&#10025体育は基本学部ごとで、選択できる種目が限られています。私はエアロビクスと卓球を取りました。法学部は体育が必修ではないため取らない人も結構います。(法学部4年 ばんちょー)<br><br>\
      &#10025私はバレーボールを選択しました。試合を通して同じチームの子達と仲良くなれました。経験者も初めての子も和気あいあいと楽しく授業をすることが出来ました。(文学部1年 ぴよりん)",
      "newaa",
    ],

    [
      "「現在、コロナの関係でオンライン等の授業もあると思いますが、コマ数でいくところの何割がオンラインですか？またそれにより通学する日数は週何日くらいになっていますか。」(ぎもんあるある)",
      "&#10025学部や研究室にも寄りますが、私は対面授業は週３コマ、オンライン授業は週10コマでした。通学日数は週３は通っていて、その他にも課外活動等でほぼ毎日大学には来ていました。(文学部3年 さーやの)<br><br>\
      &#10025私は対面授業が週4コマ、オンライン授業が週9コマありました。全授業の約6割ほどがオンラインです。サークル活動や課外活動もオンラインで行われることが多くなったため、大学へ通う日は週2〜3日程度でした。（文学部1年 しちのすけ）",
      "newaa",
    ],

    [
      "「情報学部自然情報学科についてですが、大学院への進学率はどれほどでしょうか？また、研究室配属は何年生からですか？」(さ)",
      "&#10025研究室配属は4年生からになっています。(情報学部3年 つるみん)<br><br>\
      &#10025大学院の進学率は、情報学部全体では体感８割くらいに感じます。自然情報学科はまだ統計が出ていないため分かりません。(情報学部３年 ノノムー)",
      "newaa",
    ],

    [
      "「年間の教科書代金はいくらくらいですか。安く買えたりしますか。」(ぎもんあるある)",
      "&#10025工学部(機航)では全て買うと毎期2万円ほどです(年間3~4万)。授業で使わなかったりわかりやすい資料を授業で配布してくれる教授も多いのでマストではないですし、フリマアプリや古本屋で買うことでかなり安く揃えることもできます。(院進学率の高い学部では、専門科目の教科書は院試で使うので先輩に貰うのはなかなか難しいかもしれないです)特に化学系などでは1冊7000~12000円くらいのものもまあまああって大変そうです。(工学部2年 aiki)<br><br>\
      &#10025言語の授業は必ず教科書が必要ですが、授業によっては教科書を必要としない先生も多いです。大学生協では10％引きで購入することができます。(法学部4年 ばんちょー)",
      "newaa",
    ],
  ],

  [
    // 受験勉強について
    [
      "「受験勉強はいつ頃から本格的に始めましたか？ また、(理系と仮定して)国語・数学・英語・理科でそれぞれ使った教材の中でおすすめのものがあれば教えてください！」(すみぃ)",
      "&#10025 2年の10月頃からです。(そのくらいで活動引退だったので) また基本的には通ってた予備校のテキストを使っていました。その下で市販のもので使って良かったと個人的に感じているものは以下です。<br><br>\
        <p>① 数学</p>\
        <p>・「ハッとめざめる確率」(大学への数学)</p>\
        <p>・「微積の極意」(大学への数学)</p>\
        <p>・「大学入試攻略整数」(河合出版)</p>\
        <p>(名大数学は頻出分野が偏ってるのでプラスでやるなら分野ごとの参考書が良いかも…？)</p><br>\
        <p>② 理科</p>\
        <p>化学:「重要問題集」(数研出版)</p>\
        <p>物理:「名門の森」(数研出版)</p>\
        (工学部2年 aiki)<br><br>\
        高3の県総体まで部活をやっていたので、しっかり受験勉強を始めたのは６月ぐらいからです。(特に運動系の)部活をやってる方は、是非最後までやり続けてください。そこで身についた体力が受験勉強にも役立ちますよ。<br>また、自分が使っていた参考書の中でオススメのものも少し紹介させていただきます。<br><br>\
        <p>英語: 「基礎 英語長文問題精講」(旺文社)</p>\
        <p>英語の文章読解(特に和訳問題)を鍛えるのに適した骨のある問題集です。和訳ができればどんな英文にも応用ができるので、過去問に挑む前に取り組んでみてください。</p><br>\
        <p>理科: 「重要問題集」(数研出版)</p>\
        <p>その名の通り、重要な問題がぎっしりと詰まった問題集です。自分の理解度を把握するのにも最適なので、受験勉強の序盤から終盤まで常に役立ちますよ。</p>\
        (理学部4年 やな)",
      "newaa",
    ],

    [
      "「現在、工学部環境土木建築学科の推薦を考えています。しかし、今年の入学者選抜要項を見ると、環境土木プログラムと建築学プログラムに分かれて募集を行うような形として書かれています。1年生は2つの分野どちらも学べると思っていたのですがよく分からないままです…。詳細は工学部のオープンキャンパスの方で質問できたらと思っていますが、何か先輩方でわかることがあれば教えていただきたいです。また、どちらか1つ選ばないといけないとなった時に今のままでは迷ってしまうので、それぞれの分野の良い点(オススメ？)や知っておいてもらいたいことなどを教えてください。<br>そして、推薦を受けた先輩方に対しての質問になってしまうのですが、推薦の建築学プログラムはスケッチを行うそうですが、何を描くのかを答えられる範囲で教えてください。<br>最後の質問です。物理の受験勉強に困っています。嫌いな教科ではないのですが、なかなか思うように点がとれません。おすすめの勉強方、問題集があれば教えてください(今使ってる問題集はリードαと良問の風です)<br>学校生活や受験勉強にほとんど関していない質問ではないので答えられる限りでお願いします。」(m)",
      "&#10025 1年生の期間はどちらの分野も学ぶことができます(どちらも共通で必要そうなことを学ぶ感じです。)その後、1年生終了時にどちらの専攻を希望するか選ぶことができ、(おおよそ)成績順で決定する。ということになっています。推薦で受かった場合1年生の終わりに確実にそちらを希望しないといけないという規則はない(はず)ですが、推薦と違う専攻に行けるのかは不明です。<br>\
    詳細は学生では知り得ないので、推薦という意味合いを考えても将来選択で、後悔しないように今のうちから自分のやりたいことと真摯に向き合うのが大切だと思います。<br>\
    物理については問題を解く前に根本原則を深く理解して自分なりの解き方をしっかり確立するのが大事だと思います。先生や解説によって解き方を変えている段階だと伸び悩む気がします。問題集については有名どころなのでその問題集で問題ないと思います。(工学部2年 aiki)<br><br>\
    &#10025物理は私もリードαを使っていました。解いた問題番号の横に、●：完璧　〇：たぶん大丈夫・少し不安　△：運良く解けた・あやしい　✕：完敗　というように自己評価をするようにしていました。●〇はきっと何度解いても正解する問題ですが、△✕は次も間違える可能性が高い問題です。✕の問題は答えの道筋を覚えて、別の日に答えを見ずに解けるように練習しました。そして、一周目ですべての問題の評価をして、二周目で△✕（不安であれば〇）の問題を解いて、すべての△✕を〇や●にできるように周回しました。3周終わったら次の章に行くようにします。こうやって1つ問題集をやりつくしたら（もしくは飽きたら）、どんどん次の問題集にチャレンジしていってください。物理のおすすめ参考書（問題付き）は、物理のエッセンスです。この参考書は、当たり前すぎて教科書に載っていないこと・発展的なので教科書に載っていないことが書かれています。この参考書の問題（基本問題多め）を解くのでも力はつくと思います。ちなみに、この参考書は後述する問題集とリンクしているところがあるみたいです。問題集は、良問の風、名門の森です。模試や大学別模試の難しい問題のレベルまでカバーできると思われます。(理学部1年 ふゆまき)<br><br>",
      "newaa",
    ],

    [
      "「推薦で合格された方は英検何級を取得していましたか。できるだけ多くの方に聞きたいです。」(K.S)",
      "&#10025私は英検2級を取得してセンター利用推薦で経済学部に合格しました。ただし、英検を含めた資格についてはあくまでも参考程度のものであり、合否を左右するものではないと考えます。受験勉強する傍ら、余裕があれば取得するつもりで大丈夫だと思います。(経済学部4年 いずみん)<br><br>\
    &#10025英検2級を取得していました。私が推薦で合格して、志望理由や具体的な将来像を考えておくことが大切だと感じたので、資格が推薦の合否に大きく関わっているとは思いませんでした。(理学部1年 のこのこ)",
      "newaa",
    ],

    [
      "「二次試験で泊まるホテルは、名古屋、栄などオススメ地区はどこですか。可能なら、オススメホテルを教えてください。名大の周辺は坂が多いと聞きましたが、東山公園駅から農学部まで徒歩で移動できますか？」(ピコピコママ)",
      "&#10025名古屋駅に近いところに泊まりました。駅から近い方が楽だと思いますし、自分は受験日前日に頭が痛くなってしまったのですが、すぐに薬が買えて便利でした。(情報学部3年  ノノムー)<br><br>\
      &#10025栄駅近くに泊まりました。防音の部屋で、近くに定食屋さんや普段よく行くコンビニがあるところを選びました。なるべく、普段の環境に近いようにしました。繁華街とは反対側は静かです。(法学部４年 ばんちょー)",
      "newaa",
    ],

    [
      "「農学部志望です。推薦も検討しています。推薦入試について、どのような対策をしましたか？例えば、英語のスコアを上げるために合格した級をもう一度受け直したりしましたか？志望理由書は、いつ頃から準備しましたか？」(ピコピコママ)",
      "&#10025私は英検2級を取得してセンター利用推薦で合格しましたが、所有資格はあくまでも参考程度のもので、受験勉強する傍ら余裕があれば取得してもよいと思います。それよりも志望理由書の質や大学入学共通テストの点数が重要だと思いますので、そちらの準備に力を割く必要があります。私は高3の夏から志願理由書を用意し始め、高校の先生に計5回ほど添削してもらい、面接練習もその時期から3回ほど行っていただきました。(経済学部4年 いずみん)<br><br>\
      &#10025農学部生物環境科学科に推薦で合格しました。推薦のための対策は特にはしていませんでした。農学部の推薦は現在面接がなく志願理由書や共通テストの点数が判断基準となります。そのため、推薦で必要となる共通テストの点数が前期試験を受ける際にも必要な点数となります。英検などは高校2年生の時に2級を取得し、もう一度受け直さず、長文読解などで英語力をつけるようにしました。志願理由書の作成は冬頃から始めて、先生に添削していただきました。書き終わったのは共通テストの少し前くらいだったと思います。（農学部生物環境科学科1年 青ミカン)",
      "newaa",
    ],
  ],

  // その他
  [],
];

var category = ["大学生活について", "受験勉強について", "その他"];

var que = '<div class="question">Q</div>\n';
var ans = '<div class="answer">A</div>';
var update = '<span class="new">new!</span>';
var QA = "";

var parm = location.search.substring(1).split("&");
var val = parm[0].split("=");
var num = Number(val[1]) - 1;

cnt = 0;
if (QA_list[num].length === 0) {
  QA +=
    "<h5>カテゴリ「" +
    category[num] +
    "」にはまだ質問・回答がありません。</h5>";
}

while (cnt < QA_list[num].length) {
  if (QA_list[num][cnt][2] === "newaa") {
    QA += update;
  }
  // if (QA_list[num][cnt][2]==="old"){
  //     QA += "old"
  // }
  QA += que.replace("Q", QA_list[num][cnt][0]);
  QA += ans.replace("A", QA_list[num][cnt][1]);

  cnt += 1;
}

window.onload = function () {
  document.getElementById("QA").innerHTML = QA;
  document.getElementById("categ").innerHTML = category[num];
};
