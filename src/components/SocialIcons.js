import { socialLinks } from '../data/socialLinks';

export default function SocialIcons({ className = '' }) {
  return (
    <nav className={`social-icons ${className}`.trim()} aria-label="Social media">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="social-icon-link"
        >
          <i className={link.icon} aria-hidden="true"></i>
        </a>
      ))}
    </nav>
  );
}
