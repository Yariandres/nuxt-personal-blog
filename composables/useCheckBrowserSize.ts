import { ref, onMounted, onBeforeUnmount } from "vue";

export default function useCheckBrowserSize() {
  const isMobileSize = ref(false);

  const checkMobileSize = () => {
    isMobileSize.value = window.innerWidth < 768;
  };

  onMounted(() => {
    checkMobileSize();
    window.addEventListener("resize", checkMobileSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", checkMobileSize);
  });

  return {
    isMobileSize,
  };
}
