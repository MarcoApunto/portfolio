
const ContactSection = () => (
  <section className="container mx-auto my-12 text-center">
    <h2 className="text-3xl font-bold mb-8">
      Contacto
    </h2>
    <div className="flex justify-center space-x-4">
      <a
        href="https://www.linkedin.com/in/marcofs/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        LinkedIn
      </a>
      <a
        href="mailto:ferreiras.marcoa@gmail.com"
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
      >
        Email
      </a>
    </div>
  </section>
);

export default ContactSection;