// 問題文とカテゴリのリスト
var QA_list = [
  [
    // ["",
    // "",
    // "newaa"],

    // 大学生活について
    [
      "「経済学部ではどんな研究をしていますか？」(みさ)",
      "&#10025大学生にとっての「研究」は基本的に4年生後期の卒論研究です。(大学院生のほうが「研究」に注力しているイメージ) 3年生からそれぞれ分野が異なるゼミに参加し、ゼミで学んだことを踏まえて自分の関心あるテーマについて研究し、卒論を書くという形になります。「経済学部のゼミ」と一言で言ってもその内容は多岐にわたります。経済関係であればミクロ経済学やマクロ経済学、国際経済学、経営関係であればビジネス論やマーケティング、会計学など、また統計学を取り扱っているゼミもあります。卒論のテーマはゼミにもよりますがある程度自由度が高く、仮想通貨や地方創生の経済効果、またアニメ好きの人はアニメ市場について研究している人などもいます(経済学部4年 いずみん)",
      "newaa",
    ],

    [
      "1日の学校生活の時間の流れを具体的に知りたいです。」(sun)",
      "&#10025私達名大生協学生委員会がコロナ前の1年生の生活を動画にしたものです。ぜひご覧ください。(法学部4年 ばんちょー)<br><br>\
        <a href='https://www.youtube.com/watch?v=CSMafmp1BUA&t=68s' target='brank'>名大生の1日 (下宿生)</a><br>\
        <a href='https://www.youtube.com/watch?v=OiTmqNG0E9Y' target='brank'>名大生の1日 (自宅生)</a><br><br>\
        &#10025授業が1回(1コマ)90分であり、1日最大5コマあります。授業が始まる時間はそれぞれ8:45, 10:30, 13:00, 14:45, 16:30で、自分の授業次第でどの時間に授業を受けるかが決まります。そのため、学校に行く時間や帰る時間は日ごとに変わり、それに合わせてバイトやサークルに参加します。また、授業と授業の間が空いている場合もあり、その際は自習したり、サークル室に行ったり、下宿生であれば一時帰宅したりします。(情報学部4年 ぷるーと)",
      "newaa",
    ],

    [
      "「大学での学びについて調べると、高校での学びと違いすぎて不安です…(いきなり英語で論文を書いたりプレゼンしたりなど)どうやってそれを乗り越えるのでしょうか…？何とかなるものなんでしょうか？」(たちばなあかり)",
      "&#10025受ける授業にもよりますが、論文を書く方法やプレゼンの仕方などは授業内で学ぶため、過度な心配は必要ないです。例えば、私が受けたある授業では「プレゼンの資料を作る際と発表をする際のポイントを学ぶ→実際に発表をしてみる(2回)」を半年かけてやりました。高校までの学びとは異なることを先生方もおそらく分かっているため、いきなり高度なことを求めてはきません。最初は困ったり戸惑ったりすることもあると思いますが、やっているうちに要領が分かりできるようになると思います。(情報学部4年 ぷるーと)<br><br>\
        &#10025レポートの書き方、プレゼンの仕方など違いに困惑する場合、たいていは周りの同級生も困惑しています。同級生の間で相談しあったり、先輩にコツを聴いたりして、周りと協力体制を築いていくことで、高校と大学の学びの差を乗り越えていくことができると思います。教授方も学生に無理難題を与えることはあまりなく、少し前は高校生であったことを承知していると思われます。そのためレポートの書き方、プレゼンの仕方を最初に示してくださることも多いので、次第に要領をえるようになります。(理学部1年 ふゆまき)",
      "newaa",
    ],

    [
      "「名古屋大学経済学部は、必修科目数は多いですか？」(とと)",
      "&#10025経済学部の専門教科は3年からのゼミにおける「経済学演習」と「卒論研究」を除き、基本的に他の学部のように「必ず履修すべき」教科はなく、選択必修という形を取っています。つまり、卒業に必要な単位数に到達するように、多くの専門教科の中から自分の興味のある教科を選択することができるということです。卒業に必要な単位数は他の学部と同程度なので、その中で自分の興味のあるジャンルを見つけるとよいでしょう。(経済学部4年 いずみん)",
      "newaa",
    ],

    [
      "「名古屋大学農学部の魅力を教えてください。」(ハル)",
      "&#10025入学してまだ日が浅いため、私の志願理由となってしまうのですが、生態系や環境保全という具体的なことを学べるということが生物環境科学科を選んだ理由です。また、フィールドがあるだけでなく、名大の敷地内にも多くの木があり、実際に敷地内の植物の特徴を学ぶ授業もあります。（農学部生物環境科学科1年 青ミカン）",
      "newaa",
    ],

    [
      "「高校と大学ではどちらが楽しいですか？」(みかん)",
      "&#10025私は1年生なので、まだまだ大学の楽しさを知り尽くしているわけではないのですが、友達とわいわいするという意味での楽しさなら、高校の方が楽しかった気がします。コロナの影響で対面で会う機会が制限されていることも影響していると思います。ですが、学ぶことの楽しさ、自分で自由に生活を創る楽しさならば、大学の方が楽しいです。また、楽しみを自分でどんどん見つけていけるのが大学生です。ですので、これから大学生活はどんどん楽しくなっていくと思っています。（理学部1年 ふゆまき）<br><br>\
        「楽しさ」に関して、高校と大学においての「楽しさ」は性質が異なり、優劣をつけ難いです。高校では基本的にクラスに所属し、学校行事などに「楽しさ」を見出すことが一般的かと思います。一方、大学においてはそのような行事の「楽しさ」も勿論あるのですが、文系の私であればゼミなどにおいて先生と、また学生同士での対話が生まれます。こういった学問的「楽しさ」も大学においてはあるのです。よって、甲乙つけ難いのですが、ここでは一旦、大学でしか得られない楽しさがあるという結論にしておこうかと思います。(法学部2年 きょうじ)<br><br>\
        大学では自分の好きなことを自由にできたり、新しい出会いがたくさんあります。高校時代も楽しかったですが、毎日充実した楽しさがあるのは大学だと感じています。(法学部4年 ばんちょー)",
      "newaa",
    ],

    [
      "「名古屋大学経済学部は、必修科目数は多いですか？」(とと)",
      "&#10025経済学部の専門教科は3年からのゼミにおける「経済学演習」と「卒論研究」を除き、基本的に他の学部のように「必ず履修すべき」教科はなく、選択必修という形を取っています。つまり、卒業に必要な単位数に到達するように、多くの専門教科の中から自分の興味のある教科を選択することができるということです。卒業に必要な単位数は他の学部と同程度なので、その中で自分の興味のあるジャンルを見つけるとよいでしょう。(経済学部4年　いずみん)",
      "newaa",
    ],

    [
      "「農学部は各学年週何コマぐらいとるのか教えてください。」(まり)",
      "&#10025生物環境科学科の1年春学期には週18コマとりました。(英語やその他の選択の仕方によって多少異なります。) 1年生の時には学科によるコマ数の差はあまりありません。（農学部生物環境科学科1年 青ミカン）",
      "newaa",
    ],

    [
      "「心理学を学びたいと思っています。文学部と教育学部のどちらでも学べると思うのですが、違いはどのようなところでしょうか。また、文学部と教育学部では雰囲気が違ったりしますか？」(ちょこ)",
      "&#10025教育学部では、全体的に、人間の発達や心理的な支援について学んでいます。例えば、教育場面に関してはスクールカウンセラーの仕事内容や、様々な立場の人との関わり方などです。教育場面に限らず、悩みを抱えた人に対して、どのように支援するのが良いのかということや、支援者としての姿勢などを学んでいます。 他にも、心理系のコースでは実験や調査、検査の基礎も学びます。また、人の心を研究していく上で欠かせない心理統計学の授業や、様々な心理検査を実際に体験しています。対して文学部では、人間の意識や行動を決定する条件やその仕組みを科学的に分析する学問として、哲学などの人文科学、社会学などの社会科学、さらには生理学などの自然科学のすべてと関係をもつ幅広く、基礎的な範囲を学ぶことができます。また、これらの研究法の基礎を習得するための演習や実習の授業が数多く組まれています。(昨年度同企画教育学部卒業生(当時4年生)と文学部卒業生(当時4年生)回答より抜粋)<br><br>\
        &#10025まだ1年なので雰囲気を掴み切れているかは不安ですが、文学部は落ち着いておっとりした人が多い印象です。(不確定な情報です、オンライン授業が多くてあまり交流できてないので…)（文学部1年 ぴよりん）",
      "old",
    ],

    [
      "「名古屋近辺以外から来る人の生活について教えてください」（あわ〜ぐ）",
      "&#10025関東出身で一人暮らしをしているものです。一人暮らしということもあり、大学近くの学生マンションで暮らしています。オンライン授業と対面授業が現在行われているので、大学に朝から行き、授業や課外活動が終わるまで大学内で過ごします。授業や課外活動が終わるとアルバイトや授業の課題等をやっています。また私のサークルは感染症拡大防止の影響でオンラインでの活動が多いので、時には夜1時までサークルで活動していることもあります。(文学部3年 さーやの)<br><br>\
        &#10025安城市から通っている者です。片道90分かけて通います。朝や夕方は電車が混んでいるので大変ですが、名古屋大学は地下鉄の駅が構内にありとても立地がいいので、遠くから通う人たちも学校に通いやすいと感じます。(工学部１年 よーと)<br><br>\
        &#10025私は、山梨県出身で東山公園駅の近くのアパートに1人暮らしをしています。スーパーが近いので、毎週セールの日にだいたい一週間分の食料を買って自炊しています。2日分作るようにしているので、作るのは1日おきです。月に1回、服などを買いにショッピングモールに行くこともあります。駅も大学も近くて、行動しやすいです。授業開始15分前に家を出て、授業に間に合ってしまうこともあるので時間にルーズになりがちなのが、近いが故の難点です。時間の管理が大事になります。(理学部1年 ふゆまき)",
      "old",
    ],

    [
      "「授業でする体育はどんな競技をするのでしょうか？」(K.S)",
      "&#10025体育は基本学部ごとで、選択できる種目が限られています。私はエアロビクスと卓球を取りました。法学部は体育が必修ではないため取らない人も結構います。(法学部4年 ばんちょー)<br><br>\
        &#10025私はバレーボールを選択しました。試合を通して同じチームの子達と仲良くなれました。経験者も初めての子も和気あいあいと楽しく授業をすることが出来ました。(文学部1年 ぴよりん)",
      "old",
    ],

    [
      "「現在、コロナの関係でオンライン等の授業もあると思いますが、コマ数でいくところの何割がオンラインですか？またそれにより通学する日数は週何日くらいになっていますか。」(ぎもんあるある)",
      "&#10025学部や研究室にも寄りますが、私は対面授業は週３コマ、オンライン授業は週10コマでした。通学日数は週３は通っていて、その他にも課外活動等でほぼ毎日大学には来ていました。(文学部3年 さーやの)<br><br>\
        &#10025私は対面授業が週4コマ、オンライン授業が週9コマありました。全授業の約6割ほどがオンラインです。サークル活動や課外活動もオンラインで行われることが多くなったため、大学へ通う日は週2〜3日程度でした。（文学部1年 しちのすけ）",
      "old",
    ],

    [
      "「情報学部自然情報学科についてですが、大学院への進学率はどれほどでしょうか？また、研究室配属は何年生からですか？」(さ)",
      "&#10025研究室配属は4年生からになっています。(情報学部3年 つるみん)<br><br>\
        &#10025大学院の進学率は、情報学部全体では体感８割くらいに感じます。自然情報学科はまだ統計が出ていないため分かりません。(情報学部３年 ノノムー)",
      "old",
    ],

    [
      "「年間の教科書代金はいくらくらいですか。安く買えたりしますか。」(ぎもんあるある)",
      "&#10025工学部(機航)では全て買うと毎期2万円ほどです(年間3~4万)。授業で使わなかったりわかりやすい資料を授業で配布してくれる教授も多いのでマストではないですし、フリマアプリや古本屋で買うことでかなり安く揃えることもできます。(院進学率の高い学部では、専門科目の教科書は院試で使うので先輩に貰うのはなかなか難しいかもしれないです)特に化学系などでは1冊7000~12000円くらいのものもまあまああって大変そうです。(工学部2年 aiki)<br><br>\
        &#10025言語の授業は必ず教科書が必要ですが、授業によっては教科書を必要としない先生も多いです。大学生協では10％引きで購入することができます。(法学部4年 ばんちょー)",
      "old",
    ],
  ],

  [
    // 受験勉強について
    [
      "「1日何時間勉強していましたか？最近あまり勉強ができていないので喝を入れてほしいです。」(宇野)",
      "&#10025夏休みは1日11時間勉強していましたが、その日のタスクをこなしていたら11時間勉強していたという感じです。私は喝をうまく入れられないと思うので、自分なりの喝の入れ方を紹介します。まず、夏に大学入試オープン模試や過去問といった問題を1回解いてみました。その時全然解けなくて、「やっべえ…勉強しないと…」とものすごく喝が入りました。あと、最低成績をとった模試の結果表を勉強部屋の壁に貼り付けました。怠けようとしたら目の前にその結果表が見え、その度に喝を入れられました。でも、頑張ろうとしていることがすごいことだと思います。そのことを忘れないで、自分を褒めてあげながら勉強し続けてみてください。本当に応援しています。(文学部1年 ぴよりん)<br><br>\
        &#10025 10時間くらい勉強していました。やると決めたことをしていると、10時間くらいになっていたと思います。私もやる気の出ないときがありましたが、その時は自分よりも賢い人や浪人生も受験するのだということを想像すると、危機感を感じ、勉強しようと机に向かうことができました。(理学部1年 のこのこ)<br><br>\
        &#10025 1日6時間くらいでしたが、かなりまちまちでした。ちなみに、勉強時間は時間ではなく、量で考えるようにしたらいいかな、と思います。夏休みに突き詰めたい範囲を決めて、それを日ごとに振り分けていました。僕はもともと長時間勉強できない性格なので、時間を決めてやるとマンネリ化したりするので、早く終わったらラッキー、くらいで考えておくとよいかもしれません。(工学部1年 ハム)",
      "newaa",
    ],

    [
      "「自分はものすごく英国が苦手なのですが、名大生でそういう方は英国の受験勉強はどのように克服しましたか？」(重装歩兵)",
      "&#10025英語の長文では1つのトピックに時間をかけて取り組みました。具体的には、問題を解く→丸つけ→解説を読む→音読→音読していて分からなかった単語・文法を調べ、専用ノートに記録する、というように1時間以上かけて取り組みました。時間がかかって大変でしたが、音読によってリスニング力がつき、単語・文法力もつきました。また、少しでも疑問に思ったことは徹底的に調べました。例えば、「参考書には『almostは名詞の直接前には置けない』って書いてあるけどなんで？」と思ったらその理由を調べ、「そっか、almostは副詞だから名詞の前には置けないのか…でも副詞って何？」と思ったら副詞について調べ…というくらいの徹底さです。そのおかげで1度覚えたことを忘れにくくなりました。国語は基礎固めを重視して取り組みました。古典の単語・文法、漢文の単語・文法、現代文の単語を毎日覚えました。単語や文法を覚えるだけでも、長文を読むのがだいぶ楽になりました。苦手に向き合うことは辛いですが、苦手な教科ほど伸びるものなので、しぶとく取り組んでみてください。（文学部1年 ぴよりん）<br><br>\
        &#10025私は、持ち歩ける小さなノートを一冊用意して、模試や授業で解いた英語長文に出てくるわからない英単語とその訳をメモするようにしていました。そして、いつもそれを持ち歩くことで、例えば始業式が始まるまで待っている時間、購買に並んでいる時の時間など、ちょっとした空き時間に英単語を覚えることができます。「この単語の意味さえわかれば解けたのに」というように、思い入れがある単語が載っているので、単語帳よりもやる気が出て、覚えやすいと思いました。国語は、評論文に関しては、以下の3つを〇を付けながら読むことで断然理解しやすくなります。1つ目は、「は」「も」という助詞です。主語と動詞の関係をはっきりさせるとわかりやすくなります。2つ目は、「～(の)である。」です。これで終わる文章は、大抵作者の言いたいことです。これをすると、段落ごとの要約もしやすくなります。3つ目は、接続詞です。段落や文章の前後関係をはっきり認識できるようになります。慣れも必要ですが、これをするのとしないのとでは読みやすさが違うので、一度試してみてください。余裕があったら、今この文は言葉の定義をしているのか、具体例なのか、何を説明するための具体例なのかということを意識しながら読むと、さらに国語の問題が解きやすくなります。古典は、句法、古文単語を覚えることがまず大事です。誰が何をしたかという文構造を見失わないように気を付けてください。（理学部1年 ふゆまき）",
      "newaa",
    ],

    [
      "「公募推薦で入った方は共通テスト(センターテスト)何パーセントでしたか？」(レン)",
      "&#10025理学部の私は70％ちょうどでした。（理学部推薦は英語のリーディングを150点、リスニングを50点に換算し、それを考慮しています）しかしこの点数は、受かったのは奇跡だと母校の先生に言われるものであり、担任には出願しても受からないとさえ言われていました。ですので公募推薦に出したいのであれば、この得点率よりも上を目指してください。他の推薦で受かった人たちは、得点率が80％くらいの人が多いようです。私がこの得点率で受かったのは、任意書類・志願理由書の内容と、面接が良かったからだと思われます。理学部は共通テストの点数と提出書類、志願理由書の内容を「総合的に」評価するので、志願理由書に自信がある方は、あきらめずに挑戦してほしいと思います。(理学部1年 ふゆまき)<br><br>\
        &#10025工学部の僕は、共通テストで83％くらいでした。僕の入ったマテリアル工学科は、80％くらいがボーダーかな、と踏んでいたし、今までの模試とかを含めて最高点数だったので、安心して受験できました。(工学部1年 ハム)",
      "newaa",
    ],

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
      "old",
    ],

    [
      "「現在、工学部環境土木建築学科の推薦を考えています。しかし、今年の入学者選抜要項を見ると、環境土木プログラムと建築学プログラムに分かれて募集を行うような形として書かれています。1年生は2つの分野どちらも学べると思っていたのですがよく分からないままです…。詳細は工学部のオープンキャンパスの方で質問できたらと思っていますが、何か先輩方でわかることがあれば教えていただきたいです。また、どちらか1つ選ばないといけないとなった時に今のままでは迷ってしまうので、それぞれの分野の良い点(オススメ？)や知っておいてもらいたいことなどを教えてください。<br>そして、推薦を受けた先輩方に対しての質問になってしまうのですが、推薦の建築学プログラムはスケッチを行うそうですが、何を描くのかを答えられる範囲で教えてください。<br>最後の質問です。物理の受験勉強に困っています。嫌いな教科ではないのですが、なかなか思うように点がとれません。おすすめの勉強方法、問題集があれば教えてください(今使ってる問題集はリードαと良問の風です)<br>学校生活や受験勉強にほとんど関していない質問ではないので答えられる限りでお願いします。」(m)",
      "&#10025 1年生の期間はどちらの分野も学ぶことができます(どちらも共通で必要そうなことを学ぶ感じです。)その後、1年生終了時にどちらの専攻を希望するか選ぶことができ、(おおよそ)成績順で決定する。ということになっています。推薦で受かった場合1年生の終わりに確実にそちらを希望しないといけないという規則はない(はず)ですが、推薦と違う専攻に行けるのかは不明です。<br>\
    詳細は学生では知り得ないので、推薦という意味合いを考えても将来選択で、後悔しないように今のうちから自分のやりたいことと真摯に向き合うのが大切だと思います。<br>\
    物理については問題を解く前に根本原則を深く理解して自分なりの解き方をしっかり確立するのが大事だと思います。先生や解説によって解き方を変えている段階だと伸び悩む気がします。問題集については有名どころなのでその問題集で問題ないと思います。(工学部2年 aiki)<br><br>\
    &#10025物理は私もリードαを使っていました。解いた問題番号の横に、●：完璧　〇：たぶん大丈夫・少し不安　△：運良く解けた・あやしい　✕：完敗　というように自己評価をするようにしていました。●〇はきっと何度解いても正解する問題ですが、△✕は次も間違える可能性が高い問題です。✕の問題は答えの道筋を覚えて、別の日に答えを見ずに解けるように練習しました。そして、一周目ですべての問題の評価をして、二周目で△✕（不安であれば〇）の問題を解いて、すべての△✕を〇や●にできるように周回しました。3周終わったら次の章に行くようにします。こうやって1つ問題集をやりつくしたら（もしくは飽きたら）、どんどん次の問題集にチャレンジしていってください。物理のおすすめ参考書（問題付き）は、物理のエッセンスです。この参考書は、当たり前すぎて教科書に載っていないこと・発展的なので教科書に載っていないことが書かれています。この参考書の問題（基本問題多め）を解くのでも力はつくと思います。ちなみに、この参考書は後述する問題集とリンクしているところがあるみたいです。問題集は、良問の風、名門の森です。模試や大学別模試の難しい問題のレベルまでカバーできると思われます。(理学部1年 ふゆまき)<br><br>",
      "old",
    ],

    [
      "「推薦で合格された方は英検何級を取得していましたか。できるだけ多くの方に聞きたいです。」(K.S)",
      "&#10025私は英検2級を取得してセンター利用推薦で経済学部に合格しました。ただし、英検を含めた資格についてはあくまでも参考程度のものであり、合否を左右するものではないと考えます。受験勉強する傍ら、余裕があれば取得するつもりで大丈夫だと思います。(経済学部4年 いずみん)<br><br>\
    &#10025英検2級を取得していました。私が推薦で合格して、志望理由や具体的な将来像を考えておくことが大切だと感じたので、資格が推薦の合否に大きく関わっているとは思いませんでした。(理学部1年 のこのこ)",
      "old",
    ],

    [
      "「二次試験で泊まるホテルは、名古屋、栄などオススメ地区はどこですか。可能なら、オススメホテルを教えてください。名大の周辺は坂が多いと聞きましたが、東山公園駅から農学部まで徒歩で移動できますか？」(ピコピコママ)",
      "&#10025名古屋駅に近いところに泊まりました。駅から近い方が楽だと思いますし、自分は受験日前日に頭が痛くなってしまったのですが、すぐに薬が買えて便利でした。(情報学部3年  ノノムー)<br><br>\
      &#10025栄駅近くに泊まりました。防音の部屋で、近くに定食屋さんや普段よく行くコンビニがあるところを選びました。なるべく、普段の環境に近いようにしました。繁華街とは反対側は静かです。<br>東山公園駅徒歩5分のところに住んでいます。農学部棟までは徒歩15分で行けます。自転車は坂がきついので女性なら電動自転車をお勧めします。1年生の時に使う教室からはかなり遠いため、私も含め電車通学する女性が多いです。(法学部4年 ばんちょー)",
      "old",
    ],

    [
      "「農学部志望です。推薦も検討しています。推薦入試について、どのような対策をしましたか？例えば、英語のスコアを上げるために合格した級をもう一度受け直したりしましたか？志望理由書は、いつ頃から準備しましたか？」(ピコピコママ)",
      "&#10025私は英検2級を取得してセンター利用推薦で合格しましたが、所有資格はあくまでも参考程度のもので、受験勉強する傍ら余裕があれば取得してもよいと思います。それよりも志望理由書の質や大学入学共通テストの点数が重要だと思いますので、そちらの準備に力を割く必要があります。私は高3の夏から志願理由書を用意し始め、高校の先生に計5回ほど添削してもらい、面接練習もその時期から3回ほど行っていただきました。(経済学部4年 いずみん)<br><br>\
      &#10025農学部生物環境科学科に推薦で合格しました。推薦のための対策は特にはしていませんでした。農学部の推薦は現在面接がなく志願理由書や共通テストの点数が判断基準となります。そのため、推薦で必要となる共通テストの点数が前期試験を受ける際にも必要な点数となります。英検などは高校2年生の時に2級を取得し、もう一度受け直さず、長文読解などで英語力をつけるようにしました。志願理由書の作成は冬頃から始めて、先生に添削していただきました。書き終わったのは共通テストの少し前くらいだったと思います。（農学部生物環境科学科1年 青ミカン)",
      "old",
    ],
  ],

  // その他
  [
    [
      "「経済学部に進学したいと考えています。そのために高校生のうちにやっておいた方が良いと思うことはありますか？」(おさとう)",
      "&#10025経済学部を一般入試で合格したい場合、大学入試共通試験で80%、2次試験で60%ほどの得点を確保する必要があります。特に2次試験では難易度の高い記述問題が出題されるので、英語、数学、国語でそれぞれ記述試験の勉強を進める必要があります。<br>\
      また、大学で4年間経済について学ぶということを念頭に置くと、経済についてある程度興味を持っていなければ大学での学びを充実なものにできないので、ネットで調べたり、経済学部のオープンキャンパスの質問コーナーに聞いたりしてどんなことを学んでいるのかについて情報を集めるとよいでしょう。(経済学部4年 いずみん)",
      "newaa",
    ],
  ],
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
