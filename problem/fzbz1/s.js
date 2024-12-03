let selectedCell = null;
let cellOptionMap = new Map();

let modalSelections = ["0","0","0"];
let cellSelections = ["-1","-1","-1","-1","-1","-1","-1","-1","-1"];

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

        if (option.dataset.value == "-1") {
            // 初期状態に戻す処理
            selectedCell.innerHTML = '-'; // セルの内容をクリア
            cellOptionMap.delete(selectedCell); // マップからも削除
            selectedCell.classList.remove('selected');
            selectedCell = null;
            option.style.visibility = 'visible'; // オプションは再度選択可能に
        }
        else {
            if (option.dataset.value == "4") {
                text = "もし (num % 15 == 0) ならば <br>　|　{ ";
                await showModal(modal2, option);
                text += " }<br>を実行し、そうでなければ";
            } else if (option.dataset.value == "5" || option.dataset.value == "10") {
                text = "もし ( ";
                await showModal(modal3, option);
            } else if (option.dataset.value == "6") {
                text = "もし (";
                await showModal(modal1, option);
                text += ") ならば <br>　|　{ 'bz 'を表示する; }<br>を実行し、そうでなければ <br>　|　{ numと' '(空白)を表示する }<br>を実行する";
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
    const splitValue = selectedValue.split(',');  // カンマで分割
    let ix = parseInt(option.dataset.value) - 4;

    if (splitValue.length === 2) {
        text += splitValue[0].trim() + ") ならば <br>　|　{ " + splitValue[1].trim();
        if (ix == 6) {
            ix = 1;
            text += " }<br> を実行する";
        }
        else text += " }<br> を実行し、そうでなければ";
    } else {
        text += selectedValue.trim();
    }

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
    "1":"for (let i = 0; i <= 2; ++i) {",
    "2":"for (let j = 1; j <= 10; ++j) {",
    "3":"let num = i * 10 + j;",
    "8":"}",
    "7":"result += '<br>';}",
    "9":"}"
};

let ok = ["1", "2", "3", "4", "5", "6", "9", "9", "8", "7"];

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
    let code = `let result = ''; let p = 0;`;
    for (const e of cellSelections) {
        if (e == "-1") {
            document.getElementById('executionResult').textContent = '解答欄が埋まっていないよ';
            document.getElementById('comment').innerHTML = `まずは解答欄を全部埋めてみよう。3かつ5の倍数、すなわち15の倍数での条件分けの選択肢があるからそこを起点に考えると良いぞ。`;
            return;
        }
        if (e == "4") {
            code += "if (num % 15 == 0) { result += ";
            if (modalSelections[0]=="A") code+="'fz ';";
            if (modalSelections[0]=="B") code+="'bz ';";
            if (modalSelections[0]=="C") code+="'FB ';";
            code+=" ++p; } else { ";
        }
        else if (e == "5" || e == "10") {
            if (modalSelections[1]=="A") code+="if (num % 3 == 0) { result += 'fz ';";
            if (modalSelections[1]=="B") code+="if (num % 3 == 0) { result += 'FB ';";
            if (modalSelections[1]=="C") code+="if (num % 5 == 0) { result += 'fz ';";
            if (modalSelections[1]=="D") code+="if (num % 5 == 0) { result += 'FB ';";
            code += "++p;"
            if (e == "5") code+="} else {";
        }
        else if (e == "6") {
            if (modalSelections[2]=="A") code+="if (num % 3 == 0) ";
            if (modalSelections[2]=="B") code+="if (num % 5 == 0) ";
            if (modalSelections[2]=="C") code+="if (num % 3 != 0) ";
            if (modalSelections[2]=="D") code+="if (num % 5 != 0) ";
            code+="{ result += 'bz '; ++p; } else { result += num + ' '; ++p; }";
        }
        else code += dic[e];
    }
    code += `result = p.toString() + "/" + result; result; `;
    //document.getElementById('code').textContent = code;
    try {
        const execution = eval(code); // JavaScriptで実行結果を表示
        let exList = execution.split("/");
        let pnum = exList[0];
        document.getElementById('executionResult').innerHTML = exList[1];
        if (modalSelections[0]!='C' || modalSelections[1]!='C' || modalSelections[2]!='A'){
            document.getElementById('comment').innerHTML = `条件文と出力のペアがあってないところがあるみたいだ。<br>
            問題文と今の解答をよく見て、思い描いたアルゴリズムと違うところを探してみよう。<br>
            ???に入れる選択肢を変えるには、1回その選択肢を外してくれ。`
            return;
        }
        if (pnum != 30) {
            document.getElementById('comment').innerHTML =
            `出力が30回でないみたいだ。どの数字で余計な出力か出ているかをまず確認し、
            残っている選択肢と今の解答をよく見て、思い描いたアルゴリズムと違うところを探してみよう。`;
            return;
        }
        let b=true;
        for (let i=0;i<10;++i){
            if (cellSelections[i]!=ok[i]){
                b=false;
                break;
            }
        }
        if (b) {document.getElementById('comment').innerHTML = `正解だ。これは難しいと思うから解けたことに自信をもってくれ。じゃあ、ストーリーに戻ろうか。`}
        else {
            document.getElementById('comment').innerHTML =
            `最後の繰返し終了の選択肢の順番だけ間違っているっぽいな。<br>
            最後に始めた繰返し文を先に閉じないと本来は誤りだ。`;
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