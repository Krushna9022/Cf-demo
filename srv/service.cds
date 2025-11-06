using { INC as db } from '../db/INC';

service EmployeeService {
  @readonly
  entity Employees as projection on db.CV_TEST;
}
