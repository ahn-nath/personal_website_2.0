import { useLanguage } from './LanguageContext';

export default function LangToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-toggle-btn${lang === 'en' ? ' is-active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        aria-label={t('lang.enAria')}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-toggle-btn${lang === 'es' ? ' is-active' : ''}`}
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        aria-label={t('lang.esAria')}
      >
        ES
      </button>
    </div>
  );
}
