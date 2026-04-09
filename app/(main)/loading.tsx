export default function Loading() {
  return (
    <div className="py-8">
      <div className="h-9 w-48 animate-pulse rounded bg-muted" />
      <div className="mt-8 space-y-4">
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
        <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}
