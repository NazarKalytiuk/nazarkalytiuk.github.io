// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();

let loadData = async (url) => {
    return new Promise((resolve, reject) => {
        let xnr = new XMLHttpRequest();
        xnr.open('GET', url, true);
        xnr.onload = () => {
            if (xnr.status === 200) {
                // console.log(xnr.response)
                let json = JSON.parse(xnr.response);
                resolve(json);
            } else {
                reject(xnr.statusText);
            }
        }
        xnr.onerror = (err) => {
            reject(err);
        }
        xnr.send();
    })
}

let render = async (data) => {
    let node = document.getElementById('data');
    data.forEach(element => {
        node.innerHTML +=
            `
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">${element.name}</h2>
        </div>

        <ul class="demo-list-icon mdl-list">
            <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                <span>Birth</span>
                <div style="flex-grow:10"></div>
                <span>${element.birth_year}</span>
                </span>
            </li>
            <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                <span>Eye color</span>
                <div style="flex-grow:10"></div>
                <span>${element.eye_color}</span>
                </span>
            </li>
            <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                <span>Gender</span>
                <div style="flex-grow:10"></div>
                <span>${element.gender}</span>
                </span>
            </li>
            <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                <span>Hair color</span>
                <div style="flex-grow:10"></div>
                <span>${element.hair_color}</span>
                </span>
            </li>
            <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                <span>Height</span>
                <div style="flex-grow:10"></div>
                <span>${element.height}</span>
                </span>
            </li>
            <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                <span>Birth</span>
                <div style="flex-grow:10"></div>
                <span>${element.birth_year}</span>
                </span>
            </li>
            <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                <span>Mass</span>
                <div style="flex-grow:10"></div>
                <span>${element.mass}</span>
                </span>
            </li>
            <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                <span>Skin color</span>
                <div style="flex-grow:10"></div>
                <span>${element.skin_color}</span>
                </span>
            </li>
        </ul>

        <div class="mdl-card__actions mdl-card--border">
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox${element.url}">
            <input type="checkbox" id="checkbox${element.url}" onchange="change('${element.url}')" class="mdl-checkbox__input" ${element.checked}>
            <span class="mdl-checkbox__label">Like</span>
            </label>
        </div>
    </div>
        `
    });
}

function change(key) {
    if (localStorage.getItem(key) == '') {
        localStorage.setItem(key) == 'checked';
    } else if (localStorage.getItem(key) == 'checked') {
        localStorage.setItem(key, '');
    } else {
        localStorage.setItem(key, 'checked');
    }
}

(async () => {
    try {
        let data = await loadData("http://swapi.co/api/people");
        data.results.map(c => {
            c.checked = localStorage.getItem(c.url.toString());
        })
        await render(data.results);
        while (data.next) {
            data = await loadData(data.next);
            data.results.map(c => {
                c.checked = localStorage.getItem(c.url.toString());
            })
            await render(data.results);
        }
    } catch (e) {
        console.error(e);
    }
})();