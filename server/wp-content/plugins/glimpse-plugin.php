<?php
/**
 * Plugin Name: Glimpse Plugin
 * Plugin URI: https://www.api.daedang.org.np/glimpses
 * Description: This plugin allows you to create glimpses with images and titles.
 * Version: 1.0
 * Author: Dipendra Bhatta
 * Author URI: https://www.daedang.org.np
 */

// Register the custom post type for glimpses
function glimpse_register_post_type() {
    $labels = array(
        'name'                  => 'Glimpses',
        'singular_name'         => 'Glimpse',
    );
    $args = array(
        'label'                 => 'Glimpse',
        'labels'                => $labels,
        'supports'              => array( 'title', 'thumbnail' ),
        'public'                => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rest_base'             => 'glimpses',
    );
    register_post_type( 'glimpse_type', $args );
}
add_action( 'init', 'glimpse_register_post_type', 0 );

// Add meta box for glimpse details
function add_glimpse_details_meta_box() {
    add_meta_box(
        'glimpse_details_meta_box',
        'Glimpse Details',
        'render_glimpse_details_meta_box',
        'glimpse_type',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'add_glimpse_details_meta_box');

// Render the content of the glimpse details meta box
function render_glimpse_details_meta_box($post) {
    // Get the current glimpse details if they exist
    $image_url = get_post_meta($post->ID, '_glimpse_image_url', true);

    // Use nonce for verification
    wp_nonce_field(basename(__FILE__), 'glimpse_details_nonce');

    // Display the input for glimpse details
    ?>
    <p>
        <label for="glimpse_image">Upload Glimpse Image:</label><br />
        <input type="text" name="glimpse_image" id="glimpse_image" class="widefat" value="<?php echo esc_url($image_url); ?>" />
        <input type="button" id="upload_image_button" class="button" value="Upload Image" />
    </p>
    <div id="glimpse_image_preview">
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
                    $('#glimpse_image').val(attachment.url);
                    $('#glimpse_image_preview img').attr('src', attachment.url);
                });

                //Open the uploader dialog
                custom_uploader.open();
            });
        });
    </script>
    <?php
}

// Save the glimpse details when saving the glimpse
function save_glimpse_details_meta($post_id) {
    // Verify nonce
    if (!isset($_POST['glimpse_details_nonce']) || !wp_verify_nonce($_POST['glimpse_details_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check the user's permissions
    if ('glimpse_type' == $_POST['post_type'] && current_user_can('edit_post', $post_id)) {
        // Save glimpse details
        update_post_meta($post_id, '_glimpse_image_url', esc_url($_POST['glimpse_image']));
    }
}
add_action('save_post', 'save_glimpse_details_meta');
