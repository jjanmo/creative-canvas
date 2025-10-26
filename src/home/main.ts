import '@/home/styles.css';

// 카드 호버 효과
const cards = document.querySelectorAll<HTMLElement>('.card');

cards.forEach((card) => {
  card.addEventListener('mousemove', (e: MouseEvent) => {
    const cardElem = e.currentTarget as HTMLElement;
    const { left, top } = cardElem.getBoundingClientRect();
    const { clientX, clientY } = e;

    const mouseX = clientX - left;
    const mouseY = clientY - top;

    cardElem.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgb(116, 185, 255) 0%, rgba(116,185,255,0) calc(0% + 180px))`;
  });

  card.addEventListener('mouseout', (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    target.removeAttribute('style');
  });
});
