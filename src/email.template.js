export default function emailTemplate(prop = { name: 'john smith', email: 'xyz@gmail.com', message: "Barking dog seldom bite.", sessionId: "pi-1234567890", logo: "xxxx" }) {
    const { name, email, message, sessionId, logo } = prop
    console.log(sessionId, 'sessionId')
    const currentDate = new Date().toLocaleDateString();

    return (`
 <div>
    <div
        style="
            font-family: Arial, sans-serif;
            max-width: 750px;
            margin: 0 auto;
            padding: 30px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9; /* Light background for better contrast */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Added shadow for depth */
            color: #333;
        "
    >
        <div
            style="
                text-align: center;
                padding-bottom: 30px;
                background-color: black;
                border-radius: 8px 8px 0 0; /* Rounded top corners */
            "
        >
            <img
                src=${logo}
                alt="Company Logo"
                style="
                    max-width: 150px;
                    margin: 0 auto;
                    padding: 1rem 0; /* Added margin for spacing */
                "
            />
        </div>
        <p style="font-size: 1.4em; color: #333; margin-bottom: 10px;">
            Hello
            <strong style="font-style: italic;">
                ${name}
            </strong>
            ,
        </p>
        <p style="font-size: 1.2em; margin-bottom: 20px;">
            We appreciate your interest in our services. Here are the details of your inquiry:
        </p>
        <table style="width: 100%; margin: 20px 0; font-size: 1.1em; border-collapse: collapse;">
            <tbody>
                <tr>
                    <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #ddd;">
                        Email:
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                        ${email}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #ddd;">
                        Description:
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                        ${message}
                    </td>
                </tr>
            </tbody>
        </table>
        <div style="padding: 20px 0; text-align: center;">
            <p style="font-size: 1.2em; margin-bottom: 10px;">
                Please click the button below to complete your payment:
            </p>
            <a
                href="http://localhost:5173/payment/${sessionId}"
                target="_blank"
                style="
                    display: inline-block;
                    padding: 15px 30px;
                    background-color: #3f97cf;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 1.1em;
                    transition: background-color 0.3s, transform 0.3s; /* Added transition for hover effects */
                "
            >
                Complete Your Payment
            </a>
        </div>
        <p style="margin-top: 30px; font-size: 1.1em;">
            Thank you for choosing us. If you have any questions, feel free to reach out at any time.
        </p>
        <p style="margin-top: 30px; font-weight: bold; font-size: 1.2em;">
            Best regards,
        </p>
        <p style="color: #FF6F00; font-weight: bold; font-size: 1.2em;">
            Vehware Ltd.
        </p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
        <p style="font-size: 1em; color: #888; text-align: center;">
            Date: ${currentDate}
        </p>
        <p style="font-size: 1em; color: #888; text-align: center; margin: 10px 0;">
            <a
                href="https://www.facebook.com/"
                target="_blank"
                style="color: #3f97cf; text-decoration: none; margin: 0 15px;"
            >
                Facebook
            </a>
            |
            <a
                href="https://www.twitter.com/"
                target="_blank"
                style="color: #3f97cf; text-decoration: none; margin: 0 15px;"
            >
                Twitter
            </a>
            |
            <a
                href="https://www.linkedin.com/"
                target="_blank"
                style="color: #3f97cf; text-decoration: none; margin: 0 15px;"
            >
                LinkedIn
            </a>
        </p>
    </div>
</div>


    `)
}
