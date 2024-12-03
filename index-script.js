const gallery1 = document.getElementById('gallery1');
const gallery2 = document.getElementById('gallery2');
const gallery3 = document.getElementById('gallery3');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');

// フォルダ内の画像リスト
let image1 = [];
for (let i=1;i<=26;++i){
    let path=`image/スライド${i}.JPG`;
    image1.push(path);
}

// ギャラリーに画像を表示
image1.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = src;
    img.addEventListener('click', () => {
        modalImg.src = src;
        modal.classList.remove('hidden');
    });
    gallery1.appendChild(img);
});

let image2=["image/説明1.JPG", "image/説明2.JPG"];
image2.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = src;
    img.addEventListener('click', () => {
        modalImg.src = src;
        modal.classList.remove('hidden');
    });
    gallery2.appendChild(img);
});

let image3=[];
for (let i=1;i<=1;++i){
    let path=`image/正解${i}.JPG`;
    image3.push(path);
    path=`image/間違い${i}.JPG`;
    image3.push(path);
}
image3.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = src;
    img.addEventListener('click', () => {
        modalImg.src = src;
        modal.classList.remove('hidden');
    });
    gallery3.appendChild(img);
});

// モーダルを閉じる
closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

document.getElementById("closeButton").addEventListener("click", function() {
    // 確認ダイアログを表示
    const confirmClose = confirm("このウィンドウを閉じますか？");

    // "はい"を選んだ場合はウィンドウを閉じる
    if (confirmClose) {
        window.close();
    }
});