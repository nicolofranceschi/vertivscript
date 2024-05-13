function searchElement(s) {
    const JSONids = localStorage.getItem("ids");
    const x = JSON.parse(JSONids);
    var filter = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i].toLowerCase().includes(s.toLowerCase())) filter.push(x[i])
    }
    if (filter.length === 0) filter = x;
    var form = document.getElementById("formPlace");
    while (form.firstChild) {
        form.removeChild(form.firstChild);
        // OR 
        form?.firstChild?.remove();
    }
    for (let i = 0; i < filter.length; i++) {
        form.insertAdjacentHTML("beforeend", `
        <div style='display: flex;justify-content: space-between;align-items: center;'>
        <strong onclick="selectElement('${filter[i]}')">${filter[i]}</strong>
        <div style='display:flex; gap:5px; align-items: center;'>
        <button onclick="updateTemplate('${filter[i]}')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style="height: 20px;width: 10px;">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
        </button>
        <button onclick="deleteElement('${filter[i]}','${s}')">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style="height: 20px;width: 10px;">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button>
        </div>
        </div>
        `);
    }
    return filter
}

function deleteElement(value, s) {
    localStorage.removeItem(value)
    const JSONids = localStorage.getItem("ids");
    const ids = JSON.parse(JSONids);
    const filter = ids.filter((id) => id !== value);
    localStorage.setItem("ids", JSON.stringify(filter));
    searchElement(s)
}

function selectElement(value) {
    const JSONvalues = localStorage.getItem(value);
    const values = JSON.parse(JSONvalues);
    values.forEach((value) => {
        const input = document.querySelector(`input[name=${value.name}]`);
        input.checked = value.value;
    })
}

function createTeamplate(value) {
    const JSONids = localStorage.getItem("ids");
    const ids = JSON.parse(JSONids);
    if (ids?.includes(value)) return alert("Template ids already taken!");
    localStorage.setItem("ids", JSON.stringify(ids ? [...ids, value] : [value]));
    const domREfBuild = document.querySelectorAll("input[name^=build]")
    const domREfAdmin = document.querySelectorAll("input[name^=admin]")
    const template = [...domREfBuild, ...domREfAdmin].map((input) => ({ name: input.name, value: input.checked }))
    localStorage.setItem(value, JSON.stringify(template));
    searchElement("");
}

function updateTemplate(value) {
    const domREfBuild = document.querySelectorAll("input[name^=build]")
    const domREfAdmin = document.querySelectorAll("input[name^=admin]")
    const template = [...domREfBuild, ...domREfAdmin].map((input) => ({ name: input.name, value: input.checked }))
    localStorage.setItem(value, JSON.stringify(template));
}

function selectAllBuild() {
    let element = document.getElementById("selectAllBuild");
    if (element.checked) {
        document.querySelectorAll("input[name^=build]").forEach((input) => input.checked = true)
    } else {
        document.querySelectorAll("input[name^=build]").forEach((input) => input.checked = false)
    }
}

function selectAllAdmin() {
    let element = document.getElementById("selectAllAdmin");
    if (element.checked) {
        document.querySelectorAll("input[name^=admin]").forEach((input) => input.checked = true)
    } else {
        document.querySelectorAll("input[name^=admin]").forEach((input) => input.checked = false)
    }
}

function closeSearch() {
    document.getElementById("searchUI").remove();
    document.getElementById("search").remove();
    document.getElementById("fontinter").remove();
    document.getElementById("gstatic").remove();
    document.getElementById("cssfile").remove();
    document.getElementById("interdata").remove();

}

document.head.insertAdjacentHTML("beforeend", `<link id="fontinter" rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" id="gstatic" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" id="cssfile" href="https://vertivscript.vercel.app/plugin.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"  id="interdata" rel="stylesheet">`);


fetch('https://vertivscript.vercel.app/layerSecurity.html')
    .then(function (response) {
        return response.text()
    })
    .then(function (html) {
        document.body.insertAdjacentHTML("beforeend", html);
    })
    .catch(function (err) {
        console.log('Failed to fetch page:', err);
    });