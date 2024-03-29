import "regenerator-runtime";
import "./css/materialize.min.css";
import "./css/materialize.css";
import "./css/style.css";
import "../src/js/materialize.js";
import DataSourceApi from './js/data/data-source-api';
import DataSourceDb from './js/data/db';
import swal from 'sweetalert';

document.addEventListener('DOMContentLoaded', function() {
    DataSourceApi.getDetailTeam();
})

//Set Footer Text
let objectDate = new Date();
let yearNow = objectDate.getFullYear();
const elementFooterText = document.getElementById("footer-text");
elementFooterText.innerHTML = `&copy; ${yearNow} Belajar Progressive Web Apps`;

document.addEventListener('DOMContentLoaded', function() {
    let btnSaveDetail = document.getElementById('save-detail-team');

    let team = DataSourceApi.getDetailTeam();

    btnSaveDetail.onclick = function() {
        team.then(function(team) {
            DataSourceDb.saveForLater(team);
        })
    }
})