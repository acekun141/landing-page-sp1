import { useEffect, useRef } from "react";
import BgCard from "../../../assets/bgcard.jpg";

const SectionSharing = () => {
  const sharingRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLParagraphElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);
  const text3Ref = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sharingRef.current) return;
      const marginTop = sharingRef.current.offsetTop - window.scrollY;
      if (marginTop <= sharingRef.current.offsetHeight / 2) {
        document.documentElement.classList.add('bg-orange');
      } else {
        document.documentElement.classList.remove('bg-orange');
      }
      const deg = (marginTop >= 0 ? marginTop : 0) * 0.007;
      sharingRef.current.style.transform = `rotate(${deg}deg)`;

    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sharingRef]);

  const getPosition = (el: HTMLDivElement) => {
    let element: any = el;
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
      xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!cardRef.current) return;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const cardHeight = cardRef.current.offsetHeight;
      const cardWidth = cardRef.current.offsetWidth;
      const cardPoint = {
        x: getPosition(cardRef.current).x - window.scrollX,
        y: getPosition(cardRef.current).y - window.scrollY,
      }
      const centrePoint = {
        x: cardPoint.x + Math.round(cardWidth / 2),
        y: cardPoint.y + Math.round(cardHeight / 2),
      }
      const xDeg = Math.round(Math.max(Math.min((mouseX - centrePoint.x) / 50, 180), -180));
      const yDeg = Math.round(Math.max(Math.min((mouseY - centrePoint.y) / 50, 180), -180));
      cardRef.current.style.transform = `rotateX(${yDeg}deg) rotateY(${xDeg * -1}deg)`;
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cardRef]);

  return (
    <div ref={sharingRef} className="section section--sharing">
      <div className="texts">
        <p ref={text1Ref} className="sub-text">GOOGLE|LEEMINHUNG</p>
        <p ref={text2Ref} className="main-text">Lorem ipsum dolor sit amet</p>
        <p ref={text3Ref} className="sub-text">VIEW CASE STUDY</p>
      </div>
      <div className="card-wrapper">
        <div id="testdiv" ref={cardRef} className="card">
          <img src={BgCard} alt="bg" />
        </div>
      </div>
    </div>
  );
}

export default SectionSharing;
