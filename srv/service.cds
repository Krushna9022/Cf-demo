// using {EmployeeService} from './role/role';
using {INC} from '../db/INC';
using {GRV} from '../db/GRV';
service test{
 entity employeedetail as projection on INC.M.EMPLOEEDETAILS;
 entity claimntinfo as projection on INC.T.CLAIMINFO;
 entity claimntcount as projection on INC.T.TOTALCLAIM;
 @readonly view hhhhjhhj(XR5Fke : Integer, Icybc7 : Integer)
 as select from GRV.T.STEWARDEMPLY(XR5Fke : :XR5Fke,Icybc7 : :Icybc7){ * };


 action empdetailpost(D4OXYPALUYAIDNSO : String) returns String;

}

//  using INC  from '../db/INC';

// service EmployeeService {
//   @readonly
//   entity Employees as projection on INC.T.EMP;
//   action rlQ2Em7VGztsJeed(D4OXYPALUYAIDNSO : String) returns String;
// }