var eggs = [];

alert('This process may take some time and this tab will become unresponsive while processing.\n\nOpen a new tab to continue browsing.');

$('.ProfileCard').each(function() {
    if ($(this).find('.ProfileCard-avatarImage').attr('src').indexOf('default_profile_images/default_profile') >= 0) {
        eggs.push($(this));
    }
});

eggs.forEach(function(account) {
    if (($('.alert-messages .hidden'))) {
        $('.alert-messages').remove();
    }
    $(account).find('.user-dropdown').trigger('click');
    $(account).find('.block-text').find('.dropdown-link').trigger('click');
    $('.block-button').trigger('click');
});

alert('Completed! ' + eggs.length + ' egg accounts removed!\n\nYou may close this tab or continue once it becomes responsive again.');
