let currActive = null;
const hide = function (item) {
    setTimeout(() => {
	    item.classList.add('hide');
    }, 900);
	    item.children[0].classList.remove("opacityZero");
	    item.children[1].classList.remove("opacityZero");
}
const show = function (item, isFirst) {
	if (!isFirst) {
		setTimeout(() => {
			item.classList.remove('hide');
		        setTimeout(() => {
        		        item.children[0].classList.add("opacityZero");
	                	item.children[1].classList.add("opacityZero");
        		}, 500);
		}, 900);
		return;
	}
    item.classList.remove('hide');
	setTimeout(() => {
		item.children[0].classList.add("opacityZero");
		item.children[1].classList.add("opacityZero");
	}, 500);
}
const onStart = function () {
    for (const card of document.getElementsByClassName('card'))
        if (currActive === null)
            card.classList.remove('onstart');
}
const showSection = function (id, mobile = false) {
    if (currActive == id) {
        return;
    }

    const active = document.getElementById(mobile ? `secMob${id}` : `sec${id}`);

    if (currActive !== null) {
        const curr = document.getElementById(mobile ? `secMob${currActive}` : `sec${currActive}`);
        hide(curr, mobile);
    }

    if (!mobile)
        onStart();

	//console.log(active.children[3].);
    const isFirstStart = currActive === null;
    show(active, isFirstStart);
    currActive = id;
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

    insert = `<h3>Телефон: </h3><br><a href=":tel+79110885758">+7(911)-088-57-58</a><br><h3>Электронная почта: </h3><br><a href="mailto:${data[id].email}">${data[id].email}</a>`;

    modal.classList.remove('hide-modal');

    modal.innerHTML = insert;
}

const hideModal = function () {
    const modal = document.getElementById('modal');
    modal.classList.add('hide-modal');
}

const hideMobile = function (item) {
    item.classList.add('hide');
}
const showMobile = function (item) {
    item.classList.remove('hide');
}

const showMobileSection = function (id) {

    const active = document.getElementById(`secMob${id}`);

    if (currActive !== null) {
        const curr = document.getElementById(`secMob${currActive}`);
        hideMobile(curr);
    }

    showMobile(active);
    currActive = id;
}
