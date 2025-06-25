const uname = document.querySelector('.uname')
const age = document.querySelector('.age')
const gender = document.querySelector('.gender')
const salary = document.querySelector('.salary')
const city = document.querySelector('.city')
// 获取表单元素
// const form = document.querySelector('.form')

// 获取表格元素
let data = [

];

const info = document.querySelector('.info')
info.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(uname)
  if (uname.value === '' || uname.value === null) {
    alert('请输入姓名')
    return
  } else if (age.value === '' || age.value === null) {
    alert('请输入年龄')
    return
  } else if (gender.value === '' || gender.value === null) {
    alert('请输入性别')
    return
  } else {
    data.push({
      name: uname.value,
      age: age.value,
      gender: gender.value,
      salary: salary.value,
      city: city.value,
      date: getDate()
    })
    localStorage.setItem('data', JSON.stringify(data))
    loadData()
  }
  this.reset()


});
loadData()
function loadData() {
  const str = localStorage.getItem('data')
  data = JSON.parse(str) || data
  console.log(str)
  console.log(data)
  document.querySelector('tbody').innerHTML = ''
  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement('tr')
    const item = data[i]
    tr.innerHTML = `
          <td>${i + 1}</td>
          <td>${item.name}</td>
          <td>${item.age}</td>
          <td>${item.gender}</td>
          <td>${item.salary}</td>
          <td>${item.city}</td>
          <td>${item.date}</td>
          <td>
            <a href="javascript:" data-id=${i}>删除</a>
          </td>
  `
    document.querySelector('tbody').appendChild(tr)
  }
}

// 按钮
document.querySelector('tbody').addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    const index = e.target.dataset.id
    console.log(index)
    data.splice(index, 1)
    localStorage.setItem('data', JSON.stringify(data))
    loadData()
  }
})

function getDate() {
  // 获取当前时间
  return new Date().toLocaleString()
}