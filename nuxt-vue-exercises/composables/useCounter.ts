import { ref } from "vue";

export const useCounter = (initialValue = 0) => {
  const count = ref(initialValue);

  const increment = () => {
    if (count.value < 10) count.value++;
  };

  const decrement = () => {
    if (count.value > 0) count.value--;
  };

  const reset = () => {
    count.value = initialValue;
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};
