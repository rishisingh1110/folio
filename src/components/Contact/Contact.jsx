import { about, contact } from "../../portfolio";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Contact.css";
import { Button } from "@mui/material";

const Contact = () => {
  const { photo, name, role, description, resume, social } = about;

  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="btn">Mobile: +919560389783</span>
      <span className="btn">Email: rishisingh1110@gmail.com</span>
      <div className="center">
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <Button variant="outlined">
                  <GitHubIcon />
                  &nbsp; GITHUB
                </Button>
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <Button variant="outlined">
                  <LinkedInIcon />
                  &nbsp; LinkedIn
                </Button>
              </a>
            )}
          </>
        )}
      </div>
      <a href={`mailto:${contact.email}`}>
        <Button variant="outlined">Email me</Button>
      </a>
    </section>
  );
};

export default Contact;
