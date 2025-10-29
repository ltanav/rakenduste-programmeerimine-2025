export const postalCodeRegex = /^\d{5}$/;
export const capitalizedWordRegex = /\b[A-ZÄÖÕÜ][a-zäöõü]+/;
export const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;
export const hashtagRegex = /#[A-Za-z0-9_]+/;
export const urlRegex = /https?:\/\/[^\s]+/;
// lihtne, turvaline email kontroll (mitte 100% RFC, aga praktiline)
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// lihtne telefoni number (numbrid, + ja tühikud/sidekriipsud)
export const phoneRegex = /^[+\d][\d\s-]{4,}$/;
