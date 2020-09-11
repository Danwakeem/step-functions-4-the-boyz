## Step Functions 4 the boyz

This is just a really crappy test of using [serverless](https://www.serverless.com/) with [AWS Step functions](https://aws.amazon.com/step-functions/)

## Deploy to sandbox

```shell
yarn sls deploy --stage "$ACG_ENV" --region "$AWS_REGION" --verbose
```


## Helpful docs

[Serverless Step functions](https://www.serverless.com/plugins/serverless-step-functions)
[AWS State Types](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-states.html)
[Chargebee Webhook Sample Payload](https://apidocs.chargebee.com/docs/api/events#event_attributes)
[Chargebee event types](https://apidocs.chargebee.com/docs/api/events#event_types)