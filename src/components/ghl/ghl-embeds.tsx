import { getTranslations } from 'next-intl/server';

// ---------------------------------------------------------------------------
// GoHighLevel embed slots.
//
// The GHL vendor will wire these later. Each component renders a clearly
// marked placeholder with an HTML comment showing exactly where the snippet /
// iframe goes. Capture is 100% GHL — there is no backend or custom form
// handler in this app.
//
// Typical GHL embed shapes:
//   Form     <script src="https://link.<account>.msgsndr.com/js/form_embed.js"></script>
//            <iframe src="https://link.<account>.msgsndr.com/widget/form/<formId>" ...></iframe>
//   Chat     <script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="..."></script>
//   Calendar <iframe src="https://link.<account>.msgsndr.com/widget/booking/<calendarId>" ...></iframe>
//
// NOTE: after wiring, add the client's GHL origins to the Content-Security-Policy
// in netlify.toml (script-src / frame-src / form-action).
// ---------------------------------------------------------------------------

function SlotFrame({ label, note }: { label: string; note: string }) {
  return (
    <div className="flex min-h-[260px] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-copyblue/30 bg-gray-soft/50 p-6 text-center">
      <span className="mb-2 inline-block rounded-full bg-copyblue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-copyblue">
        GoHighLevel
      </span>
      <p className="font-semibold text-ink">{label}</p>
      <p className="mt-1 max-w-sm text-sm text-muted">{note}</p>
    </div>
  );
}

export async function GhlForm({ label }: { label?: string }) {
  const t = await getTranslations('ghl');
  return (
    <div>
      {/* GHL: paste form embed here (script + iframe). */}
      <div id="ghl-form-embed" className="w-full">
        <SlotFrame label={label ?? t('form')} note={t('note')} />
      </div>
    </div>
  );
}

export async function GhlChat({ label }: { label?: string }) {
  const t = await getTranslations('ghl');
  return (
    <div>
      {/* GHL: paste chat widget loader script here (after-hours capture). */}
      <div id="ghl-chat-embed" className="w-full">
        <SlotFrame label={label ?? t('chat')} note={t('note')} />
      </div>
    </div>
  );
}

export async function GhlCalendar({ label }: { label?: string }) {
  const t = await getTranslations('ghl');
  return (
    <div>
      {/* GHL: paste calendar/booking iframe here. */}
      <div id="ghl-calendar-embed" className="w-full">
        <SlotFrame label={label ?? t('calendar')} note={t('note')} />
      </div>
    </div>
  );
}
