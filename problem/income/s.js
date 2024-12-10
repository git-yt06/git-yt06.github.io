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
        cellSelections[parseInt(selectedCell.dataset.index)] = option.dataset.value;

        const previousOption = cellOptionMap.get(selectedCell);
        if (previousOption) {
            previousOption.style.visibility = 'visible';
        }

        text = option.textContent; // innerHTMLを使用して改行を保持

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
                text = "iを1から11まで1ずつ増やしながら<br>｜　kanri ← kanri - ";
                await showModal(modal1, option);
                text += "<br>を繰り返す";
            } else if (option.dataset.value == 1) {
                text = "kanri ← kanri - ";
                await showModal(modal2, option);
            } else if (option.dataset.value == 2) {
                text = "";
                await showModal(modal3, option);
                text += "と「時間」を表示する";
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

// 選択されたオプションを表示
let dic = {
    3:"++time;",
    4:"while(m >= 0) {if(++p>100){result = '-1'; break; }",
    5:"}",
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
    let code = `let result=""; let m=1000000, time=0, jikyu=1000, p=0; let L = [90000,90000,90000,90000,90000,90000,90000,90000,90000,90000,89000];`;
    for (const e of cellSelections) {
        if (e == -1) {
            document.getElementById('executionResult').innerHTML = '解答欄が埋まっていないよ';
            document.getElementById('comment').innerHTML = `まずは解答欄を全部埋めてみよう。<br>kanriが上限額の100万を表しているから、まずはこれを11月までの収入分引いてみよう。`;
            return;
        }
        if (e == 0) {
            if (modalSelections[0]=="C") code+="m -= 989000;";
            else {
                document.getElementById('executionResult').innerHTML = `エラーが発生しているよ！<br>エラー：リストSyunyuの範囲外の参照`;
                document.getElementById('comment').innerHTML = `リスト(配列)の範囲は0~(リストの大きさ-1)だったな。<br>
                今回は添え字に関するiが、1から始まってリストの大きさまでを動くから…`
                return;
            }
        }
        else if (e == 1) {
            if (modalSelections[1]=="A") code+="m -= jikyu;";
            if (modalSelections[1]=="B") {
                document.getElementById('executionResult').innerHTML = `エラーが発生しているよ！<br>エラー：数字-文字列`;
                document.getElementById('comment').innerHTML = `kanriは数字、'jikyu'は文字列だ。数字-文字列はできないぞ。`
                return;
            }
            if (modalSelections[1]=="C") code+="m -= 1000;";
        }
        else if (e == 2) {
            code+="if(result!='-1')"
            if (modalSelections[2]=="A") code+="result += time + '<br>';";
            if (modalSelections[2]=="B") code+="result += time+1 + '<br>';";
            if (modalSelections[2]=="C") code+="result += time-1 + '<br>';";
            if (modalSelections[2]=="D") {
                document.getElementById('executionResult').textContent = 'time';
                document.getElementById('comment').innerHTML = `出力がtimeという文字列で固定されているな。<br>
                timeの中身を表示するようにまずは修正しよう。`
                return;
            }
        }
        else code += dic[e];
    }
    code += `result;`;
    //document.getElementById('code').textContent = code;

    try {
        const execution = eval(code);
        document.getElementById('executionResult').innerHTML = execution;
        if(execution=="-1") {
            document.getElementById('executionResult').innerHTML = `エラーが発生しているよ！<br>エラー：無限ループ`;
            document.getElementById('comment').innerHTML = `while文で無限ループが起きているみたいだ。<br>
            kanriが条件になっているから、ループの中でkanriを変更しないと無限ループが起きるぞ。見直してみよう。`;
            return;
        }

        if (modalSelections[1]=='C'){
            document.getElementById('comment').innerHTML = `出力例のjikyuは1000だけど、<br>
            求めるプログラムのjikyuの中身は1000固定ではなく、予め宣言した値を使うぞ。<br>
            kanriから時給を引くときはjikyuを使おう。`
            return;
        }
        if (cellSelections[0]==0 && cellSelections[1]==4 && cellSelections[4]==5 && cellSelections[5]==2){
            if (modalSelections[2]=="C") document.getElementById('comment').innerHTML = `正解だ。よく選択肢に合わせられたな。ストーリーに戻ろう。`
            else {
                document.getElementById('comment').innerHTML = `惜しいな。アルゴリズム的に収入が100万を超える時間働いたら<br>
                ループが終了するから、出力するときにはtimeを…`
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
