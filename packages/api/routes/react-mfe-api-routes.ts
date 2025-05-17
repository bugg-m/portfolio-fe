export const ReactMFEApiRoutes = {
  LOG_IN: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/login`,
  LOGOUT: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/logout`,
  REGISTER: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/register`,
  GET_REGISTER_CHALLENGE: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/get_register_challenge`,
  GET_LOGIN_CHALLENGE: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/get_login_challenge`,
  LOGIN_WITH_PASSKEY: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/login_with_passkey`,
  CREATE_PASSKEY: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/create_passkey`,
  GET_USER_DETAILS: `${process.env.NX_PUBLIC_PORTFOLIO_BE_API_URL}/api/v1/user/get_user_details`,
};
