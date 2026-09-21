import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import slider_photo1 from "../../assets/images/auth/auth-side.png";
import monkeyAvatarImg from "../../assets/images/account/monkey-1.png";
import ThemeToggle from "../../components/ui/ThemeToggle";

// ==================== LOGO ====================

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 w-fit">
      <div className="mb-9 select-none">
        <div className="
            text-[21px]
            sm:text-[22px]
            font-semibold
            tracking-[-1.5px]
            text-[#1C261F]
            dark:text-white
        ">
            g<span className="text-[#72CBB2]">l</span>obe
        </div>
      </div>
    </Link>
  );
}

// ==================== INPUT ====================

function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-sm font-medium text-[#374151]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full
          h-[48px]
          px-4
          rounded-[8px]
          border
          bg-white
          text-[#1F2937]
          outline-none
          transition
          ${
            error
              ? "border-red-500 ring-2 ring-red-500/20"
              : "border-[#D1D5DB] focus:border-[#3F7D58] focus:ring-2 focus:ring-[#3F7D58]/10"
          }
        `}
      />

      {error && (
        <span className="text-xs text-red-500 font-medium">
          {error}
        </span>
      )}
    </div>
  );
}

// ==================== PASSWORD INPUT ====================

function PasswordInput({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-sm font-medium text-[#374151]"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            w-full
            h-[48px]
            px-4
            pr-12
            rounded-[8px]
            border
            bg-white
            text-[#1F2937]
            outline-none
            transition
            ${
              error
                ? "border-red-500 ring-2 ring-red-500/20"
                : "border-[#D1D5DB] focus:border-[#3F7D58] focus:ring-2 focus:ring-[#3F7D58]/10"
            }
          `}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            flex
            items-center
            justify-center
            w-7
            h-7
            text-[#6B7280]
            hover:text-[#374151]
            transition
            cursor-pointer
          "
          aria-label={
            showPassword ? "Hide password" : "Show password"
          }
        >
          {showPassword ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3L21 21"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <path
                d="M10.58 10.58C10.21 10.95 10 11.46 10 12C10 13.1 10.9 14 12 14C12.54 14 13.05 13.79 13.42 13.42"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.88 5.09C10.56 4.9 11.27 4.8 12 4.8C17 4.8 20.5 9.2 21.5 12C21.1 13.1 20.2 14.7 18.75 16.1"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.61 6.61C4.7 7.88 3.35 9.85 2.5 12C3.5 14.8 7 19.2 12 19.2C13.74 19.2 15.32 18.7 16.65 17.85"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 12C3.5 9.2 7 4.8 12 4.8C17 4.8 20.5 9.2 21.5 12C20.5 14.8 17 19.2 12 19.2C7 19.2 3.5 14.8 2.5 12Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>
          )}
        </button>
      </div>

      {error && (
        <span className="text-xs text-red-500 font-medium">
          {error}
        </span>
      )}
    </div>
  );
}

// ==================== SOCIAL BUTTONS ====================

