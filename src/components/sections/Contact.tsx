import { contacts } from "../../constants/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="h2-retro scan-in text-2xl md:text-3xl text-[var(--accent)] mb-8">Let's Connect</h2>
        <p className="text-sm md:text-base text-[var(--text)] mb-12 max-w-2xl mx-auto font-mono">
          Have an exciting project in mind? I'd love to hear about it and
          explore how we can bring your vision to life.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact, index) => (
            <div
              key={index}
              onClick={() => {
                if (contact.url) {
                  window.open(contact.url, "_blank", "noopener,noreferrer");
                }
              }}
              className="cursor-pointer window p-6 transition-colors hover:opacity-80"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={contact.image}
                  alt={contact.title}
                  className={contact.imageSize}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                {contact.title}
              </h3>
              <p className="text-[var(--text)] font-mono break-all max-w-full">
                {contact.value}
              </p>
            </div>
          ))}
        </div>
        
        <button
          onClick={() => window.open("mailto:b305ryan123@gmail.com", "_blank")}
          className="btn-retro btn-retro--solid"
        >
          Send me an email
        </button>
      </div>
    </section>
  );
}


