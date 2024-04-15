import { LinnworksApplication } from "@linnworks/application";

LinnworksApplication.init()
  .then(response => {
    console.log(response.session);
    console.log(response.initialData);

    let div = document.createElement("div");

    for (let prop in response.session) {
      let p = document.createElement("p");
      let value = (response.session as any)[prop];
      p.textContent = `${prop}: ${value}`;

      div.appendChild(p);
    }

    document.body.appendChild(div);
  })
  .catch(() => {
    alert(`Not connected to linnworks`);
  });
