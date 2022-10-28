var names = ["Wake up","Pray","Shower","Have breakfast","Go to school"]
function listdown(){
    var startlist = "<ol>";
    var endlist = "</ol>";
    document.getElementById("myList").innerHTML = startlist + li + endlist;
  }


const firstNameInput= document.getElementById("FirstName")
const LastNameInput = document.getElementById("LastName")
const saveBtn = document.getElementById("save")
const MyList = document.getElementById("myList")

const getElementValue= (Element) => {
    return element.value
}

saveBtn.addEventListener("click", (event) =>{
    event.preventDefault ();

    const FirstNameValue = getElementValue(FirstNameInput)
const LastNameValue = getElementValue(LastNameInput)
    const list = document.createElement("ol")

const FirstNameli = document.createElement("li")
FirstNameli . innerHTML = FirstNameValue
list . appendChild(FirstNameli)

const LastNameli = document.createElement("li")
LastNameli. innerHTML = LastNameValue
list. appendChild(LastNameli)

MyList.appendChild(list)
}
) 
    