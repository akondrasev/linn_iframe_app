import { LinnworksApplication } from "@linnworks/application";

LinnworksApplication.init()
  .then(({session, initialData, fetch, close}) => {
    console.log(session);
    console.log(initialData);

    let div = document.createElement("div");

    for (let prop in session) {
      let p = document.createElement("p");
      let value = JSON.stringify((session as any)[prop]);
      p.textContent = `${prop}: ${value}`;

      div.appendChild(p);
    }

    document.body.appendChild(div);

    var url = `/api/permissions/getPermissionsMetadata`;

    fetch(url).then(response => {
      console.dir(response);
    });

    document.body.querySelector("#close-btn")?.addEventListener("click", () => {
      close()
    });
  })
  .catch((reason) => {
    alert(`Not connected to linnworks`);
  });
