const PrivacyAside = ({ linkHead, activeLink }) => {
  // To stop the anchor tag href value from appearing in the URL BAR
  const handleClick = (e) => {
    // Prevent the default behavior of the anchor tag
    e.preventDefault();
    // Get the id of the section to navigate to
    const sectionId = e.currentTarget.getAttribute('href').substr(1);
    // Get the section element
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll to the section smoothly
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="sticky hidden lg:block top-10  w-[24rem] mr-10">
      <h1 className="mb-8 text-2xl font-bold">On this page</h1>
      <ol className="flex flex-col py-6  gap-4 text-sm tracking-wide bg-[#F8F8F8] rounded-md">
        {linkHead.map((link, index) => {
          const { id, href, text } = link;
          return (
            <li
              key={id}
              className={`px-4 ${
                activeLink === href
                  ? 'text-teal-600 border-l-2 border-l-teal-600 '
                  : ''
              }`}
            >
              <a
                href={href}
                onClick={handleClick}
                className={`relative py-2 text-sm hover:text-teal-600 ${
                  activeLink === href ? 'text-teal-600' : ''
                }`}
              >
                {index + 1}. {text}
              </a>
            </li>
          );
        })}
      </ol>
    </aside>
  );
};
export default PrivacyAside;
