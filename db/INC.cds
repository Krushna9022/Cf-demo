// npm install -g hana-cli
// hana-cli inspectView -v YOUR_CALCULATION_VIEWNAME-o cds
// cds deploy --to hana
// cds watch --profile hybrid

namespace INC;

context M{
    @cds.persistence.exists 
    @cds.persistence.calcview 
    entity EMPLOEEDETAILS {
    key     EMPID: Integer  @title: 'EMPID: EMPID' ; 
            EMPNM: String(100)  @title: 'EMPNM: EMPNM' ; 
            SALRY: String(200)  @title: 'SALRY: SALRY' ; 
    }
}

context T{
    @cds.persistence.exists 
    @cds.persistence.calcview 
    entity CLAIMINFO {
    key     CLMID: Integer  @title: 'CLMID: CLMID' ; 
            CLMTP: String(20)  @title: 'CLMTP: CLMTP' ; 
            SUBTY: String(20)  @title: 'SUBTY: SUBTY' ; 
            CLLID: Integer  @title: 'CLLID: CLLID' ; 
            CLMNM: String(100)  @title: 'CLMNM: CLMNM' ; 
            // ISDEL: String(1)  @title: 'ISDEL: ISDEL' ; 
    }

    @cds.persistence.exists 
    @cds.persistence.calcview 
    entity TOTALCLAIM {
            CLLID: Integer64  @title: 'CLLID: CLLID' ; 
            ISDEL: String(1)  @title: 'ISDEL: ISDEL' ; 
    }
}