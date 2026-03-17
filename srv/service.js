const cdsCompile = require("@sap/cds/lib/compile/cds-compile");
const { createUpdateEmp } = require("./handler/Applications/postinj");

module.exports=cds.service.impl(function(){
    this.on('empdetailpost',createUpdateEmp);
})