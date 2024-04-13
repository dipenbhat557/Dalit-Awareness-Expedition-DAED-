<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'daed-server' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '0.fF{%w$W3dXtI2:Jw$09CmI%AlrJNES4^BP)%C8].x3ULm}5b2 ,vilBgJ!l|13' );
define( 'SECURE_AUTH_KEY',  '`;KEz$;awrkU ah]66!oB,K9kBuvtR*$MS;W8V=4w.]ui2q3qGzi5^zUokoN?.[8' );
define( 'LOGGED_IN_KEY',    'e7D60o;#j)E(%.;8aT{t~aHlkfYkbXC+rc/,,9JRn{Q If4z>S2pycSsadM]P22r' );
define( 'NONCE_KEY',        'w&TCw.3+j9:+?*m0Y(841Gdj58%:p[0!{nR1+! []D$>(_#G>AI {cV;i8r$u `q' );
define( 'AUTH_SALT',        'a_$BdtsfgT0:uuo&q6~ZBokVG}Jt=~8[3Y5d@@ {,a-n7G_FRC0D?lp9N`R]H,Da' );
define( 'SECURE_AUTH_SALT', 'bufAlZQ}Wa$Od+3|mB;q#<-$;yv1c:S}Pj}+D7wJ&Z)tU(9`=%h+snXw`w:^[Y@J' );
define( 'LOGGED_IN_SALT',   'iK&Ez=gX%(y.@gL@8=7/MXXViZF.oe=#w-7?Qh+vE^uJr!eT*1E(vabwMu+BlTk=' );
define( 'NONCE_SALT',       'T:#;/H!fWFWX.<~x@,2YgT7/g.315^aveWH9NgG9UpQ}!IS$wJP}Om(*<l&bm(kg' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
