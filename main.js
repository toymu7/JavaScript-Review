const todo_list = document.querySelector(".todo-list");
const did_list = document.querySelector(".did-list");

const register_todo = document.getElementById("register-todo");

console.log(register_todo);
console.log(did_list);

let a = 0;

register_todo.addEventListener("click", () => {
    // テキストエリアの値を取得
    // 空ならリターン
    const todo = document.getElementById("todo").value;
    if(todo == "") return;

    // 空じゃなければそれを登録する
    const li = document.createElement("li");

    // 削除機能を追加する
    a += 1;

    const delete_button = document.createElement("div");
    delete_button.textContent = `"削除します" + ${a}`;

    console.log(li);

    delete_button.addEventListener("click", () => {
        todo_list.removeChild(li);
    });

    li.textContent = todo;

    li.append(delete_button);
    todo_list.append(li);


});

