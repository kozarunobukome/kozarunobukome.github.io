/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function () {

        // Tooltip init
        tooltipInit();

        // Init the posts
        postInit();

        // Waypoints
        waypointsInit();

    });

    // Init waypoints for header and footer animations
    function waypointsInit() {

        var headerWaypoint = new Waypoint({
            element: document.getElementById('masthead'),
            handler: function (direction) {
                if (direction === 'down')
                    this.element.classList.remove('animation-on');
                else
                    this.element.classList.add('animation-on');
            },
            offset: -5
        });

        var footerWaypoint = new Waypoint({
            element: document.getElementById('footer'),
            handler: function (direction) {
                this.element.classList.toggle('animation-on');
            },
            offset: 'bottom-in-view'
        });

    }

    // Init bootstrap tooltip
    function tooltipInit() {
        $('[data-toggle]').tooltip();
    }

    function postInit() {
        // Set lead paragraphs
        // $('.post-body p:first-child').addClass('lead');

        // Set feature image
        var featured = $('.featured-image').find('img').attr('src');
        if (featured) {
            $('#masthead').css('backgroundImage', 'url(' + featured + ')');
            $('#footer').css('backgroundImage', 'url(' + featured + ')');
        };
    }

    var pastpost = [
        {
            "title"    : "今年もありがとうございました",
            "url"      : "http://blog.kozaru.me/2016/12/2453/",
            "date"     : "December 31, 2016"
        },
        {
            "title"    : "こざるの夏休み",
            "url"      : "http://blog.kozaru.me/2016/08/2437/",
            "date"     : "August 23, 2016"
        },
        {
            "title"    : "今年も半分終わりました",
            "url"      : "http://blog.kozaru.me/2016/07/2415/",
            "date"     : "July 03, 2016"
        },
        {
            "title"    : "今年もありがとうございました",
            "url"      : "http://blog.kozaru.me/2015/12/2376/",
            "date"     : "December 31, 2015"
        },
        {
            "title"    : "屋号を「こざる舎」に改めました",
            "url"      : "http://blog.kozaru.me/2015/12/2372/",
            "date"     : "December 28, 2015"
        },
        {
            "title"    : "パンとこざる 2015 IN 大阪",
            "url"      : "http://blog.kozaru.me/2015/12/2313/",
            "date"     : "December 18, 2015"
        },
        {
            "title"    : "【デュベルトリプルホップ 3年分丸ごと 飲み比べ】DUVEL TRIPEL HOP 2015/2014/2013 AT オンゾロ",
            "url"      : "http://blog.kozaru.me/2015/07/2252/",
            "date"     : "July 17, 2015"
        },
        {
            "title"    : "【BALMUDA THE TOASTER】いつものパンが外カリ中ふわに！バルミューダ ザ・トースター（スチームトースター）",
            "url"      : "http://blog.kozaru.me/2015/07/2219/",
            "date"     : "July 07, 2015"
        },
        {
            "title"    : "リクリセミナー「一人の経営。会社の経営。」に参加して思ったこと",
            "url"      : "http://blog.kozaru.me/2015/05/2166/",
            "date"     : "May 20, 2015"
        },
        {
            "title"    : "ぐりとぐら展に行ってきました",
            "url"      : "http://blog.kozaru.me/2015/05/2148/",
            "date"     : "May 01, 2015"
        },
        {
            "title"    : "「卒業」と「食べる」と「ほめる」",
            "url"      : "http://blog.kozaru.me/2015/03/2119/",
            "date"     : "March 20, 2015"
        },
        {
            "title"    : "初「受験生の親」",
            "url"      : "http://blog.kozaru.me/2015/01/2052/",
            "date"     : "January 28, 2015"
        },
        {
            "title"    : "HARP と JADE と 黒い画面",
            "url"      : "http://blog.kozaru.me/2015/01/2026/",
            "date"     : "January 20, 2015"
        },
        {
            "title"    : "海鼠（なまこ）",
            "url"      : "http://blog.kozaru.me/2015/01/2011/",
            "date"     : "January 08, 2015"
        },
        {
            "title"    : "あけましておめでとうございます",
            "url"      : "http://blog.kozaru.me/2015/01/1987/",
            "date"     : "January 05, 2015"
        },
        {
            "title"    : "今年もありがとうございました",
            "url"      : "http://blog.kozaru.me/2014/12/1984/",
            "date"     : "December 31, 2014"
        },
        {
            "title"    : "HARPを使って、自分用マークアップ環境をつくりました",
            "url"      : "http://blog.kozaru.me/2014/12/1872/",
            "date"     : "December 23, 2014"
        },
        {
            "title"    : "名古屋に行ってきました！",
            "url"      : "http://blog.kozaru.me/2014/12/1877/",
            "date"     : "December 22, 2014"
        },
        {
            "title"    : "ブログテーマをリニューアルしました",
            "url"      : "http://blog.kozaru.me/2014/12/1865/",
            "date"     : "December 19, 2014"
        },
        {
            "title"    : "【大阪・中之島】ラバー・ダックのスタンプラリー始まってます",
            "url"      : "http://blog.kozaru.me/2014/12/1838/",
            "date"     : "December 03, 2014"
        },
        {
            "title"    : "『CSSオジサン #0』に参加しました",
            "url"      : "http://blog.kozaru.me/2014/11/1782/",
            "date"     : "November 13, 2014"
        },
        {
            "title"    : "イベントやセミナーに参加する理由",
            "url"      : "http://blog.kozaru.me/2014/10/1760/",
            "date"     : "October 28, 2014"
        },
        {
            "title"    : "【ビアガーデン2014】テラスでソファビアガーデン・女子会にオススメ！",
            "url"      : "http://blog.kozaru.me/2014/08/1719/",
            "date"     : "August 29, 2014"
        },
        {
            "title"    : "【LINE】入力時サジェスト（絵文字など）の表示・非表示を設定する [IPHONE編]",
            "url"      : "http://blog.kozaru.me/2014/08/1735/",
            "date"     : "August 29, 2014"
        },
        {
            "title"    : "【2014・残暑 IN 大阪】食欲の秋をおいしいビールで一足先に！",
            "url"      : "http://blog.kozaru.me/2014/08/1702/",
            "date"     : "August 25, 2014"
        },
        {
            "title"    : "ももたん・しろくま味とももたん・ギフトボックス",
            "url"      : "http://blog.kozaru.me/2014/08/1695/",
            "date"     : "August 14, 2014"
        },
        {
            "title"    : "【こざるのオススメ】おさるIPA（大阪・箕面ビール）",
            "url"      : "http://blog.kozaru.me/2014/08/1683/",
            "date"     : "August 13, 2014"
        },
        {
            "title"    : "T2.MICROにお引越（AWS）",
            "url"      : "http://blog.kozaru.me/2014/07/1671/",
            "date"     : "July 30, 2014"
        },
        {
            "title"    : "発表会が終わりました",
            "url"      : "http://blog.kozaru.me/2014/07/1665/",
            "date"     : "July 01, 2014"
        },
        {
            "title"    : "ぶどうの想い出",
            "url"      : "http://blog.kozaru.me/2014/06/1652/",
            "date"     : "June 25, 2014"
        },
        {
            "title"    : "WORDCAMP KANSAI 2014 に参加しました",
            "url"      : "http://blog.kozaru.me/2014/06/1554/",
            "date"     : "June 17, 2014"
        },
        {
            "title"    : "【オフレポ】久々の女子会！",
            "url"      : "http://blog.kozaru.me/2014/05/1542/",
            "date"     : "May 21, 2014"
        },
        {
            "title"    : "【ビアガーデン2014】うめはんビアガーデンマルシェ",
            "url"      : "http://blog.kozaru.me/2014/05/1521/",
            "date"     : "May 05, 2014"
        },
        {
            "title"    : "【大阪・堺東】隠れ家ホルモン焼肉・廚（くりや）でしっぽり！",
            "url"      : "http://blog.kozaru.me/2014/04/1509/",
            "date"     : "April 29, 2014"
        },
        {
            "title"    : "イベントにつかおう！手作りタトゥーシール（TATTOO STICKER）",
            "url"      : "http://blog.kozaru.me/2014/04/1479/",
            "date"     : "April 26, 2014"
        },
        {
            "title"    : "【OLYMPUS PEN（オリンパス・ペン）】薄い！電動式パンケーキズームレンズ・M.ZUIKO DIGITAL ED 14-42MM F3.5-5.6 EZ",
            "url"      : "http://blog.kozaru.me/2014/04/1429/",
            "date"     : "April 17, 2014"
        },
        {
            "title"    : "【大阪・梅田】グランフロント大阪のTULLY’Sで朝ご飯！",
            "url"      : "http://blog.kozaru.me/2014/04/1425/",
            "date"     : "April 15, 2014"
        },
        {
            "title"    : "【大阪・扇町】ヒューガルデンホワイトの樽生を TEPPAN KAKU で！",
            "url"      : "http://blog.kozaru.me/2014/04/1433/",
            "date"     : "April 14, 2014"
        },
        {
            "title"    : "【大阪・天六】旬の食材の前菜がステキなイタリアン・ROCCO！",
            "url"      : "http://blog.kozaru.me/2014/04/1427/",
            "date"     : "April 13, 2014"
        },
        {
            "title"    : "【大阪・梅田】でチーズケーキを探す① [PABLO（パブロ）]",
            "url"      : "http://blog.kozaru.me/2014/04/1317/",
            "date"     : "April 06, 2014"
        },
        {
            "title"    : "ケーニヒスクローネのカップに入ったかわいいケーキ！",
            "url"      : "http://blog.kozaru.me/2014/03/1406/",
            "date"     : "March 14, 2014"
        },
        {
            "title"    : "WEB的な話をシェアしてみる会に参加しました",
            "url"      : "http://blog.kozaru.me/2014/02/1376/",
            "date"     : "February 28, 2014"
        },
        {
            "title"    : "【大阪・森ノ宮】大阪城の梅林を散歩しました！まだ３分咲き、行くならこれから！",
            "url"      : "http://blog.kozaru.me/2014/02/1302/",
            "date"     : "February 24, 2014"
        },
        {
            "title"    : "[大阪] デザイナー向けプログラミング勉強会・JQUERYについて改めて理解してみように参加しました",
            "url"      : "http://blog.kozaru.me/2014/02/1319/",
            "date"     : "February 24, 2014"
        },
        {
            "title"    : "COCOA勉強会関西＃54に参加しました",
            "url"      : "http://blog.kozaru.me/2014/02/1283/",
            "date"     : "February 23, 2014"
        },
        {
            "title"    : "【大阪・北堀江】カルネバッカ閉店！４月中旬に南船場に移転OPEN！？",
            "url"      : "http://blog.kozaru.me/2014/02/1245/",
            "date"     : "February 22, 2014"
        },
        {
            "title"    : "【神戸・ポートアイランド】神戸花鳥園で鳥と花と一緒に冬でもポカポカまったり。",
            "url"      : "http://blog.kozaru.me/2014/02/1255/",
            "date"     : "February 22, 2014"
        },
        {
            "title"    : "【大阪・東梅田】ジャーマングリル JJ’S のハッピーアワーセットで幸せいっぱい！",
            "url"      : "http://blog.kozaru.me/2014/02/1268/",
            "date"     : "February 22, 2014"
        },
        {
            "title"    : "【大阪・中崎町】ワンコイン・カレーランチ「ギリさんのネパールカレー屋さん 」",
            "url"      : "http://blog.kozaru.me/2014/02/1232/",
            "date"     : "February 18, 2014"
        },
        {
            "title"    : "NODE.JS超初心者勉強会 IN 大阪 に参加しました！（一応そのあとも…）",
            "url"      : "http://blog.kozaru.me/2014/02/1178/",
            "date"     : "February 17, 2014"
        },
        {
            "title"    : "【大阪・扇町】素敵なグラスでおいしいベルギービールを！",
            "url"      : "http://blog.kozaru.me/2014/02/1173/",
            "date"     : "February 15, 2014"
        },
        {
            "title"    : "MACBOOKPROの容量が増えたよ・NIFTY MINIDRIVE！【MACBOOKAIR13インチも可】",
            "url"      : "http://blog.kozaru.me/2014/02/1169/",
            "date"     : "February 14, 2014"
        },
        {
            "title"    : "これからのディレクターについて考えるセミナーに参加しました",
            "url"      : "http://blog.kozaru.me/2014/02/1180/",
            "date"     : "February 11, 2014"
        },
        {
            "title"    : "【大阪・天五】その場で焼く！ナンとネパールカレーのカンティプール",
            "url"      : "http://blog.kozaru.me/2014/02/1142/",
            "date"     : "February 05, 2014"
        },
        {
            "title"    : "大阪・梅田で買う、手みやげ用チーズケーキ！[FORMA・観音屋・モロゾフ]",
            "url"      : "http://blog.kozaru.me/2014/02/1125/",
            "date"     : "February 04, 2014"
        },
        {
            "title"    : "【大阪•中津】ギネスで煮込んだカレーをギネスでいただく！",
            "url"      : "http://blog.kozaru.me/2014/02/1111/",
            "date"     : "February 02, 2014"
        },
        {
            "title"    : "【大阪・梅田】空庭DININGでクラフトビールと夜景を堪能！[MOLTO!! IN 阪急32番街]",
            "url"      : "http://blog.kozaru.me/2014/01/1095/",
            "date"     : "January 29, 2014"
        },
        {
            "title"    : "【大阪・南森町】天満宮お参りランチ・生パスタとフレッシュサラダをイタリアワイン食堂・イルカミネットで！",
            "url"      : "http://blog.kozaru.me/2014/01/1068/",
            "date"     : "January 20, 2014"
        },
        {
            "title"    : "リクリセミナー WITH ワークショップ「UX THINKING FOR OSAKA」にいってきました",
            "url"      : "http://blog.kozaru.me/2014/01/999/",
            "date"     : "January 17, 2014"
        },
        {
            "title"    : "WORDPRESSの引越〜AWSへ：①引越作業時の環境など",
            "url"      : "http://blog.kozaru.me/2014/01/659/",
            "date"     : "January 15, 2014"
        },
        {
            "title"    : "WORDPRESSの引越〜AWSへ：②AWSアカウントの作成と「超高速 WORDPRESS AMI」網元の設定",
            "url"      : "http://blog.kozaru.me/2014/01/700/",
            "date"     : "January 15, 2014"
        },
        {
            "title"    : "WORDPRESSの引越〜AWSへ：③データ引越その１：WP-CONTENT内のデータ",
            "url"      : "http://blog.kozaru.me/2014/01/704/",
            "date"     : "January 15, 2014"
        },
        {
            "title"    : "WORDPRESSの引越〜AWSへ：④データ引越その２：MYSQLデータ",
            "url"      : "http://blog.kozaru.me/2014/01/706/",
            "date"     : "January 15, 2014"
        },
        {
            "title"    : "WORDPRESSの引越〜AWSへ：⑤ドメインの設定を変更",
            "url"      : "http://blog.kozaru.me/2014/01/708/",
            "date"     : "January 15, 2014"
        },
        {
            "title"    : "サングリアをつけたリンゴでアップルパイを作ったよ",
            "url"      : "http://blog.kozaru.me/2014/01/670/",
            "date"     : "January 07, 2014"
        },
        {
            "title"    : "あけましておめでとうございます",
            "url"      : "http://blog.kozaru.me/2014/01/623/",
            "date"     : "January 05, 2014"
        },
        {
            "title"    : "ごはんもお酒もがっつり行くぜ！ [2013年おいしいマトメ⑤]",
            "url"      : "http://blog.kozaru.me/2013/12/317/",
            "date"     : "December 29, 2013"
        },
        {
            "title"    : "カフェ＆ラーメン＆バー・軽めごはん編！ [2013年おいしいマトメ④]",
            "url"      : "http://blog.kozaru.me/2013/12/319/",
            "date"     : "December 28, 2013"
        },
        {
            "title"    : "夏の思い出ビール三選 [2013年おいしいマトメ③]",
            "url"      : "http://blog.kozaru.me/2013/12/308/",
            "date"     : "December 27, 2013"
        },
        {
            "title"    : "リピート決定！おいしいランチ IN 大阪 [2013年おいしいマトメ②]",
            "url"      : "http://blog.kozaru.me/2013/12/302/",
            "date"     : "December 26, 2013"
        },
        {
            "title"    : "黒ビールっておいしいよ・大阪梅田編 [2013年おいしいマトメ①]",
            "url"      : "http://blog.kozaru.me/2013/12/281/",
            "date"     : "December 25, 2013"
        },
        {
            "title"    : "大阪・中之島ウォーターファンタジアとラバー・ダック",
            "url"      : "http://blog.kozaru.me/2013/12/262/",
            "date"     : "December 23, 2013"
        },
        {
            "title"    : "うまい棒の楽しい食べ方：スティックパーティ",
            "url"      : "http://blog.kozaru.me/2013/12/244/",
            "date"     : "December 17, 2013"
        },
        {
            "title"    : "クリスマスツリーを作りながら、ソースツリー（SOURCETREE）を試してみた",
            "url"      : "http://blog.kozaru.me/2013/12/214/",
            "date"     : "December 16, 2013"
        },
        {
            "title"    : "お正月準備：手作りお正月飾り編（しめ縄っぽいもの）",
            "url"      : "http://blog.kozaru.me/2013/12/207/",
            "date"     : "December 15, 2013"
        },
        {
            "title"    : "リーズナブル工作：シンプルなクリスマスリース",
            "url"      : "http://blog.kozaru.me/2013/12/199/",
            "date"     : "December 14, 2013"
        },
        {
            "title"    : "大阪・中崎町 おさんぽしつつ、写真をとったよ",
            "url"      : "http://blog.kozaru.me/2013/12/144/",
            "date"     : "December 13, 2013"
        },
        {
            "title"    : "大阪・茶屋町 1000000人のキャンドルナイト「こんばんは、わたし」",
            "url"      : "http://blog.kozaru.me/2013/12/148/",
            "date"     : "December 12, 2013"
        },
        {
            "title"    : "絵本「なんでやねん」に 梅田・ジュンク堂で笑ってしまった",
            "url"      : "http://blog.kozaru.me/2013/12/136/",
            "date"     : "December 10, 2013"
        },
        {
            "title"    : "TOLOTフォトブック！IPHONEでトリミングした写真をつかう方法",
            "url"      : "http://blog.kozaru.me/2013/12/119/",
            "date"     : "December 08, 2013"
        },
        {
            "title"    : "箱庭のガッコウ IN 大阪 課外授業編 で写真を楽しみました",
            "url"      : "http://blog.kozaru.me/2013/11/59/",
            "date"     : "November 25, 2013"
        },
        {
            "title"    : "SOURCESでMIN.JSを展開する【CHROME DEV TOOLS】",
            "url"      : "http://blog.kozaru.me/2013/09/609/",
            "date"     : "September 21, 2013"
        },
        {
            "title"    : "CONSOLEを使ってみる【CHROME DEV TOOLS】",
            "url"      : "http://blog.kozaru.me/2013/09/591/",
            "date"     : "September 20, 2013"
        },
        {
            "title"    : "NETWORKとTIMELIMEを使ってみる【CHROME DEV TOOLS】",
            "url"      : "http://blog.kozaru.me/2013/09/579/",
            "date"     : "September 19, 2013"
        },
        {
            "title"    : "ELEMENTSを使ってみる【CHROME DEV TOOLS】",
            "url"      : "http://blog.kozaru.me/2013/09/563/",
            "date"     : "September 18, 2013"
        },
        {
            "title"    : "リクリ「FRONTREND IN OSAKA」に行ってきました！",
            "url"      : "http://blog.kozaru.me/2013/09/532/",
            "date"     : "September 17, 2013"
        },
        {
            "title"    : "{ THE RED TIE DESIGN } に投稿してみた！",
            "url"      : "http://blog.kozaru.me/2013/09/517/",
            "date"     : "September 12, 2013"
        },
        {
            "title"    : "いまさら、WEBインスペクタ（もうすぐIOS7やけど）",
            "url"      : "http://blog.kozaru.me/2013/09/501/",
            "date"     : "September 04, 2013"
        },
        {
            "title"    : "伝説の岡山市で買ったももたん！",
            "url"      : "http://blog.kozaru.me/2013/09/485/",
            "date"     : "September 03, 2013"
        },
        {
            "title"    : "ロクナナワークショップに参加しました",
            "url"      : "http://blog.kozaru.me/2013/09/472/",
            "date"     : "September 02, 2013"
        },
        {
            "title"    : "ボローニャ絵本原画展に行こう！",
            "url"      : "http://blog.kozaru.me/2013/08/470/",
            "date"     : "August 30, 2013"
        },
        {
            "title"    : "WORDBENCH大阪#20に参加してきました",
            "url"      : "http://blog.kozaru.me/2013/08/468/",
            "date"     : "August 26, 2013"
        },
        {
            "title"    : "ベルギービールを飲んできました",
            "url"      : "http://blog.kozaru.me/2013/08/416/",
            "date"     : "August 23, 2013"
        },
        {
            "title"    : "サントリービール工場見学に行ってきました！",
            "url"      : "http://blog.kozaru.me/2013/08/459/",
            "date"     : "August 13, 2013"
        },
        {
            "title"    : "ひっかけネコを作りました。",
            "url"      : "http://blog.kozaru.me/2013/08/465/",
            "date"     : "August 13, 2013"
        },
        {
            "title"    : "SEQUEL PRO+SSHでサーバのDBに接続する",
            "url"      : "http://blog.kozaru.me/2013/08/347/",
            "date"     : "August 08, 2013"
        },
        {
            "title"    : "【AWS】EC2にMACのターミナルからSSH接続する",
            "url"      : "http://blog.kozaru.me/2013/08/452/",
            "date"     : "August 08, 2013"
        },
        {
            "title"    : "MYSQLにターミナルからユーザを追加する",
            "url"      : "http://blog.kozaru.me/2013/08/454/",
            "date"     : "August 08, 2013"
        },
        {
            "title"    : "【AWS】EC2インスタンス TERMINATE設定を変更する",
            "url"      : "http://blog.kozaru.me/2013/08/450/",
            "date"     : "August 06, 2013"
        },
        {
            "title"    : "リクリ「WEB制作の未来、あなたの未来」に参加しました",
            "url"      : "http://blog.kozaru.me/2013/07/446/",
            "date"     : "July 29, 2013"
        },
        {
            "title"    : "WORDBENCH大阪に参加しました",
            "url"      : "http://blog.kozaru.me/2013/07/440/",
            "date"     : "July 21, 2013"
        },
        {
            "title"    : "アイロンビーズワークショップに行ってきました",
            "url"      : "http://blog.kozaru.me/2013/07/444/",
            "date"     : "July 15, 2013"
        }
    ];
    function pastpostlist(){
      for(var i in pastpost){
        $('.js-past-list').append('<li><article><i class="fa fa-paperclip"></i> <a href="' + pastpost[i].url + '">' + pastpost[i].title + '<span class="entry-date">' + pastpost[i].date + '</span></a></article></li>');
      }
    }
    if($('.js-past-list').length > 0){
      pastpostlist();
    }

} (jQuery));

