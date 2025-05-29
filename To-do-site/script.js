function updateTime() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const time = date.toLocaleTimeString();
    const day = date.toLocaleDateString(undefined, options);
    document.getElementById('time').innerHTML =
        `${day}, ${time}`;
}

setInterval(updateTime, 1000);
updateTime();

const inputBox = document.getElementById("task-input");
const un_list = document.getElementById("list");

function addTask() {
    if (inputBox.value == '') {
        alert("I think you need better spectacles <-O-O->");
        return
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        li.classList.add("task");
        
        let iconContainer = document.createElement("div");
        iconContainer.classList.add("icons");

        let img = document.createElement("img");
        img.src = "./unchecked-41.svg"
        img.alt = "unchecked"
        img.classList.add("uncheck")

        img.addEventListener("click", () => {
            if (img.classList.contains("checked")) {
                // If already checked, uncheck it
                img.src = "./unchecked-41.svg";
                li.style.textDecoration = "none";  // remove line-through
                img.classList.remove("checked");
              } else {
                // If unchecked, check it
                img.src = "./checked-6.svg";
                li.style.textDecoration = "line-through";
                img.classList.add("checked");
              }
        });
        iconContainer.appendChild(img);

        let cross = document.createElement("img");
        cross.src = "./trash-can-with-cover-svgrepo-com.svg"
        cross.alt = "Delete";
        cross.classList.add("cross-span");

        cross.addEventListener("mouseenter", () => {
            cross.src = "./open-trash-can-svgrepo-com.svg"
        });

        cross.addEventListener("mouseleave", () => {
            cross.src = "./trash-can-with-cover-svgrepo-com.svg"; 
        });

        cross.addEventListener("click", () => li.remove());
        iconContainer.appendChild(cross);

        li.appendChild(iconContainer)
        un_list.appendChild(li);

        inputBox.value = '';
        
    }
}