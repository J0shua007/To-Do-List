const inputBox = document.getElementById('input-box');
            const listContainer = document.getElementById('listContainer'); 
            function addTask(){
                if (inputBox.value === "") {
                    alert("Enter some task");
                }
                else {
                 const li = document.createElement('li');
                 li.innerHTML = inputBox.value;
                 listContainer.appendChild(li);
                 let span = document.createElement('span');
                 span.innerHTML = "\u00d7";
                 li.appendChild(span);
                }
                inputBox.value = "";
                saveData();
            };
            
            listContainer.addEventListener("click",function (e) {
                if (e.target.tagName ==="LI") {
                    e.target.classList.toggle("checked");
                    saveData();
                }
                else if (e.target.tagName == "SPAN") {
                    e.target.parentElement.remove();
                    saveData();
                };
            });
            function saveData() {
              localStorage.setItem("data",listContainer.innerHTML);  
            };
            function getdata() {
                  listContainer.innerHTML = localStorage.getItem("data");
            };
            getdata()