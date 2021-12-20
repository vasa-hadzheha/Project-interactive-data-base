async function LoadBirth() {
    let res = await fetch("http://localhost:3000/birthdays");
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  }
  async function LoadPublicHoliday() {
    let res = await fetch("http://localhost:3000/publicHolidays");
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  }
  async function LoadUnofficialHoliday() {
    let res = await fetch("http://localhost:3000/unofficialHolidays");
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  }