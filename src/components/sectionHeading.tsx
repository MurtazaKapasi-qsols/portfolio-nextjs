export default function SectionHeading({ title, subtitle, isSideHeading, className }: { title: string, subtitle?: string, isSideHeading?: boolean, className?: string }) {
  return (
    <>
    <p className={`text-gray-600 text-xs md:text-sm font-medium tracking-[2px] md:tracking-[4px] mb-4 ${className} uppercase`}>
        {subtitle}
    </p>
    <h2 className={`text-lg md:text-5xl text-black mb-8 ${!isSideHeading && 'max-w-[50rem]'} mx-auto tracking-[3px] md:tracking-[7px] leading-[1.1] ${className} uppercase`}>
    {title}
    </h2>
        </>
  );
}