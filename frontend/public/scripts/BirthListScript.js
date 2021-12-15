function BootTemplate(birthday) {
    let k = new Date(birthday.birthdate);
    let date = `${k.getDate()}-${("0" + (k.getMonth() + 1)).slice(-2)}-${k.getFullYear()}`;
    const d = new Date("1999-12-10"+"T03:24:00");
    d.getUTCMonth();
    console.log(d);
    return `<td> ${birthday.firstname} </td>
              <td> ${birthday.lastname}</td>
              <td> ${date}</td>
              <td> ${birthday.age}</td>
              <td> <button onclick="ChangeBirthday(${birthday.id})"> Змінити </button> </td>
              <td> <button onclick="RemoveBirthday(${birthday.id})"> Вилучити </button> </td>`;
  }
  
  function RenderBirthdayList(list, parent) {
    parent.innerHTML = "";
    for (let birthday of list) {
      let tr = document.createElement("tr");
      tr.innerHTML = BootTemplate(birthday);
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
      alert(`Вилучено ${JSON.stringify(removedBirthday)}`);
    } catch (e) {
      alert(e);
    }
  }

  async function ChangeBirthday(id){
    try {
        let data = Object.fromEntries (new FormData(document.forms["newBirthdayForm"]));
        let changedBirthday = await Change(id,data);
        await Render();
        alert(`Змінено ${JSON.stringify(changedBirthday)}`);
      } catch (e) {
        alert(e);
      }
  }
  
  async function NewBirthday(event) {
    try {
      event.preventDefault();//-----------------------------------------------------
      let data = Object.fromEntries (new FormData(document.forms["newBirthdayForm"]));
      let newBirthday = await Add(data);
      await Render();
      alert(`Додано ${JSON.stringify(newBirthday)}`);
    } catch (e) {
      alert(e);
    }
  }
  
  /*-----*/
  document.getElementById("addBirthday").onclick = NewBirthday;
  Render();
  alert("Render birthday list")
  console.log("Render birthday list")