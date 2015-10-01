/*jslint browser: true*/
/*global  $, jQuery, alert, cordova*/
$("#scan").click(function () {
    "use strict";
    cordova.plugins.barcodeScanner.scan(
        function (result) {
//            alert("We got a barcode\n" +
//                    "Result: " + result.text + "\n" +
//                    "Format: " + result.format + "\n" +
//                    "Cancelled: " + result.cancelled);
            $("#result").val(result.text);
        },
        function (error) {
//            alert("Scanning failed: " + error);
            $("#result").val(error);
        }
    );
});
