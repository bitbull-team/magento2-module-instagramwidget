define([
    "jquery"
], function($){
    $.widget('InstagramWidget.js', {

        _create: function() {
            this.getChannel();
        },

        _request: function (api , success) {
            var config = this.options;

            return $.ajax({
                url: api,
                dataType: 'jsonp',
                type: 'GET',
                data: {
                    access_token: config.token,
                    count: config.num_photos
                },
                success: success,
                error: function(data){
                    console.error('Error: '+ data);
                }
            });
        },

        getChannel: function() {

            $('#bb-insta-title').append(this.options.channel);
            this.getChannelStream();

        },

        getChannelStream: function () {
            var url = 'https://api.instagram.com/v1/users/',
                request = url + this.options.userid + '/media/recent',
                stream = $('#bb-insta-stream'),
                that = this;

            this._request( request, function(data) {
                for(x in data.data){
                    var items = [];
                    photo = data.data[x];
                    items.push('<li data-like="'+ photo.likes.count +'" class="photo-'+ x +'">',
                        '<a TARGET="_blank"',
                        'href="' +  photo.link +'">',
                        '<img src=" '+ photo.images.low_resolution.url  +'"/>',
                        '</a>',
                        '</li>');

                    stream .append(items.join(''));
                }
                if ( that.options.show_like == 1 ) {
                    that.showLikeOnHover( stream );
                }
            });
        },

        showLikeOnHover: function ( stream ) {
            $.each(stream.find('li'), function () {
                $(this).addClass('like-hover')
                    .append('<div class="mask"><span>' + $(this).attr("data-like") + '</span></div>');
            });
        }

    });

    return $.InstagramWidget.js;

});
