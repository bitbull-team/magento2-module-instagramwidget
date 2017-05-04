define([
    "jquery"
], function($){
    $.widget('InstagramWidget.js', {

        _create: function() {

            var config = this.options;

            this._getChannel(config.channel);
            this._apiCall(config.token, config.userid, config.num_photos);

        },

        /**
         * Render photo stream
         *
         * @param data
         * @private
         */

        _render: function (data) {

            var stream = $('#bb-insta-stream');

            $.each(data.data, function () {

                stream.append(

                    '<li class="photo-'+ 1 +'">'+
                    '<a TARGET="_blank"'+
                    'href="' +  this.link +'">'+
                    '<img src=" '+  this.images.low_resolution.url  +'"/>'+
                    '</a>'+
                    '</li>'
                );

            });
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
                    that._render(data);
                },
                error: function(data){
                    console.error('Error: '+ data);
                }
            });
        },

        /**
         * TODO: Restore this function
         * @param stream
         */

        showLikeOnHover: function ( stream ) {
            $.each(stream.find('li'), function () {
                $(this).addClass('like-hover')
                    .append('<div class="mask"><span>' + $(this).attr("data-like") + '</span></div>');
            });
        },


        /**
         * @param channel
         * @private
         */

        _getChannel: function(channel) {
            $('#bb-insta-title').append(channel);
        }

    });

    return $.InstagramWidget.js;

});
