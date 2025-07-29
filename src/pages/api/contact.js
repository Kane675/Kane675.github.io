// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { name, email, message } = req.body;

    const webhookUrl = 'https://discord.com/api/webhooks/1399805875790549095/4MYppie0FkVhe0QHLvB5W7N6ywaji6a35vpXWJtXRjPRrSnErHBSVPy4jlwZhEHFjQEz'; // replace this

    const discordMessage = {
        content: `📩 **New Contact Form Submission**\n\n👤 Name: ${name}\n📧 Email: ${email}\n📝 Message: ${message}`,
    };

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(discordMessage),
        });

        if (!response.ok) {
            throw new Error('Failed to send message to Discord');
        }

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Something went wrong' });
    }
}
