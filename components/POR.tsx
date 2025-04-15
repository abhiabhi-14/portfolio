import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import img_artive from "@/public/POR/artive.png";
import img_algorithmus from "@/public/POR/algorithmus.png";
import img_ingocognito from "@/public/POR/incognito.png";
import img_kernel from "@/public/POR/kernel.jpg";
import img_iiitkota from "@/public/POR/iiitkota_logo2.jpeg";
import img_iiitkota2 from "@/public/POR/iiitkota_logo.png";

export function POR() {
  const testimonials = [
    {
      quote:
        "As a Student Placement Coordinator, I serve as a bridge between the institute and recruiting companies, assisting in organizing placement drives, coordinating student participation, and ensuring smooth communication to enhance placement opportunities for my peers.",
      name: "IIIT Kota",
      designation: "Student Placement Coordinator",
      src: img_iiitkota,
    },
    {
      quote:
        "As the Co-Coordinator of IIIT Kernel, the official technical club of IIIT Kota, I actively organize speaker sessions featuring esteemed alumni and industry experts. I work closely with the team to facilitate insightful interactions that inspire and guide students in their career journeys.",
      name: "IIIT Kernel",
      designation: "Co-coordinator ",
      src: img_kernel,
    },
    {
      quote:
        "As a core member of Algorithm Club, the only coding club of IIIT Kota, I contribute to promoting Data Structures, Algorithms, and Competitive Programming. We regularly organize coding contests, problem-solving sessions, and peer-led discussions to build a strong coding culture on campus.",
      name: "Algorithmus  ",
      designation: "Core Member ",
      src: img_algorithmus,
    },
    {
      quote:
        "As a member of Artive, the official art and craft club of IIIT Kota, I contribute to fostering creativity through art-focused events and workshops. The club also takes charge of campus decorations and organizing artistic showcases, providing a platform for students to express their creativity.",
      name: "Artive",
      designation: "Core Member ",
      src: img_artive,
    },
    {
      quote:
        "As a core member of the Incognito Club, got chance to participate organize and manage cultural events related to dance, music, and drama.",
      name: "Incognito",
      designation: "Core Member ",
      src: img_ingocognito,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
