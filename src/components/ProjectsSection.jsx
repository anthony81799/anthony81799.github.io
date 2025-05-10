import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import project1 from "../images/photo1.jpg";
import project2 from "../images/photo2.jpg";
import project3 from "../images/photo3.jpg";
import project4 from "../images/photo4.jpg";

const projects = [
  {
    title: "Medical Appointment Booking",
    description:
      "A web application that allows users to book medical appointments with doctors. The application features a user-friendly interface, allowing users to search for doctors by specialty, view their availability, and book appointments online. The application is built using React, HTML, CSS, JavaScript, and React.",
    getImageSrc: () => project1,
    url: "https://github.com/anthony81799/med-appt"
  },
  {
    title: "Little Lemon Booking Website",
    description:
      "A mockup of a restaurant booking website, with a focus on the booking process and user experience. The website uses React, HTML, CSS, and JavaScript to create a responsive and user-friendly interface. The website allows users to specify the number of diners, select a date and time, and make a reservation.",
    getImageSrc: () => project2,
    url: "https://github.com/anthony81799/reserve-table"
  },
  {
    title: "Plant Shop",
    description:
      "A plant shopping website that allows users to browse and purchase a variety of plants online. The website features a user-friendly interface, with a clean and modern design that showcases the plants in an attractive way. The website includes a shopping cart, allowing users to add plants to their cart and proceed to checkout. React, Redux, and JavaScript are used to create a responsive and interactive experience.",
    getImageSrc: () => project3,
    url: "https://github.com/anthony81799/e-plantShopping"
  },
  {
    title: "UML Diagram Generator",
    description:
      "A terminal and GUI application that allows users to create UML diagrams using a simple and intuitive interface. The application supports various types of UML diagrams, including class diagrams, sequence diagrams, and use case diagrams. Users can easily add and edit elements in the diagram, and export the diagram as an image or PDF file. The project is written is Java and uses Java Swing for the GUI.",
    getImageSrc: () => project4,
    url: "https://github.com/anthony81799/2020sp-420-TeamAwesome"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
