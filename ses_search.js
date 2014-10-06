(function($) {

  $(document).ready(function() {

      if (typeof Drupal.settings.su_search_page_template !== 'undefined') {

          var cx = 'unknown';
          if (typeof Drupal.settings.su_search_google_cse_cx === 'undefined' ||
              Drupal.settings.su_search_google_cse_cx == '') {
              console.log('no Google CSE cx available.');
              return;
          } else {
              cx = Drupal.settings.su_search_google_cse_cx;
          }
          var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
          gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') +
              '//www.google.com/cse/cse.js?cx=' + cx;
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);

          $('#search-form').hide();

          var page_title = '';
          if (typeof Drupal.settings.su_search_tab_title !== 'undefined') {
              page_title = 'Search ' + Drupal.settings.su_search_tab_title;
              $('#page-title').html(page_title);
          }

          var stanford_link = 0;
          if (typeof Drupal.settings.su_search_all_stanford_link !== 'undefined') {
              stanford_link = Drupal.settings.su_search_all_stanford_link;
          }

          if (stanford_link == 1) {
              // when the "search all stanford" link is clicked, go to stanford search
              // with whatever is in the google search field
              console.log('setting click function on link');
              $(".search-all-stanford-link").click(function(){
                  var element = google.search.cse.element.getElement('su_search_obj');
                  var su_query = element.getInputQuery();
                  $(this).attr('href', 'http://www.stanford.edu/search?q='+su_query);
                  return true;
              });
          }
      }
  });

})(jQuery);
