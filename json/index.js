async function getUser() {
  const users = await fetch("https://api.npoint.io/6f7d68cb2f5d2c247c58").then(
    (res) => {
      if (res.ok) {
        return res.json();
      }
    }
  );
  console.log(users.users);


  const userul = document.querySelector(".users__list");

  users.users.forEach((user) => {
    const li = document.createElement("li");
    li.classList.add("userli");
    // li.textContent = `${user.age}`;
    const p = document.createElement("p");
    const h5 = document.createElement("h5");
    p.classList.add("p"); 
    h5.innerHTML = `${user.name}`;
    p.innerHTML = `${user.age}`;
    userul.append(li);
    li.append(h5);
    li.append(p);
  });
}

getUser();
