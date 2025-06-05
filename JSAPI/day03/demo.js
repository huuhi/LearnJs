// 顶部导航栏
const nav = document.querySelector('.xtx_navs')

// 电梯
const floor = document.querySelector('.xtx-elevator')

const ul = document.querySelector('.xtx-elevator-list')

// 返回顶部按钮
const backTop = document.querySelector('#backTop')

const entry = document.querySelector('.xtx_entry')


// const divArr = [newGoods, hotGoods, brandGoods, topicGoods]
document.addEventListener('scroll', function () {
  const n = document.documentElement.scrollTop
  floor.style.opacity = n >= entry.offsetTop ? 1 : 0
})

backTop.addEventListener('click', function () {
  // document.documentElement.scrollTop = 0
  window.scrollTo(0, 0)
})



ul.addEventListener('click', function (e) {
  if (e.target.tagName === 'A' && e.target.dataset.name) {
    const old = document.querySelector('.xtx-elevator-list .active')
    if (old) old.classList.remove('active')
    e.target.classList.add('active')
    const target = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
    document.documentElement.scrollTop = target
  }
})


window.addEventListener('scroll', function (e) {
  const old = document.querySelector('.xtx-elevator-list .active')
  if (old) old.classList.remove('active')
  const news = document.querySelector('.xtx_goods_new')
  const popular = document.querySelector('.xtx_goods_popular')
  const brand = document.querySelector('.xtx_goods_brand')
  const topic = document.querySelector('.xtx_goods_topic')
  const n = document.documentElement.scrollTop
  if (n >= news.offsetTop && n < popular.offsetTop) {
    // 选择第一个小盒子
    document.querySelector('[data-name=new]').classList.add('active')
  } else if (n >= popular.offsetTop && n < brand.offsetTop) {
    document.querySelector('[data-name=popular]').classList.add('active')
  } else if (n >= brand.offsetTop && n < topic.offsetTop) {
    document.querySelector('[data-name=brand]').classList.add('active')
  } else if (n >= topic.offsetTop) {
    document.querySelector('[data-name=topic]').classList.add('active')
  }

})