import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) {
  const classes = twMerge(
    className(rest.className, 'px-3 py-1.5 border flex items-center', {
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-500 bg-yellow-500 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    })
  );
  return <button className={classes} {...rest} >{children}</button>;
}

Button.propTypes = {
  checkVariationType: ({
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
  }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!rounded);
    if (count > 1) {
      return new Error('Invalid variant props, only one is allowed');
    }
  },
};

export default Button;
