$(document).ready(function() {
    $('button').click(function() {
        let feed=$('input[type="text"]').val();
        if(!feed) {
            alert("Please input your text!")
        } else {
            $(`<p> ${feed} </p>`).insertAfter("#insert");
            $('input[type="text"]').val('');
        }
    });
});