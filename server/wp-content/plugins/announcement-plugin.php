<?php
/**
 * @package Announcement plugin
 * @version 1.0.0
 */
/*
Plugin Name: Announcement plugin
Plugin URI: https://www.api.daedang.org.np/announcements
Description: An announcement plugin
Author: Dipendra Bhatta
Version: 1.0.0
Author URI: https://www.daedang.org.np
*/

function generate_announcement_type() {
    $labels = array(
        'name'                  => 'Announcements',
        'singular_name'         => 'Announcement',
    );
    $args = array(
        'label'                 => 'Announcement',
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'custom-fields' ),
        'taxonomies'            => array( 'category', 'post_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'capability_type'       => 'post', // Change 'page' to 'post'
        'show_in_rest'          => true,
        'rest_base'             => 'announcements',
    );
    register_post_type( 'announcement_type', $args );
}
add_action( 'init', 'generate_announcement_type', 0 );


// Add a meta box for the announcement image
function add_announcement_image_meta_box() {
    add_meta_box(
        'announcement_image_meta_box',
        'Announcement Image',
        'render_announcement_image_meta_box',
        'announcement_type',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'add_announcement_image_meta_box');


// Render the content of the announcement image meta box
function render_announcement_image_meta_box($post) {
    // Get the current image URL if it exists
    $image_url = get_post_meta($post->ID, '_announcement_image_url', true);

    // Use nonce for verification
    wp_nonce_field(basename(__FILE__), 'announcement_image_nonce');

    // Display the input for the announcement image
    ?>
    <label for="announcement_image">Upload Announcement Image:</label>
    <input type="text" name="announcement_image" id="announcement_image" class="widefat" value="<?php echo esc_url($image_url); ?>" />
    <p>
        <input type="button" id="upload_image_button" class="button" value="Upload Image" />
    </p>
    <script>
        jQuery(document).ready(function($){
            var custom_uploader;

            $('#upload_image_button').click(function(e) {
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
                    $('#announcement_image').val(attachment.url);
                });

                //Open the uploader dialog
                custom_uploader.open();
            });
        });
    </script>
    <?php
}

// Save the announcement image URL when saving the announcement
function save_announcement_image_meta($post_id) {
    // Verify nonce
    if (!isset($_POST['announcement_image_nonce']) || !wp_verify_nonce($_POST['announcement_image_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check the user's permissions
    if ('announcement_type' == $_POST['post_type'] && current_user_can('edit_post', $post_id)) {
        // Save announcement image URL
        update_post_meta($post_id, '_announcement_image_url', esc_url($_POST['announcement_image']));
    }
}

add_action('save_post', 'save_announcement_image_meta');
