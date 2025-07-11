import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex justify-center items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:kirandeepmaan45@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    kirandeepmaan45@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 pt-5">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Vill: Saidpura, PO: Bhari, {<br />} PinCode: 141411, Punjab,
                    India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-3">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/kirandeep-singh-maan/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://github.com/KSMaan45" target="_blank">
                  <Github />
                </a>
                <a
                  href="https://www.instagram.com/kirandeep_singh_maan/"
                  target="_blank"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
