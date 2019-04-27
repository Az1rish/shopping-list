$('#js-shopping-list-form').submit(event => {
    event.preventDefault();

    const entry = $("input");

    $('.shopping-list').append(`<li><span class="shopping-item">${entry.val()}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button>
    <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
    
    entry.val("");
});

$('#js-shopping-list-form').keypress(event => {
    if (event.which == 13) {
    event.preventDefault();

    const entry = $("input");

    $('.shopping-list').append(`<li><span class="shopping-item">${entry.val()}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button>
    <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
    
    entry.val("");
    };
});

$('.shopping-item-toggle2').on('click', event => {
    $('.shopping-item').toggleClass("shopping-item__checked");
});

$('.shopping-item-toggle').on('click', function(event) {
    $(this).parent( ".selected" ).css( "background", "yellow" );
});

$('.shopping-item-toggle1').on('click', event => {
    console.log($(this).parent().toggleClass(".red"));
});
