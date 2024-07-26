import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faGithub,
  faPython,
  faJava,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faGit
} from '@fortawesome/free-brands-svg-icons';

// Note: You might need to include these icons if not already available
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
// import { faFirebase } from '@fortawesome/free-brands-svg-icons';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
  return (
    <section >
      <FontAwesomeIcon icon={faReact} title="React.js" className="pixely-icon hover:text-primary" />
      <FontAwesomeIcon icon={faNodeJs} title="Node.js" className="pixely-icon  hover:text-primary" />
      <FontAwesomeIcon icon={faGit} title="Git" className="pixely-icon  hover:text-primary" />
      <FontAwesomeIcon icon={faGithub} title="GitHub" className="pixely-icon  hover:text-primary" />
      <FontAwesomeIcon icon={faPython} title="Python" className="pixely-icon  hover:text-primary" />
      <FontAwesomeIcon icon={faJava} title="JavaScript" className="pixely-icon  hover:text-primary" />
      <FontAwesomeIcon icon={faCss3Alt} title="CSS" className="pixely-icon  hover:text-primary" />
      <FontAwesomeIcon icon={faHtml5} title="HTML" className="pixely-icon  hover:text-primary" />
      <FontAwesomeIcon icon={faJsSquare} title="JavaScript" className="pixely-icon  hover:text-primary" />
      <FontAwesomeIcon icon={faGoogle} title="Google Cloud" className="pixely-icon  hover:text-primary" />
      {/* <FontAwesomeIcon icon={faFirebase} title="Firebase" className="pixely-icon" /> */}
      <FontAwesomeIcon icon={faKaggle} title="Kaggle" className="pixely-icon  hover:text-primary" />
  </section>
  );
}


