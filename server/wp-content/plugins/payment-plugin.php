<?php
/**
 * Plugin Name: Payment Plugin
 * Plugin URI: https://www.api.daedang.org.np
 * Description: A simple plugin for handling payments.
 * Version: 1.0.0
 * Author: Dipendra Bhatta
 * Author URI: https://www.daedang.org.np
 */

// Register custom post type for payments
function register_payments_post_type() {
    $labels = array(
        'name'                  => 'Payments',
        'singular_name'         => 'Payment',
    );

    $args = array(
        'label'                 => 'Payment',
        'labels'                => $labels,
        'supports'              => array('title', 'editor'), // Added support for the editor
        'public'                => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rest_base'             => 'payments',
    );

    register_post_type('payment', $args);
}

add_action('init', 'register_payments_post_type', 0);

// Save additional data when saving the payment
function save_payment_additional_data($post_id) {
    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check the user's permissions
    if ('payment' == $_POST['post_type'] && current_user_can('edit_post', $post_id)) {
        // Save additional data (if any) here
    }
}

add_action('save_post', 'save_payment_additional_data');
