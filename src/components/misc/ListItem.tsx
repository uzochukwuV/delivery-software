function ListItem({ text }: { text: string }) {
  return (
    <div className="listItem flex gap-2 items-center">
      <div className="listDisc w-2 h-2 bg-red-600"></div>
      <div className="listText font-medium text-xl">{text}</div>
    </div>
  );
}

export default ListItem;