function SocialButtons({ onSocialLogin }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={() => onSocialLogin && onSocialLogin("Google")}
        className="
          h-[46px]
          rounded-[8px]
          border border-[#D1D5DB]
          bg-white
          flex items-center justify-center gap-2
          text-sm font-medium
          hover:bg-gray-50
          transition cursor-pointer
        "
      >
        <span className="font-bold text-[#4285F4]">G</span>
        Google
      </button>

      <button
        type="button"
        onClick={() => onSocialLogin && onSocialLogin("Facebook")}
        className="
          h-[46px]
          rounded-[8px]
          border border-[#D1D5DB]
          bg-white
          flex items-center justify-center gap-2
          text-sm font-medium
          hover:bg-gray-50
          transition cursor-pointer
        "
      >
        <span className="font-bold text-[#1877F2]">f</span>
        Facebook
      </button>
    </div>
  );
}

// ==================== DIVIDER ====================

function Divider() {
  return (
    <div className="flex items-center gap-4 my-5">
      <div className="flex-1 h-px bg-[#E5E7EB]" />
      <span className="text-sm text-[#9CA3AF]">or</span>
      <div className="flex-1 h-px bg-[#E5E7EB]" />
    </div>
  );
}

// ==================== SIGN UP SCREEN ====================

function SignUpScreen({
  form,
  errors,
  accepted,
  setAccepted,
  handleChange,
  handleSubmit,
  onSocialLogin,
}) {
  return (
    <motion.div
      key="signup"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="w-full"
    >
      <div className="mb-7">
        <Logo />

        <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mt-8">
          Create an account
        </h1>

        <p className="text-[#6B7280] mt-2">
          Join us and start your journey.
        </p>
      </div>

      <SocialButtons onSocialLogin={onSocialLogin} />

      <Divider />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="First name"
            name="firstName"
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />

          <Input
            label="Last name"
            name="lastName"
            placeholder="Enter your last name"
            value={form.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+1 000-000-0000"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <PasswordInput
          label="Password"
          name="password"
          placeholder="Create a password (min. 6 characters)"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
        />

        <PasswordInput
          label="Confirm password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={form.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />

        {errors.form && (
          <p className="text-sm text-red-500 font-medium">
            {errors.form}
          </p>
        )}

        <div>
          <label className="flex items-start gap-3 cursor-pointer mt-1">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1 accent-[#3F7D58]"
            />

            <span className="text-sm text-[#6B7280] leading-5">
              I agree to the{" "}
              <Link
                to="/terms"
                className="text-[#3F7D58] hover:underline"
              >
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="text-[#3F7D58] hover:underline"
              >
                Privacy Policy
              </Link>
            </span>
          </label>

          {errors.terms && (
            <p className="text-xs text-red-500 font-medium mt-1">
              {errors.terms}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="
            w-full
            h-[48px]
            rounded-[8px]
            bg-[#3F7D58]
            text-white
            font-semibold
            hover:bg-[#356b4b]
            transition
            cursor-pointer
            mt-2
          "
        >
          Create account
        </button>
      </form>

      <p className="text-center text-sm text-[#6B7280] mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-[#3F7D58] font-semibold hover:underline"
        >
          Log in
        </Link>
      </p>
    </motion.div>
  );
}

// ==================== VERIFY SCREEN ====================

function VerifyScreen({
  verificationCode,
  setVerificationCode,
  handleVerify,
  verifyError,
  timer,
  handleResend,
}) {
  return (
    <motion.div
      key="verify"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.25 }}
      className="w-full"
    >
      <Logo />

      <div className="mt-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1F2937]">
          Verify your email
        </h1>

        <p className="text-[#6B7280] mt-3 leading-6">
          We sent a verification code to your email.
          Enter the 6-digit code below.
        </p>
      </div>



      <form
        onSubmit={handleVerify}
        className="mt-6 flex flex-col gap-5"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="verificationCode"
            className="text-sm font-medium text-[#374151]"
          >
            Verification code
          </label>

          <input
            id="verificationCode"
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={verificationCode}
            onChange={(e) =>
              setVerificationCode(
                e.target.value.replace(/\D/g, "")
              )
            }
            placeholder="123456"
            className="
              w-full
              h-[52px]
              px-4
              rounded-[8px]
              border border-[#D1D5DB]
              text-center
              text-xl
              tracking-[0.5em]
              outline-none
              focus:border-[#3F7D58]
              focus:ring-2
              focus:ring-[#3F7D58]/10
            "
          />

          {verifyError && (
            <p className="text-xs text-red-500 font-medium mt-1">
              {verifyError}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="
            w-full
            h-[48px]
            rounded-[8px]
            bg-[#3F7D58]
            text-white
            font-semibold
            hover:bg-[#356b4b]
            transition
            cursor-pointer
          "
        >
          Verify account
        </button>
      </form>

      <div className="text-center mt-6 text-sm text-[#6B7280]">
        {timer > 0 ? (
          <span>
            Resend code in{" "}
            <span className="font-semibold text-[#3F7D58]">
              {timer}s
            </span>
          </span>
        ) : (
          <button
            type="button"
            onClick={handleResend}
            className="text-[#3F7D58] font-semibold hover:underline cursor-pointer"
          >
            Resend code
          </button>
        )}
      </div>

      <div className="text-center mt-4">
        <Link
          to="/login"
          className="text-sm text-[#6B7280] hover:text-[#3F7D58]"
        >
          Back to login
        </Link>
      </div>
    </motion.div>
  );
}

// ==================== MAIN PAGE ====================

export default function SignUpPage() {
  const navigate = useNavigate();

  const [screen, setScreen] = useState("signup");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [accepted, setAccepted] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [verifyError, setVerifyError] = useState("");
  const [timer, setTimer] = useState(30);

  // ==================== INPUT CHANGE ====================

  const handleChange = (e) => {
    const { name, value } = e.target;

    let cleanValue = value;
    if (name === "phone") {
      // Only allow digits and common phone formatting symbols (+, spaces, -, (, ))
      cleanValue = value.replace(/[^\d+()\s-]/g, "");
    }

    setForm((prev) => ({
      ...prev,
      [name]: cleanValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
      form: "",
    }));
  };

  // ==================== SOCIAL LOGIN ====================

  const handleSocialLogin = (provider) => {
    const socialUser = {
      name: `Cozy Bit (${provider})`,
      firstName: "Cozy",
      lastName: "Bit",
      email: `cozybit.${provider.toLowerCase()}@gmail.com`,
      phone: "+1 000-000-0000",
      password: "password123",
      avatar: monkeyAvatarImg,
    };

    localStorage.setItem("globeCurrentUser", JSON.stringify(socialUser));
    localStorage.setItem("globeLoggedIn", "true");
    window.dispatchEvent(new Event("authChange"));
    navigate("/");
  };

  // ==================== SIGN UP SUBMIT ====================

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!accepted) {
      newErrors.terms = "You must accept the Terms & Conditions";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const pendingUser = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      password: form.password,
    };

    localStorage.setItem("globePendingUser", JSON.stringify(pendingUser));
    localStorage.setItem("globeVerificationCode", "123456");

    setVerificationCode("");
    setVerifyError("");
    setTimer(30);
    setScreen("verify");
  };

  // ==================== VERIFY SUBMIT ====================

  const handleVerify = (e) => {
    e.preventDefault();

    const savedCode = localStorage.getItem("globeVerificationCode") || "123456";

    if (verificationCode === savedCode || verificationCode === "123456") {
      const pendingUser = JSON.parse(
        localStorage.getItem("globePendingUser") || "{}"
      );

      const fullName = `${pendingUser.firstName || ""} ${pendingUser.lastName || ""}`.trim() || "Cozy Bit";
      const userObj = {
        name: fullName,
        firstName: pendingUser.firstName || "Cozy",
        lastName: pendingUser.lastName || "Bit",
        email: pendingUser.email || "cozybit@gmail.com",
        phone: pendingUser.phone || "+1 000-000-0000",
        password: pendingUser.password || "password123",
        avatar: monkeyAvatarImg,
      };

      // Save into users list
      const users = JSON.parse(localStorage.getItem("globeUsers") || "[]");
      const idx = users.findIndex((u) => u.email === userObj.email);
      if (idx >= 0) {
        users[idx] = userObj;
      } else {
        users.push(userObj);
      }
      localStorage.setItem("globeUsers", JSON.stringify(users));

      // Set logged in session
      localStorage.setItem("globeUser", JSON.stringify(userObj));
      localStorage.setItem("globeCurrentUser", JSON.stringify(userObj));
      localStorage.setItem("globeLoggedIn", "true");

      localStorage.removeItem("globePendingUser");
      localStorage.removeItem("globeVerificationCode");

      // Notify header and app
      window.dispatchEvent(new Event("authChange"));

      navigate("/");
    } else {
      setVerifyError("Invalid verification code. Enter 123456 to test.");
    }
  };

  // ==================== RESEND CODE ====================

  const handleResend = () => {
    localStorage.setItem("globeVerificationCode", "123456");
    setTimer(30);
    setVerifyError("");
    setVerificationCode("123456");
  };

  // ==================== VERIFICATION TIMER ====================

  useEffect(() => {
    if (screen !== "verify") return;
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [screen, timer]);

  // ==================== RENDER ====================

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B130E] text-[#112211] dark:text-[#F3F4F6] relative transition-colors duration-300">
      {/* Quick floating theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="flex items-center justify-center px-5 py-8 sm:px-8 lg:px-12 xl:px-20">
          <div className="w-full max-w-[520px]">
            <AnimatePresence mode="wait">
              {screen === "signup" ? (
                <SignUpScreen
                  key="signup"
                  form={form}
                  errors={errors}
                  accepted={accepted}
                  setAccepted={setAccepted}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  onSocialLogin={handleSocialLogin}
                />
              ) : (
                <VerifyScreen
                  key="verify"
                  verificationCode={verificationCode}
                  setVerificationCode={setVerificationCode}
                  handleVerify={handleVerify}
                  verifyError={verifyError}
                  timer={timer}
                  handleResend={handleResend}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT SIDE — STATIC IMAGE */}
        <div className="hidden lg:block p-5">
          <div className="relative w-full h-full min-h-[600px] overflow-hidden rounded-[12px]">
            <img
              src={slider_photo1}
              alt="Travel destination"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
