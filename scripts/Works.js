fetch('/Data/Works.json')
.then(response => response.json())
.then((data,index) =>{
    console.log(data)
    const content = `
        <li class="list_item">${data}</li>
    `;
    document.getElementById('work_content').innerHTML = content;
}
)
.catch(error => {
    console.error("error loading file : ", error);
    
});