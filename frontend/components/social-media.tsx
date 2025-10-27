"use client"

import type React from "react"

import {
  Twitter,
  Github,
  Linkedin,
  Diamond as Discord,
  Youtube,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react"

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M9.04 15.314 8.86 19a.9.9 0 0 0 .72-.35l1.73-2.09 3.59 2.64c.66.36 1.13.17 1.29-.61l2.34-10.98c.21-.96-.35-1.34-1.0-1.1L3.9 9.36c-.94.37-.93.9-.16 1.14l3.89 1.21 8.98-5.66c.42-.26.81-.12.49.17z"
    />
  </svg>
)

const socials = [
  { name: "Twitter/X", href: "https://x.com/gdgmmmut", Icon: Twitter },
  { name: "GitHub", href: "https://github.com/gdgmmmut", Icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/gdgmmmut/", Icon: Linkedin },
  { name: "Discord", href: "https://discord.gg/4rp8Jw7", Icon: Discord },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCJy6ERxC0x4xSmpS3sd2FIg/", Icon: Youtube },
  { name: "Instagram", href: "https://www.instagram.com/gdgmmmut/", Icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/gdscmmmut/", Icon: Facebook },
  { name: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029VaUC9xeIiRoysh771f3Y", Icon: MessageCircle },
  { name: "Telegram", href: "https://t.me/gdgmmmut", Icon: TelegramIcon },
]

export function SocialMedia() {
  return (
    <section id="social" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-extrabold mb-4">Connect with us</h2>
      <div className="flex flex-wrap gap-3">
        {socials.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            aria-label={name}
            className="h-12 w-12 grid place-items-center bg-[canvas] border border-(--color-border)
                       hover:bg-[color-mix(in_oklab,var(--g-blue)_6%,transparent)] transition-colors"
            data-cursor="interactive"
            rel="noreferrer"
            title={name}
          >
            <Icon className="size-5" />
            <span className="sr-only">{name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
