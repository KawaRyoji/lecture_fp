---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
background: https://cover.sli.dev
# some information about your slides, markdown enabled
title: Welcome to Slidev
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
fonts:
  mono: "Moralerspace Argon HW"
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
colorScheme: light
mdc: true
---

# 関数型プログラミング入門

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    currentPage.next().show()
  </span>
</div>

---

# 関数型プログラミング

## 学ぶ利点

<br>

1. コードのバグを埋め込みづらくする**堅牢な**プログラムをかける。
2. 他の言語のパラダイムでも使える普遍的な考え方を学べる。

<br>

## 代表的な言語

<br>

- Lisp(1960年) - カッコがいっぱい出てくるやつ (神の言語...らしい)
- Haskell(1990年) - 純粋関数型プログラミングの代表的なプログラミング言語
- Scala(2001年) - JavaのVM上で動く言語


その他にも様々な言語やフレームワークが関数型プログラミング影響を受けている


---
layout: statement
---

# 宣言的プログラミング
# イミュータブル
# 純粋関数

<style>
  h1 {
    text-align: left;
    padding-left: 110px;
  }

  h2 {
    text-align: left;
    padding-left: 110px
  }
</style>
<br>

## これらを理解する

---

# 宣言的プログラミング

##

<span class="text-2xl text-orange font-bold">How</span> ではなく <span class="text-2xl text-blue font-bold">What</span> でプログラミングする考え方，パラダイム

<br>

<div class="grid grid-cols-2 gap-4">

<div>

## 命令的プログラミング

<br>

- 「どのように」行うかに焦点を当てる
- ステップバイステップの手順を明示的に記述
- ループ、条件分岐などの制御構造を多用
- コードが長くなる傾向がある
- 低レベルの操作を直接制御できる

</div>
<div>

## 宣言的プログラミング

<br>

- 「何を」行うかに焦点を当てる
- 目的を高レベルな関数や式で表現
- map, filter, reduceなどの関数型の特徴を活用
- コードが簡潔になる傾向がある
- 抽象化によりバグが減り、読みやすくなる

</div>
</div>

---

# 宣言的プログラミング　例


<style>
  h2 {
    text-align: center;
  }
</style>

<br>

<div class="grid grid-cols-2 gap-4">

<div>

## 命令的プログラミング

<br>

```javascript{all|7-8|9-10|13-16|all}
const foods = [
  {name: "りんご", price: 50, num: 2},
  {name: "バナナ", price: 80, num: 3},
  {name: "スイカ", price: 150, num: 1}
];

// 合計値を変化するものとして定義している
let sum = 0;
// 合計を求めるとき本来は不必要なiを定義している
for (let i = 0; i < foods.length; i++) {
  const food = foods[i];

  if (food.price <= 100) { // 百円以下のとき
    // 合計値に一つの食べ物の合計価格を足す
    sum += food.price * food.num;
  }
}
```

</div>
<div>

## 宣言的プログラミング

<br>

```javascript{all|7-8|9|10|11}
const foods = [
  {name: "りんご", price: 50, num: 2},
  {name: "バナナ", price: 80, num: 3},
  {name: "スイカ", price: 150, num: 1}
]

// 合計値を変化しないものとして定義している
const sum = foods
  .filter(food => food.price <= 100) // 百円以下のものだけ取り出す
  .map(food => food.price * food.num) // 一つの食べ物の合計価格を計算
  .reduce((x, y) => x + y); // それらの合計を求める
```
</div>
</div>


---

# イミュータブル

<style local>
  span {
    font-size: 18pt;
  }
</style>

##

こんな違和感を持っていませんでしたか？

## プログラム

<br>

```java
{all|2}
int x = 5;
x = x * 10; // x = 50
```

<br>

<div v-click>

## 数学

$$
\begin{array}{lllll}
  x & = & 5           &   &    \\
  y & = & x \times 10 & = & 50 \\
\end{array}
$$

</div>

---

# 純粋関数

- 関数の主作用以外の作用（**副作用**）を持たない関数
- 引数が同じなら同じ結果を返す（**参照透過性**）

<style>
  h2 {
    text-align: center;
  }
</style>

<br>

<div class="grid grid-cols-2 gap-4">
<div>

## 副作用を持つ関数

```javascript
const lst = [2];

function add1(lst) {
  lst.push(1);
  return lst;
}

const result = add1(lst);

console.log(lst); // [2, 1]
console.log(result); // [2, 1]
// 外の世界のlstに影響を及ぼしている（副作用）
```

</div>
<div>

## 純粋関数

```typescript
const lst = [2];

function add1(lst) {
  return lst.concat([1]);
}

const result = add1(lst);

console.log(lst); // [2]
console.log(result); // [2, 1]
// 外の世界に影響を及ぼさない（副作用がない）
// 引数が同じなら常に同じ値を返す（参照透過性）
```

</div>
</div>

---
layout: statement
---

# これらを踏まえて練習問題へ
