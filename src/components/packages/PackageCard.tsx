interface PackageData {
  id: string;
  tier: string;
  category: string;
  price: number;
  // Add other required fields
}

export default function PackageCard(props: PackageData) {
  return (
    <div className="package-card">
      {/* Your card implementation */}
    </div>
  );
}