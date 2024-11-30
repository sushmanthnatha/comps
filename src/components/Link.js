import classNames from 'classnames';
import useNavigationContext from '../hooks/useNavigationContext';

function Link({ to, children, className, activeClassName }) {
  const { currentPath, navigate } = useNavigationContext();
  const classses = classNames(
    'text-blue-500 p-1',
    className,
    to === currentPath && activeClassName
  );
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();

    navigate(to);
  };
  return (
    <a href={to} className={classses} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
