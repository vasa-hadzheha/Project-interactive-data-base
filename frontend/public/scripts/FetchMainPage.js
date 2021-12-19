async function LoadBirth() {
    let res = await fetch("http://localhost:3000/birthdays");
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  }