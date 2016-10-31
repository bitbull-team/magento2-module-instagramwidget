define([
    "jquery"
], function($){
    $.widget('InstagramWidget.js', {
        _create: function() {

            var config = this.options;
            this.getChannel(config.channel);
            this.getStream(config.token, config.userid, config.num_photos);
        },

        getStream: function(token, userid, num_photos) {
            $.ajax({
                url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent',
                dataType: 'jsonp',
                type: 'GET',
                data: { access_token: token, count: num_photos},
                success: function(data){
                    for(x in data.data){
                        var items = [];
                        items.push('<li class="photo-'+ x +'">',
                            '<a TARGET="_blank"',
                            'href="' +  data.data[x].link +'">',
                            '<img src=" '+  data.data[x].images.low_resolution.url  +'"/>',
                            '</a>',
                            '</li>');

                        $('#bb-insta-stream').append(items.join(''));
                    }
                },
                error: function(data){
                    console.error('Error: '+ data);
                }
            });
        },

        getChannel: function(channel) {
            $('#bb-insta-title').append(channel);
        }

    });
    return $.InstagramWidget.js;
});