

var obj = [{ entry: 'Fname', type: 'text' }, { entry: 'Lname', type: 'text' },
{ entry: 'Email', type: 'email' }, { entry: 'Number', type: 'number' }, { entry: 'Gender', type: 'radio' },
{ entry: 'FatherName', type: 'text' }, { entry: 'SMID', type: 'number' }, { entry: 'PanCard', type: 'text' },
{ entry: 'Date', type: 'date' }, { entry: 'AdharCard', type: 'text' }, { entry: 'NomineeName', type: 'text' },
{ entry: 'NomineeAge', type: 'number' }, { entry: 'NomineeAccNo', type: 'text' }, { entry: 'NomineeIFSC', typr: 'text' },
{ entry: 'Relation', type: 'text' }, { entry: 'HouseNo', type: 'number' }, { entry: 'Address', type: 'text' },
{ entry: 'State', type: 'select' }, { entry: 'City', type: 'text' }, { entry: 'Landmark', type: 'text' }
]

var data = ['basicdetail', 'personaldetail', 'nomineedetail', 'addressdetail']


jQuery.validator.addMethod("firstNameRegex", function (value, element) {
  return this.optional(element) || /^[a-zA-Z ]*$/i.test(value)
}, "Please Enter Valid Name...");


jQuery.validator.addMethod("laxEmail", function (value, element) {
  // allow any non-whitespace characters as the host part
  return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test(value);
}, 'Please enter a valid email address.');

jQuery.validator.addMethod("regaxNumber", function (value, element) {
  return this.optional(element) || /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(value);
}, 'Please enter a valid number.');

$.validator.addMethod("aadharRegex", function (value, element) {
  return this.optional(element) || /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/i.test(value)
}, "Please Enter Valid Adhar Number...");

$.validator.addMethod("panRegex", function (value, element) {
  return this.optional(element) || /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/i.test(value)
}, "Please Enter Valid Pan Number...");

