const tdtext = document.querySelector("#tdtext");
const submit_btn = document.querySelector(".submit-btn");
const login_btn = document.querySelector(".login-btn");
const login_post_btn = document.querySelector('.login-post-btn');
const modal_hidden = document.querySelector('#modal-hidden');

login_btn.addEventListener("click",showModal);
login_post_btn.addEventListener("click",login);
submit_btn.addEventListener("click",sendText);
modal_hidden.addEventListener("click",hiddenModal);

function sendText(){
    const text = tdtext.value;
    alert("제출하시겠습니까?");
    console.log(text);
    const content = {
        content : text,
    };
    if(text){
        const xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status===200){
                console.log(xhr.responseText);
                tdtext.value = "";
            } else {
                console.error(xhr.responseText);
            }
        };
        xhr.open("POST","/post");
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify(content));
    }
}

function showModal(){
    const modal = document.querySelector('.modal-overlay');
    modal.classList.remove('hidden');
}

function hiddenModal(){
    document.querySelector("#user-id").value = "";
    document.querySelector("#user-password").value = "";
    const modal = document.querySelector('.modal-overlay');
    modal.classList.add('hidden');
}

function login(){
    const id = document.querySelector("#user-id").value;
    const password = document.querySelector("#user-password").value;
    // console.log(user);
    if(id && password){
        const xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status===200){
                console.log(xhr.responseText);
                document.querySelector("#user-id").value = "";
                document.querySelector("#user-password").value = "";
            } else {
                console.error(xhr.responseText);
            }
        };
        xhr.open("POST","/auth/login");
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.send(JSON.stringify({id: id, password: password}));
    }
}