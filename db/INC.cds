namespace INC;


context T {
        @cds.persistence.exists
        @cds.persistence.calcview
        entity EMP {
                key EMP_ID     : Integer     @title: 'EMP_ID: EMP_ID';
                    FIRST_NAME : String(50)  @title: 'FIRST_NAME: FIRST_NAME';
                    LAST_NAME  : String(50)  @title: 'LAST_NAME: LAST_NAME';
                    DEPARTMENT : String(50)  @title: 'DEPARTMENT: DEPARTMENT';
                    SALARY     : Decimal(10) @title: 'SALARY: SALARY';
        }

        @cds.persistence.exists
        @cds.persistence.calcview
        entity STDDOC {
                key DOCID : Integer64   @title: 'DOCID: DOCID';
                    STDID : Integer64   @title: 'STDID: STDID';
                    DOCMN : String(255) @title: 'DOCMN: DOCMN';
                    DFILE : String(255) @title: 'DFILE: DFILE';
                    NAME  : String(100) @title: 'NAME: NAME';
        }

        @cds.persistence.exists
        @cds.persistence.calcview
        @cds.odata.resultset
        entity STDVIEW(IP_1 : Integer64) {
                key STDID : Integer64   @title: 'STDID: STDID';
                    NAME  : String(100) @title: 'NAME: NAME';
        }

}
