'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';
import type { Locale } from '@/i18n/routing';

const FORM_EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js';

const FORMS = {
  en: { formId: 'zlxmR7tfh8p88jF7Km0f', formName: 'Lead Contact EN' },
  es: { formId: 'rOqy4osPogv3rFQ4GEjy', formName: 'Lead Contact ES' },
} as const;

const REDIRECT_URL = 'https://angelinagandara.homeprosrealestategroup.com/';

export function GhlFormModal({ locale, className }: { locale: Locale; className?: string }) {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
    const redirectedRef = useRef(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const { formId, formName } = FORMS[locale];

  const handleMessage = useCallback((e: MessageEvent) => {
    if (redirectedRef.current) return;
    if (!e.origin.includes('leadconnectorhq.com') && !e.origin.includes('msgsndr.com')) return;
    if (!iframeRef.current?.contentWindow) return;
    if (e.source !== iframeRef.current.contentWindow) return;
    if (!openRef.current) return;
    let data = e.data;
    if (typeof data === 'string') {
      try { data = JSON.parse(data); } catch (_) { return; }
    }
    if (!data || typeof data !== 'object') return;
    if (data.height !== undefined) return;
    if (data.type === 'setHeight') return;
    if (data.type === 'ready') return;
    const isSubmission = Array.isArray(data) && data[0] === 'set-sticky-contacts';
    if (!isSubmission) return;
    redirectedRef.current = true;
    window.location.href = REDIRECT_URL;
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    openRef.current = open;
    if (open) {
    }
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    if (!scriptRef.current) {
      const script = document.createElement('script');
      script.src = FORM_EMBED_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
      scriptRef.current = script;
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        Browse Listings
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 pt-12">
          <button
            type="button"
            className="fixed inset-0 bg-ink/50"
            aria-label="Close form"
            onClick={() => setOpen(false)}
            tabIndex={-1}
          />
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-soft text-ink transition-colors hover:bg-gray-300"
              aria-label="Close"
            >
              &times;
            </button>
            <div className="w-full">
              <iframe
                ref={iframeRef}
                src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
                style={{ width: '100%', minHeight: '600px', border: 'none', borderRadius: '8px' }}
                id={`modal-${formId}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={formName}
                data-height="800"
                data-layout-iframe-id={`modal-${formId}`}
                data-form-id={formId}
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                title={formName}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function ListingsCta({
  locale,
  variant,
  className,
  children,
}: {
  locale: Locale;
  variant: 'primary' | 'accent' | 'outline' | 'white' | 'whiteOutline' | 'ghost';
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
    const redirectedRef = useRef(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const { formId, formName } = FORMS[locale];

  const handleMessage = useCallback((e: MessageEvent) => {
    if (redirectedRef.current) return;
    if (!e.origin.includes('leadconnectorhq.com') && !e.origin.includes('msgsndr.com')) return;
    if (!iframeRef.current?.contentWindow) return;
    if (e.source !== iframeRef.current.contentWindow) return;
    if (!openRef.current) return;
    let data = e.data;
    if (typeof data === 'string') {
      try { data = JSON.parse(data); } catch (_) { return; }
    }
    if (!data || typeof data !== 'object') return;
    if (data.height !== undefined) return;
    if (data.type === 'setHeight') return;
    if (data.type === 'ready') return;
    const isSubmission = Array.isArray(data) && data[0] === 'set-sticky-contacts';
    if (!isSubmission) return;
    redirectedRef.current = true;
    window.location.href = REDIRECT_URL;
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    openRef.current = open;
    if (open) {
    }
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    if (!scriptRef.current) {
      const script = document.createElement('script');
      script.src = FORM_EMBED_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
      scriptRef.current = script;
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const baseClasses = 'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-2.5 text-base font-semibold transition-colors';

  const variantClasses: Record<string, string> = {
    primary: 'bg-copyblue text-white hover:bg-copyblue-dark',
    accent: 'bg-yellow text-ink hover:bg-yellow-dark',
    outline: 'border border-copyblue text-copyblue hover:bg-copyblue-light',
    white: 'bg-white text-copyblue hover:bg-gray-soft',
    whiteOutline: 'border border-white text-white hover:bg-white/10',
    ghost: 'text-copyblue hover:bg-copyblue-light',
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
      >
        {children}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 pt-12">
          <button
            type="button"
            className="fixed inset-0 bg-ink/50"
            aria-label="Close form"
            onClick={() => setOpen(false)}
            tabIndex={-1}
          />
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-soft text-ink transition-colors hover:bg-gray-300"
              aria-label="Close"
            >
              &times;
            </button>
            <div className="w-full">
              <iframe
                ref={iframeRef}
                src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
                style={{ width: '100%', minHeight: '600px', border: 'none', borderRadius: '8px' }}
                id={`listings-${formId}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={formName}
                data-height="800"
                data-layout-iframe-id={`listings-${formId}`}
                data-form-id={formId}
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                title={formName}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}


export function ListingsCardCta({
  locale,
  icon,
  title,
  subtitle,
}: {
  locale: Locale;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
    const redirectedRef = useRef(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const { formId, formName } = FORMS[locale];

  const handleMessage = useCallback((e: MessageEvent) => {
    if (redirectedRef.current) return;
    if (!e.origin.includes('leadconnectorhq.com') && !e.origin.includes('msgsndr.com')) return;
    if (!iframeRef.current?.contentWindow) return;
    if (e.source !== iframeRef.current.contentWindow) return;
    if (!openRef.current) return;
    let data = e.data;
    if (typeof data === 'string') {
      try { data = JSON.parse(data); } catch (_) { return; }
    }
    if (!data || typeof data !== 'object') return;
    if (data.height !== undefined) return;
    if (data.type === 'setHeight') return;
    if (data.type === 'ready') return;
    const isSubmission = Array.isArray(data) && data[0] === 'set-sticky-contacts';
    if (!isSubmission) return;
    redirectedRef.current = true;
    window.location.href = REDIRECT_URL;
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    openRef.current = open;
    if (open) {
    }
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    if (!scriptRef.current) {
      const script = document.createElement('script');
      script.src = FORM_EMBED_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
      scriptRef.current = script;
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex w-full items-center rounded-[14px] border border-gray-soft bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow hover:bg-yellow hover:shadow-[0_8px_16px_rgba(255,179,83,0.25)]"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-copyblue/10 text-copyblue transition-colors duration-300 group-hover:bg-white/40 group-hover:text-ink">
          {icon}
        </span>
        <span className="ml-4 flex flex-col">
          <span className="text-lg font-semibold leading-snug text-ink">
            {title}
          </span>
          <span className="text-sm text-muted transition-colors duration-300 group-hover:text-ink">
            {subtitle}
          </span>
        </span>
        <ChevronRight
          className="ml-auto h-5 w-5 shrink-0 text-yellow transition-colors duration-300 group-hover:text-ink"
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 pt-12">
          <button
            type="button"
            className="fixed inset-0 bg-ink/50"
            aria-label="Close form"
            onClick={() => setOpen(false)}
            tabIndex={-1}
          />
          <div className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-soft text-ink transition-colors hover:bg-gray-300"
              aria-label="Close"
            >
              &times;
            </button>
            <div className="w-full">
              <iframe
                ref={iframeRef}
                src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
                style={{ width: '100%', minHeight: '600px', border: 'none', borderRadius: '8px' }}
                id={`card-${formId}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={formName}
                data-height="800"
                data-layout-iframe-id={`card-${formId}`}
                data-form-id={formId}
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                title={formName}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

