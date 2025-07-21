import { ABOUT_CORPORATION_LINK, FEEDBACK_PAGE, ABOUT_EVENTS_LINK, ABOUT_IT_LINK, ABOUT_LEADERSHIP_LINK, ABOUT_LINK, BUS_PASS_FAQ_LINK, BUS_PASS_GENERAL_LINK, BUS_PASS_LINK, BUS_PASS_OTHER_LINK, BUS_PASS_STUDENT_LINK, CONTACT_US_LINK, HOSPITAL_LINK, LOGISTICS_CONTACTS_LINK, LOGISTICS_LINK, LOGISTICS_RATES_LINK, RESERVATIONS_BUS_LINK, RESERVATIONS_MARKETING_LINK, RESERVATIONS_CONTRACT_LINK,RESERVATIONS_KALABHAVAN_BOOKING_LINK,RESERVATIONS_KALABHAVAN_BOOKING, RESERVATIONS_FAQ_LINK, RESERVATIONS_LINK, RESERVATIONS_POINTS_LINK, RESERVATIONS_SPL_BUS_LINK, RESERVATIONS_TOURISM_LINK, TENDERS_LINK, TARNAKA_HOSPITAL_LINK, TGSRTC_HOSPITAL_SERVICES, AIRPORT_TIMINGS } from ".";

export interface Sublinks {
  sublinkDisplayName: string;
  sublink: string;
}

export interface HeaderConfig {
  displayName: string;
  isNavLink: boolean;
  link?: string;
  subLinks?: Sublinks[];
  dropDown?: number;
}

export const headerData: HeaderConfig[] = [
  {
    displayName: "Home",
    isNavLink: true,
    link: "/",
  },
  {
    displayName: "About Us",
    isNavLink: false,
    dropDown: 0,
    subLinks: [
      {
        sublinkDisplayName: "About Home",
        sublink: ABOUT_LINK,
      },
      {
        sublinkDisplayName: "The Corporation",
        sublink: ABOUT_CORPORATION_LINK,
      },
      
      {
        sublinkDisplayName: "TGSRTC Leadership",
        sublink: ABOUT_LEADERSHIP_LINK,
      },
      {
        sublinkDisplayName: "IT Initiatives",
        sublink: ABOUT_IT_LINK,
      },
      
      {
        sublinkDisplayName: "Events & Awards",
        sublink: ABOUT_EVENTS_LINK,
      },
    ],
  },
  {
    displayName: "Reservations",
    isNavLink: false,
    dropDown: 0,
    subLinks: [
      {
        sublinkDisplayName: "Book e-Ticket",
        sublink: RESERVATIONS_LINK,
      },
      {
        sublinkDisplayName: "Ticket Booking Agents",
        sublink: RESERVATIONS_POINTS_LINK,
      },
      {
        sublinkDisplayName: AIRPORT_TIMINGS,
        sublink: RESERVATIONS_SPL_BUS_LINK,
      },
      {
        sublinkDisplayName: RESERVATIONS_KALABHAVAN_BOOKING,
        sublink: RESERVATIONS_KALABHAVAN_BOOKING_LINK,
      },
      
      {
        sublinkDisplayName: "Coach Types",
        sublink: RESERVATIONS_BUS_LINK,
      },
      {
        sublinkDisplayName: "Bus on Contract Rates",
        sublink: RESERVATIONS_CONTRACT_LINK,
      },
      {
        // changed name to marketing schemes 
        sublinkDisplayName: "Marketing Schemes",
        sublink: RESERVATIONS_MARKETING_LINK,
      },
      {
        sublinkDisplayName: "Special Bus Timings",
        sublink: RESERVATIONS_SPL_BUS_LINK,
      },
      {
        sublinkDisplayName: "Tourism",
        sublink: RESERVATIONS_TOURISM_LINK,
      },
      {
        sublinkDisplayName: "FAQs",
        sublink: RESERVATIONS_FAQ_LINK,
      },
    ],
  },

  {
    displayName: "Logistics",
    isNavLink: false,
    dropDown: 0,
    subLinks: [
      {
        sublinkDisplayName: "Book Your Cargo",
        sublink: LOGISTICS_LINK,
      },
      
      {
        sublinkDisplayName: "Rates and Tariff",
        sublink: LOGISTICS_RATES_LINK,
      },
      {
        sublinkDisplayName: "Contacts",
        sublink: LOGISTICS_CONTACTS_LINK,
      },
    ],
  },
  {
    displayName: "Bus Passes",
    isNavLink: false,
    dropDown: 0,
    subLinks: [
      {
        sublinkDisplayName: "Bus Passes Home",
        sublink: BUS_PASS_LINK,
      },
      {
        sublinkDisplayName: "Student Passes",
        sublink: BUS_PASS_STUDENT_LINK,
      },
      {
        sublinkDisplayName: "General Commuter Pass",
        sublink: BUS_PASS_GENERAL_LINK,
      },
      {
        sublinkDisplayName: "Other Passes",
        sublink: BUS_PASS_OTHER_LINK,
      },
      {
        sublinkDisplayName: "FAQs",
        sublink: BUS_PASS_FAQ_LINK,
      },
    ],
  },

  {
    displayName: "Tenders",
    isNavLink: true,
    link: TENDERS_LINK,
  },
  {
    displayName: "TGSRTC Hospital",
    isNavLink: false,
    dropDown: 0,
    subLinks: [
      {
        sublinkDisplayName: "TGSRTC Hospital",
        sublink: HOSPITAL_LINK,
      },
      {
        sublinkDisplayName: "Hospital Website",
        sublink: TGSRTC_HOSPITAL_SERVICES,
      },

    ]
  },

  {
    displayName: "Contact Us",
    isNavLink: false,
    dropDown: 0,
    subLinks: [
      {
        sublinkDisplayName: "Contact Us",
        sublink: CONTACT_US_LINK,
      },
      {
        sublinkDisplayName: "Feedback",
        sublink: FEEDBACK_PAGE,
      },

    ]
  },
];

