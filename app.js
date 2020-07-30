const getName = document.querySelector("#name");
const getEmail = document.querySelector("#email");
const getPhone = document.querySelector("#phone");
const submitBtn = document.querySelector("#btnSubmit");
const updateNewList = document.querySelector("#book-list");

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (getName.value === "") {

        const visableError = document.querySelector(".visable");

        visableError.style = "display:block";


    } else if (getEmail.value === "") {

        const visableError1 = document.querySelector(".visable1");

        visableError1.style = "display:block";

    } else if (getPhone.value === "") {

        const visableError2 = document.querySelector(".visable2");

        visableError2.style = "display:block";

    } else {

        const visableError = document.querySelector(".visable");

        visableError.style = "display:none";

        const visableError1 = document.querySelector(".visable1");

        visableError1.style = "display:none";

        const visableError2 = document.querySelector(".visable2");

        visableError2.style = "display:none";

        const createTr = document.createElement("tr");
        const createName = document.createElement("th");
        createName.innerHTML = getName.value;
        createTr.appendChild(createName);
        const createEmail = document.createElement("th");
        createEmail.innerHTML = getEmail.value;
        createTr.appendChild(createEmail);
        const createPhone = document.createElement("th");
        createPhone.innerHTML = getPhone.value;
        createTr.appendChild(createPhone);
        updateNewList.appendChild(createTr);

    }


});