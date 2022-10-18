provider "aws" {
  region  = "us-east-1"

}

variable "bucket-name" {
  default     = "celer-app"
}

resource "aws_s3_bucket" "s3-celer-client-app"{
    bucket = var.bucket-name
}
resource "aws_s3_bucket_website_configuration" "bucket-web-site-configuration" {
    bucket = aws_s3_bucket.s3-celer-client-app.bucket

    index_document {
        suffix = "index.html"
    }
    error_document {
        key = "index.html"
    }
}
resource "aws_s3_bucket_acl" "s3-acl-celer-client" {
    bucket = aws_s3_bucket.s3-celer-client-app.bucket
    acl = "public-read"
}

resource "aws_datasync_location_s3" "sync_build_folder" {
    s3_bucket_arn = aws_s3_bucket.s3-celer-client-app.arn
    subdirectory  = "../build/*"
    s3_config {
        bucket_access_role_arn = aws_iam_role.celer-policy-sync-s3.arn
    }
}



