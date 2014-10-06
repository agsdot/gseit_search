<?php

/**
 * @file
 * Admin settings for SES Search.
 */

/**
 * Admin settings page for the CSE.
 */
function _ses_search_admin_settings() {
  $form = array();
  $form['stanford'] = array(
    '#title' => t('SES Search'),
    '#type' => 'fieldset',
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['stanford']['su_search_google_cse_cx'] = array(
    '#title' => t('Google Custom Search Engine ID'),
    '#type' => 'textfield',
    '#default_value' => variable_get('su_search_google_cse_cx', ''),
    '#description' => t('Enter your <a target="_blank" href="http://www.google.com/cse/manage/all">Google CSE unique ID</a> (click on control panel).'),
  );
  $form['stanford']['su_search_tab_title'] = array(
    '#title' => t('Search results tab name'),
    '#type' => 'textfield',
    '#maxlength' => 50,
    '#size' => 60,
    '#description' => t('Enter a custom name of the tab where search results are displayed (defaults to %stanford).', array('%stanford' => t('Stanford'))),
    '#default_value' => variable_get('su_search_tab_title', 'Stanford'),
  );
  $form['stanford']['su_search_all_stanford_link'] = array(
    '#type' => 'checkbox',
    '#title' => t('Display a link to the Stanford University search page.'),
    '#description' => t('If enabled, a link will dynamically go to the Stanford search page with the same search keys entered on your site. Do not bother checking this if you are already using the Stanford Google Custom Search cx.'),
    '#default_value' => variable_get('su_search_all_stanford_link', 1),
  ); 
  return $form;
}
