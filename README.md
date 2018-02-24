# Instagram widget #

Magento module 2 that displays last photos from an Instagram account. More information here https://www.bitbull.it/blog/sviluppare-un-widget-con-magento2-e-requirejs/

Installation Instructions
--------------------------
Add these lines to the composer.json of your project

```
"require": {
    ...
    "bitbull/magento2-module-instagramwidget": "5.0.0"
 }
 ```
 
 ```
 "repositories": [
      ...
     {
        "type": "vcs",
        "url":"https://github.com/bitbull-team/magento2-module-instagramwidget.git"
     }
 ]
```

Settings
--------

After install go to M2 admin configuration and in the Bitbull > Instagram widget tab add:
 * Instagram Token Credentials
 * Instagram Userid Credentials
 * Channel name to display 
 * Numbers of photo 
 
To retrieve the data of your channel follow the official Instagram doc: https://www.instagram.com/developer/authentication/

Changelog
----------

* 5.0.0 - Moved module under Bitbull tab and moved img getter in a separate function
* 4.3.1 - Fix on comparison operator
* 4.3.0 - Fix squared images url
* 4.2.0 - Squared image configuration
* 4.1.0 - Use only cropped images
* 4.0.0 - API call optimization / Added configuration to do less call
* 3.0.0 - Update dependency for magento 2.1
* 2.2.1 - Fix like display configuration bug
* 2.2.0 - Added like numbers on image hover width admin config
* 2.1.0 - Added admin setting for display on homepage and block hinting for IDE in template
* 2.0.0 - Added configuration in admin to make module reusable
* 1.0.0 - First release


Licence
-------

[OSL - Open Software Licence 3.0](http://opensource.org/licenses/osl-3.0.php)


Developers
---------

Irene Iaccio(@nuovecode): http://www.bitbull.it  
Lorena Ramonda (@loreenaramonda): http://www.bitbull.it 

Rodrigo Acuna: https://github.com/rodde177


Copyright
---------
(c) 2016 Bitbull Srl
