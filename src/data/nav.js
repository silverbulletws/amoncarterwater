/**
 * Site navigation and contact details.
 *
 * TODO: every `href` below marked TODO is a placeholder — the homepage is the
 * only page that exists. Interior pages are out of scope for this build.
 */

export const nav = [
  { label: 'Notices',       href: '#notices'       /* TODO: /notices */ },
  { label: 'My account',    href: '#my-account'    /* TODO: /my-account */ },
  { label: 'Water quality', href: '#water-quality' /* TODO: /water-quality */ },
  { label: 'Contact',       href: '#contact'       /* TODO: /contact */ },
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
  email: 'info@amoncarterwater.com',
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
  { label: 'Pay your bill',      href: '#pay'           /* TODO */ },
  { label: 'Start service',      href: '#start-service' /* TODO */ },
  { label: 'Transfer service',   href: '#transfer'      /* TODO */ },
  { label: 'Bank draft',         href: '/bank-draft' },
  { label: 'Service area',       href: '#service-area'  /* TODO */ },
  { label: 'Consumer Confidence Report', href: '#ccr'   /* TODO: 2025 CCR — awaiting the PDF */ },
];
