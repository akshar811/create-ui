let users = [];

const uimaker = () => {
    document.getElementById("result").innerHTML = "";
    let temp = ``;
    users.map((ele,index) => {
        temp += `<div onclick=userdelete(${index})>
        <img src=${ele.img} alt="" class="img">
        <h2>Firstname : ${ele.firstname}</h2>
        <h2>Lastname : ${ele.lastname}</h2>
        <P>Age : ${ele.age}</P>
        <P>Number : ${ele.number}</P>
        <P>Email : ${ele.email}</P>
        </div>`;
    })
    document.getElementById("result").innerHTML = temp;
};
const userdelete=(id)=>{
    console.log(id)
    users.splice(id,1);
    uimaker()
}

const userdata = (e) => {
    e.preventDefault();

    let user = {
        img: document.getElementById("img").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        number: document.getElementById("number").value,
        email: document.getElementById("email").value,
        age: document.getElementById("exp").value,
    };
    users.push(user);
    console.log(users);
    uimaker();
};

document.querySelector(".form").addEventListener("submit", userdata);