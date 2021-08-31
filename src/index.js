import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from "./Entry.js"

$(document).ready(function() {
  $('#form-1').submit(function(event) {
    event.preventDefault();
    const inputTitle = $("#title").val().trim();
    const inputBody = $("#body").val().trim();
    const entry = new Entry(inputTitle, inputBody);
    let totalWords = entry.numWords();
    $("#title-display").text(inputTitle);
    $("#body-display").text(inputBody);
    $("#num-words-display").text(totalWords);
  });
});