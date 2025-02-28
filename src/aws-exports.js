const awsmobile = {
    "aws_project_region": "us-west-1",
    "aws_cognito_region": "us-west-1",
    "aws_user_pools_id": "us-west-1_zKcKpd90o", // Replace with your User Pool ID
    "aws_user_pools_web_client_id": "1lrkb47hiokdelt7h2q299dcbp", // Replace with your App Client ID
    "aws_cognito_social_providers": ["GOOGLE"],
    "oauth": {
        "domain": "us-west-1zkckpd90o.auth.us-west-1.amazoncognito.com", // Replace with your Cognito domain
        "scope": ["email", "openid", "profile", "aws.cognito.signin.user.admin"],
        "redirectSignIn": "https://thebobaface.vercel.app/",
        "redirectSignOut": "http://localhost:3000",
        "responseType": "code",
        "idenityProviders": ["Google"]
    },
    "aws_cognito_username_attributes": ["EMAIL"],
    "aws_cognito_signup_attributes": ["EMAIL", "PHONE_NUMBER"], // Require email and phone number
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": ["SMS"],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": ["REQUIRES_LOWERCASE", "REQUIRES_UPPERCASE", "REQUIRES_NUMBERS", "REQUIRES_SYMBOLS"]
    },
    "aws_cognito_verification_mechanisms": ["EMAIL", "PHONE_NUMBER"] // Verify email and phone number
};

export default awsmobile;