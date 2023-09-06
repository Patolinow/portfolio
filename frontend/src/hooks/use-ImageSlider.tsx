

const useImageSlider = (containerRef:React.RefObject<HTMLDivElement>) => {
  //? item animation
  let isDragging = false;
  let startX: number;
  let scrollLeft: number;
  let activateSnapping: NodeJS.Timeout;
  
  const touchstartHandler = () => {
    clearTimeout(activateSnapping);
    containerRef.current?.classList.remove('is-snapping-desactivated');
    console.log('touch Started');
  }

  const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { 
    clearTimeout(activateSnapping);
    // !Arrumar os "!" do código
  isDragging = true;
  containerRef.current?.classList.add('is-snapping-desactivated');
  startX = e.pageX - containerRef.current?.offsetLeft!;
  scrollLeft = containerRef.current?.scrollLeft!;
  console.log('mouse down');
  }

  const mouseLeaveHandler = () => {
    isDragging = false;
  containerRef.current?.classList.remove('is-snapping-desactivated');
  console.log('mouse leave');
  }

  const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const formula = 5000 / containerRef.current?.scrollWidth!
    if(!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current?.offsetLeft!;
    const walk = (x - startX) * (formula);
    containerRef.current?.scrollTo({
      left: scrollLeft - walk
    })

    console.log(formula);
  }

  const mouseUpHandler = () => {
    isDragging = false;
  const oldScrollLeft = containerRef.current?.scrollLeft;
  containerRef.current?.classList.remove('is-snapping-desactivated');
  
  const newScrollLeft = containerRef.current?.scrollLeft;
  containerRef.current?.classList.add('is-snapping-desactivated');
  containerRef.current!.scrollLeft = (oldScrollLeft ?? 0);
  containerRef.current?.scrollTo({
    left: newScrollLeft,
    behavior: 'smooth'
  });
  activateSnapping = setTimeout(() => {
    containerRef.current?.classList.remove('is-snapping-desactivated');
  }, 500);

  console.log('mouse up');
  }
  

  return {
    touchstartHandler,
    mouseDownHandler,
    mouseLeaveHandler,
    mouseMoveHandler,
    mouseUpHandler,
  }
}

export default useImageSlider;