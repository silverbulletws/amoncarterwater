/**
 * Site navigation and contact details.
 *
 * TODO: every `href` below marked TODO is a placeholder — the homepage is the
 * only page that exists. Interior pages are out of scope for this build.
 */

export const nav = [
  { label: 'Notices',       href: '/notices'        },
  { label: 'Water quality', href: '/#water-quality'  },
  { label: 'Contact',       href: '/#contact'       },
];

export const contact = {
  office: {
    label: 'Business office',
    display: '(940) 872-5505',
    tel: 'tel:9408725505',
  },
  emergency: {
    label: 'Emergency / leaks',
    display: '(940) 841-2961',
    note: 'Technician on duty',
    tel: 'tel:9408412961',
  },
  email: 'info@amoncarterwater.org',
  mail: ['P.O. Box 512', 'Bowie, Texas 76230'],
  office_address: ['607-A Lindsey St', 'Bowie, Texas 76230'],
  facebook: {
    label: 'facebook.com/ACLWSC',
    href: 'https://www.facebook.com/ACLWSC',
  },
};

// NOTE: office hours are deliberately absent. The office is unstaffed; the old
// "9–11AM Tu/We/Th" line would send members to a locked door. Do not add it
// back without confirming someone is actually there.

export const identifiers = {
  ccn: '12793',
  pws: '1690023',
  county: 'Montague County, Texas',
};

export const quickLinks = [
  { label: 'Pay your bill',      href: '/#pay-your-bill'  },
  { label: 'Start service',      href: '/start-service' },
  { label: 'Bank draft',         href: '/bank-draft' },
  { label: 'Service area',       href: '#service-area'  /* TODO */ },
  { label: 'Drought Contingency Plan', href: '/reports/droughtcontingency2019Bowie.pdf', newTab: true },
  { label: 'Consumer Confidence Report', href: '/reports/ccr-2025.pdf', newTab: true },
  
];
