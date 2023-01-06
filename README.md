# COWJS
## 概要
AltJS[^2]の設計・実装を学ぶために制作した自作AltJS。</br>
主にCOW[^1]言語の文法を主体として設計。</br>

[^1]:https://bigzaphod.github.io/COW/
[^2]:トランスパイルによりJavaScriptを生成する代替JavaScriptのこと。TypeScriptが有名。

## プレゼンスライド
https://github.com/RIshimoto/COWJS/blob/main/COWJS.pdf


## デモ
<img width="365" alt="image" src="https://user-images.githubusercontent.com/57135683/210615519-4ae87dba-5ff7-40b0-ac73-a2cbb8574a90.png">

## 実行手順
```
$ git clone https://github.com/RIshimoto/COWJS
$ cd COWJS
$ npm install 
$ npx pegjs -o parser.js grammer.pegjs
$ node main.js (実行したいcowファイル).cow
$ node src.js 
```

## 実行環境
- Oracle VM VirtualBox 6.1.X
- Ubuntu Desktop 22.04.1 LTS
- Node.js 16.17.0 LTS
