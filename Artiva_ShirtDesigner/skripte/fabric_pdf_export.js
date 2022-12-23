//import {objtRight, objtLeft} from "./main2.js";



pdf_canvas = new fabric.Canvas("canvas2");
pdf_canvas.backgroundColor = "#456332";
pdf_canvas.selection = false;

pdf_canvas.renderAll();

/* var obj;
function doStuff() {
    obj = pdf_canvas.getActiveObject();
    console.log(obj.left + "," + obj.top + "," + obj.scaleX);
}

setInterval(doStuff, 100);  
 */

//pdf_canvas.renderAll();







var ctx = new canvas2pdf.PdfContext(blobStream());

//draw your canvas like you would normally
ctx.fillStyle='yellow';
ctx.fillRect(100,100,100,100);
// more canvas drawing, etc...


//convert your PDF to a Blob and save to file
ctx.stream.on('finish', function () {
	var blob = ctx.stream.toBlob('application/pdf');
	saveAs(blob, 'example.pdf', true);
});
ctx.end();

