import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { name, email, number, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_SEND_TO,
            subject: `Nova mensagem de ${name} - ${email}`,
            text: `Nome: ${name}\nEmail: ${email}\nNúmero: ${number}\nMensagem: ${message}`
        });

        return new Response('Email enviado com sucesso', { status: 200 });
    } catch (error) {
        return new Response('Erro ao enviar email', { status: 500 });
    }
}
