def lambda_handler(event, context):
    input_val = float(event.get('input', 0))
    return {
        'statusCode': 200,
        'body': input_val * 2
    }