const todo_list = document.querySelector(".todo-list");
const did_list = document.querySelector(".did-list");
const register_todo = document.getElementById("register-todo");

register_todo.addEventListener("click", () => {

    const todo = document.getElementById("todo").value;
    if(todo == "") return;

    const li = document.createElement("li");
    const wrriten_todo = document.createElement("input");
    wrriten_todo.setAttribute("type", "text");
    wrriten_todo.setAttribute("value", todo);
    wrriten_todo.setAttribute("disabled", true);

    // 完了機能
    const complete_button = document.createElement("button");
    complete_button.textContent = "完了";

    complete_button.addEventListener("click", (e) => {
        did_list.append(li);
        e.preventDefault();
    });

    // 削除機能
    const delete_button = document.createElement("button");
    delete_button.textContent = "削除";

    delete_button.addEventListener("click", () => {
        if(li.parentNode.classList[0] == "todo-list"){
            todo_list.removeChild(li);
        }else{
            did_list.removeChild(li);
        }
    });

    
    // 編集機能
    const edit_button = document.createElement("button");
    edit_button.textContent = "編集";

    edit_button.addEventListener("click", () => {
        if(wrriten_todo.disabled){
            wrriten_todo.disabled = false;
            edit_button.textContent = "編集完了";
            // 編集中は他のボタンを無効化する
            complete_button.disabled = true;
            delete_button.disabled = true;
        }else{
            edit_button.textContent = "編集";
            wrriten_todo.disabled = true;
            complete_button.disabled = false;
            delete_button.disabled = false;
        }

    });

    li.append(wrriten_todo);
    li.append(complete_button);
    li.append(delete_button);
    li.append(edit_button);
    todo_list.append(li);

});

