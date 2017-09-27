<?php

//    if (!isset($_GET['su_q'])) {
//         $q_path = 'search/stanford/';
//         $q_str = '';
//         if (isset($_GET['q']) && strlen($_GET['q']) > strlen($q_path)) {
//             $q_str = substr($_GET['q'],strlen($q_path));
//         }
//         drupal_goto($q_path.'google',array('query'=>array('su_q'=>$q_str)));
//    }

    $su_search_all_stanford_link = variable_get('su_search_all_stanford_link',0);
    $su_search_tab_title = variable_get('su_search_tab_title','');
    $su_search_google_cse_cx = variable_get('su_search_google_cse_cx','');

    drupal_add_js(array(
        'su_search_page_template'=>TRUE,
        'su_search_all_stanford_link'=>$su_search_all_stanford_link,
        'su_search_tab_title'=>$su_search_tab_title,
        'su_search_google_cse_cx'=>$su_search_google_cse_cx,
    ),'setting');

    drupal_add_js(drupal_get_path('module', 'gseit_search') . '/gseit_search.js');
    drupal_add_css(drupal_get_path('module','gseit_search') . '/gseit_search.css');
?>

    <div class="stanford-search-block">
        <div class="stanford-search-iframe">
            <? if ($su_search_all_stanford_link == 1) { ?>
                <div class="stanford-search-all-stanford">
                    <?
                        print l(t('Search All Stanford'), '#',array('attributes'=>array('target'=>"_blank",'class'=>array('search-all-stanford-link'))));
                    ?>
                </div>
            <? } ?>
            <gcse:search queryParameterName="su_q" gname="su_search_obj" enableHistory="true" enableAutoComplete="true"></gcse:search>
        </div>
    </div>
