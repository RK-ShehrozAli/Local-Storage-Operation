let data = [
  { id: 1, mobile: "Iphone 15", ram: "6gb", storage: "1TB", price: "500,000" },
  {
    id: 2,
    mobile: "Samsung 24",
    ram: "12gb",
    storage: "1TB",
    price: "350,000",
  },
];
function readAll() {
  sessionStorage.setItem("object", JSON.stringify(data));
  var table_data = document.querySelector(".data_table");
  var object = sessionStorage.getItem("object");
  var objectdata = JSON.parse(object);
  var elements = "";
  objectdata.map(
    (record) =>
      (elements += `<tr>
        
              <td>${record.mobile}</td>
              <td>${record.ram}</td>
              <td>${record.storage}</td>
              <td>${record.price}</td>
              <td class="table">
              <button class="edit" onclick="{edit(${record.id})}">Edit</button>
              <button class="delete" onclick="{delet(${record.id})}">Delete</button>
              </td>
              </tr>`)
  );
  table_data.innerHTML = elements;
}

function add() {
  document.querySelector(".create_form").style.display = "block";
  document.querySelector(".add_container").style.display = "none";
}
function create() {
  var mob = document.querySelector(".mobile").value;
  var ra = document.querySelector(".ram").value;
  var stor = document.querySelector(".storage").value;
  var pri = document.querySelector(".price").value;
  var newobj = { id: 3, mobile: mob, ram: ra, storage: stor, price: pri };
  data.push(newobj);
  document.querySelector(".create_form").style.display = "none";
  document.querySelector(".add_container").style.display = "block";
  readAll();
}
function edit(id) {
  document.querySelector(".update_form").style.display = "block";
  var obj = data.find((rec) => rec.id === id);
  document.querySelector(".id").value = obj.id;
  document.querySelector(".umobile").value = obj.mobile;
  document.querySelector(".uram").value = obj.ram;
  document.querySelector(".ustorage").value = obj.storage;
  document.querySelector(".uprice").value = obj.price;
}
function update() {
  var id = parseInt(document.querySelector(".id").value);
  var mobile = document.querySelector(".umobile").value;
  var ram = document.querySelector(".uram").value;
  var storage = document.querySelector(".ustorage").value;
  var price = document.querySelector(".uprice").value;
  var index = data.findIndex((rec) => rec.id === id);
  data[index] = { id, mobile, ram, storage, price };
  document.querySelector(".update_form").style.display = "none";
  readAll();
}
function delet(id) {
  data = data.filter((rec) => rec.id !== id);
  readAll();
}
