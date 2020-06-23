import { arabicToRoman } from "./roman-numerals";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userNumber = $("#user-number").val();

    $("#roman-numeral").text(arabicToRoman(userNumber));
  });
});