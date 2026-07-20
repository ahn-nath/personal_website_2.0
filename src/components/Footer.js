import SocialIcons from './SocialIcons';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="site-footer-credit">
          Designed and developed by{' '}
          <span className="site-footer-name">Nathaly Toledo</span>
          {' · '}
          <span className="site-footer-rights">© {YEAR} All rights reserved</span>
        </p>

        <div className="site-footer-aside">
          <div className="site-footer-divider" aria-hidden="true" />
          <SocialIcons className="site-footer-socials" />
        </div>
      </div>
    </footer>
  );
}
