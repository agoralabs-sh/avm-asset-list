import '@app/styles/fonts.css';
import I18next, { i18n } from 'i18next';
import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { initReactI18next } from 'react-i18next';

// components
import App from '@app/components/App';

// translations
import { en } from '@app/translations';

// types
import type { ILogger } from '@app/types';

// utils
import createLogger from '@app/utils/createLogger';

export async function onDOMContentLoaded(): Promise<void> {
  const _functionName: string = 'onDOMContentLoaded';
  const logger: ILogger = createLogger(
    __ENV__ === 'development' ? 'debug' : 'error'
  );
  const rootElement: Element | null = document.getElementById('root');
  let i18next: i18n;
  let root: Root;

  if (!rootElement) {
    logger.error(
      `${_functionName}: failed to find "root" element to render react`
    );

    return;
  }

  root = createRoot(rootElement);
  i18next = I18next.use(initReactI18next);

  await i18next.init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
    },
  });

  root.render(
    createElement(App, {
      i18next,
      logger,
    })
  );
}

window.addEventListener('DOMContentLoaded', onDOMContentLoaded);
