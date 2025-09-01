export default function LinkList({ list }) {
  const { title, children } = list;
  return (
    <div className="flex flex-col gap-y-1.5">
      <p className="font-bold text-xl text-primary">{title}</p>
      {children?.map((item) => (
        <div key={item.title} className={"whitespace-nowrap"}>
          {`${item.title} `}
          <a
            href={item.href}
            target="_blank"
            className="ml-2 text-gray-700 font-medium"
          >
            {item.text}
          </a>
        </div>
      ))}
    </div>
  );
}
