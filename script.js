
// Gets the alt of an image when a particular template clicked
// Then changes preview class to the alt
document.querySelectorAll('.template').forEach((e, i) => {
    e.addEventListener('click', function(e) {
        const background = this.alt;
        // console.log('alt = ' + background);
        document.getElementById('PreviewContainer').className = background;
        console.log(background + ' has just been selected');
    })
});

// The following is hard Coded
// We want to now make it to open up a file explorer
// fetch('test.csv')
//     .then(response => response.text())
//     .then(mycsv => {
//         console.log(mycsv);
//         let data = mycsv.split(",");
//         console.log(data);
//         document.getElementById("Award").innerHTML = data[0];
//         document.getElementById("quarter").innerHTML = 'Quarter ' + data[1];
//         document.getElementById("year").innerHTML = data[2];
//         document.getElementById("Name").innerHTML = data[3];
//         document.getElementById("Class").innerHTML = data[4];
//     });

// Brings User to the How to Use Page
function instructions(){
    alert('HTU btn Clicked');
}

// Used to import a CSV File
function importCSV(){
    //alert('Import Btn CLicked');
    document.getElementById("fileInput").click()
}

document.querySelector('#fileInput').addEventListener('change', function(e) {
    var file = document.getElementById("fileInput").files[0];
    
if (file) {
    var reader = new FileReader();
    reader.readAsText(file, "UTF-8"); 
    reader.onload = function (evt) {
        console.log(evt.target.result);
        let array = evt.target.result.split('\r\n');
        let cloneSource = document.getElementsByClassName("preview")[0];
        array.forEach(element => {
            let newPreview = cloneSource.cloneNode(true);
            let data = element.split(",");
            console.log(array, data);
            console.log(newPreview);
            newPreview.querySelector("#Award").innerHTML = data[0];
            newPreview.querySelector("#quarter").innerHTML = 'Quarter ' + data[1];
            newPreview.querySelector("#year").innerHTML = data[2];
            newPreview.querySelector("#Name").innerHTML = data[3];
            newPreview.querySelector("#Class").innerHTML = data[4];
            document.getElementById("OutputWindow").append(newPreview);
        });
        
        
        
    }
    reader.onerror = function (evt) {
        console.log("error reading file");
    }
}
});

// Used to export the Award
function exportAward(){
    print();
}

function fontDropdown(){
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('#fontChange')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// document.querySelectorAll('.font').forEach(e => {
//     e.target.addEventListener(function(e) {
//         console.log(this,dataset.id);
//     });
// });


function fontChange(elem){
    document.body.style.fontFamily = elem.dataset.fontStack;
}