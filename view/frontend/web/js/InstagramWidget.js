define([
    "jquery",
    'jquery/ui',
    'jquery/jquery.cookie'

], function($){

    $.widget('bitbull.instagramWidget', {

        _create: function() {

            var config = this.options;

            this._setChannel(config.channel);
            this._getStreamData(config);
        },

        /**
         * Render photo stream
         *
         * @param data
         * @private
         */

        _render: function (data) {

            var html = '',
                that = this;

            $.each(data.data, function () {
                var img = that._getImg(this),
                    url = this.link;

                html += '<li>' +
                    '<a target="_blank" href="' + url +'">' +
                    '<img src="'+ img +'"/>'+
                    '</a>'+
                    '</li>';
            });

            return html;
        },

        /**
         * @param config
         * @private
         */

        _getStreamData: function (config) {

            var cookie = $.cookie('instagram_stream');
            if (cookie == null) {
                this._apiCall(config);
            } else {
                this._setStream(cookie);
            }

        },

        /**
         * Get Photo
         *
         * @param data
         * @returns {*}
         * @private
         */


        _getImg: function (data) {
            var that = this,
                image = data.images.low_resolution.url;

            if (that.options.cropped_images == 1) {
                image = that._getSquaredPhoto(data.images.thumbnail.url);
            }

            return image;
        },

        /**
         * Get Squared Photo if config
         *
         * @param thumbnail
         * @returns {*}
         * @private
         */


        _getSquaredPhoto: function (thumbnail) {
            // var thumb = thumbnail.replace('s150x150/', 's320x320/');
            // return thumb.replace(/vp\/[^\/]*/, 'hphotos-xfp1');

            // this needs to be fixed, no longer working
            return thumbnail;
        },

        /**
         * API call
         *
         * @param config
         * @private
         */

        _apiCall: function(config) {

            var route = '/media/recent',
                url   = 'https://api.instagram.com/v1/users/' + config.userid + route,
                that  = this;

            $.ajax({
                url: url,
                dataType: 'jsonp',
                type: 'GET',
                data: {
                    access_token: config.token,
                    count: config.num_photos
                },
                success: function(data){
                    var html = that._render(data);
                    that._setStream(html);
                    that._setCookie(html, config.frequency);
                },
                error: function(data){
                    console.error('Error: '+ data);
                }
            });
        },


        /**
         * Set cookie
         *
         * @param data
         * @param time
         * @private
         */

        _setCookie: function (data, time) {
            $.cookie('instagram_stream', data, {
                expires: parseFloat(time)
            });
        },


        /**
         * @param stream
         * @private
         */

        _setStream: function (stream) {
            $('#bb-insta-stream').append(stream);

        },


        /**
         * @param channel
         * @private
         */

        _setChannel: function(channel) {
            $('#bb-insta-title').append(channel);
        }

    });

    return $.bitbull.instagramWidget;

});
