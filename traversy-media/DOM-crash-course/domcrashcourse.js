var box = document.getElementById('box');

box.addEventListener('mousemove', runEvent);


function runEvent (e) {
    console.log('EVENT TYPE: '+e.type);

    // box.style.backgroundColor = "rgb("+e.offsetX+"," +e.offsetY+",40)";
    document.body.style.backgroundColor = "rgb("+e.offsetX+"," +e.offsetY+",40)";

    output = '';
}
