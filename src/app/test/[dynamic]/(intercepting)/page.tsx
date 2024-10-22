import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { dynamic: string };
}) {
  const { dynamic } = await params;
  return (
    <div className="text-white flex flex-col gap-3">
      dynamic route: {dynamic}
      <Link href={`/test/${dynamic}/newLink1`}>New link 1</Link>
      <Link href={`/test/${dynamic}/newLink2`}>New link 2</Link>
      <Link href={`/test/${dynamic}/newLink3`}>New link 3</Link>
      <Link href={`/test/${dynamic}/newLink4`}>New link 4</Link>
    </div>
  );
}
