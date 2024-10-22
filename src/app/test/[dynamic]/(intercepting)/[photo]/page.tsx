export default async function Page(props: { params: Promise<{ photo: string }> }) {
  const params = await props.params;
  return <div className="text-white">normal route: {params.photo}</div>;
}
