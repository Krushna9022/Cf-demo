namespace GRV;

    context T{
    @cds.persistence.exists 
    @cds.persistence.calcview 
    entity STEWARDEMPLY (XR5Fke : Integer, Icybc7 : Integer){
    key     CLLID: Integer  @title: 'CLLID: CLLID' ; 
            CLMID: Integer  @title: 'CLMID: CLMID' ; 
            CLMNM: String(100)  @title: 'CLMNM: CLMNM' ; 
    }

}