import SocialIcons from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

const YEAR = new Date().getFullYear();

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="site-footer-credit">
          {t('footer.credit')}{' '}
          <span className="site-footer-name">Nathaly Toledo</span>
          {' · '}
          <span className="site-footer-rights">© {YEAR} {t('footer.rights')}</span>
        </p>

        <div className="site-footer-aside">
          <div className="site-footer-divider" aria-hidden="true" />
          <SocialIcons className="site-footer-socials" />
        </div>
      </div>
    </footer>
  );
}
