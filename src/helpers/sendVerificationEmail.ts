import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";


export async function sendVerificationEmail(
    email : string, username : string , verifyCode : string
) 
: Promise<ApiResponse> {
    try {
        await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'UUM(Unique Url Messenger) | Verification Code',
        react: VerificationEmail({username , otp : verifyCode}),
});

        return {success:true, message:"Email send successfully"};

    } catch (error) {

        console.error("Error sending verification email", error);
        return {success:false,message:"Failed to send verification email "};

    }
}