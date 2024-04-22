<?php
/**
 * Plugin Name: Staff Member Plugin
 * Plugin URI: https://www.api.daedang.org.np
 * Description: A simple plugin for handling staff members.
 * Version: 1.0.0
 * Author: Dipendra Bhatta
 * Author URI: https://www.daedang.org.np
 */

// Register custom post type for staff members
function register_staff_member_post_type() {
    $labels = array(
        'name'                  => 'Staff Members',
        'singular_name'         => 'Staff Member',
    );

    $args = array(
        'label'                 => 'Staff Member',
        'labels'                => $labels,
        'supports'              => array('title', 'editor'), 
        'public'                => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rest_base'             => 'staff_members',
    );

    register_post_type('staff_member', $args);
}

add_action('init', 'register_staff_member_post_type', 0);

// Save additional data when saving the staff member
function save_staff_member_additional_data($post_id) {
    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check the user's permissions
    if ('staff_member' == $_POST['post_type'] && current_user_can('edit_post', $post_id)) {
        // Save additional data (if any) here
    }
}

add_action('save_post', 'save_staff_member_additional_data');
