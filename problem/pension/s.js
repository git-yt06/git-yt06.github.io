let selectedCell = null;
let cellOptionMap = new Map();

let modalSelections = ["0","0","0"];
let cellSelections = [-1,-1,-1,-1,-1,-1];

let text;

const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");

// セルがクリックされたときの処理
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

// オプションがクリックされたときの処理
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => handleOptionClick(option));
});

// セルをクリックした際の処理
function handleCellClick() {
    if (this == selectedCell) {
        selectedCell.classList.remove('selected');
        selectedCell = null;
    } else {
        if (selectedCell) { 
            selectedCell.classList.remove('selected'); 
        }
        selectedCell = this;
        selectedCell.classList.add('selected');
    }
}

// オプションをクリックした際の処理
async function handleOptionClick(option) {
    if (selectedCell) {
        cellSelections[selectedCell.dataset.index] = option.dataset.value;

        const previousOption = cellOptionMap.get(selectedCell);
        if (previousOption) {
            previousOption.style.visibility = 'visible';
        }

        text = option.innerHTML; // innerHTMLを使用して改行を保持

        if (option.dataset.value == -1) {
            // 初期状態に戻す処理
            selectedCell.innerHTML = '-'; // セルの内容をクリア
            cellOptionMap.delete(selectedCell); // マップからも削除
            selectedCell.classList.remove('selected');
            selectedCell = null;
            option.style.visibility = 'visible'; // オプションは再度選択可能に
        }
        else {
            if (option.dataset.value == 0) {
                text = "もし ";
                await showModal(modal1, option);
                text += " ならば";
            } else if (option.dataset.value == 1) {
                text = "";
                await showModal(modal2, option);
                text += "を表示する";
            } else if (option.dataset.value == 2) {
                text = "en ← ";
                await showModal(modal3, option);
            }
            selectedCell.innerHTML = text;
            cellOptionMap.set(selectedCell, option);
            selectedCell.classList.remove('selected');
            selectedCell = null;
            option.style.visibility = 'hidden';
        }
    }
}

// モーダルの選択肢がクリックされた際の処理
function handleModalOptionClick(e, option) {
    const selectedValue = e.target.textContent;
    let ix = parseInt(option.dataset.value);
    
    text += selectedValue.trim();

    modalSelections[ix] = e.target.getAttribute('data-value');
    closeModal();
}

// モーダルを表示
function showModal(modalElement, option) {
    modalElement.style.display = "block";

    // 以前のイベントリスナーを削除
    modalElement.querySelectorAll('.modal-option').forEach(modalOption => {
        modalOption.replaceWith(modalOption.cloneNode(true)); // リスナーをクリア
    });

    // モーダルの選択肢にクリックイベントを設定
    return new Promise((resolve) => {
        // モーダルの選択肢にクリックイベントを設定
        modalElement.querySelectorAll('.modal-option').forEach(modalOption => {
            modalOption.addEventListener('click', (e) => {
                handleModalOptionClick(e, option);
                resolve(); // モーダルの選択が完了したらresolveを呼び出す
            });
        })
    });   
}

// モーダルを閉じる
function closeModal() {
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
}

let dic = {
    3:"let m=-400000, y=65, e=38195;",
    4:"while(m <= 0) {if(++p>100){result = '-1'; break; }",
    5:"}",
    6:"}",
    7:"++y;m+=e;",
    8:"m+=e;"
};

