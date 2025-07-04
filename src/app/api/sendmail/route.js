import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER || "defaultEmail@example.com",
        pass: process.env.EMAIL_PASS || "defaultPasswordHere",
      },
    });

    const mailOptions = {
      from: `"Leeta Gas Services" <${
        process.env.EMAIL_USER || "noreply@leetagas.com"
      }>`,
      to: email,
      subject: "You're on the Leeta waiting list! ⛽",
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f8f9fa; padding: 20px; max-width: 600px; margin: auto;">
          <div style="background-color: #ffffff; padding: 40px; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 30px; text-align: center;">
              <h1 style="color: #FD671E; font-size: 28px; margin: 0; font-weight: 600;">Welcome to Leeta! ⛽</h1>
              <p style="color: #0B1F30; margin-top: 10px;">Safe & Reliable Gas Delivery</p>
            </div>
            
            <div style="color: #0B1F30; font-size: 16px; line-height: 1.6;">
              <p>Thank you for joining our waiting list! We'll notify you as soon as our service becomes available in your area.</p>
              
              <div style="background-color: #0B1F30; color: white; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
                <p style="margin: 0 0 15px 0; font-weight: 500;">Have questions about our service?</p>
                <a href="https://wa.me/+2349055002293" 
                   style="background-color: #FD671E; color: white; text-decoration: none; 
                          padding: 12px 24px; border-radius: 8px; font-weight: 600;
                          display: inline-block; transition: background-color 0.3s;">
                  Message Us on WhatsApp
                </a>
              </div>

              <p>In the meantime, here's what you can expect from Leeta:</p>
              
              <ul style="padding-left: 20px; margin: 20px 0;">
                <li style="margin-bottom: 8px;">🚚 Fast & reliable gas delivery</li>
                <li style="margin-bottom: 8px;">⛑️ Safety-certified drivers</li>
                <li style="margin-bottom: 8px;">🔒 Quality-assured gas cylinders</li>
                <li>💰 Competitive pricing</li>
              </ul>
            </div>

            <div style="margin-top: 40px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
              <p style="color: #666666; font-size: 14px; margin-bottom: 5px;">Best regards,</p>
              <p style="color: #FD671E; font-weight: 600; font-size: 16px; margin: 0;">Leeta Gas Services</p>
              <p style="color: #888888; font-size: 12px; margin-top: 20px;">Delivering safety and convenience to your doorstep</p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({
        message: "Waiting list confirmation sent successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Error sending waiting list confirmation" }),
      {
        status: 500,
      }
    );
  }
}
