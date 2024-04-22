function searchElement(s) {
    var x = document.getElementById("DocumentTemplateSelectionTemplateId").options;
    var filter = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i].label.toLowerCase().includes(s.toLowerCase())) filter.push({ value: x[i].value, label: x[i].label })
    }
    console.log("filter ciao",filter)
    var form = document.getElementById("formPlace");
    for (let i = 0; i < filter.length; i++) {
        form.insertAdjacentHTML("beforeend", `<strong onclick="selectElement(${filter[i].value})">${filter[i].label}</strong>`);
    }
    return filter
}

function selectElement(value) {
    console.log(value)
    let element = document.getElementById("DocumentTemplateSelectionTemplateId");
    element.value = value;
    closeSearch();
}

function closeSearch() {
    document.getElementById("search").remove();
}

document.head.insertAdjacentHTML("afterend", `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://nicolofranceschi.github.io/vertivscript/style.css">
<script src="https://cdn.tailwindcss.com"></script>
<style type="text/tailwindcss">
    @layer utilities {
      .content-auto {
        content-visibility: auto;
      }
    }
  </style>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">`);


fetch('https://nicolofranceschi.github.io/vertivscript/layes')
    .then(function(response) {
        return response.text()
    })
    .then(function(html) {
        document.body.insertAdjacentHTML("afterend", html );
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });