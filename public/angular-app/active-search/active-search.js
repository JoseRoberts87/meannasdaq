//  $(document).ready(function() {
//      var tickSymbols = [
//          'Alabama',
//          'Alaska',
//          'Arizona',
//          'Arkansas',
//          'California',
//          'Colorado'
//      ];

//      var tickSymbols = new Bloodhound({
//          datumTokenizer: Bloodhound.tokenizers.whitespace,
//          queryTokenizer: Bloodhound.tokenizers.whitespace,
//          local: tickSymbols
//      });

//      console.log(tickSymbols)

//      $('.typeahead').typeahead({
//          hint: true,
//          highlight: true,
//          minLength: 1
//      }, {
//          name: 'symbols',
//          source: tickSymbols
//      });
//  });