import React from 'react';

export const ProjectVisual: React.FC<{ projectId: string }> = ({ projectId }) => {
  switch (projectId) {
    case 'nefru':
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#1f1c18] via-[#151515] to-[#0f0f0f] p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none">
          {/* Ambient warm glow */}
          <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#d4a359]/12 blur-2xl pointer-events-none" />

          {/* App top bar */}
          <div className="relative z-10 rounded-lg border border-[#2d2923] bg-[#161513]/95 shadow-2xl overflow-hidden flex-1 flex flex-col justify-between p-3.5">
            <div className="flex items-center justify-between border-b border-[#26231e] pb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#3a352e]" />
                <span className="w-2 h-2 rounded-full bg-[#3a352e]" />
                <span className="ml-1.5 text-[10px] font-mono-code tracking-wider uppercase text-[#d8b278] font-semibold">
                  NEFRU
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#211e19] border border-[#332d23] text-[9.5px] font-mono-code text-[#a89f91]">
                nefru.vercel.app
              </span>
            </div>

            {/* Filter chips */}
            <div className="flex items-center gap-1.5 my-2.5 overflow-hidden">
              {['All Egypt', 'Giza', 'Luxor', 'Historic Cairo'].map((place, idx) => (
                <span
                  key={place}
                  className={`px-2 py-0.5 text-[9.5px] font-mono-code rounded whitespace-nowrap ${
                    idx === 1
                      ? 'bg-[#d4a359] text-[#14120e] font-semibold'
                      : 'bg-[#1f1d1a] text-[#8d8579] border border-[#2b2722]'
                  }`}
                >
                  {place}
                </span>
              ))}
            </div>

            {/* Itinerary cards */}
            <div className="grid grid-cols-12 gap-2.5 items-stretch">
              <div className="col-span-7 rounded-md border border-[#2e2921] bg-gradient-to-b from-[#231f19] to-[#191714] p-2.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[9px] font-mono-code text-[#d4a359] mb-1">
                    <span>PRIVATE TOUR</span>
                    <span>★ 4.9</span>
                  </div>
                  <p className="font-display font-semibold text-[12px] text-[#f3efe8] leading-snug">
                    Great Pyramids &amp; Khan El-Khalili
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#2c2720] flex items-center justify-between">
                  <span className="text-[9.5px] font-mono-code text-[#9c9488]">Guide: Kareem A.</span>
                  <span className="px-2 py-0.5 rounded bg-[#f2ede4] text-[#151310] text-[9px] font-mono-code font-semibold">
                    Book Trip
                  </span>
                </div>
              </div>

              <div className="col-span-5 rounded-md border border-[#292621] bg-[#181715] p-2.5 flex flex-col justify-between">
                <div>
                  <span className="text-[8.5px] font-mono-code uppercase text-[#7d776d]">
                    Dashboard
                  </span>
                  <p className="text-[11px] font-display font-medium text-[#ded9d0] mt-0.5">
                    14 Verified Guides
                  </p>
                </div>
                <div className="space-y-1 mt-2">
                  <div className="h-1.5 rounded-full bg-[#26231e] overflow-hidden">
                    <div className="w-4/5 h-full bg-[#d4a359]" />
                  </div>
                  <span className="block text-[8.5px] font-mono-code text-[#7d776d]">
                    JWT + Role Profiles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'paychat':
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#141d19] via-[#141515] to-[#101010] p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none">
          <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-[#34d399]/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 rounded-lg border border-[#24302a] bg-[#141716]/95 shadow-2xl flex-1 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#212925] pb-2">
              <span className="text-[10px] font-mono-code font-semibold text-[#6ee7b7] tracking-wide">
                PAYCHAT // DOUBLE-ENTRY LEDGER
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#152b21] text-[#4ade80] text-[8.5px] font-mono-code">
                ATOMIC TX
              </span>
            </div>

            <div className="grid grid-cols-12 gap-2.5 my-2.5 flex-1">
              {/* Wallet Ledger Panel */}
              <div className="col-span-7 rounded-md border border-[#252e29] bg-[#181c1a] p-2.5 flex flex-col justify-between">
                <div>
                  <span className="text-[8.5px] font-mono-code text-[#7c8a83] uppercase">
                    Available Balance
                  </span>
                  <div className="font-display font-bold text-[18px] text-[#f4f7f5] tracking-tight mt-0.5">
                    $4,820.50
                  </div>
                  <div className="mt-1.5 px-2 py-1 rounded bg-[#121514] border border-[#232b27] text-[8.5px] font-mono-code text-[#9aa8a0] truncate">
                    IBAN: EG89 0012 9401 8821
                  </div>
                </div>
                <div className="pt-2 flex items-center justify-between text-[8.5px] font-mono-code">
                  <span className="text-[#7c8a83]">Limit: $2,000/d</span>
                  <span className="text-[#6ee7b7]">20+ REST APIs</span>
                </div>
              </div>

              {/* Live Socket.IO Chat Feed */}
              <div className="col-span-5 rounded-md border border-[#232926] bg-[#151817] p-2.5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[8.5px] font-mono-code text-[#8b9690]">Socket.IO</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                </div>
                <div className="space-y-1.5 my-1">
                  <div className="rounded bg-[#1d2b24] border border-[#2a4035] px-2 py-1 text-[8.5px] font-mono-code text-[#d1fae5]">
                    ↗ Sent $140.00
                  </div>
                  <div className="rounded bg-[#1e2120] px-2 py-1 text-[8.5px] font-mono-code text-[#a3ada8]">
                    &ldquo;Settled instantly!&rdquo;
                  </div>
                </div>
                <span className="text-[8px] font-mono-code text-[#69736e]">JWT + Blacklist</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'quizrush':
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#1c1924] via-[#151517] to-[#111112] p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none">
          <div className="absolute -top-10 left-1/3 w-40 h-40 rounded-full bg-[#a78bfa]/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 rounded-lg border border-[#2b2735] bg-[#16151a]/95 shadow-2xl flex-1 p-3.5 flex flex-col justify-between">
            {/* Pipeline header */}
            <div className="flex items-center justify-between gap-2 border-b border-[#25222e] pb-2">
              <div className="flex items-center gap-1.5 text-[9px] font-mono-code text-[#c4b5fd]">
                <span className="px-1.5 py-0.5 rounded bg-[#231e30] border border-[#352d4a]">
                  PDF Chunking
                </span>
                <span>→</span>
                <span className="px-1.5 py-0.5 rounded bg-[#2b1d29] border border-[#4a2b43] text-[#f472b6]">
                  n8n Rush Batch
                </span>
              </div>
              <span className="text-[8.5px] font-mono-code text-[#7e788c]">04 / 10</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1 bg-[#23202b] rounded-full overflow-hidden my-2">
              <div className="w-2/5 h-full bg-[#a78bfa]" />
            </div>

            {/* Active single-question player */}
            <div className="rounded-md border border-[#2a2633] bg-[#1b1921] p-2.5 space-y-2">
              <p className="font-display font-medium text-[11.5px] text-[#f0eef5] leading-snug">
                How does QuizRush stay within AI model context limits on large docs?
              </p>
              <div className="space-y-1">
                <div className="px-2 py-1 rounded border border-[#3d3554] bg-[#262038] text-[9px] font-mono-code text-[#ddd6fe] flex items-center justify-between">
                  <span>A. Ingestion &amp; chunking pipeline</span>
                  <span>✓</span>
                </div>
                <div className="px-2 py-1 rounded border border-[#26232e] bg-[#16151b] text-[9px] font-mono-code text-[#7d788a]">
                  B. Single raw file prompt
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'cms':
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#1d1f18] via-[#151515] to-[#101010] p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none">
          <div className="relative z-10 rounded-lg border border-[#2b2d24] bg-[#161714]/95 shadow-2xl flex-1 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#252720] pb-2">
              <span className="text-[10px] font-mono-code font-semibold text-[#d9e893]">
                EVENT.CMS // ADMIN CONSOLE
              </span>
              <span className="px-1.5 py-0.5 rounded bg-[#282c1b] border border-[#3f4628] text-[8.5px] font-mono-code text-[#d9e893]">
                ROLE: ADMIN
              </span>
            </div>

            <div className="space-y-2 my-2">
              {[
                { name: 'Cairo Tech Summit', tickets: '240 / 300', status: 'LIVE' },
                { name: 'Node.js Architecture Talk', tickets: '95 / 100', status: 'OPEN' },
              ].map((ev) => (
                <div
                  key={ev.name}
                  className="rounded border border-[#262822] bg-[#1b1c19] px-2.5 py-2 flex items-center justify-between"
                >
                  <div>
                    <p className="font-display font-medium text-[11px] text-[#ededeb]">{ev.name}</p>
                    <p className="text-[8.5px] font-mono-code text-[#85887d]">
                      Tickets: {ev.tickets}
                    </p>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-[#23251f] text-[8.5px] font-mono-code text-[#b8c96c]">
                    {ev.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[8.5px] font-mono-code text-[#787a72] pt-1 border-t border-[#22241e]">
              <span>Routes → Controllers → Services</span>
              <span className="text-[#c8d688]">CRUD + RBAC</span>
            </div>
          </div>
        </div>
      );

    case 'ewallet':
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#172026] via-[#151618] to-[#111111] p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none">
          <div className="rounded-lg border border-[#253038] bg-[#15181b] flex-1 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#222b33] pb-2">
              <span className="text-[10px] font-mono-code text-[#7dd3fc] font-semibold">
                E-WALLET // ADMIN &amp; TRANSFERS
              </span>
              <span className="text-[8.5px] font-mono-code text-[#94a3b8]">JWT GUARD</span>
            </div>
            <div className="space-y-1.5 my-2">
              <div className="rounded bg-[#1a2026] border border-[#26313a] px-2.5 py-1.5 flex justify-between text-[9.5px] font-mono-code">
                <span className="text-[#e2e8f0]">TX #4081 • Omar → Sara</span>
                <span className="text-[#4ade80]">+$320.00</span>
              </div>
              <div className="rounded bg-[#1a2026] border border-[#26313a] px-2.5 py-1.5 flex justify-between text-[9.5px] font-mono-code">
                <span className="text-[#e2e8f0]">Self-Transfer Attempt</span>
                <span className="text-[#f87171]">BLOCKED</span>
              </div>
            </div>
            <div className="text-[8.5px] font-mono-code text-[#64748b] flex justify-between">
              <span>User &amp; Admin RBAC</span>
              <span>Integrated Chat</span>
            </div>
          </div>
        </div>
      );

    case 'hospital-sql':
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#192024] via-[#151617] to-[#111111] p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none">
          <div className="rounded-lg border border-[#263036] bg-[#15181a] flex-1 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#222a2f] pb-2">
              <span className="text-[10px] font-mono-code text-[#38bdf8] font-semibold">
                database_schema.sql
              </span>
              <span className="text-[8.5px] font-mono-code text-[#94a3b8]">MySQL • 3NF</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              {[
                { tbl: 'patients', cols: 'PK patient_id • medical_hx' },
                { tbl: 'appointments', cols: 'FK doctor_id • room_no' },
                { tbl: 'prescriptions', cols: 'FK patient_id • dosage' },
                { tbl: 'invoices', cols: 'FK admission_id • total' },
              ].map((t) => (
                <div
                  key={t.tbl}
                  className="rounded border border-[#273138] bg-[#1a1e21] p-2"
                >
                  <p className="text-[9.5px] font-mono-code font-semibold text-[#e0f2fe]">
                    {t.tbl}
                  </p>
                  <p className="text-[8px] font-mono-code text-[#7c8d99] truncate mt-0.5">
                    {t.cols}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-[8.5px] font-mono-code text-[#64748b]">
              JOINs • Foreign Keys • Financial Reporting
            </div>
          </div>
        </div>
      );

    case 'e-plant':
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#162219] via-[#151615] to-[#101010] p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none">
          <div className="rounded-lg border border-[#243328] bg-[#151916] flex-1 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#202c23] pb-2">
              <span className="text-[10px] font-mono-code text-[#86efac] font-semibold">
                PARADISE NURSERY
              </span>
              <span className="px-2 py-0.5 rounded bg-[#1d3022] text-[8.5px] font-mono-code text-[#bbf7d0]">
                Cart (3) • $64
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="rounded border border-[#253328] bg-[#19201b] p-2">
                <span className="text-[8px] font-mono-code text-[#86efac]">AIR PURIFYING</span>
                <p className="text-[10.5px] font-display font-medium text-[#ecfdf5] mt-0.5">
                  Snake Plant
                </p>
                <span className="text-[8.5px] font-mono-code text-[#9ca3af]">$22 • In Cart ✓</span>
              </div>
              <div className="rounded border border-[#253328] bg-[#19201b] p-2">
                <span className="text-[8px] font-mono-code text-[#86efac]">AROMATIC</span>
                <p className="text-[10.5px] font-display font-medium text-[#ecfdf5] mt-0.5">
                  French Lavender
                </p>
                <span className="text-[8.5px] font-mono-code text-[#9ca3af]">$20 • + Add</span>
              </div>
            </div>
            <div className="text-[8.5px] font-mono-code text-[#6b7f70]">
              Redux Toolkit Store • Category Filters
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#241818] via-[#161515] to-[#101010] p-4 sm:p-5 flex flex-col justify-between overflow-hidden select-none">
          <div className="rounded-lg border border-[#362424] bg-[#191515] flex-1 p-3.5 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#2d2020] pb-2">
              <span className="text-[10px] font-mono-code text-[#fca5a5] font-semibold">
                SECURITY LAB // CSRF + SSRF
              </span>
              <span className="text-[8.5px] font-mono-code text-[#4ade80]">HARDENED</span>
            </div>
            <div className="space-y-1.5 my-2 font-mono-code text-[8.5px]">
              <div className="rounded bg-[#1f1919] border border-[#302424] px-2 py-1.5 text-[#fca5a5]">
                SSRF → 169.254.169.254 [403 BLOCKED]
              </div>
              <div className="rounded bg-[#18211b] border border-[#24382b] px-2 py-1.5 text-[#86efac]">
                Helmet + RateLimit + Cookie JWT [OK]
              </div>
            </div>
            <div className="text-[8.5px] font-mono-code text-[#857575]">
              Express Defense Reference
            </div>
          </div>
        </div>
      );
  }
};
