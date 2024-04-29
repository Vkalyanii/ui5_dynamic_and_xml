namespace my.bookshop;

entity Books {
  key ID           : UUID;
      author       : String;
      title        : String;
      stock        : Integer;
      books_sold   : Integer;
      published_on : Date;
      phone        : String;
      addresses     : Association to  many Address;
}
entity Address  {
  key ID :  UUID;
  city     : String not null;
  _address  : String not null;
  pincode  : Integer not null;
  street   : String;
  landmark : String;
}
