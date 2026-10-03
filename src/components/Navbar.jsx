import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/profile';
import { EASE } from '../lib/motion';

// Every target fills the height of the pill, so hit areas clear 44px.
const barLink =
  'inline-flex h-11 min-w-11 items-center justify-center px-3 text-xs transition-colors duration-200 hover:text-accent';
const menuLink = 'flex min-h-12 items-center rounded-small px-4 text-xl font-semibold tracking-tight';

export default function Navbar() {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    document.body.style.overflow = 'hidden';
    const handleKey = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      {/* A floating glass pill: content scrolls underneath and shows through. */}
      <div className="glass glass-nav relative z-10 mx-auto flex h-12 max-w-[1200px] items-center justify-between rounded-full pr-2 pl-5">
        <Link
          to="/"
          aria-label="Charan Nayak, home"
          className="inline-flex h-11 min-w-11 items-center text-[1.0625rem] font-semibold tracking-tight"
        >
          Charan
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `${barLink} ${isActive ? 'font-semibold' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a href={profile.resume} target="_blank" rel="noreferrer" className={barLink}>
                Résumé
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center">
          <Link to="/contact" className="group hidden h-11 items-center sm:inline-flex">
            <span className="rounded-full bg-button px-3.5 py-1.5 text-xs text-white transition-colors duration-200 group-hover:bg-button-hover">
              Let&rsquo;s talk
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-11 items-center justify-center rounded-full text-fg md:hidden"
          >
            {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Dims the page so the menu text keeps its contrast; tap to close. */}
            <motion.div
              aria-hidden="true"
              onClick={() => setOpen(false)}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 md:hidden"
            />
            <motion.div
              id="mobile-menu"
              data-reveal
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="glass glass-strong relative mx-auto mt-2 max-h-[calc(100svh-5rem)] max-w-[1200px] overflow-y-auto p-3 md:hidden"
            >
              <nav aria-label="Mobile">
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) => `${menuLink} ${isActive ? 'text-accent' : 'text-fg'}`}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <a href={profile.resume} target="_blank" rel="noreferrer" className={`${menuLink} text-fg`}>
                      Résumé
                    </a>
                  </li>
                </ul>
              </nav>
              <Link
                to="/contact"
                className="mt-3 flex h-12 items-center justify-center rounded-full bg-button text-[1.0625rem] text-white"
              >
                Let&rsquo;s talk
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
