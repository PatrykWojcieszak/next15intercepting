export default async function Page({ params }: { params: { photo: string } }) {
  const { photo } = await params;
  return <div className="text-white">normal route: {photo}</div>;
}