$.validator.addMethod("ifscRegex", function (value, element) {
  return this.optional(element) || /[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/i.test(value)
}, "Please Enter Valid IFSC Code...");

$.validator.addMethod("ageRegex", function (value, element) {
  return this.optional(element) || /^\S[0-9]{0,3}$/i.test(value)
}, "Please Enter Valid age ...");

$.validator.addMethod("accNoRegex", function (value, element) {
  return this.optional(element) || /^[0-9]{9,18}$/i.test(value)
}, "Please Enter Valid Account number ...");

var valid = $("#multi-step-form").validate({
  rules: {
    fname: {
      required: true,
      minlength: 3,
      firstNameRegex: true,

    },
    lname: {
      required: true,
      minlength: 3,
      firstNameRegex: true,

    },
    email: {
      required: true,
      minlength: 3,
      laxEmail: true,

    },
    number: {
      required: true,
      minlength: 10,
      maxlength: 10,
      regaxNumber: true,

    },
    gender: {
      required: true,
    },
    fathername: {
      required: true,
      minlength: 2,
      firstNameRegex: true
    },
    smdId: {
      required: true,
      minlength: 8,
      maxlength: 8,
    },
    pan: {
      required: true,
      panRegex: true
    },
    date: {
      required: true,
    },
    adhar: {
      required: true,
      aadharRegex: true
    },
    nName: {
      required: true,
      minlength: 2,
      firstNameRegex: true
    },
    age: {
      required: true,
      ageRegex: true
    },
    relation: {
      required: true,
      firstNameRegex: true
    },
    accNo: {
      required: true,
      accNoRegex: true
    },
    ifsc: {
      required: true,
      ifscRegex: true
    },
    hno: {
      required: true,
    },
    address: {
      required: true,
    },
    browser: {
      required: true,
    },
    city: {
      required: true,
    },
    landmark: {
      required: true,
    },
    hno1: {
      required: true,
    },
    address1: {
      required: true,
    },
    browser1: {
      required: true,
    },
    city1: {
      required: true,
    },
    landmark1: {
      required: true,
    },

  },
});





window.addEventListener("load", () => {
  debugger;
  const form1 = document.getElementById("multi-step-form");
  const formcontainerbox = document.getElementById("form-container-box");
  const step2 = document.getElementById("step2");
  const step3 = document.getElementById("step3");
  const step4 = document.getElementById("step4");
  const step5 = document.getElementById("step5");

  const stepgroup1 = document.getElementById("step-group-1")
  const stepgroup2 = document.getElementById("step-group-2")
  const stepgroup3 = document.getElementById("step-group-3")
  const stepgroup4 = document.getElementById("step-group-4")
  const stepgroup5 = document.getElementById("step-group-5")

  const stepnext1 = document.getElementById("step-next-1")
  const stepnext2 = document.getElementById("step-next-2")
  const stepnext3 = document.getElementById("step-next-3")
  const stepnext4 = document.getElementById("step-next-4")

  const stepprev1 = document.getElementById("step-prev-1")
  const stepprev2 = document.getElementById("step-prev-2")
  const stepprev3 = document.getElementById("step-prev-3")
  const stepprev4 = document.getElementById("step-prev-4")

  const sucessbox = document.getElementById("sucess-box")
  const steppreview = document.getElementById("step-preview-1")
  const stepsubmit = document.getElementById("step-submit-1")
  const stepsubmit1 = document.getElementById("step-submit-2")
  const resetButton = document.getElementById("reset-btn")
  const prevbox = document.getElementById("preview-page")

  form1.addEventListener("submit", (e) => {
    e.preventDefault()

  })

  stepnext1.addEventListener("click", function next1() {
    if (valid.form()) {
      stepgroup1.style.display = "none";
      stepgroup2.style.display = "block";
      step2.classList.add("active")
    }
  })


  stepnext2.addEventListener("click", function next2() {
    if (valid.form()) {
      stepgroup2.style.display = "none";
      stepgroup3.style.display = "block";
      step3.classList.add("active")
    }

  })

  stepnext3.addEventListener("click", () => {
    if (valid.form()) {
      stepgroup3.style.display = "none";
      stepgroup4.style.display = "block";
      step4.classList.add("active")
    }

  })
  stepnext4.addEventListener("click", () => {
    if (valid.form()) {
      stepgroup4.style.display = "none";
      stepgroup5.style.display = "block";
      step5.classList.add("active")
    }

  })

  stepprev1.addEventListener("click", () => {
    stepgroup1.style.display = "block";
    stepgroup2.style.display = "none";
    step2.classList.remove("active");
  })

  stepprev2.addEventListener("click", () => {
    stepgroup2.style.display = "block";
    stepgroup3.style.display = "none";
    step3.classList.remove("active");
  })

  stepprev3.addEventListener("click", () => {
    stepgroup3.style.display = "block";
    stepgroup4.style.display = "none";
    step4.classList.remove("active");
  })

  stepprev4.addEventListener("click", () => {
    stepgroup4.style.display = "block";
    stepgroup5.style.display = "none";
    step5.classList.remove("active");
  })

  $('#back').click(function () {
    $("#preview-box").attr('style', 'display:none');
    formcontainerbox.style.display = "block";
    stepgroup5.style.display = "block";
    step5.classList.add("active")
  })

  stepsubmit.addEventListener("click", () => {
    if (valid.form()) {
      formcontainerbox.style.display = "none";
      sucessbox.style.display = "flex";
    }
  })
  stepsubmit1.addEventListener("click", () => {
    if (valid.form()) {
      $("#preview-box").attr('style', 'display:none');
      sucessbox.style.display = "flex";
    }
  })

  steppreview.addEventListener("click", () => {
    saveData();
    getCookie($(this).attr("name"));
    stepgroup5.style.display = "none";
    $("#preview-box").attr('style', 'display:inline');

  })

  resetButton.addEventListener("click", () => {
    sucessbox.style.display = "none";
    formcontainerbox.style.display = "none";
    window.location.reload();
  })

})

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {


  let tableData = "<table border='1' width='100%'>";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let data = ca[i].split("=");
    tableData += "<tr class='table table-border'><td>" + data[0] + "</td><td>" + data[1] + "</td></tr>";
  }
  tableData += "</table>"
  $("#preview-page").attr('style', 'display:flex');
  $("#form-container-box").attr('style', 'display:none');
  document.getElementById("preview-page").innerHTML = tableData;
}




function saveData() {
  const form = document.getElementById('multi-step-form');
  const forData = new FormData(form)
  const data = [...forData.entries()]
  $('.form-field').each(function () {
    if ($(this).attr('name') == "" || $(this).val() == "") {
      alert("Please enter all fields");
      return false;
    }
    else {
      setCookie($(this).attr('name'), $(this).val(), 30)

    }

  });

}

function next1(e) {

  e.preventDefault();

}


console.log(data)
async function logJSONData() {
  const response = await fetch("./state.json");
  const jsonData = await response.json();
  showInfo(jsonData)
  console.log(jsonData);
}
// fetch("")
//   .then(response => response.json())
//   .then(data => showInfo(data));
function showInfo(data) {
  for (let i = 0; i < data.states.length; i++) {
    document.getElementById('op').innerHTML += "<option>" + JSON.parse(JSON.stringify(data.states[i].state))+ "</option>";
    document.getElementById('op1').innerHTML += "<option>" +JSON.parse(JSON.stringify(data.states[i].state)) + "</option>";
    let city=data.states[i].districts.length;
    for(let j=0;j<city;j++){
      document.getElementById('ci').innerHTML += "<option>" + JSON.parse(JSON.stringify(data.states[i].districts[j])) + "</option>";
      document.getElementById('ci1').innerHTML += "<option>" + JSON.parse(JSON.stringify(data.states[i].districts[j])) + "</option>";
    }
  }


}
    logJSONData();
