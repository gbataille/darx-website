aws s3 sync . s3://darx-test --exclude ".gitignore" --exclude "aws_perform.sh" --exclude "Icon*" --exclude ".git/*" --exclude ".DS_Store" --profile darx
