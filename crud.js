let record = [];
const viewRecord = () => {
  document.getElementById("add").style.display = "block";
  document.getElementById("edit").style.display = "none";
  let tbl = "";
  record.map((val, index) => {
    tbl += `
                          <tr>
                              <td>${val.userid}</td>
                              <td>${val.name}</td>
                              <td>${val.phone}</td>
                              <td>
                                  <button onclick="deleteRecord(${val.userid})">Delete</button>
                                  <button onclick="editRecord(${val.userid})">Edit</button>
                              </td>

                          </tr>
                      `;
  });
  document.getElementById("users").innerHTML = tbl;
};
viewRecord();

const saveRecord = () => {
  let username = document.getElementById("name").value;
  let userphone = document.getElementById("phone").value;

  if (!username || !userphone) {
    alert("all field is required");
    return false;
  }

  let obj = {
    userid: Math.floor(Math.random() * 10000),
    name: username,
    phone: userphone,
  };
  record.push(obj);
  alert("record submit");
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  viewRecord();
};

const deleteRecord = (id) => {
  let deletedata = record.filter((item) => item.userid != id);
  record = deletedata;
  alert("record delete");
  viewRecord();
};

const editRecord = (id) => {
  document.getElementById("add").style.display = "none";
  document.getElementById("edit").style.display = "block";
  let single = record.find((val) => val.userid == id);
  document.getElementById("name").value = single.name;
  document.getElementById("phone").value = single.phone;
  document.getElementById("editid").value = id

};

const updateRecord = () => {
    let editid = document.getElementById('editid').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    let up = record.map((val)=>{
        if(val.userid == editid){
          val.name = name;
          val.phone = phone
        }
        return val;
    })
    record=up;
    alert("record update");
    document.getElementById('editid').value = ""
    document.getElementById('name').value = ""
    document.getElementById('phone').value = ""
    viewRecord();

}


