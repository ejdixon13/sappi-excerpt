export default interface Authority {
  authority: AuthorityRole;
}

export enum AuthorityRole {
  ROLE_CHAT = 'ROLE_CHAT',
  ROLE_COMPLAINT_CREATE = 'ROLE_COMPLAINT_CREATE',
  ROLE_COMPLAINT_REQUEST = 'ROLE_COMPLAINT_REQUEST',
  ROLE_DIRECT_BOOKING = 'ROLE_DIRECT_BOOKING',
  ROLE_DOCUMENT_PRINTER = 'ROLE_DOCUMENT_PRINTER',
  ROLE_E_CATALOG = 'ROLE_E_CATALOG',
  ROLE_MILL_DIRECT = 'ROLE_MILL_DIRECT',
  ROLE_NA = 'ROLE_NA',
  ROLE_EU = 'ROLE_EU',
  ROLE_ORDER_TRACKING = 'ROLE_ORDER_TRACKING',
  ROLE_PRICING_DOCUMENTS = 'ROLE_PRICING_DOCUMENTS',
  ROLE_PRODUCTION_PLANNING = 'ROLE_PRODUCTION_PLANNING',
  ROLE_STOCK_AVAILABILITY = 'ROLE_STOCK_AVAILABILITY',
  ROLE_STOCK_REPORT = 'ROLE_STOCK_REPORT',
  ROLE_STOCK_VIEW = 'ROLE_STOCK_VIEW',
  ROLE_TRACK_BY = 'ROLE_TRACK_BY',
  ROLE_TRACK_AND_TRACE = 'ROLE_TRACK_AND_TRACE',
  ROLE_RELEASE = 'ROLE_RELEASE',
  ROLE_SHIP_TO = 'ROLE_SHIP_TO',
  ROLE_PROJECT_GROUP = 'ROLE_PROJECT_GROUP',
  ROLE_CONSIGNMENT = 'ROLE_CONSIGNMENT',
  ROLE_CONSIGN_SUBMIT = 'ROLE_CONSIGN_SUBMIT',
  ROLE_ORDER_BOOKING = 'ROLE_ORDER_BOOKING',
  ROLE_CONTAINER_LIST = 'ROLE_CONTAINER_LIST',
  ROLE_INTERNAL = 'ROLE_INTERNAL',
}