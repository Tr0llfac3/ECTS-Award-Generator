
// Gets the alt of an image when a particular template clicked
// Then changes preview class to the alt
document.querySelectorAll('.template').forEach((e, i) => {
    e.addEventListener('click', function(e) {
        const background = this.alt;
        // console.log('alt = ' + background);
        document.getElementById('PreviewContainer').className = background;
        document.getElementById('PreviewContainer').classList.add('preview');
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
    var csv = document.getElementById("fileInput").files[0];
    
    
if (csv) {
    var reader = new FileReader();
    reader.readAsText(csv, "UTF-8"); 
    reader.onload = function (evt) {
        console.log(evt.target.result);
        let array = evt.target.result.split('\n');
        let cloneSource = document.getElementsByClassName("preview")[0];
        array.shift();
        array.forEach((element, i) => {
            let newPreview = cloneSource.cloneNode(true);
            let data = element.split(",");
            console.log(array, data);
            console.log(newPreview);
            if(data[0] == ['']) return; // Buffer for if there is an empty line in CSV file
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

const imageInput = document.querySelector('#imageInput');
var uploadedImage = "";
imageInput.addEventListener('change', function(){
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploadedImage = reader.result;
        document.querySelector('#intructerSig').style.backgroundImage = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);
})

document.getElementById('ImportSig').addEventListener('click', function(){
    imageInput.click();
})