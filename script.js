let i = 0;

function weatherInfo() {

  if (i < 4) {

    let cityName = document.getElementsByClassName("ctn");
    let city = `${cityName[i].innerHTML}`;

    fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`)
      .then((res) => {
        return res.json();
      }).then((data) => {

        let tblBody = document.getElementById("tbl-body");
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = city;
        let td1 = document.createElement("td");
        td1.innerHTML = data.description;
        let td2 = document.createElement("td");
        td2.innerHTML = data.temp_in_celsius;
        let td3 = document.createElement("td");
        td3.innerHTML = data.humidity_in_percent;
        let td4 = document.createElement("td");
        td4.innerHTML = data.date_and_time;
        let td5 = document.createElement("td");
        let delBtn = document.createElement("button");

        delBtn.innerText = "Delete";
        td5.appendChild(delBtn);
        delBtn.classList.add("del-btn");

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tblBody.appendChild(tr);

        delBtn.addEventListener("click", () => {
          remove(tr);
        });

        cityName[i - 1].classList.add("green-boder");
        let nodata = document.getElementById("no-data");
        nodata.classList.add("hideNoData");

      });

  } else {

    return;

  }

  i++;

}

function remove(e) {
  e.remove();
}

function highlight() {
  let input = document.getElementById("input").value;
  let tr = document.getElementsByTagName("tr");

  if (input === "London") {
    tr[1].classList.add("bg-yellow");

  } else if (input === "New York") {
    tr[2].classList.add("bg-yellow");

  } else if (input === "Los Angeles") {
    tr[3].classList.add("bg-yellow");

  } else if (input === "Las Vegas") {
    tr[4].classList.add("bg-yellow");
    
  } else {
    return;
  }
}