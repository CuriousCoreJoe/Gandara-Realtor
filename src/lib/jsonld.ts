import type { Locale } from '@/i18n/routing';
import { absoluteUrl, localizedPath, type RouteKey } from '@/lib/routes';
import { SITE, SITE_URL } from '@/lib/site';

/**
 * JSON-LD structured data builders. Rendered via the <JsonLd /> component.
 */

export function realEstateAgentJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RealEstateAgent'],
    '@id': `${SITE_URL}/#agent`,
    name: SITE.agentName,
    alternateName: SITE.siteName,
    url: SITE_URL,
    telephone: '+1-915-355-0494',
    email: SITE.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.brokerAddress.streetAddress,
      addressLocality: SITE.brokerAddress.addressLocality,
      addressRegion: SITE.brokerAddress.addressRegion,
      postalCode: SITE.brokerAddress.postalCode,
      addressCountry: SITE.brokerAddress.addressCountry,
    },
    areaServed: {
      '@type': 'City',
      name: 'El Paso',
    },
    knowsLanguage: ['en', 'es'],
    sameAs: [
      SITE.instagramUrl,
      SITE.profiles.gepar,
      SITE.profiles.zillow,
      SITE.profiles.realtor,
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: SITE.trecNumber,
      recognizedBy: {
        '@type': 'Organization',
        name: 'Texas Real Estate Commission (TREC)',
      },
    },
    // Note: Angelina is a sales agent, not a brokerage. The brokerage is
    // referenced separately below for transparency/TREC compliance.
    memberOf: {
      '@type': 'Organization',
      name: SITE.broker,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.brokerAddress.streetAddress,
        addressLocality: SITE.brokerAddress.addressLocality,
        addressRegion: SITE.brokerAddress.addressRegion,
        postalCode: SITE.brokerAddress.postalCode,
        addressCountry: SITE.brokerAddress.addressCountry,
      },
    },
  };
}

export function freeValuationServiceJsonLd(locale: Locale) {
  const sellersPath = localizedPath(locale, 'sellers' as RouteKey);
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Free Home Valuation',
    serviceType: 'Real Estate Valuation',
    url: absoluteUrl(sellersPath),
    provider: {
      '@type': 'RealEstateAgent',
      name: SITE.agentName,
      url: SITE_URL,
      telephone: '+1-915-355-0494',
    },
    areaServed: {
      '@type': 'City',
      name: 'El Paso',
    },
  };
}
