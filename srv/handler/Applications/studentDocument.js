const cds = require('@sap/cds');
const log = cds.log("cds");
// const { addMetadata } = require('../../utils/metadata');

function setValue(value) {
    if (value !== undefined && value !== null && value !== '') {
        return value;
    } else {
        return null;
    }
}

async function createUpdateStudent(req) {
    // const { sessionUser, currentDate, currentTime } = addMetadata(req);
    try {
        let result;
        tx = cds.tx(req);
        payload = req.data;
        oSTD = JSON.parse(payload.D4OXYPALUYAIDNSO);
        console.log(oSTD);

        // oInput = await decryptAES(payload.D4OXYPALUYAIDNSO, cds.transaction(req));

        // let oNotes = oInput.NotesPayload;

        // Checking mandatory fields
        // await checkMandatoryFields(oNotes, ['NOTID']);

        // Procedure for Reopening the case
        for (let i = 0; i < oSTD.length; i++) {
            result = await tx.run('CALL "prCreateUpdateStudent"(?,?,?)',
                setValue(oSTD[i].STDID),
                setValue(oSTD[i].NAME),
            );
            OEMLID = result.OSID;
            console.log(OEMLID);


            let doc = oSTD[i].docs;
            // console.log("docs inside is "+doc[0]);
            // console.log("docs inside is "+doc[0].DOCMN);
            

            for (let j = 0; j < doc.length; j++) {
                console.log("i executed..");
                
                result = await tx.run('CALL "prCreateUpdateDocument"(?,?,?,?)',
                    setValue(doc[j].DOCID),
                    setValue(OEMLID),
                    setValue(doc[j].DOCMN),
                    setValue(doc[j].DFILE)
                )

            }
            console.log("No of document :-"+doc.length);


        }




        // Creating Event Summary
        // await createSummary(tx, oNotes.CLMID, 'Case', 'Reopen', '', 331);

        // Creating Audit log
        // await createAuditLog(tx, oNotes.CLMID, oNotes.CLMID, 'Case Id', 'reopenCase', constants.VIEW_NAME, JSON.stringify(oInput));

        // success
        returnObj = {
            "Success": "student Saved Successfully.",
            "OEMLID": OEMLID
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
        console.log(error);
        throw error;

    }
}


module.exports = {
    createUpdateStudent
};

