const inputElement = document.querySelector('input');

if (inputElement) {
  inputElement.addEventListener('input', function () {
    document.querySelector('#i').innerHTML = '输入事件';
  });
} else {
  console.error('未找到 input 元素');
}
