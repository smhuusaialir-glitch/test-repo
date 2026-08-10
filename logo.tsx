import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <Image src="/images/logo.png" alt="Hussain Designs logo" width={44} height={44} priority className="size-9 shrink-0 rounded-lg object-cover sm:size-11" />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">Hussain Designs</span>
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold sm:text-[0.65rem]">Visual &amp; Web Design</span>
      </span>
    </span>
  )
}
