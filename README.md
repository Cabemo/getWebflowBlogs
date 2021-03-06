# AWS Lambda: Get Webflow Blogs

This function uses [webflow-api](https://github.com/webflow/js-webflow-api#readme) to obtain the blog posts (any item really) of a collection. This one is specifically programmed for a task I had to do, but feel free to fork and change it.

## Usage

### Prerequisites

- [Lambda Function](https://aws.amazon.com/lambda/)
- [Lambda Execution Role](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html)
- [AWS CLI](https://aws.amazon.com/cli/)

I created my lambda function with the following command:

```bash
$ aws lambda create-function \
--runtime nodejs12.x \
--handler [getWebflowBlogs].handler \
--function-name [your-function-name] \
--environment "Variables={WEBFLOW_TOKEN=[you-webflow-token],SITE_ID=[your-site-id],COLLECTION_ID=[your-collection-id],SITE_URL=[your-site-url]}" \
--role [your-execution-role e.g. "arn:aws:iam::..."] \
--zip-file fileb://lambda.zip

{
  "TracingConfig": {
    "Mode": "PassThrough"
  },
  "CodeSha256": "PFn4S+er27qk+UuZSTKEQfNKG/XNn7QJs90mJgq6oH8=",
  "FunctionName": "my-function",
  "CodeSize": 308,
  "RevisionId": "873282ed-4cd3-4dc8-a069-d0c647e470c6",
  "MemorySize": 128,
  "FunctionArn": "arn:aws:lambda:us-west-2:123456789012:function:my-function",
  "Version": "$LATEST",
  "Role": "arn:aws:iam::123456789012:role/service-role/MyTestFunction-role-zgur6bf4",
  "Timeout": 3,
  "LastModified": "2019-08-14T22:26:11.234+0000",
  "Handler": "my-function.handler",
  "Runtime": "nodejs10.x",
  "Description": ""
}
Done in 2.27s.
```

### Deploy

Once you have all that you just need to edit the file for your needs and run:

```bash
$ yarn deploy
{
  "FunctionName": "my-function",
  "LastModified": "2019-09-26T20:28:40.438+0000",
  "RevisionId": "e52502d4-9320-4688-9cd6-152a6ab7490d",
  "MemorySize": 256,
  "Version": "$LATEST",
  "Role": "arn:aws:iam::123456789012:role/service-role/my-function-role-uy3l9qyq",
  "Timeout": 3,
  "Runtime": "nodejs10.x",
  "TracingConfig": {
    "Mode": "PassThrough"
  },
  "CodeSha256": "5tT2qgzYUHaqwR716pZ2dpkn/0J1FrzJmlKidWoaCgk=",
  "Description": "",
  "VpcConfig": {
    "SubnetIds": [],
    "VpcId": "",
    "SecurityGroupIds": []
  },
  "CodeSize": 304,
  "FunctionArn": "arn:aws:lambda:us-west-2:123456789012:function:my-function",
  "Handler": "index.handler"
}
Done in 2.68s.
```
