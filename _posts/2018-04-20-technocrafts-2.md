---
layout: post
title: "NeoPixel + Arduino + 手芸 = 光るリストバンド"        # Title of the post
description: "テクノ図工部 vol.2 で作り始めた、Arduino+加速度センサーとNeoPixelを使った工作について書きました"    # Description of the post, used for Facebook Opengraph & Twitter
headline: "Arduinoで初めて手芸をしてみたお話です。NeoPixelを使いました"  # Will appear in bold letters on top of the post
modified: 2018-04-20   # Date
category: technocrafts
tags: [NeoPixel,Arduino,加速度センサー,電子工作,テクノ図工部]
ogp_image: /images/20180420-ogp.jpg
imagefeature: 20180420.jpg
comments: false
type: "photo"
mathjax:
---

[テクノ図工部 Vol.2](https://tekunozukoubu.net/2018/01/30/vol02/)の部活動で作り始めたリストバンドのお話です。こざるの電子工作レベルは、センサーの値によってLEDを光らせることができる程度です。また、趣味として、作成しています。その点、ご理解いただき、読んでいただけるとうれしいです。

![リストバンド](/images/20180420_01.jpg){: .img-responsive}

<hr>

## ちくちく、手芸

リストバンドは、サテンの上にレースを重ねて、周りにオーガンジーリボンをつけました。
白いお花はビーズで作成。ボタンにゴムを引っ掛けて、腕に巻きます。

![リストバンド外観](/images/20180420_04.jpg){: .img-responsive}

腕に巻いてみたところです。

![リストバンドつけたところ](/images/20180420_12.jpg){: .img-responsive}

<hr>

### リストバンドのなか（裏側）

![なかみ](/images/20180420_03.jpg){: .img-responsive}

<hr>

## 加速度センサーでゆらゆらを感知

![加速度センサー](/images/20180420_02.jpg){: .img-responsive}

Arduino互換マイコンボードに、加速度センサー（速度の変化を計測できるセンサー）から、腕が動いたことを知らせます。加速度センサーは、1軸のみ使用しています。

- Arduino互換マイコンボード/[Adafruit Itsy Bitsy 32u4 - 5V 16MHz](https://www.switch-science.com/catalog/3626/)
- 加速度センサー/[LilyPad加速度センサ(ADXL335搭載)](https://www.switch-science.com/catalog/256/)

<hr>

## NeoPixelをピカピカさせる

[NeoPixel](https://www.adafruit.com/category/168)をつなげると、それぞれに番号がつきます。（図の中の番号は、説明用の番号です。）

![NeoPixel1](/images/20180420_06.jpg){: .img-responsive}

ゆらゆらしたら、Arduinoから何番のNeoPixelを何色に光らせてねと伝えます。下記の図は、6-11番を白色に光らせてねと伝えた例です。色は、RGB（それぞれ0-255）と明るさ（0-100）で設定できます。

NeoPixelを光らせるパターンは、自分でプログラミングすることもできますし、ライブラリもあります。今回は、[WS2812FX](https://github.com/kitesurfer1404/WS2812FX)ライブラリを使いました。

![NeoPixel2](/images/20180420_07.jpg){: .img-responsive}

- [NeoPixel Ring - 12連フルカラーシリアルLED](https://www.switch-science.com/catalog/1593/)
- [フルカラーシリアルLEDテープ（17cm）](https://www.switch-science.com/catalog/1400/)

<hr>

## 配線周りとArduino

フエルトに各パーツを縫い付けて、ビニル電線とハンダでパーツをつなげました。

![パーツ一覧](/images/20180420_09.jpg){: .img-responsive}

ビニール電線は、フエルトの裏を通るようにしています。

![パーツと電線](/images/20180420_08.jpg){: .img-responsive}

Arduinoは平たく使いたかったので、ビニル電線をワイヤーストリッパーで剥離して、直接巻きました。仮止めして、まずテスト。

![Arduino](/images/20180420_10.jpg){: .img-responsive}

ハンダ後、テスト。ビニールテープで固定して、テスト。縫い付けて、テスト。

![Arduino](/images/20180420_11.jpg){: .img-responsive}

なんとか完成しました！

<iframe width="560" height="315" src="https://www.youtube.com/embed/ygr8X9RNf5I?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<hr>

### 反省点と次からの目標

最初、おうちにあったマイコンボード/[GEMMA](https://www.switch-science.com/catalog/1591/)でトライしていましたが、プログラムの書き込みがうまくいかなくて、マイコンボードを変更しました。Arduino互換マイコンボード自体にセンサーが組み込まれているものがあるようなので、今後は設計前に、どのマイコンボードを使うかを検討しようと思います。また、回路図が書けなかったので、自分が見てわかる程度の設計図から書いていきたいです。

センサー周りは、いつか加速度センサーを3軸を使った工作にチャレンジしたいです。また、明るさセンサーなどで作っても楽しそうだったので、いろんなセンサーのことも知りたいです。

作ろうと思ってから、できるまで、試行錯誤の繰り返し。大変なこともいっぱいあったけど、できたらうれしくいので、また何か作りたいです。

明日は[テクノ図工部](https://tekunozukoubu.net/)！何作ろうかな！
