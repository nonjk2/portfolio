import Particles from "react-tsparticles";

function MainBackgroundTwo() {
  return (
    <Particles
      style={{ position: "fixed", top: 0, left: 0 }}
      width="100vw"
      height="100vh"
      options={{
        fullScreen: {
          enable: false,
          zIndex: -111,
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: "#fff",
          },
          line_linked: {
            enable: true,
            opacity: 0.02,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 2.5,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default MainBackgroundTwo;
