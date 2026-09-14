import type { Locale } from '@/i18n/routing';

const FORM_EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js' as const;

const FORMS = {
  en: {
    formId: 'zlxmR7tfh8p88jF7Km0f',
    formName: 'Lead Contact EN',
  },
  es: {
    formId: 'rOqy4osPogv3rFQ4GEjy',
    formName: 'Lead Contact ES',
  },
} as const;

const CALENDARS = {
  en: {
    bookingId: '7sRdxBWd4WlO8YFx3oZ0',
  },
  es: {
    bookingId: 'peSGQuzXL4eQt7xFuARE',
  },
} as const;

export function GhlForm({ locale }: { locale: Locale }) {
  const { formId, formName } = FORMS[locale];

  return (
    <div className="w-full">
      <script src={FORM_EMBED_SCRIPT} />
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height="1479"
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title={formName}
      />
    </div>
  );
}

export function GhlCalendar({ locale }: { locale: Locale }) {
  const { bookingId } = CALENDARS[locale];

  return (
    <div className="w-full">
      <script src={FORM_EMBED_SCRIPT} type="text/javascript" />
      <iframe
        src={`https://api.leadconnectorhq.com/widget/booking/${bookingId}`}
        allow="payment"
        style={{ width: '100%', border: 'none' }}
        scrolling="no"
        id={`${bookingId}_1789349075919`}
      />
    </div>
  );
}
