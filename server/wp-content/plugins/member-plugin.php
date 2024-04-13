<?php
/**
 * Plugin Name: Member Plugin
 * Plugin URI: https://www.api.daedang.org.np/members
 * Description: This plugin allows you to create members with images, titles, and content.
 * Version: 1.0
 * Author: Dipendra Bhatta
 * Author URI: https://www.daedang.org.np
 */

// Register the custom post type for members
function member_register_post_type() {
    $labels = array(
        'name'                  => 'Members',
        'singular_name'         => 'Member',
    );
    $args = array(
        'label'                 => 'Member',
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail' ),
        'public'                => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rest_base'             => 'members',
    );
    register_post_type( 'member_type', $args );
}
add_action( 'init', 'member_register_post_type', 0 );

// Add meta box for member details
function add_member_details_meta_box() {
    add_meta_box(
        'member_details_meta_box',
        'Member Details',
        'render_member_details_meta_box',
        'member_type',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'add_member_details_meta_box');

// Render the content of the member details meta box
function render_member_details_meta_box($post) {
    // Get the current member details if they exist
    $image_url = get_post_meta($post->ID, '_member_image_url', true);

    // Use nonce for verification
    wp_nonce_field(basename(__FILE__), 'member_details_nonce');

    // Display the input for member details
    ?>
    
    <p>
        <label for="member_image">Upload Member Image:</label><br />
        <input type="text" name="member_image" id="member_image" class="widefat" value="<?php echo esc_url($image_url); ?>" />
        <input type="button" id="upload_image_button" class="button" value="Upload Image" />
    </p>
    <div id="member_image_preview">
        <?php if ($image_url) : ?>
            <img src="<?php echo esc_url($image_url); ?>" style="max-width: 100%;" />
        <?php endif; ?>
    </div>
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
                    $('#member_image').val(attachment.url);
                    $('#member_image_preview img').attr('src', attachment.url);
                });

                //Open the uploader dialog
                custom_uploader.open();
            });
        });
    </script>
    <?php
}

// Save the member details when saving the member
function save_member_details_meta($post_id) {
    // Verify nonce
    if (!isset($_POST['member_details_nonce']) || !wp_verify_nonce($_POST['member_details_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check the user's permissions
    if ('member_type' == $_POST['post_type'] && current_user_can('edit_post', $post_id)) {
        // Save member details
        update_post_meta($post_id, '_member_image_url', esc_url($_POST['member_image']));
    }
}
add_action('save_post', 'save_member_details_meta');
