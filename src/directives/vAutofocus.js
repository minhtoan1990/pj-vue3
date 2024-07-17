
export const vFocus = {
    mounted: (el, binding) => {
        el.focus();
        el.addEventListener('keydown', () => {
            // console.log(binding.value);
        });
    
    }
}