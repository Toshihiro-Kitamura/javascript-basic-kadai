const clickedBtn = document.getElementById('btn');

clickedBtn.addEventListener('click', () => {

    const clickedText = document.getElementById('text');

    clickedText.textContent ='ボタンをクリックしました';
});