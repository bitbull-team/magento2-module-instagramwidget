# Instagram widget #

Magento module 2 that displays last photos from an Instagram account. More information here https://www.bitbull.it/blog/sviluppare-un-widget-con-magento2-e-requirejs/

![](https://raw.githubusercontent.com/bitbull-team/magento2-module-instagramwidget/develop/docs/frontend.png)

Installation Instructions
--------------------------
Add these lines to the composer.json of your project

```
"require": {
    ...
    "bitbull/magento2-module-instagramwidget": "6.0.0"
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

After install go to Magento2 admin in **Stores -> Configuration -> Bitbull -> Instagram widget** and set:
 * Instagram Token Credentials
 * Instagram Userid Credentials
 * Channel title to display on frontend 
 * Number of photos 
 
![](https://raw.githubusercontent.com/bitbull-team/magento2-module-instagramwidget/develop/docs/6.0.0/admin-panel.png)

To retrieve the data of your channel follow the official Instagram doc: https://www.instagram.com/developer/authentication/

Changelog
----------

* 6.0.0 - Refactoring, fix names and separate api configs from frontend settings
* 5.1.2 - Composer.json validation
* 5.1.1 - Updated php module's dependencies
* 5.1.0 - Set correct common Bitbull module reference, fix on js and temporary removed trick for square images because it's not working again due to Instagram urls
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
