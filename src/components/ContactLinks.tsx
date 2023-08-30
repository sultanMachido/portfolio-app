const links = [
  {
    url: "github.com/sultanMachido",
    name: "Github",
  },
  {
    url: "",
    name: "LinkedIn",
  },
  {
    url: "",
    name: "Email",
  },
];

const ContactLinks = () => {
  return (
    <section className="flex justify-center">
      {links.map((link) => (
        <a className="px-[10px]" href={link.url} key={1}>
          {link.name}
        </a>
      ))}
    </section>
  );
};

export default ContactLinks;
