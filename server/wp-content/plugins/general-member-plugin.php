<?php
/**
 * Plugin Name: General Member Plugin
 * Plugin URI: https://www.example.com
 * Description: A simple plugin for handling general members.
 * Version: 1.0.0
 * Author: Your Name
 * Author URI: https://www.example.com
 */

// Register custom post type for general members
function register_general_member_post_type() {
    $labels = array(
        'name'                  => 'General Members',
        'singular_name'         => 'General Member',
    );

    $args = array(
        'label'                 => 'General Member',
        'labels'                => $labels,
        'supports'              => array('title', 'editor'), 
        'public'                => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rest_base'             => 'general_members',
    );

    register_post_type('general_member', $args);
}

add_action('init', 'register_general_member_post_type', 0);

// Save additional data when saving the general member
function save_general_member_additional_data($post_id) {
    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check the user's permissions
    if ('general_member' == $_POST['post_type'] && current_user_can('edit_post', $post_id)) {
        // Save additional data (if any) here
    }
}

add_action('save_post', 'save_general_member_additional_data');
