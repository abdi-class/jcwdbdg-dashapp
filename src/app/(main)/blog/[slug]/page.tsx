export default function BlogDetail({ params }: { params: { slug: string } }) {
  return (
    <div>
      {params.slug}
      <div>ini page sama</div>
    </div>
  );
}
