import Tag from "../library/Tag";

export default function Tags({ tags }) {
  return (
    <div className="w-full flex items-center">
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} />
      ))}
    </div>
  );
}
