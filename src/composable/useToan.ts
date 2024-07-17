import { reactive } from 'vue';
import { toast } from 'vue3-toastify';

const dataToan = reactive({
    count: 0
  });

function useToan(name: string) {

    function getName() {
       return name
    }

    function increment() {
      dataToan.count++;
      toastNoti('Cộng lên: ');
    }

    function decrement () {
      if(dataToan.count <= 0) {
        return dataToan.count = 0;
      } else {
        dataToan.count--;
      }
      toastNoti('Trừ đi: ');
    }

    function toastNoti(mess: string){
      toast(mess + dataToan.count, {
        autoClose: 1000,
        position: 'top-center',
        transition: "zoom",
      });
    }

    return {
        dataToan,
        getName,        
        increment,
        decrement
    }

}
export default useToan;