import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import slider_photo1 from "../../assets/images/auth/auth-side.png";

/* =====================================================
   LOGO — ORIGINAL LOGIN LOGO
===================================================== */

function Logo() {
    return (
        <div className="select-none">
            <div
                className="
                    text-[21px]
                    sm:text-[22px]
                    font-semibold
                    tracking-[-1.5px]
                    text-[#1C261F]
                "
            >
                g<span className="text-[#72CBB2]">l</span>obe
            </div>
        </div>
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
                        rounded-[8px]
                        px-3
                        pr-11
                        text-[12px]
                        sm:text-[13px]
                        text-[#222]
                        outline-none
                        transition
                        focus:border-[#3F7D58]
                        focus:ring-2
                        focus:ring-[#3F7D58]/10
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
                        text-[#777]
                        text-[13px]
                        hover:text-[#3F7D58]
                        transition
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
                    mb-2
                "
            >
                {label}
            </label>

            <input
                type="email"
                value={value}
                onChange={onChange}
                placeholder="john.doe@gmail.com"
                className="
                    w-full
                    h-[46px]
                    border
                    border-[#D1D5DB]
                    rounded-[8px]
                    px-3
                    text-[12px]
                    sm:text-[13px]
                    text-[#222]
                    outline-none
                    transition
                    focus:border-[#3F7D58]
                    focus:ring-2
                    focus:ring-[#3F7D58]/10
                "
            />
        </div>
    );
}

/* =====================================================
   SOCIAL BUTTONS
===================================================== */

function SocialButtons() {
    return (
        <div className="grid grid-cols-3 gap-3 mt-6">
            <button
                type="button"
                className="
                    h-[44px]
                    border
                    border-[#D1D5DB]
                    rounded-[8px]
                    flex
                    items-center
                    justify-center
                    hover:bg-[#F7FAF8]
                    transition
                "
            >
                <span className="text-[#1877F2] font-bold text-[15px]">
                    f
                </span>
            </button>

            <button
                type="button"
                className="
                    h-[44px]
                    border
                    border-[#D1D5DB]
                    rounded-[8px]
                    flex
                    items-center
                    justify-center
                    hover:bg-[#F7FAF8]
                    transition
                "
            >
                <span className="text-[#4285F4] font-bold text-[14px]">
                    G
                </span>
            </button>

            <button
                type="button"
                className="
                    h-[44px]
                    border
                    border-[#D1D5DB]
                    rounded-[8px]
                    flex
                    items-center
                    justify-center
                    hover:bg-[#F7FAF8]
                    transition
                "
            >
                <span className="text-black text-[14px]">
                    ●
                </span>
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
            <div className="h-px bg-[#E5E7EB] flex-1" />

            <span
                className="
                    text-[9px]
                    sm:text-[10px]
                    text-[#9CA3AF]
                    whitespace-nowrap
                "
            >
                {text}
            </span>

            <div className="h-px bg-[#E5E7EB] flex-1" />
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
                    "
                >
                    Login
                </h1>

                <p
                    className="
                        text-[11px]
                        sm:text-[12px]
                        text-[#6B7280]
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
                                accent-[#3F7D58]
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
                            text-[#3F7D58]
                            hover:underline
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
                        bg-[#3F7D58]
                        hover:bg-[#356B4B]
                        text-white
                        rounded-[8px]
                        text-[11px]
                        sm:text-[12px]
                        font-medium
                        mt-6
                        transition
                        active:scale-[0.99]
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
                    mt-5
                "
            >
                Don't have an account?{" "}

                <Link
                    to="/signup"
                    className="
                        text-[#3F7D58]
                        font-medium
                        hover:underline
                    "
                >
                    Sign up
                </Link>
            </p>

            <Divider />

            <SocialButtons />
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
                        hover:text-[#1F2937]
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
                        bg-[#3F7D58]
                        hover:bg-[#356B4B]
                        text-white
                        rounded-[8px]
                        text-[11px]
                        sm:text-[12px]
                        font-medium
                        mt-6
                        transition
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
                        hover:text-[#1F2937]
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
                        rounded-[8px]
                        px-3
                        text-[13px]
                        tracking-[5px]
                        text-center
                        outline-none
                        focus:border-[#3F7D58]
                        focus:ring-2
                        focus:ring-[#3F7D58]/10
                    "
                />

                {verifyError && (
                    <p className="text-[10px] text-red-500 mt-3">
                        {verifyError}
                    </p>
                )}

                <div className="flex justify-between items-center mt-4">
                    <span className="text-[9px] sm:text-[10px] text-[#9CA3AF]">
                        Didn't receive a code?
                    </span>

                    {timer > 0 ? (
                        <span className="text-[9px] sm:text-[10px] text-[#3F7D58]">
                            Resend in {timer}s
                        </span>
                    ) : (
                        <button
                            type="button"
                            onClick={resendCode}
                            className="
                                text-[9px]
                                sm:text-[10px]
                                text-[#3F7D58]
                                hover:underline
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
                        bg-[#3F7D58]
                        hover:bg-[#356B4B]
                        text-white
                        rounded-[8px]
                        text-[11px]
                        sm:text-[12px]
                        font-medium
                        mt-6
                        transition
                    "
                >
                    Verify
                </button>
            </form>

            <p
                className="
                    text-center
                    text-[9px]
                    sm:text-[10px]
                    text-[#9CA3AF]
                    mt-5
                "
            >
                Demo code: <b>123456</b>
            </p>
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
                        hover:text-[#1F2937]
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
                        bg-[#3F7D58]
                        hover:bg-[#356B4B]
                        text-white
                        rounded-[8px]
                        text-[11px]
                        sm:text-[12px]
                        font-medium
                        mt-6
                        transition
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

        const savedUser = JSON.parse(
            localStorage.getItem("globeUser") || "null"
        );

        if (savedUser) {
            if (
                savedUser.email !== email ||
                savedUser.password !== password
            ) {
                setLoginError(
                    "Email or password is incorrect."
                );
                return;
            }
        } else {
            localStorage.setItem(
                "globeUser",
                JSON.stringify({
                    email,
                    password,
                })
            );
        }

        localStorage.setItem(
            "globeLoggedIn",
            rememberMe ? "true" : "session"
        );

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
                grid
                grid-cols-1
                lg:grid-cols-2
            "
        >
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
                    order-2
                "
            >
                <div
                    className="
                        relative
                        w-full
                        h-full
                        min-h-[600px]
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