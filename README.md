# Instagram widget #

Magento module 2 that displays last photos from an instagram account. More information here https://www.bitbull.it/blog/sviluppare-un-widget-con-magento2-e-requirejs/

Installation Instructions
--------------------------
Add these lines to the composer.json of your project

```
"require":{
    ...
    "bitbull/magento2-module-instagramwidget": "dev-master"
 }
 ```
 
 ```
 "repositories":[
      ...
     {"type": "vcs", "url":"https://github.com/bitbull-team/magento2-module-instagramwidget.git"}
 ]
```

Settings
--------

After install go to M2 admin configuration and in the instagram widget tab add:
 * Instagram Token Credentials
 * Instagram Userid Credentials
 * Channel name to display 
 * Numbers of photo 
 
To retrieve the data of your channel follow the official instagram doc: https://www.instagram.com/developer/authentication/

Changelog
----------

* 2.0.0 - Added configuration in admin to make module reusable
* 1.0.0 - first release


Licence
-------

[OSL - Open Software Licence 3.0](http://opensource.org/licenses/osl-3.0.php)


Developers
---------

Irene Iaccio(@nuovecode): http://www.bitbull.it

Rodrigo Acuna: https://github.com/rodde177


Copyright
---------
(c) 2016 Bitbull Srl
