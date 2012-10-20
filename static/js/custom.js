function csrfSafeMethod(method) {
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    crossDomain: false,
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type)) {
            xhr.setRequestHeader("X-CSRFToken", $.cookie('csrftoken'));
        }
    }
});

$("#fixForm").submit(function(event) {
    
    event.preventDefault();
    
    var $form = $(this),
        stat = $form.find('input[name="fixed"]').is(":checked"),
        url = $form.attr('action');

    $.post(url, {fixed: stat},
        function(data) {
            if (data == 'true') {
                $('#fixForm').prepend('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">x</button>Fixed, yup :)</div>');
            }
            else if (data == 'false') {
                $('#fixForm').prepend('<div class="alert"><button type="button" class="close" data-dismiss="alert">x</button>Still broken :(</div>');
            }
        }
    );
})
.ajaxError(function(event, request, settings) {
    alert(request.status);
});

$(function() {
    $('#add_photo').click(function() {
        var number = $('input[type="file"]').size();
        $('<p><input type="file" name="extra_photo' + number + '"></p>').insertBefore($('#add_photo'));
    });
});
