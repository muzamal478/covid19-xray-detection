let base64Image;

$("#image-selector").change(function () {
    let reader = new FileReader();
    reader.onload = function (e) {
        let dataURL = reader.result;
        $('#selected-image').attr("src", dataURL).show();
        base64Image = dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
        
    };
    reader.readAsDataURL($("#image-selector")[0].files[0]);
    $("#result").text("");
    $("#probability").text("");
});

$("#predict-button").click(function () {
    let message = {
        image: base64Image
    };
    $.post("http://127.0.0.1:5000/predict", JSON.stringify(message), function (response) {
        $("#result").text(response.prediction.result);
        $("#probability").text(response.prediction.accuracy.toFixed(5));
    });
});

