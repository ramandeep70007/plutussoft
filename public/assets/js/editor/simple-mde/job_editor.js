

// note editor
var note = [
    "Type Job Description",
]



var simplemde = new SimpleMDE({element: $("#note")[0], toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list", "|", "link", "image", "|", "guide"]});


$(document).ready(function() {

    writeSample();

    simplemde.codemirror.on("change", function(){
        $("#note").val(simplemde.value());
        var renderedHTML = simplemde.options.previewRender(simplemde.value());
        $("#write_here").html(renderedHTML);
        $("#write_here").css("height", $(".row").height() +  "px" );
    });




});

function writeSample() {
    var s = "";
    s = getSample();
    simplemde.value(s);

}

function getSample() {
    var s = "";
    $.each(note, function( index, value ) {
        //alert( index + ": " + value );
        s = s + value + "\n\r";
    });
    return s;
}

