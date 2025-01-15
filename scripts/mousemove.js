
  document.addEventListener('DOMContentLoaded', function () {
    const intro_name = document.getElementById('intro_name');

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
    
})