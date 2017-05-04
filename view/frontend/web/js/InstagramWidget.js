define([
    "jquery"
], function($){
    $.widget('InstagramWidget.js', {

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

            var html = '';
            $.each(data.data, function () {

                var img = this.images.low_resolution.url,
                    url = this.link;

                html += '<li>' +
                    '<a TARGET="_blank" href="' +  url +'">' +
                    '<img src=" '+ img +'"/>'+
                    '</a>'+
                    '</li>';
            });

            return html;
        },

        _getStreamData: function (config) {
            this._apiCall(config.token, config.userid, config.num_photos);

            var cookie = 'instagram_stream',
                storedStream = $.mage.cookies.get(cookie);

            this._setStream(storedStream);
        },

        /**
         * API call
         *
         * @param token
         * @param userid
         * @param num_photos
         * @private
         */

        _apiCall: function(token, userid, num_photos) {

            var route = '/media/recent',
                url   = 'https://api.instagram.com/v1/users/' + userid + route,
                that  = this;

            $.ajax({
                url: url,
                dataType: 'jsonp',
                type: 'GET',
                data: {
                    access_token: token,
                    count: num_photos
                },
                success: function(data){
                    var html = that._render(data);
                    that._setStream(html);
                    that._setCookie(html);
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
         * @private
         */

        _setCookie: function (data) {
            $.mage.cookies.set('instagram_stream', data,
                {lifetime: 90000000 });
        },

        /**
         * TODO: Restore this function
         */

        _showLikeOnHover: function ( stream ) {
            $.each(stream.find('li'), function () {
                $(this).addClass('like-hover')
                    .append('<div class="mask"><span>' + $(this).attr("data-like") + '</span></div>');
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

    return $.InstagramWidget.js;

});
