<?php
/*
Plugin Name: Journal Plugin
Plugin URI: https://www.api.daedang.org.np/journals
Description: This plugin allows you to create journals with images and titles.
Version: 1.0
Author: Dipendra Bhatta
Author URI: https://www.daedang.org.np
*/

// Register the custom post type for journals
function journal_register_post_type() {
    $labels = array(
        'name'                  => 'Journals',
        'singular_name'         => 'Journal',
    );
    $args = array(
        'label'                 => 'Journal',
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail' ),
        'taxonomies'            => array( 'category', 'post_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
        'rest_base'             => 'journals',
    );
    register_post_type( 'journal_type', $args );
}
add_action( 'init', 'journal_register_post_type', 0 );

// Add meta box for journal image
function add_journal_image_meta_box() {
    add_meta_box(
        'journal_image_meta_box',
        'Journal Image',
        'render_journal_image_meta_box',
        'journal_type',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'add_journal_image_meta_box');

// Render the content of the journal image meta box
function render_journal_image_meta_box($post) {
    // Get the current image URL if it exists
    $image_url = get_post_meta($post->ID, '_journal_image_url', true);

    // Use nonce for verification
    wp_nonce_field(basename(__FILE__), 'journal_image_nonce');

    // Display the input for the journal image
    ?>
    <label for="journal_image">Upload Journal Image:</label>
    <input type="text" name="journal_image" id="journal_image" class="widefat" value="<?php echo esc_url($image_url); ?>" />
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
                    $('#journal_image').val(attachment.url);
                });

                //Open the uploader dialog
                custom_uploader.open();
            });
        });
    </script>
    <?php
}

// Save the journal image URL when saving the journal
function save_journal_image_meta($post_id) {
    // Verify nonce
    if (!isset($_POST['journal_image_nonce']) || !wp_verify_nonce($_POST['journal_image_nonce'], basename(__FILE__))) {
        return $post_id;
    }

    // Check if it's not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return $post_id;
    }

    // Check the user's permissions
    if ('journal_type' == $_POST['post_type'] && current_user_can('edit_post', $post_id)) {
        // Save journal image URL
        update_post_meta($post_id, '_journal_image_url', esc_url($_POST['journal_image']));
    }
}
add_action('save_post', 'save_journal_image_meta');
