import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './CSS/Projects.css';

function Projects() {
    const gridItemsRef = useRef([]);

    useEffect(() => {
        gridItemsRef.current.forEach((item) => {
            if (!item) return;

            // Hover in animation
            const handleMouseEnter = () => {
                gsap.to(item, {
                    scale: 1.05,
                    z: 50,
                    rotationX: 15,
                    rotationY: 15,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    duration: 0.2,
                    ease: 'power2.out'
                });
            };

            // Hover out animation
            const handleMouseLeave = () => {
                gsap.to(item, {
                    scale: 1,
                    z: 0,
                    rotationX: 0,
                    rotationY: 0,
                    boxShadow: '0 0 0 rgba(0,0,0,0)',
                    duration: 0.25,
                    ease: 'power2.inOut'
                });
            };

            item.addEventListener('mouseenter', handleMouseEnter);
            item.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                item.removeEventListener('mouseenter', handleMouseEnter);
                item.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
    }, []);

    return (
        <div id='projects'>
            <div className="div1" ref={(el) => (gridItemsRef.current[0] = el)}><img src="public/images/grid/arik.JPG" alt="" /></div>
            <div className="div2" ref={(el) => (gridItemsRef.current[1] = el)}><img src="public/images/grid/rock.JPG" alt="" /></div>
            <div className="div3" ref={(el) => (gridItemsRef.current[2] = el)}><img src="public/images/grid/repel.JPG" alt="" /></div>
            <div className="div4" ref={(el) => (gridItemsRef.current[3] = el)}><img src="public/images/grid/fade.JPG" alt="" /></div>
            <div className="div5" ref={(el) => (gridItemsRef.current[4] = el)}><img src="public/images/grid/look.JPG" alt="" /></div>
            <div className="div6" ref={(el) => (gridItemsRef.current[5] = el)}><img src="public/images/grid/brekky.JPG" alt="" /></div>
            <div className="div7" ref={(el) => (gridItemsRef.current[6] = el)}><img src="public/images/grid/swing.JPG" alt="" /></div>
            <div className="div8" ref={(el) => (gridItemsRef.current[7] = el)}><img src="public/images/grid/view.JPG" alt="" /></div>
        </div>
    );
}

export default Projects;