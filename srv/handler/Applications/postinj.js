// // const { setValue } = require('../srv/utils/common');
// // const cds = require('@sap/cds');
// // const metadata = require('../utils/metadata');
// // const { createError } = require('../handlers/createErrorLogHandler');
// const cds = require('@sap/cds');
// const log = cds.log("cds");
// // const { addMetadata } = require('../../utils/metadata');
 
// function setValue(value){
//     if(value !== undefined && value !== null && value !== ''){
//         return value;
//     }else{
//         return null;
//     }
// }
 

// async function createUpdateEmp(req) {
//     // const { sessionUser, currentDate, currentTime } = addMetadata(req);
//     // try {
//     //       let result ;
//     //       let payload = req.data;
//     //       console.log('Incoming Payload:', payload);
//     //       let oInput;
//     //       oInput = JSON.parse(payload.D4OXYPALUYAIDNSO);
//     //       let oEmp = oInput.Emp;
//     //       console.log('Extracted Union Object:', oCase);
       
//     //       tx = cds.transaction(req);
   
//     //           result = await tx.run('CALL "prCreateUp"(?,?,?,?,?)',
//     //                   setValue(oEmp.EMPID),
//     //                   setValue(oEmp.EMPNM),
//     //                   setValue(oEmp.EMPLN),
//     //                   setValue(oEmp.DEPT),
//     //                   setValue(oCase.SALRY)
                      
//     //                );
 
//     //           console.log('Stored Procedure Result:', result);
             
//     //       await tx.commit();
   
//     //   } catch (error) {
 
//     //       if (tx) {
//     //           await tx.rollback();
//     //       }
//     //       return req.error({
//     //           code: 500,
//     //           message: error.toString()
//     //       });
//     //   }
// }
 
 
// module.exports = {
//      createUpdateEmp
//     };




const cds = require('@sap/cds');
const log = cds.log("cds");
// const { addMetadata } = require('../../utils/metadata');
 
function setValue(value){
    if(value !== undefined && value !== null && value !== ''){
        return value;
    }else{
        return null;
    }
}
 
async function createUpdateEmp(req) {
    // const { sessionUser, currentDate, currentTime } = addMetadata(req);
    try {
        let result, oEMLID;
        tx = cds.tx(req);
        payload = req.data;
        oEMP = JSON.parse(payload.D4OXYPALUYAIDNSO);
        console.log(oEMP);
        
        // oInput = await decryptAES(payload.D4OXYPALUYAIDNSO, cds.transaction(req));
 
        // let oNotes = oInput.NotesPayload;
 
        // Checking mandatory fields
        // await checkMandatoryFields(oNotes, ['NOTID']);
 
        // Procedure for Reopening the case
result = await tx.run('CALL "prCreateUp"(?,?,?,?,?,?)',
                      setValue(oEMP.EMPID),
                      setValue(oEMP.EMPNM),
                      setValue(oEMP.EMPLN),
                      setValue(oEMP.DEPT),
                      setValue(oEMP.SALRY)
                      
                   );
        OEMLID = result.EID;
       
 
 
 
        // Creating Event Summary
        // await createSummary(tx, oNotes.CLMID, 'Case', 'Reopen', '', 331);
 
        // Creating Audit log
        // await createAuditLog(tx, oNotes.CLMID, oNotes.CLMID, 'Case Id', 'reopenCase', constants.VIEW_NAME, JSON.stringify(oInput));
 
        // success
        returnObj = {
            "Success": "Employee Saved Successfully.",
            "OEMLID" : OEMLID
        };
 
        // await tx.commit();
        return JSON.stringify(returnObj);
 
    } catch (error) {
        // try {
        //     tx1 = cds.transaction(req);
        //     // await createErrorLog(tx1, constants.APP_NAME_PORTAL, 'reopenCase', JSON.stringify(oInput), error.toString());
        //     console.log(result);
        //     await tx1.commit();
        // } catch (logError) {
        //     console.error('Error logging failed:', logError);
        // }
        // if (tx) {
        //     await tx.rollback();
        // }
        // if (error.name === 'Error') {
        //     return req.error(400, error.message);
        // } else {
        //     return req.error(500, 'An internal server error occurred. Please contact the system administrator.');
        // }
        throw error;
 
    }
}
 
 
module.exports = {
     createUpdateEmp
    };
 
 