'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={locale}
        onChange={handleLanguageChange}
        className="bg-transparent text-sm uppercase tracking-wider text-foreground outline-none hover:text-accent focus:text-accent transition-colors"
      >
        <option value="en" className="bg-background text-foreground">EN</option>
        <option value="ru" className="bg-background text-foreground">RU</option>
        <option value="hy" className="bg-background text-foreground">HY</option>
      </select>
    </div>
  );
}
