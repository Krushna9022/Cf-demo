const cds = require('@sap/cds');
 
const {createUpdateEmp} = require('../handler/Applications/postinj');
const { createUpdateStudent } = require('../handler/Applications/studentDocument');

 
module.exports = cds.service.impl(function () {
 
 this.on("rlQ2Em7VGztsJeed", createUpdateEmp);
})

module.exports=cds.service.impl(function (){
    this.on("pMYJwhvPSLqeMbKk",createUpdateStudent)
})