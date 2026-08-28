/**
 * TODO — EVERY FIGURE BELOW IS OUT OF DATE.
 *
 * Source: Wayback capture of amoncarterwater.com/rates-and-fees/ (2019).
 * We know these are wrong: the 2023 rate letter on the old homepage announced
 * a $55.00 base rate while this page still showed $32.00. The authoritative
 * source is the tariff adopted 08 May 2024, filed with the PUC under Control
 * Number 56520 — pull it from PUC Interchange by hand (the site blocks
 * automated access) and replace everything here.
 *
 * Also missing from these figures, but present in later cached copies of the
 * rates page: a $25.00 non-disclosure fee, and a requirement for three
 * inspections by the corporation's inspector before service begins.
 */
export const monthly = {
  minimum: '$32.00',
  includes: '2,000 gallons',
  overage: '$4.50',
  overageUnit: 'per 1,000 gallons after that',
};

export const connection = [
  { label: 'Labor and installation', amount: '$500.00' },
  { label: 'Meter, piping, valves, license fees, inspections', amount: '$295.00' },
  { label: 'Refundable deposit', amount: '$200.00', note: 'Returned when you sell or leave the property' },
];

export const connectionTotal = '$995.00';

export const otherLines = [
  { label: '1 inch line', amount: '$1,195.00' },
  { label: '2 inch line', amount: '$3,365.00' },
];

export const transferFee = '$25.00';