function displaySelectedOptions() {
    let modals = "";
    modals += modalSelections[0] + ", " + modalSelections[1] + ", " + modalSelections[2];
    //document.getElementById('modals').textContent = modals;
    let cells = "";
    for(const e of cellSelections) {
        cells += e + ", ";
    }
    //document.getElementById('cells').textContent = cells;

    //let resultText = '選択されたオプション:\n';
    //document.getElementById('result').textContent = resultText;
    let code = `let result="", p=0;`;
    for (const e of cellSelections) {
        if (e == -1) {
            document.getElementById('executionResult').innerHTML = '解答欄が埋まっていないよ';
            document.getElementById('comment').innerHTML = `まずは解答欄を全部埋めてみよう。<br>変数を宣言したら、tokuが正になるまで、1年ごとに貰える年金をtokuに足していこう。`;
            return;
        }
        if (e == 0) {
            code+="if(";
            if (modalSelections[0]=="A") code+="y==5){";
            if (modalSelections[0]=="B") code+="y/5==1){";
            if (modalSelections[0]=="C") code+="y%5==0){";
            if (modalSelections[0]=="D") code+="y%5!=0){";
        }
        else if (e == 1) {
            code+="if(result!='-1')"
            if (modalSelections[1]=="A") code+="result += y + '<br>';";
            if (modalSelections[1]=="B") code+="result += y+1 + '<br>';";
            if (modalSelections[1]=="C") code+="result += y-1 + '<br>';";
            if (modalSelections[1]=="D") {
                document.getElementById('executionResult').textContent = 'year';
                document.getElementById('comment').innerHTML = `出力がyearという文字列で固定されているな。<br>
                yearの中身を表示するようにまずは修正しよう。`
                return;
            }
        }
        else if (e == 2) {
            if (modalSelections[2]=="A") code+="e=e;";
            if (modalSelections[2]=="B") code+="e=Math.floor(e/1.03);";
            if (modalSelections[2]=="C") code+="e-=Math.floor((e*3)/100);";
        }
        else code += dic[e];
    }
    code += `result;`;
    document.getElementById('code').textContent = code;

    try {
        const execution = eval(code);
        document.getElementById('executionResult').innerHTML = execution;
        if(execution=="-1") {
            document.getElementById('executionResult').innerHTML = `エラーが発生しているよ！<br>エラー：無限ループ`;
            document.getElementById('comment').innerHTML = `while文で無限ループが起きているみたいだ。<br>
            tokuが条件になっているから、ループの中でtokuを変更しないと無限ループが起きるぞ。見直してみよう。`;
            return;
        }

        if (cellSelections[0]==3 && cellSelections[1]==4 && cellSelections[2]==0 && cellSelections[3]==2 && cellSelections[4]==6 && cellSelections[5]==7 && cellSelections[6]==5){
            if (modalSelections[0]=="C" && modalSelections[1]=="C" && modalSelections[2]=="C") document.getElementById('comment').innerHTML = `正解だ。文章題もバッチリだな。ストーリーに戻ろう。`
            else {
                if(modalSelections[0]!='C') document.getElementById('comment').innerHTML = `惜しいな。65才から5年ごとに円の価値を
                下げるということはyearが65,70,75...のときに下がるな。<br>これ全てに当てはまるのは5の倍数ということだから条件文は…`
                else {
                    if(modalSelections[2]!='C') document.getElementById('comment').innerHTML = `惜しいな。5年ごとに円の価値が実質3%下がる。<br>
                    3%下がるというのは、0.97倍ということだが<br>???の選択肢には一見それがない。
                    ちなみに1.03で割るのは約0.971倍ということで微妙に違うぞ。<br>
                    ただ、0.97というのを 1-0.03 と変形すれば…`
                    else document.getElementById('comment').innerHTML = `惜しいな。アルゴリズム的に得している年齢(≠得をする年齢)になったら
                    ループが終了するから、出力するときにはyearを…`
                }
            }

        }
        else {
            document.getElementById('comment').innerHTML = `構文の作り方は問題ないが、純粋に並び替え結果が違うみたいだ。<br>
            実行結果を見て、もう一度アルゴリズムを見直してみよう。<br>
            while文に入れるべきものと、そうでないものを意識すると良いぞ。`
        }
    } catch (e) {
        document.getElementById('executionResult').textContent = 'エラーが発生しているよ！ ' + e;
        document.getElementById('comment').innerHTML =
        `構文の作り方が間違っているみたいだ。<br>繰り返し文や条件文の並び方を確認してみよう。`;
    }
}

document.getElementById("closeButton").addEventListener("click", function() {
    // 確認ダイアログを表示
    const confirmClose = confirm("このウィンドウを閉じますか？");

    // "はい"を選んだ場合はウィンドウを閉じる
    if (confirmClose) {
        window.close();
    }
});

document.getElementById('menuButton').addEventListener('click', () => {
    window.open("../../index.html", '_blank'); // 新しいタブでURLを開く   
});

// イベントリスナーの設定
document.getElementById("checkAnswers").addEventListener('click', displaySelectedOptions);
