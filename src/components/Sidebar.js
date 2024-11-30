import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Accordion', path: '/' },
    { label: 'Dropdown', path: '/dropdown' },
    { label: 'Button', path: '/buttons' },
  ];

  const renderedItems = links.map((link) => (
    <Link
      key={link.label}
      to={link.path}
      className="mb-3"
      activeClassName="font-bold pl-2 border-l-2 border-blue-500"
    >
      {link.label}
    </Link>
  ));
  return (
    <div className="sticky top-0 overflow-y-auto flex flex-col items-start">
      {renderedItems}
    </div>
  );
}

export default Sidebar;
