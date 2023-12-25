const btnClick = document.getElementById('btn');
const text1 = document.getElementById('text');

btnClick.addEventListener('click', () => {
    setTimeout(() => {
    text1.textContent = '';
    const text2 = document.createElement('text2');
    text2.textContent = 'ボタンをクリックしました';
    document.querySelector('h2').appendChild(text2);
    }, 2000)
});