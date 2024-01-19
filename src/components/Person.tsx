import { getScientistsImgUrl } from "@/utils/imageUrlUtil";

interface Person {
  id: number;
  profession: string;
  name: string;
  accomplishment: string;
  imageId: string;
}

// 抽出 列出所有科學家資料 相同的模板部分
export default function Person({ person }: { person: Person }) {
  return (
    <li className="flex justify-between py-1 text-left" key={person.id}>
      <img
        className="h-1/2 rounded-full"
        src={getScientistsImgUrl(person)}
        alt={person.name}
      />
      <div className="ml-3">
        <span className="flex font-bold">{`${person.profession}: `}</span>
        <div className="inline-block">{person.name}</div>
        <p className="inline-block">"Known for {person.accomplishment}"</p>
      </div>
    </li>
  );
}
