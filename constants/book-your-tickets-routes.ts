import {
  HYDERABAD,
  BANGALORE,
  VIJAYAWADA,
  CHENNAI,
  SRISAILAM,
  BHADRACHALAM,
  SHIRIDI,
  TIRUPATI,
  KARIMNAGAR,
} from ".";

export const routes = [
  { from: HYDERABAD, to: BANGALORE },
  { from: BANGALORE, to: VIJAYAWADA },
  { from: VIJAYAWADA, to: CHENNAI },
  { from: CHENNAI, to: SRISAILAM },
  { from: SRISAILAM, to: BHADRACHALAM },
  { from: BHADRACHALAM, to: SHIRIDI },
  { from: SHIRIDI, to: TIRUPATI },
  { from: TIRUPATI, to: KARIMNAGAR },
  { from: KARIMNAGAR, to: HYDERABAD },
];
