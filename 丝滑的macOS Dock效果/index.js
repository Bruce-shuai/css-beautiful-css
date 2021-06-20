// 还是好好学学这些dom操作
document.querySelectorAll('.dock li').forEach(li => {
  // 这是点击后的效果
  li.addEventListener('click', e => {
    console.log('e', e);
    // classList 效果是啥？ 牛啊！
    e.currentTarget.classList.add('loading')
  })
  
  // 这是鼠标划过的效果
  li.addEventListener('mousemove', e => {
    let item = e.target
    // 这个getBoundingClientRect() 函数是什么效果
    let itemRect = item.getBoundingClientRect();
    // console.log('itemRect', itemRect);
    // abs 是取绝对值
    let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width
    
    // The previousElementSibling property returns the previous element of the specified element, in the same tree level.
    let prev = item.previousElementSibling || null
    let next = item.nextElementSibling || null
    
    let scale = 0.6
    
    resetScale()
    
    // style.setProperty 这个属性是用来干什么的？
    if (prev) {
      prev.style.setProperty('--scale', 1 + scale * Math.abs(offset - 1))
    }
    
    item.style.setProperty('--scale', 1 + scale)
    
    if (next) {
      next.style.setProperty('--scale', 1 + scale * offset)
    }
  })
})

document.querySelector('.dock').addEventListener('mouseleave', e => {
  resetScale()
})

function resetScale() {
  document.querySelectorAll('.dock li').forEach(li => {
    li.style.setProperty('--scale', 1)
  })
}