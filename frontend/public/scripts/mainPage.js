
  function BootTemplate(birthday) {
        return `<div style="background-color: #FFE000; width: 20px;height: 20px;float: left;margin-right: 15px; margin-bottom: 5px">
        </div>
        ${birthday.firstname} ${birthday.lastname} святкує ${birthday.age}-ліття <br>`
  }

  
  function RenderBirthdayList(list, parent) {
    parent.innerHTML = "";
    for (let birthday of list) {
        let birthdate = new Date(birthday.birthdate);
        let month = new Date();
        // console.log(birthdate.getMonth());
        // console.log(month.getMonth())
        // console.log(birthdate.getMonth()===month.getMonth());
        //console.log(`${birthdate.getDate()}-bitrthdate ===${month.getDate()}-month_now`);
        // console.log(month.getDay())
        // console.log(birthdate.getDay()===month.getDay())
        //console.log(`${birthday.id}----${birthdate.getMonth()}===${month.getMonth()} && ${birthdate.getDay()}===${month.getDay()}`)
        if(birthdate.getMonth()===month.getMonth() && birthdate.getDate()===month.getDate()){
            let tr = document.createElement("tr");
          tr.innerHTML = BootTemplate(birthday);
          parent.appendChild(tr);
        }

    }
  }

  function publicBoot(publicHoliday) {
    return `<div style="background-color: rgb(212, 8, 8); width: 20px;height: 20px;float: left;margin-right: 15px;">
    </div>
    Свято - ${publicHoliday.holiday}<br>`
  }

  function RenderPublicHolidayList(list, parent) {
    parent.innerHTML = "";
    for (let publicHoliday of list) {
        let publicHolidaydate = new Date(publicHoliday.date);
        let month = new Date();
        // console.log(publicHolidaydate.getMonth());
        // console.log(month.getMonth())
        // console.log(publicHolidaydate.getMonth()===month.getMonth());
        //console.log(`${publicHolidaydate.getDate()}-publicHolidaydate ===${month.getDate()}-month_now`);
        // console.log(month.getDay())
        // console.log(publicHolidaydate.getDay()===month.getDay())
        //console.log(`${publicHolidaydate.id}----${publicHolidaydate.getMonth()}===${month.getMonth()} && ${publicHolidaydate.getDay()}===${month.getDay()}`)
        if(publicHolidaydate.getMonth()===month.getMonth() && publicHolidaydate.getDate()===month.getDate()){
            let tr = document.createElement("tr");
          tr.innerHTML = publicBoot(publicHoliday);
          parent.appendChild(tr);
        }

    }
  }

  function RenderDateToday(parent) {
    parent.innerHTML = "";
    const date = new Date();
    return parent.innerHTML=`Сьогодні ${date.getDate()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()} святкують`
  }
  
  async function Render() {
    try {
      let birthdays = await LoadBirth();
      let publicHoliday = await LoadPublicHoliday();
      RenderBirthdayList(birthdays, document.getElementById("today_birthdays"));
      RenderPublicHolidayList(publicHoliday, document.getElementById("today_publicHolidays"))
      RenderDateToday(document.getElementById("date"));
    } catch (e) {
      alert(e);
    }
  }
  Render();
  alert("Render birthday list")
  console.log("Render birthday list")