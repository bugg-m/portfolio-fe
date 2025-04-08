export const ReactMFEApiRoutes = {
  LOG_IN: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/login`,
  REGISTER: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/register`,
  GET_PASSKEY_CHALLENGE: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/get_passkey_challenge`,
  VERIFY_USER: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/verify_user`,
  GET_USER_DETAILS: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/get_user_details`,
};
