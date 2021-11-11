let currActive = null;
const hide = function (item) {
    item.classList.add('hide');
}
const show = function (item) {
    item.classList.remove('hide');
}
const onStart = function () {
    for (const card of document.getElementsByClassName('card'))
        if (currActive === null)
            card.classList.remove('onstart');
}
const showSection = function (id, mobile = false) {

    const active = document.getElementById(mobile ? `secMob${id}` : `sec${id}`);

    if (currActive !== null) {
        const curr = document.getElementById(mobile ? `secMob${currActive}` : `sec${currActive}`);
        hide(curr, mobile);
    }
    if(!mobile)
        onStart();
    show(active);
    currActive = id;
}
const showMobileSection = function (id) {
    showSection(id, true);
}
