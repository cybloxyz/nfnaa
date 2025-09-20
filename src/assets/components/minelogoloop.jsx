import LogoLoop from "../../components/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLogos = [
  { node: <FaInstagram />, title: "Instagram", href: "https://instagram.com/nfnailalhusna" },
  { node: <FaGithub />, title: "GitHub", href: "https://github.com/cybloxyz" },
  { node: <FaEnvelope />, title: "Email", href: "mailto:nafisanailalh7@gmail.com" },
];


// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function App() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={socialLogos}
        speed={120}
        direction="left"
        logoHeight={32}
        gap={30}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff3d"
        ariaLabel="Social Reach"
      />
    </div>
  );
}

export default App;
