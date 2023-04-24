// utils/mailchimp.ts
const mailchimpAPIKey = process.env.MAILCHIMP_API_KEY ?? ''
const listId = process.env.MAILCHIMP_LIST_ID ?? ''
const dataCenter = mailchimpAPIKey.split('-')[1];
const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members`;

export interface MailchimpError extends Error {
    status: number;
    title?: string;
    detail?: string;
}

export function createMailchimpError(status: number, title?: string, detail?: string): MailchimpError {
    const error = new Error(title || detail) as MailchimpError;
    error.status = status;
    error.title = title;
    error.detail = detail;
    return error;
}
interface SubscribeResponse {
    [key: string]: any;
}

const subscribe = async (email: string): Promise<SubscribeResponse> => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `apikey ${mailchimpAPIKey}`,
        },
        body: JSON.stringify({
            email_address: email,
            status: 'subscribed',
        }),
    });

    if (response.status >= 400) {
        const errorData = await response.json();
        throw createMailchimpError(response.status, errorData.title, errorData.detail);
    }
    return response.json();
};

export default subscribe;
