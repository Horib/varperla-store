// pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import subscribe from '../../lib/util/mailchimp';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { email } = req.body;
        try {
            const response = await subscribe(email);
            return res.status(200).json(response);
        } catch (error: unknown) {
            console.error(error);
            const message = (error instanceof Error) ? error.message : 'Unknown error';
            return res.status(500).json({ error: message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
};

export default handler;
