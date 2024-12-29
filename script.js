document.addEventListener('DOMContentLoaded', function () {
    let screen = document.getElementById('screen')
    screen.addEventListener('scroll',updateNavOnScroll)
    window.addEventListener('resize', updateNavOnScroll);
    let page_list = [];

    const intro_name = document.getElementById('intro_name');

    const cursor = document.getElementById('cursor');
    page_list[0] = document.getElementById('Home');
    page_list[1] = document.getElementById('Hobby');
    page_list[2] = document.getElementById('Works');
    page_list[3] = document.getElementById('Contact');

    let nav_items_list = [];
    nav_items_list[0] = document.getElementById('homenav');
    nav_items_list[1] = document.getElementById('hobbynav');
    nav_items_list[2] = document.getElementById('worksnav');
    nav_items_list[3] = document.getElementById('contactnav');

    let current_page_index = 0;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      });

      intro_name.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)'; // Make the cursor bigger on hover
        cursor.style.backgroundColor = '#171717'
      });
      intro_name.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)'; // Revert cursor size
        cursor.style.backgroundColor = '#DA0037'
      });
  
      nav_items_list.forEach((nav_item) => {
        nav_item.addEventListener('mouseenter', () => {
          cursor.style.transform = 'scale(2)'; // Make the cursor bigger on hover
        });
        nav_item.addEventListener('mouseleave', () => {
          cursor.style.transform = 'scale(1)'; // Revert cursor size
        });
      });

    nav_items_list[current_page_index].style.backgroundColor = '#DA0037';


    //scroll into view for nav_items
    nav_items_list.forEach((nav_item) => {
        nav_item.addEventListener('click', function () {
            const index = nav_items_list.indexOf(nav_item);
            scroll_smooth(page_list[index]);
            current_page_index = index;
            update_color();
        });
    });

    
    function updateNavOnScroll() {
        page_list.forEach(page => {
            const _size = page.getBoundingClientRect();
            if (_size.top <= window.innerHeight / 2 && _size.bottom >= window.innerHeight / 2) {
                const index = page_list.indexOf(page);
                if (index !== current_page_index) {
                    current_page_index = index;
                    update_color();
                }
            }
        });
    }

    function update_color(){
        nav_items_list.forEach(item =>{
            item.style.backgroundColor = '';
        });
        nav_items_list[current_page_index].style.backgroundColor = '#DA0037';
    }



    function scroll_smooth(div_name) {
        div_name.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    updateNavOnScroll()

});
