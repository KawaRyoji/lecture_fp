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
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: statement
---


# イミュータブル
# 純粋関数
# 高階関数

<br>

## これらを理解する

---

# イミュータブル

これに違和感を持っていませんでしたか？

## プログラム

<br>

```java
{all|2}
int x = 5;
x = x * 10;
// x = 50
```

<br>

<div v-click>

## 数学

$$
\begin{array}{ccl}
  x & = & 5 \\
  y & = & x \times 10  \\
  y & = & 50
\end{array}
$$

</div>

---