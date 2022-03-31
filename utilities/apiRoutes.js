// export const API_URL = 'https://solecial-app.herokuapp.com/v1/';
export const API_URL = 'https://solecial.live/v1/';

export const apiRoutes = {
  login: 'auth/login',
  signup: 'auth/register',
  requestResetPassword: 'auth/forgot-password',
  verifyCode: 'auth/verify-code',
  getAllRaffles: 'raffle',
  rafflePayment: 'raffle/addUserInRaffle',
  getAllAuctionListing: 'auction/getAuctionListing',
  placeBid: 'auction/placeBid',
  getAllStoreItems: 'store/getProductType?product_type=All&page=0&perPage=10',
  cartCheckout: 'cart/checkout',
  users: 'users/',
  getNotificationAndHistory: 'general/getNotifications/',
  storeHistory: 'general/getUserCartHistroy/',
  raffleHistory: 'general/getUserRaffle/',
  auctionHistory: 'general/getUserAuction/',
  auctionPayment: 'auction/checkout-auction',
};
