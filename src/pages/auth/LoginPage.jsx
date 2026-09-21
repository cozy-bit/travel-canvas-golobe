import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import slider_photo1 from "../../assets/images/auth/auth-side.png";
import monkeyAvatarImg from "../../assets/images/account/monkey-1.png";
import ThemeToggle from "../../components/ui/ThemeToggle";
import { GoogleIcon, FacebookIcon, AppleIcon } from "../../components/ui/SocialIcons";

/* =====================================================
   LOGO — ORIGINAL LOGIN LOGO
===================================================== */

function Logo() {
    return (
        <Link to="/" className="select-none block w-fit">
            <div
                className="
                    text-[21px]
                    sm:text-[22px]
                    font-semibold
                    tracking-[-1.5px]
                    text-[#1C261F]
                    dark:text-white
                "
            >
                g<span className="text-[#72CBB2]">l</span>obe
            </div>
        </Link>
    );
}

/* =====================================================
   PASSWORD INPUT
===================================================== */

function PasswordInput({
    value,
    onChange,
    placeholder = "••••••••",
    label,
}) {
    const [show, setShow] = useState(false);

    return (
        <div className="w-full">
            <label
                className="
                    block
                    text-[11px]
                    sm:text-[12px]
                    font-medium
                    text-[#374151]
                    dark:text-gray-200
                    mb-2
                "
            >
                {label}
            </label>

            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="
                        w-full
                        h-[46px]
                        border
                        border-[#D1D5DB]
                        dark:border-[#2D3D36]
                        bg-white
                        dark:bg-[#141F1A]
                        rounded-[8px]
                        px-3
                        pr-11
                        text-[12px]
                        sm:text-[13px]
                        text-[#222]
                        dark:text-white
                        placeholder-gray-400
                        dark:placeholder-gray-500
                        outline-none
                        transition
                        focus:border-[#8DD3BB]
                        focus:ring-2
                        focus:ring-[#8DD3BB]/20
                    "
                />

                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                        dark:text-gray-400
                        text-[13px]
                        hover:text-[#112211]
                        dark:hover:text-white
                        transition
                        cursor-pointer
                    "
                >
                    {show ? "◉" : "◌"}
                </button>
            </div>
        </div>
    );
}

/* =====================================================
   EMAIL INPUT
===================================================== */

function EmailInput({
    value,
    onChange,
    label = "Email",
}) {
    return (
        <div className="w-full">
            <label
                className="
                    block
                    text-[11px]
                    sm:text-[12px]
                    font-medium
                    text-[#374151]
                    dark:text-gray-200
                    mb-2
                "
            >
                {label}
            </label>

            <input
                type="email"
                value={value}
                onChange={onChange}
                placeholder="cozybit@gmail.com"
                className="
                    w-full
                    h-[46px]
                    border
                    border-[#D1D5DB]
                    dark:border-[#2D3D36]
                    bg-white
                    dark:bg-[#141F1A]
                    rounded-[8px]
                    px-3
                    text-[12px]
                    sm:text-[13px]
                    text-[#222]
                    dark:text-white
                    placeholder-gray-400
                    dark:placeholder-gray-500
                    outline-none
                    transition
                    focus:border-[#8DD3BB]
                    focus:ring-2
                    focus:ring-[#8DD3BB]/20
                "
            />
        </div>
    );
}

/* =====================================================
   SOCIAL BUTTONS
===================================================== */

function SocialButtons({ onSocialLogin }) {
    return (
        <div className="grid grid-cols-3 gap-3 mt-6">
            <button
                type="button"
                onClick={() => onSocialLogin && onSocialLogin("Facebook")}
                className="
                    h-[46px]
                    border
                    border-[#D1D5DB]
                    dark:border-[#2D3D36]
                    bg-white
                    dark:bg-[#141F1A]
                    rounded-[8px]
                    flex
                    items-center
                    justify-center
                    hover:bg-[#F7FAF8]
                    dark:hover:bg-white/5
                    transition
                    cursor-pointer
                    shadow-xs
                "
                title="Login with Facebook"
            >
                <FacebookIcon className="w-5 h-5 text-[#1877F2]" />
            </button>

            <button
                type="button"
                onClick={() => onSocialLogin && onSocialLogin("Google")}
                className="
                    h-[46px]
                    border
                    border-[#D1D5DB]
                    dark:border-[#2D3D36]
                    bg-white
                    dark:bg-[#141F1A]
                    rounded-[8px]
                    flex
                    items-center
                    justify-center
                    hover:bg-[#F7FAF8]
                    dark:hover:bg-white/5
                    transition
                    cursor-pointer
                    shadow-xs
                "
                title="Login with Google"
            >
                <GoogleIcon className="w-5 h-5" />
            </button>

            <button
                type="button"
                onClick={() => onSocialLogin && onSocialLogin("Apple")}
                className="
                    h-[46px]
                    border
                    border-[#D1D5DB]
                    dark:border-[#2D3D36]
                    bg-white
                    dark:bg-[#141F1A]
                    rounded-[8px]
                    flex
                    items-center
                    justify-center
                    hover:bg-[#F7FAF8]
                    dark:hover:bg-white/5
                    transition
                    cursor-pointer
                    shadow-xs
                "
                title="Login with Apple"
            >
                <AppleIcon className="w-5 h-5 fill-current text-[#112211] dark:text-white" />
            </button>
        </div>
    );
}

/* =====================================================
   DIVIDER
===================================================== */

function Divider({ text = "Or login with" }) {
    return (
        <div className="flex items-center gap-3 my-6">
            <div className="h-px bg-[#E5E7EB] dark:bg-[#2D3D36] flex-1" />

            <span
                className="
                    text-[9px]
                    sm:text-[10px]
                    text-[#9CA3AF]
                    dark:text-gray-400
                    whitespace-nowrap
                "
            >
                {text}
            </span>

            <div className="h-px bg-[#E5E7EB] dark:bg-[#2D3D36] flex-1" />
        </div>
    );
}

/* =====================================================
   LOGIN SCREEN
===================================================== */

function LoginScreen({
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    loginError,
    handleLogin,
    setForgotEmail,
    setScreen,
    onSocialLogin,
}) {
    return (
        <motion.div
            key="login"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            <Logo />



            <div className="mt-8">
                <h1
                    className="
                        text-3xl
                        sm:text-4xl
                        font-bold
                        tracking-[-1px]
                        text-[#1F2937]
                        dark:text-white
                    "
                >
                    Login
                </h1>

                <p
                    className="
                        text-[11px]
                        sm:text-[12px]
                        text-[#6B7280]
                        dark:text-gray-300
                        mt-2
                    "
                >
                    Login to access your Golobe account
                </p>
            </div>

            <form
                onSubmit={handleLogin}
                className="mt-8"
            >
                <div className="space-y-5">
                    <EmailInput
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <PasswordInput
                        label="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        mt-4
                    "
                >
                    <label
                        className="
                            flex
                            items-center
                            gap-2
                            text-[10px]
                            sm:text-[11px]
                            text-[#4B5563]
                            dark:text-gray-300
                            cursor-pointer
                        "
                    >
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) =>
                                setRememberMe(e.target.checked)
                            }
                            className="
                                accent-[#8DD3BB]
                                w-[13px]
                                h-[13px]
                            "
                        />

                        Remember me
                    </label>

                    <button
                        type="button"
                        onClick={() => {
                            setForgotEmail(email);
                            setScreen("forgot");
                        }}
                        className="
                            text-[10px]
                            sm:text-[11px]
                            text-[#00845B]
                            dark:text-[#8DD3BB]
                            hover:underline
                            font-medium
                            transition
                        "
                    >
                        Forgot Password
                    </button>
                </div>

                {loginError && (
                    <p className="text-[10px] text-red-500 mt-3">
                        {loginError}
                    </p>
                )}

                <button
                    type="submit"
                    className="
                        w-full
                        h-[46px]
                        bg-[#8DD3BB]
                        hover:bg-[#7BC6AE]
                        text-[#112211]
                        rounded-[8px]
                        text-[11px]
                        sm:text-[12px]
                        font-bold
                        mt-6
                        transition
                        active:scale-[0.99]
                        cursor-pointer
                    "
                >
                    Login
                </button>
            </form>

            <p
                className="
                    text-center
                    text-[10px]
                    sm:text-[11px]
                    text-[#6B7280]
                    dark:text-gray-400
                    mt-5
                "
            >
                Don't have an account?{" "}

                <Link
                    to="/signup"
                    className="
                        text-[#00845B]
                        dark:text-[#8DD3BB]
                        font-semibold
                        hover:underline
                    "
                >
                    Sign up
                </Link>
            </p>

            <Divider />

            <SocialButtons onSocialLogin={onSocialLogin} />
        </motion.div>
    );
}

/* =====================================================
   FORGOT SCREEN
===================================================== */

function ForgotScreen({
    forgotEmail,
    setForgotEmail,
    forgotError,
    handleForgot,
    backToLogin,
}) {
    return (
        <motion.div
            key="forgot"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            <Logo />

            <div className="mt-8">
                <button
                    type="button"
                    onClick={backToLogin}
                    className="
                        text-[10px]
                        sm:text-[11px]
                        text-[#6B7280]
                        dark:text-gray-400
                        hover:text-[#1F2937]
                        dark:hover:text-white
                        transition
                    "
                >
                    ← Back to login
                </button>

                <h1
                    className="
                        text-3xl
                        sm:text-4xl
                        font-bold
                        tracking-[-1px]
                        text-[#1F2937]
                        dark:text-white
                        mt-6
                    "
                >
                    Forgot your password?
                </h1>

                <p
                    className="
                        text-[11px]
                        sm:text-[12px]
                        text-[#6B7280]
                        dark:text-gray-300
                        leading-5
                        mt-2
                    "
                >
                    Don't worry, happens to all of us.
                    Enter your email below to recover your password.
                </p>
            </div>

            <form
                onSubmit={handleForgot}
                className="mt-8"
            >
                <EmailInput
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                />

                {forgotError && (
                    <p className="text-[10px] text-red-500 mt-3">
                        {forgotError}
                    </p>
                )}

                <button
                    type="submit"
                    className="
                        w-full
                        h-[46px]
                        bg-[#8DD3BB]
                        hover:bg-[#7BC6AE]
                        text-[#112211]
                        rounded-[8px]
                        text-[11px]
                        sm:text-[12px]
                        font-bold
                        mt-6
                        transition
                        cursor-pointer
                    "
                >
                    Submit
                </button>
            </form>

            <Divider />

            <SocialButtons />
        </motion.div>
    );
}

/* =====================================================
   VERIFY SCREEN
===================================================== */

function VerifyScreen({
    verificationCode,
    setVerificationCode,
    verifyError,
    handleVerify,
    timer,
    resendCode,
    setScreen,
}) {
    return (
        <motion.div
            key="verify"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            <Logo />

            <div className="mt-8">
                <button
                    type="button"
                    onClick={() => setScreen("forgot")}
                    className="
                        text-[10px]
                        sm:text-[11px]
                        text-[#6B7280]
                        dark:text-gray-400
                        hover:text-[#1F2937]
                        dark:hover:text-white
                        transition
                    "
                >
                    ← Back
                </button>

                <h1
                    className="
                        text-3xl
                        sm:text-4xl
                        font-bold
                        tracking-[-1px]
                        text-[#1F2937]
                        dark:text-white
                        mt-6
                    "
                >
                    Verify code
                </h1>

                <p
                    className="
                        text-[11px]
                        sm:text-[12px]
                        text-[#6B7280]
                        dark:text-gray-300
                        leading-5
                        mt-2
                    "
                >
                    An authentication code has been sent to your email.
                </p>
            </div>

            <form
                onSubmit={handleVerify}
                className="mt-8"
            >
                <label
                    className="
                        block
                        text-[11px]
                        sm:text-[12px]
                        font-medium
                        text-[#374151]
                        dark:text-gray-200
                        mb-2
                    "
                >
                    Enter Code
                </label>

                <input
                    value={verificationCode}
                    onChange={(e) => {
                        setVerificationCode(
                            e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 6)
                        );
                    }}
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="123456"
                    className="
                        w-full
                        h-[46px]
                        border
                        border-[#D1D5DB]
                        dark:border-[#2D3D36]
                        bg-white
                        dark:bg-[#141F1A]
                        rounded-[8px]
                        px-3
                        text-[13px]
                        tracking-[5px]
                        text-center
                        text-[#112211]
                        dark:text-white
                        placeholder-gray-400
                        dark:placeholder-gray-500
                        outline-none
                        focus:border-[#8DD3BB]
                        focus:ring-2
                        focus:ring-[#8DD3BB]/20
                    "
                />

                {verifyError && (
                    <p className="text-[10px] text-red-500 mt-3">
                        {verifyError}
                    </p>
                )}

                <div className="flex justify-between items-center mt-4">
                    <span className="text-[9px] sm:text-[10px] text-[#9CA3AF] dark:text-gray-400">
                        Didn't receive a code?
                    </span>

                    {timer > 0 ? (
                        <span className="text-[9px] sm:text-[10px] text-[#00845B] dark:text-[#8DD3BB]">
                            Resend in {timer}s
                        </span>
                    ) : (
                        <button
                            type="button"
                            onClick={resendCode}
                            className="
                                text-[9px]
                                sm:text-[10px]
                                text-[#00845B]
                                dark:text-[#8DD3BB]
                                hover:underline
                                font-semibold
                                cursor-pointer
                            "
                        >
                            Resend
                        </button>
                    )}
                </div>

                <button
                    type="submit"
                    className="
                        w-full
                        h-[46px]
                        bg-[#8DD3BB]
                        hover:bg-[#7BC6AE]
                        text-[#112211]
                        rounded-[8px]
                        text-[11px]
                        sm:text-[12px]
                        font-bold
                        mt-6
                        transition
                        cursor-pointer
                    "
                >
                    Verify
                </button>
            </form>


        </motion.div>
    );
}

/* =====================================================
   PASSWORD SCREEN
===================================================== */

function PasswordScreen({
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    passwordError,
    handleSetPassword,
    setScreen,
}) {
    return (
        <motion.div
            key="password"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
        >
            <Logo />

            <div className="mt-8">
                <button
                    type="button"
                    onClick={() => setScreen("verify")}
                    className="
                        text-[10px]
                        sm:text-[11px]
                        text-[#6B7280]
                        dark:text-gray-400
                        hover:text-[#1F2937]
                        dark:hover:text-white
                        transition
                    "
                >
                    ← Back
                </button>

                <h1
                    className="
                        text-3xl
                        sm:text-4xl
                        font-bold
                        tracking-[-1px]
                        text-[#1F2937]
                        dark:text-white
                        mt-6
                    "
                >
                    Set a password
                </h1>

                <p
                    className="
                        text-[11px]
                        sm:text-[12px]
                        text-[#6B7280]
                        dark:text-gray-300
                        leading-5
                        mt-2
                    "
                >
                    Your previous password has been reset.
                    Please set a new password for your account.
                </p>
            </div>

            <form
                onSubmit={handleSetPassword}
                className="mt-8"
            >
                <div className="space-y-5">
                    <PasswordInput
                        label="Create Password"
                        value={newPassword}
                        onChange={(e) =>
                            setNewPassword(e.target.value)
                        }
                    />

                    <PasswordInput
                        label="Re-enter Password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                    />
                </div>

                {passwordError && (
                    <p className="text-[10px] text-red-500 mt-3">
                        {passwordError}
                    </p>
                )}

                <button
                    type="submit"
                    className="
                        w-full
                        h-[46px]
                        bg-[#8DD3BB]
                        hover:bg-[#7BC6AE]
                        text-[#112211]
                        rounded-[8px]
                        text-[11px]
                        sm:text-[12px]
                        font-bold
                        mt-6
                        transition
                        cursor-pointer
                    "
                >
                    Set password
                </button>
            </form>
        </motion.div>
    );
}

/* =====================================================
   MAIN LOGIN PAGE
===================================================== */

export default function LoginPage() {
    const navigate = useNavigate();

    const [screen, setScreen] = useState("login");

    /* =====================================================
       LOGIN
    ===================================================== */

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [loginError, setLoginError] = useState("");

    const handleSocialLogin = (provider) => {
        const socialUser = {
            name: `Cozy Bit (${provider})`,
            firstName: "Cozy",
            lastName: "Bit",
            email: `cozybit.${provider.toLowerCase()}@gmail.com`,
            phone: "+1 000-000-0000",
            avatar: monkeyAvatarImg,
        };

        localStorage.setItem("globeCurrentUser", JSON.stringify(socialUser));
        localStorage.setItem("globeLoggedIn", "true");
        window.dispatchEvent(new Event("authChange"));
        navigate("/");
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoginError("");

        if (!email || !password) {
            setLoginError("Please fill in all fields.");
            return;
        }

        if (!email.includes("@")) {
            setLoginError("Please enter a valid email.");
            return;
        }

        const isDemo = email.trim().toLowerCase() === "cozybit@gmail.com";

        // Read registered users list
        const users = JSON.parse(localStorage.getItem("globeUsers") || "[]");
        const singleUser = JSON.parse(localStorage.getItem("globeUser") || "null");
        if (singleUser && !users.some((u) => u.email === singleUser.email)) {
            users.push(singleUser);
        }

        const foundUser = users.find(
            (u) => u.email.trim().toLowerCase() === email.trim().toLowerCase()
        );

        let currentUserObj = null;

        if (foundUser) {
            if (foundUser.password && foundUser.password !== password) {
                setLoginError("Email or password is incorrect.");
                return;
            }
            currentUserObj = foundUser;
        } else if (isDemo) {
            currentUserObj = {
                name: "Cozy Bit",
                firstName: "Cozy",
                lastName: "Bit",
                email: "cozybit@gmail.com",
                phone: "+1 000-000-0000",
                password: password,
                avatar: monkeyAvatarImg,
            };
        } else {
            // New account: auto-create dynamically to never block testers
            const nameFromEmail = email.split("@")[0].replace(/[._-]/g, " ");
            const capitalized =
                nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
            currentUserObj = {
                name: capitalized || "User",
                email: email.trim(),
                password: password,
                phone: "+1 000-000-0000",
                avatar: monkeyAvatarImg,
            };
            users.push(currentUserObj);
            localStorage.setItem("globeUsers", JSON.stringify(users));
        }

        if (!currentUserObj.avatar || currentUserObj.avatar.includes('photo-1535713875002')) {
            currentUserObj.avatar = monkeyAvatarImg;
        }

        localStorage.setItem("globeUser", JSON.stringify(currentUserObj));
        localStorage.setItem("globeCurrentUser", JSON.stringify(currentUserObj));
        localStorage.setItem("globeLoggedIn", "true");

        window.dispatchEvent(new Event("authChange"));

        navigate("/");
    };

    /* =====================================================
       FORGOT PASSWORD
    ===================================================== */

    const [forgotEmail, setForgotEmail] = useState("");
    const [forgotError, setForgotError] = useState("");

    const handleForgot = (e) => {
        e.preventDefault();

        setForgotError("");

        if (!forgotEmail) {
            setForgotError("Please enter your email.");
            return;
        }

        if (!forgotEmail.includes("@")) {
            setForgotError("Please enter a valid email.");
            return;
        }

        localStorage.setItem(
            "globeResetEmail",
            forgotEmail
        );

        localStorage.setItem(
            "globeVerificationCode",
            "123456"
        );

        setTimer(30);
        setVerificationCode("");
        setScreen("verify");
    };

    /* =====================================================
       VERIFY CODE
    ===================================================== */

    const [verificationCode, setVerificationCode] = useState("");
    const [verifyError, setVerifyError] = useState("");
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if (screen !== "verify") return;
        if (timer <= 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [screen, timer]);

    const handleVerify = (e) => {
        e.preventDefault();

        setVerifyError("");

        const savedCode =
            localStorage.getItem("globeVerificationCode");

        if (verificationCode.length !== 6) {
            setVerifyError(
                "Please enter the 6-digit code."
            );
            return;
        }

        if (verificationCode !== savedCode) {
            setVerifyError(
                "Invalid verification code."
            );
            return;
        }

        setScreen("password");
    };

    const resendCode = () => {
        localStorage.setItem(
            "globeVerificationCode",
            "123456"
        );

        setVerificationCode("");
        setVerifyError("");
        setTimer(30);
    };

    /* =====================================================
       SET PASSWORD
    ===================================================== */

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSetPassword = (e) => {
        e.preventDefault();

        setPasswordError("");

        if (newPassword.length < 6) {
            setPasswordError(
                "Password must contain at least 6 characters."
            );
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordError(
                "Passwords do not match."
            );
            return;
        }

        const resetEmail =
            localStorage.getItem("globeResetEmail");

        const existingUser = JSON.parse(
            localStorage.getItem("globeUser") || "{}"
        );

        localStorage.setItem(
            "globeUser",
            JSON.stringify({
                ...existingUser,
                email: resetEmail,
                password: newPassword,
            })
        );

        localStorage.removeItem("globeResetEmail");

        setEmail(resetEmail || "");
        setPassword("");
        setNewPassword("");
        setConfirmPassword("");

        alert("Password changed successfully!");

        setScreen("login");
    };

    /* =====================================================
       RESET
    ===================================================== */

    const backToLogin = () => {
        setScreen("login");

        setForgotError("");
        setVerifyError("");
        setPasswordError("");
        setVerificationCode("");
    };

    /* =====================================================
       PAGE
    ===================================================== */

    return (
        <main
            className="
                min-h-screen
                w-full
                bg-white
                dark:bg-[#0B130E]
                text-[#112211]
                dark:text-[#F3F4F6]
                grid
                grid-cols-1
                lg:grid-cols-2
                relative
                transition-colors
                duration-300
            "
        >
            {/* Quick floating theme toggle */}
            <div className="fixed top-4 right-4 z-50">
                <ThemeToggle />
            </div>

            {/* =================================================
               LEFT — FORM
            ================================================= */}

            <section
                className="
                    flex
                    items-center
                    justify-center
                    px-5
                    py-10
                    sm:px-8
                    lg:px-12
                    xl:px-20
                    order-1
                    lg:order-none
                "
            >
                <div className="w-full max-w-[520px]">
                    <AnimatePresence mode="wait">
                        {screen === "login" && (
                            <LoginScreen
                                email={email}
                                setEmail={(value) => {
                                    setEmail(value);
                                    setLoginError("");
                                }}
                                password={password}
                                setPassword={(value) => {
                                    setPassword(value);
                                    setLoginError("");
                                }}
                                rememberMe={rememberMe}
                                setRememberMe={setRememberMe}
                                loginError={loginError}
                                handleLogin={handleLogin}
                                setForgotEmail={setForgotEmail}
                                setScreen={setScreen}
                                onSocialLogin={handleSocialLogin}
                            />
                        )}

                        {screen === "forgot" && (
                            <ForgotScreen
                                forgotEmail={forgotEmail}
                                setForgotEmail={(value) => {
                                    setForgotEmail(value);
                                    setForgotError("");
                                }}
                                forgotError={forgotError}
                                handleForgot={handleForgot}
                                backToLogin={backToLogin}
                            />
                        )}

                        {screen === "verify" && (
                            <VerifyScreen
                                verificationCode={verificationCode}
                                setVerificationCode={(value) => {
                                    setVerificationCode(value);
                                    setVerifyError("");
                                }}
                                verifyError={verifyError}
                                handleVerify={handleVerify}
                                timer={timer}
                                resendCode={resendCode}
                                setScreen={setScreen}
                            />
                        )}

                        {screen === "password" && (
                            <PasswordScreen
                                newPassword={newPassword}
                                setNewPassword={(value) => {
                                    setNewPassword(value);
                                    setPasswordError("");
                                }}
                                confirmPassword={confirmPassword}
                                setConfirmPassword={(value) => {
                                    setConfirmPassword(value);
                                    setPasswordError("");
                                }}
                                passwordError={passwordError}
                                handleSetPassword={handleSetPassword}
                                setScreen={setScreen}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* =================================================
               RIGHT — STATIC IMAGE
            ================================================= */}

            <section
                className="
                    hidden
                    lg:block
                    p-5
                    h-screen
                    sticky
                    top-0
                    order-2
                "
            >
                <div
                    className="
                        relative
                        w-full
                        h-full
                        overflow-hidden
                        rounded-[12px]
                    "
                >
                    <img
                        src={slider_photo1}
                        alt="Travel destination"
                        className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-cover
                        "
                    />

                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/10
                            via-transparent
                            to-transparent
                            pointer-events-none
                        "
                    />
                </div>
            </section>
        </main>
    );
}