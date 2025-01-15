fetch('/Data/Works.json')
    .then(response => response.json())
    .then((data) => {
        const content = []
        data.forEach((item, index) => {
            content.push(`<li class="list_item">${item.work}</li>`);
            document.getElementById('work_content').innerHTML = content.join('');
        })
    }
    )
    .catch(error => {
        console.error("error loading file : ", error);

    });