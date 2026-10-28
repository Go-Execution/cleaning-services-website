/**
 * Navy hero band used at the top of inner pages.
 */
export function PageHeader({
  title,
  text,
}: {
  title: string;
  text?: string;
}) {
  return (
    <section className="bg-navy-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="animate-fade-up font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {text && (
          <p className="mt-4 max-w-2xl animate-fade-up text-lg leading-relaxed text-navy-200">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
