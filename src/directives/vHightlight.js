
export const vHighlight = {
  // Định nghĩa directive highlight
    mounted(el, binding) {
        el.addEventListener('mouseenter', () => {
            el.style.color = 'yellow';
          });
      
        el.addEventListener('mouseleave', () => {
        el.style.color = 'red';
        });
    },
};

