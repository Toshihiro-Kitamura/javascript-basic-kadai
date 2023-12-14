const clickedBtn = document.getElementById('btn');

clickedBtn.addEventListener('click', () => {
    setTimeout(() => {
        const clickedText = document.getElementById('text');
        clickedText.textContent ='ボタンをクリックしました';
}, 2000);
});