"use client";

import { Navbar } from "@/components/theme/Navbar";
import { RetroButton } from "@/components/theme/RetroButton";
import { TechnicalFrame } from "@/components/theme/TechnicalFrame";
import {
  api,
  ApiError,
  type DiscoverResult,
  type Match,
  type Profile,
  type SwipeDirection,
} from "@/lib/api";
import { clearSession, getSession, updateStoredUser } from "@/lib/session";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [token] = useState(() => getSession()?.token ?? "");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [discover, setDiscover] = useState<DiscoverResult[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeSwipe, setActiveSwipe] = useState<number | null>(null);

  useEffect(() => {
    if (!token) {
      router.replace("/login");
      return;
    }

    Promise.all([
      api.getProfile(token),
      api.discover(token),
      api.getMatches(token),
    ])
      .then(([currentProfile, candidates, currentMatches]) => {
        setProfile(currentProfile);
        updateStoredUser(currentProfile);
        setDiscover(candidates);
        setMatches(currentMatches);
      })
      .catch((requestError) => {
        if (requestError instanceof ApiError && requestError.status === 401) {
          clearSession();
          router.replace("/login");
          return;
        }
        setError(
          requestError instanceof ApiError
            ? requestError.message
            : "Unable to load the dashboard.",
        );
      })
      .finally(() => setLoading(false));
  }, [router, token]);

  function logout() {
    clearSession();
    router.push("/");
  }

  async function handleSwipe(targetUserId: number, direction: SwipeDirection) {
    if (!token) return;

    setActiveSwipe(targetUserId);
    setError("");
    try {
      const result = await api.swipe(token, targetUserId, direction);
      setDiscover((current) =>
        current.filter((candidate) => candidate.profile.id !== targetUserId),
      );
      if (result.matched) {
        setMatches((current) => [result, ...current]);
      }
    } catch (requestError) {
      setError(
        requestError instanceof ApiError
          ? requestError.message
          : "Unable to record that swipe.",
      );
    } finally {
      setActiveSwipe(null);
    }
  }

  return (
    <main className="relative min-h-screen">
      <Navbar variant="dashboard" onLogout={logout} />

      <TechnicalFrame className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        {loading ? (
          <p className="font-mono text-sm text-accent">LOADING_NETWORK...</p>
        ) : (
          <div className="space-y-10">
            <section className="grid gap-6 border-b border-border pb-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="font-mono text-[10px] tracking-widest text-text-secondary">
                  AUTHENTICATED DEVELOPER
                </p>
                <h1 className="mt-2 font-display text-5xl text-accent md:text-7xl">
                  {profile?.name ?? "UNKNOWN_USER"}
                </h1>
                <p className="mt-3 max-w-2xl font-body text-sm text-text-secondary">
                  {profile?.bio || profile?.lookingFor || "Your profile is online and ready to find collaborators."}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {profile?.skills.length ? (
                    profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-accent/40 px-3 py-1 font-mono text-[10px] text-accent"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="font-mono text-[10px] text-text-secondary">
                      NO_SKILLS_RECORDED
                    </span>
                  )}
                </div>
              </div>

              <div className="border border-border bg-olive-light/20 p-5 text-right">
                <p className="font-mono text-[9px] text-text-secondary">CONFIRMED_MATCHES</p>
                <p className="font-display text-5xl text-accent">{matches.length}</p>
              </div>
            </section>

            {error && (
              <p className="border border-accent/40 bg-accent/10 p-4 font-mono text-xs text-accent" role="alert">
                ! {error}
              </p>
            )}

            <section>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-text-secondary">
                    DISCOVERY QUEUE
                  </p>
                  <h2 className="font-display text-4xl text-accent">FIND_YOUR_BUILD_PARTNER</h2>
                </div>
                <span className="font-mono text-[10px] text-text-secondary">
                  {discover.length} SIGNALS
                </span>
              </div>

              {discover.length === 0 ? (
                <div className="border border-dashed border-border p-10 text-center font-mono text-xs text-text-secondary">
                  NO_MORE_PROFILES. CHECK_BACK_AFTER_NEW_DEVELOPERS_JOIN.
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {discover.map(({ profile: candidate, sharedSkillCount, sharedSkills }) => (
                    <article
                      key={candidate.id}
                      className="flex min-h-80 flex-col border-2 border-accent bg-olive-light/15 p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
                    >
                      <p className="font-mono text-[9px] text-text-secondary">
                        PROFILE_ID::{candidate.id}
                      </p>
                      <h3 className="mt-3 font-display text-4xl text-accent">{candidate.name}</h3>
                      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-text-secondary">
                        {candidate.bio || candidate.lookingFor || "Developer available for a new collaboration."}
                      </p>

                      <div className="mt-5 space-y-2 border-t border-border pt-4">
                        <p className="font-mono text-[10px] text-accent">
                          SHARED_SKILLS::{sharedSkillCount}
                        </p>
                        <p className="font-body text-xs text-text-secondary">
                          {sharedSkills.length
                            ? sharedSkills.join(" / ")
                            : candidate.skills.join(" / ") || "No skills listed"}
                        </p>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <RetroButton
                          variant="outline"
                          onClick={() => void handleSwipe(candidate.id, "PASS")}
                          disabled={activeSwipe === candidate.id}
                          className="px-3"
                        >
                          PASS
                        </RetroButton>
                        <RetroButton
                          onClick={() => void handleSwipe(candidate.id, "LIKE")}
                          disabled={activeSwipe === candidate.id}
                          className="px-3"
                        >
                          LIKE
                        </RetroButton>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </TechnicalFrame>
    </main>
  );
}
