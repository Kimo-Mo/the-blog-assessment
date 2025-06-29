export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex justify-center py-16">
      <p className="text-red-500 text-lg">{message}</p>
    </div>
  );
}
