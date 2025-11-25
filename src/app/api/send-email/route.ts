import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { subject, html, text, from } = body;

        const { data, error } = await resend.emails.send({
            from: from || 'Vossen Design <onboarding@resend.dev>',
            to: ['info@vossendesign.nl'],
            subject: subject,
            html: html,
            text: text,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
