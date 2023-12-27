import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  const email = "sandipankalitaofficial@gmail.com";
  const githubUrl = "https://github.com/sandipanxlr8";
  const linkedinUrl = "https://www.linkedin.com/in/sandipan-kalita";

  const handleExternalLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div id="contact" className="mt-[100px] mb-12">
      <h2 className="text-[3.5rem]/[1.15] lg:text-[8rem]/[1.15] break-words font-medium">
        CONTACT
      </h2>
      <div className="sm:mx-6 mt-4">
        <p>
          Thank you for visiting my portfolio! I'm excited to connect with you.
          Whether you have a project in mind, a job opportunity, or just want to
          say hello, feel free to reach out. I'm always open to new
          collaborations and conversations.
        </p>

        <div className="mt-10 font-normal text-center sm:text-start">
          FIND ME AT
        </div>
        <div className="flex flex-row mt-4 justify-center md:justify-normal">
          <div className="text-center">
            <Mail
              className="mx-4 h-12 w-12 hover:text-accent-foreground hover:cursor-pointer"
              onClick={() => handleExternalLinkClick(`mailto:${email}`)}
            />
            <p>Mail</p>
          </div>
          <div className="text-center">
            <Linkedin
              className="mx-4 h-12 w-12 hover:text-accent-foreground hover:cursor-pointer"
              onClick={() => handleExternalLinkClick(linkedinUrl)}
            />
            <p>LinkedIn</p>
          </div>
          <div className="text-center">
            <Github
              className="mx-4 h-12 w-12 hover:text-accent-foreground hover:cursor-pointer"
              onClick={() => handleExternalLinkClick(githubUrl)}
            />
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
