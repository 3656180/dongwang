document.writeln("<script src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.debug.js'> </script>")


$(document).ready(function(){



    $(function(){
        $('#download_pdf_button').on('click',  function() {

            html2canvas($("#result_div"), {
                onrendered: function(canvas) {
                    var imgData = canvas.toDataURL('image/png');
                    var doc = jsPDF('p','mm');
                    doc.addImage(imgData,'PNG',15, 40, 180, 180);
                    doc.save('test.pdf');
                }
            });

        });
    });

    //
    // $(function(){
    //
    //     html2canvas($("#result_div"), {
    //         onrendered: function(canvas) {
    //             var imgData = canvas.toDataURL('image/png');
    //             var doc = jsPDF('p','mm');
    //             doc.addImage(imgData,'PNG',15, 40, 180, 180);
    //             var pdf = doc.output('datauristring');
    //         }
    //     });
    //
    //
    // });
});