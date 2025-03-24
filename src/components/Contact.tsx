import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 opacity-0 animate-slide-up animate-delay-200">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10 text-sm">
                <span>Contact Information</span>
              </div>

              <p className="text-muted-foreground">
                Ready to bring your mobile app idea to life? Fill out the form,
                and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="icon-container">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-muted-foreground">
                      ANTS Orchard,Thirumalai Nagar First Main Road, Sembakkam
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="icon-container">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-muted-foreground">info@sembiyan.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="icon-container">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-muted-foreground">9345281193</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 opacity-0 animate-slide-up animate-delay-300">
            <form onSubmit={handleSubmit} className="card">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="button-primary">
                <span>Send Message</span>
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
