"use client";

import Link from "next/link";
import { Navbar } from "@/components/theme/Navbar";
import { TechnicalFrame } from "@/components/theme/TechnicalFrame";
import { RetroButton } from "@/components/theme/RetroButton";
import { RetroInput } from "@/components/theme/RetroInput";
import { FloatingCassette } from "@/components/theme/FloatingCassette";
import { api, ApiError } from "@/lib/api";
import { saveSession } from "@/lib/session";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const response = await api.login(email, password);
      saveSession(response);
      router.push("/dashboard");
    } catch (requestError) {
      setError(
        requestError instanceof ApiError
          ? requestError.message
          : "Unable to start your session.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-screen">
      <Navbar variant="auth" />

      <TechnicalFrame className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-center px-4 py-12 md:px-8">
        <div className="grid w-full max-w-5xl items-center gap-12 lg:grid-cols-2">
          {/* Left Side: Illustration & Specs */}
          <motion.div
            className="hidden flex-col items-center justify-center lg:flex"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mb-12">
              <div className="absolute -inset-10 border border-accent/10 rounded-full animate-slow-spin" />
              <FloatingCassette size="lg" />
            </div>

            <div className="w-full max-w-xs space-y-4 border-t border-accent/20 pt-8">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[9px] text-text-secondary/40">MODULE</span>
                <span className="font-heading text-xs text-accent">AUTH_V1.2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-[9px] text-text-secondary/40">STATUS</span>
                <span className="font-heading text-xs text-accent">PENDING_SECRET</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-mono text-[9px] text-text-secondary/40">ENCRYPTION</span>
                <span className="font-heading text-xs text-accent">AES-256-RETRO</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form Panel */}
          <motion.div
            className="relative overflow-hidden rounded-[4px] border-2 border-accent bg-olive-light/20 p-8 shadow-[12px_12px_0_0_rgba(0,0,0,1)] md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Industrial Brackets inside the panel */}
            <div className="absolute top-4 left-4 h-4 w-4 border-t border-l border-accent/30" />
            <div className="absolute top-4 right-4 h-4 w-4 border-t border-r border-accent/30" />
            <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-accent/30" />
            <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-accent/30" />

            <div className="mb-10 border-b-2 border-accent pb-6">
              <p className="font-mono text-[10px] tracking-widest text-text-secondary/60 uppercase">
                Secure Terminal Access
              </p>
              <h1 className="mt-2 font-display text-5xl tracking-tight text-accent uppercase leading-none">
                LOGIN_TO_PROCEED
              </h1>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <RetroInput
                label="Identifier / Email"
                type="email"
                placeholder="developer@terminal.lan"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <RetroInput
                label="Access_Key / Password"
                type="password"
                placeholder="********"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />

              {error && (
                <p className="border border-accent/40 bg-accent/10 p-3 font-mono text-[10px] text-accent" role="alert">
                  ! {error}
                </p>
              )}

              <RetroButton
                type="submit"
                variant="primary"
                className="w-full py-4 text-base"
                disabled={submitting}
              >
                {submitting ? "CONNECTING..." : "INITIATE_SESSION"}
              </RetroButton>
            </form>

            <p className="mt-10 text-center font-body text-xs text-text-secondary/70">
              NEW_USER?{" "}
              <Link
                href="/register"
                className="font-bold text-accent hover:underline decoration-2 underline-offset-4"
              >
                CREATE_ACCESS_IDENTIFIER
              </Link>
            </p>
          </motion.div>
        </div>
      </TechnicalFrame>
    </main>
  );
}
