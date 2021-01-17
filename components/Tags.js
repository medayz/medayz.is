import Tag from "../library/Tag";

export default function Tags({ tags }) {
  return (
    <div className="w-full flex items-center">
      {tags.map(tag => <Tag text={tag} />)}
    </div>
  );
}
