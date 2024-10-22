export default async function Page({ params }: { params: { photo: string } }) {
  const { photo } = await params;
  return <div className="text-white">intercepted route: {photo}</div>;
}
