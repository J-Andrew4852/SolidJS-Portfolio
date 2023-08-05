import { createSignal, createEffect } from 'solid-js';
import { Accessor } from 'solid-js';
import styles from './homeCanvas.module.css'

type Circle = {
  x: number;
  y: number;
  radius: number;
  growth: number;
  opacity: number;
  startTime: number;
  lifespan: number;
  direction: number;
};

interface Props {
    fillColor: Accessor<any>;
}

const ParticleAnimation = (props: Props) => {
  const [canvasRef, setCanvasRef] = createSignal<HTMLCanvasElement>();

  createEffect(() => {
    if (!canvasRef()) return;

    const ctx = canvasRef()!.getContext('2d')!;
    const canvas = canvasRef()!;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Set circle properties
    const radius = 0.2;
    const maxRadius = 60;
    const speed = 5.5;
    const growthRate = 0.4;
    const fadeRate = 0.003;
    const maxOpacity = 0.8;
    const lifespanSeconds = 10;
    const creationInterval = 250; // 1000 = 1 seconds

    // Create empty array to store circles
    let circles: Circle[] = [];

    // Create function to add new circle
    function addNewCircle() {
      // Get center of canvas
      let centerX;
      if (window.matchMedia("(max-width: 1024px)").matches) {
        centerX = canvas.width / 2;
        // console.log('2')
      } else {
        centerX = canvas.width / 1.3;
        // console.log('1.3')
      }
      const centerY = canvas.height / 2;

      // Generate random angle for circle direction
      const directionAngle = Math.random() * Math.PI * 2;

      // Create new circle with initial properties
      const newCircle: Circle = {
        x: centerX,
        y: centerY,
        radius: radius,
        growth: growthRate,
        opacity: maxOpacity,
        startTime: performance.now(),
        lifespan: lifespanSeconds * 1000,
        direction: directionAngle,
      };

      // Add new circle to array
      circles.push(newCircle);
    }

    // Call addNewCircle function at a set interval
    setInterval(addNewCircle, creationInterval);

    // Set animation loop
    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Loop through circles
      for (let i = 0; i < circles.length; i++) {
        // Draw circle
        ctx.beginPath();
        ctx.arc(
          circles[i].x,
          circles[i].y,
          circles[i].radius,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(${props.fillColor()}, ${circles[i].opacity})`;
        // ctx.shadowBlur = 20;
        ctx.fill();

        // Increase size and decrease opacity
        circles[i].radius += circles[i].growth;
        circles[i].opacity -= fadeRate;

        // Move circle in random direction
        circles[i].x += speed * Math.cos(circles[i].direction);
        circles[i].y += speed * Math.sin(circles[i].direction);

        // Remove circle if its lifespan has expired
        const elapsedTime = performance.now() - circles[i].startTime;
        if (elapsedTime >= circles[i].lifespan) {
          circles.splice(i, 1);
          i--;
        }
      }

      // Call animate function recursively
      setTimeout(animate, 33); // Call every 33 milliseconds (30 frames per second)
    }

    // Call animate function to start animation loop
    animate();
  });

  return <canvas class={styles.canvas} ref={setCanvasRef} />;
};

export default ParticleAnimation;
