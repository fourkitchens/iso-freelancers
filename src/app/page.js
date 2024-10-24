'use client';

import clsx from 'clsx';
import Logo from '@/src/app/components/logo';
import content from '@/src/app/docs/content-strategist.md';
import about from '@/src/app/docs/about.md';
import MarkdownRenderer from '@/src/app/components/MarkdownRenderer';
import Footer from '@/src/app/components/Footer';
import Form from '@/src/app/components/Form';

export default function Home() {
  return (
    <div className="space-y-16">
      <header className="bg-leafyGreen text-whippedCream p-6">
        <a href="https://fourkitchens.com">
          <Logo classNames="max-w-[300px]" />
        </a>
      </header>

      <main className="max-w-2xl mx-auto space-y-16 px-4">
        <div className="space-y-4">
          <div className="rounded-lg bg-kitchensKelly-light text-leafyGreen inline-block px-4 py-2 uppercase font-bold text-xl ">
            Help wanted
          </div>
          <h1 className="text-5xl font-bold">
            Seeking Freelance Content Strategists
          </h1>
          <h2 className="text-4xl text-balance text-leafyGreen-light">
            Help Non-Profits and Universities Tell Their Stories
          </h2>
          <p className="text-xl mt-8">
            Four Kitchens seeks a talented freelance Content Strategist and
            Writer for ongoing collaboration. You&apos;ll craft content
            strategies and create engaging, impactful content for clients in
            higher education, non-profits, and associations—driving results that
            matter.
          </p>
        </div>
        <div
          className={clsx(
            'prose lg:prose-lg',
            'prose-headings:text-balance prose-headings:text-leafyGreen prose-p:text-leafyGreen prose-headings:font-[600]',
            '[--tw-prose-bullets:theme(colors.kitchensKelly.DEFAULT)]',
          )}
        >
          <MarkdownRenderer markdown={content} />
        </div>

        <div
          className={clsx(
            'bg-whippedCream-dark rounded p-8',
            'prose',
            'prose-headings:text-balance prose-headings:text-leafyGreen prose-p:text-leafyGreen prose-headings:font-[600]',
            '[--tw-prose-bullets:theme(colors.kitchensKelly.DEFAULT)]',
          )}
        >
          <MarkdownRenderer markdown={about} />
        </div>

        <div>
          <Form />
        </div>
      </main>

      <Footer />
    </div>
  );
}
