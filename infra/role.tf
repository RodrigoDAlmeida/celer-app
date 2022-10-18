resource "aws_s3_bucket_policy" "s3-public-policy-celer-client" {
  bucket = aws_s3_bucket.s3-celer-client-app.bucket
  policy = jsonencode(
    {
      "Id" : "bucket_policy_site"
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Sid" : "bucket_policy_site_main",
          "Action" : [
            "s3:getObject",
          ]
          "Effect" : "Allow",
          "Resource" : "${aws_s3_bucket.s3-celer-client-app.arn}/*",
          "Principal" : "*"
        }
      ]
    }
  )
}
resource "aws_iam_role_policy" "role-policy" {
  policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Sid" : "SyncS3",
          "Effect" : "Allow",
          "Resource" : "${aws_s3_bucket.s3-celer-client-app.arn}/*"
          "Action" : [
            "s3:*"
          ]
        }
      ]
    }
  )
  role = aws_iam_role.celer-policy-sync-s3.id
}
resource "aws_iam_role" "celer-policy-sync-s3" {
  name               = "celer-full-access-s3"
  assume_role_policy = jsonencode(
    {
      "Version" : "2012-10-17",
      "Statement" : [
        {
          "Sid" : "",
          "Effect" : "Allow",
          "Principal" : {
            "Service" : [
              "s3.amazonaws.com"
            ]
          },
          "Action" : "sts:AssumeRole"
        }
      ]
    }
  )
}