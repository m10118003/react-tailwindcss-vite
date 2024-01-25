import { getImageUrl } from "@/utils/imageUrlUtil";

interface Shape {
  imageId: string;
  name: string;
}

export default function Feature({ shape, size, children }: { shape: Shape, size: number, children?: React.ReactNode }) {
  return (
    <div
      className="feature cursor-pointer rounded shadow-lg hover:rotate-6 hover:shadow-2xl"
      //   src={getImageUrl(shape)}
      style={{
        backgroundImage: `url(${getImageUrl(shape)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: size
        // height: size
      }}>
      {children}
    </div>
  );
}
