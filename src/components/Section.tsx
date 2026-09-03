import type { ReactNode } from "react";

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-24 md:py-32 ${className}`}>
      <div
        className={`max-w-[1440px] mx-auto px-6 md:px-12 ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
