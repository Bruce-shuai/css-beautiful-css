const h1 = document.querySelector('h1');

// 通过正则表达式为每个字母都套上一层<span>  至于$&就记住这种操作就行了
h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>")

let delay = 0;
document.querySelectorAll('span').forEach((span, index) => {
  delay += 0.1;

  if (index === 6) delay += 0.3 
  // 这里和css的变量搭配得有点好 
  span.style.setProperty('--delay', `${delay}s`)
})

// 最后一个效果是什么呢？
h1.addEventListener('animationend', e => {
  if (e.target === document.querySelector('h1 span:last-child')) {
    h1.classList.add('ended');
  }
})