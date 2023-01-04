# COWJS
## 概要
AltJSの設計・実装を学ぶために授業で制作したAltJS[^2]。</br>
主にCOW[^1]言語の文法を主体として設計。</br>

[^1]:https://bigzaphod.github.io/COW/
[^2]:トランスパイルによりJavaScriptを生成する代替JavaScriptのこと。TypeScriptが有名。

## プレゼンスライド
https://github.com/RIshimoto/COWJS/blob/main/COWJS.pdf

## 実行手順
```
npx pegjs -o parser.js grammer.pegjs
node main.js (実行したいcowファイル).cow
node src.js 
```
