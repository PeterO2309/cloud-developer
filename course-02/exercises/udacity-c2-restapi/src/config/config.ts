export const config = {
  "dev": {
    "username": "udagrampeterdev",
    "password": "udagrampeterdev",
    "database": "udagrampeterdev",
    "host": "udagrampeterdev.cgufryafg5it.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-peter-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "helloworld",
  }
}
