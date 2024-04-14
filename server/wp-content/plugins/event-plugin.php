<?php
/*
Plugin Name: Event Plugin
Plugin URI: https://www.api.daedang.org.np
Description: This plugin allows you to create events with images, titles, status, and dates.
Version: 1.0
Author: Dipendra Bhatta
Author URI: https://www.daedang.org.np
*/
function generate_event_type() {
    $labels = array(
        'name'                  => 'Events',
        'singular_name'         => 'Event',
    );
    $args = array(
        'label'                 => 'Event',
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'custom-fields'),
        'taxonomies'            => array('category', 'post_tag'),
        'hierarchical'          => false,
        'public'                => true,
        'capability_type'       => 'post', // Change 'page' to 'post'
        'show_in_rest'          => true,
        'rest_base'             => 'events',
    );
    register_post_type('event_type', $args);
}

add_action('init', 'generate_event_type', 0);

// Add a meta box for event details
function add_event_details_meta_box() {
    add_meta_box(
        'event_details_meta_box',
        'Event Details',
        'render_event_details_meta_box',
        'event_type',
        'normal',
        'high'
    );
}

add_action('add_meta_boxes', 'add_event_details_meta_box');

// Render the content of the event details meta box
function render_event_details_meta_box($post) {
    // Get the current event details
    $event_img = get_post_meta($post->ID, '_event_img', true);
    $event_stat = get_post_meta($post->ID, '_event_stat', true);
    $event_date = get_post_meta($post->ID, '_event_date', true);
    $event_partner = get_post_meta($post->ID, '_event_partner', true);
    $event_area = get_post_meta($post->ID, '_event_area', true);
   
    // Use nonce for verification
    wp_nonce_field(basename(__FILE__), 'event_details_nonce');

    // Display the input fields for event details
    ?>
    <label for="event_img">Event Image URL:</label>
    <input type="text" name="event_img" id="event_img" class="widefat" value="<?php echo esc_url($event_img); ?>" />
<p>
        <input type="button" id="upload_event_image_button" class="button" value="Upload Image" />
    </p>
    <script>
        jQuery(document).ready(function($){
            var custom_uploader;

            $('#upload_event_image_button').click(function(e) {
                e.preventDefault();

                //If the uploader object has already been created, reopen the dialog
                if (custom_uploader) {
                    custom_uploader.open();
                    return;
                }

                //Extend the wp.media object
                custom_uploader = wp.media.frames.file_frame = wp.media({
                    title: 'Choose Image',
                    button: {
                        text: 'Choose Image'
                    },
                    multiple: false
                });

                //When a file is selected, grab the URL and set it as the text field's value
                custom_uploader.on('select', function() {
                    var attachment = custom_uploader.state().get('selection').first().toJSON();
                    $('#event_img').val(attachment.url);
                });

                //Open the uploader dialog
                custom_uploader.open();
            });
        });
    </script>
    <label for="event_stat">Event Status:</label>
    <input type="text" name="event_stat" id="event_stat" class="widefat" value="<?php echo esc_attr($event_stat); ?>" />

    <label for="event_date">Event Date:</label>
    <input type="text" name="event_date" id="event_date" class="widefat" value="<?php echo esc_attr($event_date); ?>" />

    <label for="event_partner">Event Partner:</label>
    <input type="text" name="event_partner" id="event_partner" class="widefat" value="<?php echo esc_attr($event_partner); ?>" />

    <label for="event_area">Event Area:</label>
    <input type="text" name="event_area" id="event_area" class="widefat" value="<?php echo esc_attr($event_area); ?>" />

     <?php
}

// Save each event data field when saving the event
function save_event_details_meta($post_id) {
    // Verify nonce
    if (!isset($_POST['event_details_nonce']) || !wp_verify_nonce($_POST['event_details_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check the user's permissions
    if ('event_type' == $_POST['post_type'] && current_user_can('edit_post', $post_id)) {
        // Save each event data field individually
        update_post_meta($post_id, '_event_img', esc_url($_POST['event_img']));
        update_post_meta($post_id, '_event_stat', sanitize_text_field($_POST['event_stat']));
        update_post_meta($post_id, '_event_date', sanitize_text_field($_POST['event_date']));
        update_post_meta($post_id, '_event_partner', sanitize_text_field($_POST['event_partner'])); 
        update_post_meta($post_id, '_event_area', sanitize_text_field($_POST['event_area']));
         }
}

// Ensure all custom fields are exposed in REST API
function expose_custom_fields_in_rest() {
    register_rest_field('event_type', '_event_img', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_stat', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_date', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_partner', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));

    register_rest_field('event_type', '_event_area', array(
        'get_callback'    => 'get_custom_field',
        'update_callback' => 'update_custom_field',
        'schema'          => null,
    ));


}


function get_custom_field($object, $field_name, $request) {
    return get_post_meta($object['id'], $field_name, true);
}

function update_custom_field($value, $object, $field_name) {
    return update_post_meta($object->ID, $field_name, $value);
}


add_action('init', 'expose_custom_fields_in_rest');
add_action('save_post', 'save_event_details_meta');
add_action('rest_api_init', 'expose_custom_fields_in_rest');
