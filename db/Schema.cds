namespace my.app;
using { cuid,managed } from '@sap/cds/common';

entity Authors : cuid, managed {
  name : String;
}
entity Books: cuid, managed  {
      title: String;
      stock: Integer;
      author : Association to Authors;
}