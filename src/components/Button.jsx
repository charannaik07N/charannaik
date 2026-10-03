import { Link } from 'react-router-dom';

// primary: the one filled action. secondary: a text link (callers end it
// with a Chevron, or the ↗ icon when it leaves the site).
const VARIANTS = {
  primary: 'rounded-full bg-button px-6 text-white hover:bg-button-hover active:scale-[0.97]',
  secondary: 'px-2 text-accent hover:underline',
};

// An action. Renders a router link (`to`), an anchor (`href`) or a plain
// button. Always at least 44px tall.
export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const classes = `group inline-flex h-11 min-w-11 items-center justify-center gap-1.5 text-[1.0625rem] tracking-tight transition-[color,background-color,transform] duration-200 ${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {};
    return (
      <a href={href} {...external} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
