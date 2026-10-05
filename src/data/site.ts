import type { Settings } from "./types";

/* ──────────────────────────────────────────────────────────────
   SITE — business facts.
   Confirmed by the owner: name, phone, address, Instagram.
   ⚠️ PLACEHOLDER: map coordinates, opening hours text.
   ────────────────────────────────────────────────────────────── */

export const site = {
  name: "Delin Beauty",
  nameFa: "سالن زیبایی دلین",
  city: "سبزوار",
  phone: "09383180536",
  phoneIntl: "+989383180536",
  address: "سبزوار - بلوار پاسداران - پاسداران ۳/۱",
  instagram: {
    handle: "@delin.beuatysalon",
    url: "https://instagram.com/delin.beuatysalon",
    isPlaceholder: false,
  },
  map: {
    // ⚠️ PLACEHOLDER — directions open a search for the address until exact coordinates are provided
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("سبزوار بلوار پاسداران ۳/۱"),
    isPlaceholder: true,
  },
  hoursText: "شنبه تا پنجشنبه · ۱۰ تا ۲۰", // ⚠️ DEMO
  url: "https://delin-beauty.example", // ⚠️ set the production domain
};

export const defaultSettings: Settings = {
  salonName: "Delin Beauty",
  phone: site.phone,
  bufferMin: 15,
  cancellationWindowHours: 24,
  cancellationFeePercent: 20,
  bookingHorizonDays: 45,
  slotStepMin: 15,
};
