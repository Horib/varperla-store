// utils/mailchimp.ts
const mailchimpAPIKey = process.env.MAILCHIMP_API_KEY ?? ''
const listId = process.env.MAILCHIMP_LIST_ID ?? ''
const dataCenter = mailchimpAPIKey.split('-')[1];
const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members`;

interface SubscribeResponse {
    [key: string]: any;
}

const subscribe = async (email: string): Promise<SubscribeResponse> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `apikey ${mailchimpAPIKey}`
        },
        body: JSON.stringify({
            email_address: email,
            status: 'subscribed'
        })
    });

    if (response.status >= 400) {
        throw new Error('Failed to subscribe');
    }
    return response.json();
};

export default subscribe;
