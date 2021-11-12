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
    if (!mobile)
        onStart();
    show(active);
    currActive = id;
}
const showMobileSection = function (id) {
    showSection(id, true);
}

const data = {
    [1]: {
        email: 'pr@prm-art.com'
    },
    [2]: {
        email: "reklama@prm-art.com"
    },
    [3]: {
        email: "marketing@prm-art.com"
    }
}
const copyContact = function (id, type = false) {
    const modal = document.getElementById('modal');
    let insert = ``;

    if (type === true) {
        insert = `<h3>Телефон: </h3><br><a href=":tel+79110885758">+7(911)-088-57-58</a>`;
    }
    else {
        insert = `<h3>Электронная почта: </h3><br><a href="mailto:${data[id].email}">${data[id].email}</a>`;
    }

    modal.classList.remove('hide-modal');

    modal.innerHTML = insert;
}

const hideModal = function () {
    const modal = document.getElementById('modal');
    modal.classList.add('hide-modal');
}
