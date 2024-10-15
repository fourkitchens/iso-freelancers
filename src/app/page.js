import Image from "next/image";
import Logo from "@/app/components/logo";
import content from '@/app/docs/content-strategist.md';
import MarkdownRenderer from '@/app/components/MarkdownRenderer';
import clsx from 'clsx';

export default function Home() {
  return (
    <div className="space-y-16">
      <header className="bg-leafyGreen text-whippedCream p-6">
        <a href="https://fourkitchens.com"><Logo classNames="max-w-[300px]"/></a>
        
      </header>
      <div className={clsx(
        "prose lg:prose-lg",
        "prose-headings:text-balance prose-headings:text-leafyGreen prose-p:text-leafyGreen prose-headings:font-[600]",
        "[--tw-prose-bullets:theme(colors.kitchensKelly.DEFAULT)]", 
        "max-w-2xl mx-auto"
      )}>
        <MarkdownRenderer markdown={content} />
      </div>
    </div>  
  );
}
