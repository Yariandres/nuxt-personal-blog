import { onMounted, onUnmounted, ref } from 'vue';

export default function useClickOutside() {
  const isClickOutside = ref(false);

  const handleClickOutside = (event: MouseEvent | any) => {
    if (event.target.closest('.side-menu') === null) {
      isClickOutside.value = true;
    }
  };

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  return { isClickOutside };
}