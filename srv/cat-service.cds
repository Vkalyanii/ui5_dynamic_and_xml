using my.bookshop as my from '../db/data-model';

service CatalogService {
      @restrict: [{
        grant: '*',
        to   : 'Admin'
    },

    {
      grant:'Create',
      to:'User'
    }]
    
    entity Books as projection on my.Books;
     entity Address as projection on my.Address;
}