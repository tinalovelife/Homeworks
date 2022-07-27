// Table Data
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
// Table
let thead = document.getElementById("thead");
let theadrow = document.createElement("tr");
const thArray = tableInfo.tableHeader.map((data) => {
  let th = document.createElement("th");
  th.textContent = data;
  return th;
});
theadrow.append(...thArray);
thead.appendChild(theadrow);

let tbody = document.getElementById("tbody");
tableInfo.tableContent.map((data) => {
  let tbodyrow = document.createElement("tr");
  Object.values(data).map((ele) => {
    let td = document.createElement("td");
    td.textContent = ele;
    tbodyrow.appendChild(td);
  });
  tbody.appendChild(tbodyrow);
});

//Lists
const techList = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let ul = document.getElementById("ul");
const orderList = techList.map((ele) => {
  let item = document.createElement("li");
  item.textContent = ele;
  return item;
});
ul.append(...orderList);

let ol = document.querySelector(".ol");
const unorderList = techList.map((ele) => {
  let item = document.createElement("li");
  item.textContent = ele;
  return item;
});
ol.append(...unorderList);

//dropdown list
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let select = document.getElementById("select");
const optionArray = dropDownList.map((data) => {
  let option = document.createElement("option");
  option.value = data.value;
  option.textContent = data.content;
  return option;
});
select.append(...optionArray);
