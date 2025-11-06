namespace INC;

@cds.persistence.exists
@cds.persistence.calcview
entity CV_TEST {
  EMP_ID       : String(10);
  FIRS_TNAME   : String(50);
  LAST_NAME    : String(50);
  SALARY      : Decimal(15,2);
  DEPARTMENT  : String(50);
}
