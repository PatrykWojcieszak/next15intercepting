import Link from "next/link";

export default async function Page(props: { params: Promise<{ dynamic: string }> }) {
  const params = await props.params;
  return (
    <div className="text-white flex flex-col gap-3">
      dynamic route: {params.dynamic}
      <Link href={`/test/${params.dynamic}/newLink1`}>New link 1</Link>
      <Link href={`/test/${params.dynamic}/newLink2`}>New link 2</Link>
      <Link href={`/test/${params.dynamic}/newLink3`}>New link 3</Link>
      <Link href={`/test/${params.dynamic}/newLink4`}>New link 4</Link>
    </div>
  );
}
