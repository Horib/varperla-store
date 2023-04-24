// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import subscribe, { MailchimpError } from '../../lib/util/mailchimp';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email } = req.body;

    if (!email) {
        res.status(400).json({ error: "Email is required" });
        return;
    }

    try {
        const response = await subscribe(email);
        res.status(200).json({ success: true, data: response });
    } catch (error) {
        const mailchimpError = error as MailchimpError;
        if (mailchimpError.status === 400 && mailchimpError.title === "Member Exists") {
            res.status(400).json({ error: "Email is already subscribed" });
        } else {
            console.error("Error subscribing to Mailchimp:", error);
            res.status(500).json({ error: "Failed to subscribe" });
        }
    }
};

export default handler;
