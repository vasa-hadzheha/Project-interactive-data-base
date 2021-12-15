async function Load() {
    let res = await fetch("http://localhost:3000/birthdays");
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  }
  
  async function Remove(id) {
    let res = await fetch(`http://localhost:3000/birthdays/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  }
  
  async function Add(birthday) {
    let res = await fetch("http://localhost:3000/birthdays", {
      method: "POST",
      body: JSON.stringify(birthday),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  }

  async function Change(id,birthday) {
    let res = await fetch(`http://localhost:3000/birthdays/${id}`, {
      method: "PATCH",
      body: JSON.stringify(birthday),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  }