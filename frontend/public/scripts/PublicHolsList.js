function BootTemplate(publicHoliday) {
    let k = new Date(publicHoliday.date);
    console.log(publicHoliday.date)
    let date = `${k.getDate()}-${("0" + (k.getMonth() + 1)).slice(-2)}-${k.getFullYear()}`;
    return `    <td> ${publicHoliday.id} </td>
                <td> ${publicHoliday.holiday} </td>
                <td> ${date}</td>`;
  }
  
  function RenderBirthdayList(list, parent) {
    parent.innerHTML = "";
  
    const headerArr = ["ID","Public Holiday","Date"];
    let thead = document.createElement("thead");
    let tr = document.createElement("tr");
    for (let i = 0; i < headerArr.length; i++) {
        let th = document.createElement("th");
        th.innerHTML = headerArr[i];
        tr.appendChild(th);
        thead.appendChild(tr);      
    }
      parent.appendChild(thead);
    for (let publicHoliday of list) {
      //let tbody = document.createElement("tbody");
      let tr = document.createElement("tr");
      tr.innerHTML = BootTemplate(publicHoliday);
      //tbody.appendChild(tr);
      parent.appendChild(tr);
    }
  }
  
  async function Render() {
    try {
      let publicHolidays = await Load();
      RenderBirthdayList(publicHolidays, document.getElementById("PublicHolidays"));
    } catch (e) {
      alert(e);
    }
  }
  
  
  /*-----*/
  Render();
  alert("Render PublicHolidays list")
  console.log("Render PublicHolidays list")