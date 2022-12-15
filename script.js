
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
