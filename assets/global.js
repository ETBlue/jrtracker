$('[data-html]').popup({
    on: 'click'
});

$('[data-action="collapse"]').click(function() {
  $(this).next().toggle();
});
