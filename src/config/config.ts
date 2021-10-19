import "dotenv/config";

const config = {
  port: process.env.PORT,
  pinata_api_key: process.env.PINATA_API_KEY,
  pinata_secret_api_key: process.env.PINATA_SECRET_API_KEY,
  url_pinata_imgs: "https://gateway.pinata.cloud/ipfs/",
  secret_token: process.env.SECRET_TOKEN,
  user_admin: process.env.USER_ADMIN,
  password_admin: process.env.PASSWORD_ADMIN
};

export { config };
