import styles from "../components/Skills/Skills.module.scss";

const useImageSlider = (
  containerRef: React.RefObject<HTMLDivElement>,
  itemRef?: React.RefObject<HTMLUListElement>
) => {
  //? item animation
  let isDragging = false;
  let startX: number;
  let scrollLeft: number;
  let activateSnapping: NodeJS.Timeout;

  const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    clearTimeout(activateSnapping);
    isDragging = true;

    if (containerRef.current) {
      startX = e.pageX - containerRef.current.offsetLeft;
      scrollLeft = containerRef.current.scrollLeft;
    }

    itemRef?.current?.classList.remove(styles["not-touched"]);
  };

  const mouseLeaveHandler = () => {
    isDragging = false;
  };

  const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;

    if (containerRef.current) {
      const dragSpeed = 5000 / containerRef.current.scrollWidth;
      const xPageCoordinate = e.pageX - containerRef.current.offsetLeft;
      const walk = (xPageCoordinate - startX) * dragSpeed;
      containerRef.current?.scrollTo({
        left: scrollLeft - walk,
        behavior: "smooth",
      });

      // console.log(`walk: ${walk}, xPageCoordinate: ${xPageCoordinate}, startX: ${startX}`)
    }
  };

  const mouseUpHandler = () => {
    isDragging = false;
    // containerRef.current?.scrollTo({
    //   left: containerRef.current?.scrollLeft,
    //   behavior: "smooth",
    // });

    activateSnapping = setTimeout(() => {
      containerRef.current?.classList.remove('is-snapping-desactivated');
    }, 500);
  };

  return {
    mouseDownHandler,
    mouseLeaveHandler,
    mouseMoveHandler,
    mouseUpHandler,
  };
};

export default useImageSlider;
