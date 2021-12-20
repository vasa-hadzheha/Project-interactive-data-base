function BootTemplate(birthday) {
  let k = new Date(birthday.birthdate);
  let date = `${k.getDate()}-${("0" + (k.getMonth() + 1)).slice(-2)}-${k.getFullYear()}`;
  return `    <td> ${birthday.id} </td>
              <td> ${birthday.firstname} </td>
              <td> ${birthday.lastname}</td>
              <td> ${date}</td>
              <td> ${birthday.age}</td>
              <td> <button class="btn btn-outline-secondary" onclick="ChangeBirthday(${birthday.id})"> Змінити </button> </td>
              <td> <button class="btn btn-outline-secondary" onclick="RemoveBirthday(${birthday.id})"> X </button> </td>`;
}

function RenderBirthdayList(list, parent) {
  parent.innerHTML = "";

  const headerArr = ["ID","Firstname","Lastname","Date","Age","Change","Delete"];
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  for (let i = 0; i < headerArr.length; i++) {
      let th = document.createElement("th");
      th.innerHTML = headerArr[i];
      tr.appendChild(th);
      thead.appendChild(tr);      
  }
    parent.appendChild(thead);
  for (let birthday of list) {
    //let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    tr.innerHTML = BootTemplate(birthday);
    //tbody.appendChild(tr);
    parent.appendChild(tr);
  }
}

async function Render() {
  try {
    let birthdays = await Load();
    RenderBirthdayList(birthdays, document.getElementById("birthdays"));
  } catch (e) {
    alert(e);
  }
}

async function RemoveBirthday(id) {
  try {
    let removedBirthday = await Remove(id);
    await Render();
    // alert(`Вилучено ${JSON.stringify(removedBirthday)}`);
    console.log(`Вилучено ${JSON.stringify(removedBirthday)}`)
  } catch (e) {
    alert(e);
  }
}

async function ChangeBirthday(id) {
  try {
    let data = Object.fromEntries(new FormData(document.forms["newBirthdayForm"]));
    let changedBirthday = await Change(id, data);
    await Render();
    // alert(`Змінено ${JSON.stringify(changedBirthday)}`);
    console.log(`Змінено ${JSON.stringify(changedBirthday)}`)
  } catch (e) {
    alert(e);
  }
}

async function NewBirthday(event) {
  try {
    event.preventDefault();//-----------------------------------------------------
    let data = Object.fromEntries(new FormData(document.forms["newBirthdayForm"]));
    let newBirthday = await Add(data);
    await Render();
    // alert(`Додано ${JSON.stringify(newBirthday)}`);
    console.log(`Додано ${JSON.stringify(newBirthday)}`);
  } catch (e) {
    alert(e);
  }
}

/*-----*/
document.getElementById("addBirthday").onclick = NewBirthday;
Render();
// alert("Render birthday list")
console.log("Render birthday list")