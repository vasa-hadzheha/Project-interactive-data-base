function BootTemplate(unofficialHoliday) {
    let k = new Date(unofficialHoliday.date);
    console.log(unofficialHoliday.date)
    let date = `${k.getDate()}-${("0" + (k.getMonth() + 1)).slice(-2)}-${k.getFullYear()}`;
    return `    <td> ${unofficialHoliday.id} </td>
                <td> ${unofficialHoliday.holiday} </td>
                <td> ${date}</td>`;
  }
  
  function RenderBirthdayList(list, parent) {
    parent.innerHTML = "";
  
    const headerArr = ["ID","Unofficial Holiday","Date"];
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    for (let i = 0; i < headerArr.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = headerArr[i];
        tr.appendChild(th);
        thead.appendChild(tr);      
    }
      parent.appendChild(thead);
    for (let unofficialHoliday of list) {
      //let tbody = document.createElement("tbody");
      let tr = document.createElement("tr");
      tr.innerHTML = BootTemplate(unofficialHoliday);
      //tbody.appendChild(tr);
      parent.appendChild(tr);
    }
  }
  
  async function Render() {
    try {
      let unofficialHolidays = await Load();
      RenderBirthdayList(unofficialHolidays, document.getElementById("UnofficialHolidays"));
    } catch (e) {
      alert(e);
    }
  }
  
  
  /*-----*/
  Render();
//   alert("Render unofficialHolidays list")
  console.log("Render unofficialHolidays list")